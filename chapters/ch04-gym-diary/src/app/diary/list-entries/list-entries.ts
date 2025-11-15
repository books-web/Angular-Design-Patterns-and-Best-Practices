import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ExerciseSet, ExerciseSetList } from '../interfaces/exercise-set';
import { EntryItem } from "../entry-item/entry-item";

@Component({
  selector: 'app-list-entries',
  imports: [CommonModule, EntryItem],
  templateUrl: './list-entries.html',
  styleUrl: './list-entries.css',
})
export class ListEntries {

  @Input() exerciseList!: ExerciseSetList;

  @Output() newRepEvent = new EventEmitter<ExerciseSet>();
  @Output() deleteEvent = new EventEmitter<string>();

  itemTrackBy(index: number, item: ExerciseSet) {
    return item.id;
  }

}
