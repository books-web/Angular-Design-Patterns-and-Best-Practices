import { CommonModule } from '@angular/common';
import { Component, input, output } from '@angular/core';
import { ExerciseSet, ExerciseSetList } from '../interfaces/exercise-set';
import { EntryItem } from "../entry-item/entry-item";

@Component({
  selector: 'app-list-entries',
  imports: [CommonModule, EntryItem],
  templateUrl: './list-entries.html',
  styleUrl: './list-entries.css',
})
export class ListEntries {
  exerciseList = input<ExerciseSetList>([]);

  newRepEvent = output<ExerciseSet>();
  editEvent = output<ExerciseSet>();
  deleteEvent = output<string>();

  itemTrackBy(index: number, item: ExerciseSet) {
    return item.id;
  }
}
