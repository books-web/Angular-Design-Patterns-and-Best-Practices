import { CommonModule, JsonPipe } from '@angular/common';
import { Component, inject, input, OnInit } from '@angular/core';
import { NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ExerciseSet } from '../interfaces/exercise-set';
import { ExerciseSetsService } from '../services/exercise-sets-service';

@Component({
  selector: 'app-new-entry-form-reactive',
  imports: [JsonPipe, ReactiveFormsModule, CommonModule],
  templateUrl: './new-entry-form-reactive.html',
  styleUrl: './new-entry-form-reactive.css',
})
export class NewEntryFormReactive implements OnInit {
  private formBuilder = inject(NonNullableFormBuilder);
  private exerciseSetsService = inject(ExerciseSetsService);

  private router = inject(Router);

  // Using  withComponentInputBinding
  id = input.required<string>()

  public entryForm = this.formBuilder.group({
    date: [new Date(), Validators.required],
    exercise: ['', Validators.required],
    sets: [0, [Validators.required, Validators.min(0)]],
    reps: [0, [Validators.required, Validators.min(0)]],
  });

  ngOnInit(): void {
    if (this.id()) {
      this.exerciseSetsService
        .getItem(this.id())
        .subscribe((entry) => this.updateForm(entry));
    }
  }

  updateForm(entry: ExerciseSet): void {
    // One detail here is that we are using the destructuring assignment to remove the id field from the 
    // object because it does not exist in the form’s data model.
    let { id: _, ...entryForm } = entry;
    this.entryForm.setValue(entryForm);
  }

  newEntry() {
    if (this.entryForm.valid) {
      const newEntry = { ...this.entryForm.value };
      if (this.id()) {
        this.exerciseSetsService
          .updateItem(this.id(), newEntry)
          .subscribe((entry) => this.router.navigate(['/diary']));
      } else {
        this.exerciseSetsService
          .addNewItem(newEntry)
          .subscribe((entry) => this.router.navigate(['/diary']));
      }
    }
  }
}
