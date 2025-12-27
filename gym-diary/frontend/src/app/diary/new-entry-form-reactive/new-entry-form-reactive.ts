import { CommonModule, JsonPipe } from '@angular/common';
import { Component, inject, input, signal, effect } from '@angular/core';
import { NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ExerciseSet } from '../interfaces/exercise-set';
import { ExerciseSetsService } from '../services/exercise-sets-service';

@Component({
  selector: 'app-new-entry-form-reactive',
  imports: [JsonPipe, ReactiveFormsModule, CommonModule],
  templateUrl: './new-entry-form-reactive.html',
  styleUrl: './new-entry-form-reactive.css',
})
export class NewEntryFormReactive {
  private formBuilder = inject(NonNullableFormBuilder);
  private exerciseSetsService = inject(ExerciseSetsService);
  private router = inject(Router);

  private route = inject(ActivatedRoute);
  
  id = input.required<string>();
  isLoading = signal(false);

  entryForm = this.formBuilder.group({
    date: [new Date(), Validators.required],
    exercise: ['', Validators.required],
    sets: [0, [Validators.required, Validators.min(0)]],
    reps: [0, [Validators.required, Validators.min(0)]],
  });

  constructor() {
    effect(() => {
      const currentId = this.id();
      if (currentId) {
        this.isLoading.set(true);
        this.route.data.subscribe({
          next: ({entry}) => {
            this.updateForm(entry);
            this.isLoading.set(false);
          },
          error: (err) => {
            console.error('Failed to load entry:', err);
            this.isLoading.set(false);
          },
        });
      }
    });
  }

  private updateForm(entry: ExerciseSet): void {
    let { id: _, ...entryForm } = entry;
    this.entryForm.setValue(entryForm);
  }

  newEntry(): void {
    if (this.entryForm.valid) {
      this.isLoading.set(true);
      const newEntry = { ...this.entryForm.value };
      if (this.id()) {
        this.exerciseSetsService.updateItem(this.id(), newEntry).subscribe({
          next: () => {
            this.isLoading.set(false);
            this.router.navigate(['/diary']);
          },
          error: (err) => {
            console.error('Failed to update entry:', err);
            this.isLoading.set(false);
          },
        });
      } else {
        this.exerciseSetsService.addNewItem(newEntry).subscribe({
          next: () => {
            this.isLoading.set(false);
            this.router.navigate(['/diary']);
          },
          error: (err) => {
            console.error('Failed to create entry:', err);
            this.isLoading.set(false);
          },
        });
      }
    }
  }
}
