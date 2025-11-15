import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ExerciseSet } from '../interfaces/exercise-set';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-entry-item',
  imports: [DatePipe],
  templateUrl: './entry-item.html',
  styleUrl: './entry-item.css',
})
export class EntryItem {
  @Input('exercise-set') exerciseSet!: ExerciseSet;

  @Output() newRepEvent = new EventEmitter<ExerciseSet>();
  @Output() deleteEvent = new EventEmitter<string>();

  delete() {
    this.deleteEvent.emit(this.exerciseSet.id);
  }

  newRep() {
    const reps = ++this.exerciseSet.reps;
    const newItem: ExerciseSet = {
      ...this.exerciseSet,
      reps,
    };
    this.newRepEvent.emit(newItem);
  }
}
