import { Component, input, output } from '@angular/core';
import { ExerciseSet } from '../interfaces/exercise-set';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-entry-item',
  imports: [DatePipe],
  templateUrl: './entry-item.html',
  styleUrl: './entry-item.css',
})
export class EntryItem {
  exerciseSet = input<ExerciseSet>(null!);

  newRepEvent = output<ExerciseSet>();
  editEvent = output<ExerciseSet>();
  deleteEvent = output<string>();

  delete(): void {
    this.deleteEvent.emit(this.exerciseSet().id!);
  }

  editEntry(): void {
    this.editEvent.emit(this.exerciseSet());
  }
}
