import { Component, output } from '@angular/core';
import { ExerciseSet } from '../interfaces/exercise-set';

@Component({
  selector: 'app-new-item-button',
  imports: [],
  templateUrl: './new-item-button.html',
  styleUrl: './new-item-button.css',
})
export class NewItemButton {
  newExerciseEvent = output<ExerciseSet>();

  addNewExercise(): void {
    const id = Date.now().toString();
    const date = new Date();
    const reps = 10;
    const sets = 4;
    const exercise = 'Leg Press';
    const newExerciseSet: ExerciseSet = {
      id, date, reps, sets, exercise
    };
    this.newExerciseEvent.emit(newExerciseSet);
  }
}
