import { CommonModule, JsonPipe } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, ReactiveFormsModule, Validators, NonNullableFormBuilder } from '@angular/forms';
import { ExerciseSetsService } from '../services/exercise-sets-service';
import { Router } from '@angular/router';

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

  public entryForm = this.formBuilder.group({
    date: [new Date(), Validators.required],
    exercise: ['', Validators.required],
    sets: [0, [Validators.required, Validators.min(0)]],
    reps: [0, [Validators.required, Validators.min(0)]],
  });

  newEntry() {
    if (this.entryForm.valid) {
      const newEntry = { ...this.entryForm.value };
      this.exerciseSetsService
        .addNewItem(newEntry)
        .subscribe((entry) => this.router.navigate(['/home']));
    }
  }
}
