import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { ExerciseSet } from '../interfaces/exercise-set';
import { ExerciseSetsService } from '../services/exercise-sets-service';
import { FormsModule } from '@angular/forms';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-new-entry-form-template',
  imports: [FormsModule,JsonPipe],
  templateUrl: './new-entry-form-template.html',
  styleUrl: './new-entry-form-template.css',
})
export class NewEntryFormTemplate {
  private exerciseSetsService = inject(ExerciseSetsService);
  private router = inject(Router);

  entry: ExerciseSet = { date: new Date(), exercise: '', reps: 0, sets: 0 };

  newEntry() {
    const newEntry = { ...this.entry };
    this.exerciseSetsService
      .addNewItem(newEntry)
      .subscribe((entry) => this.router.navigate(['/home']));
  }
}
