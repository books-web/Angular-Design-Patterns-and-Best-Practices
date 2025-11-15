import { Component, inject } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { AsyncPipe, CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { EntryItem } from '../../diary/entry-item/entry-item';
import { ExerciseSet, ExerciseSetList } from '../../diary/interfaces/exercise-set';
import { ListEntries } from '../list-entries/list-entries';
import { NewItemButton } from "../new-item-button/new-item-button";
import { ExerciseSetsService } from '../services/exercise-sets-service';

@Component({
  selector: 'app-diary',
  imports: [ListEntries, NewItemButton],
  templateUrl: './diary.html',
  styleUrl: './diary.css',
})
export class Diary {
  exerciseList: ExerciseSetList;
  
  constructor(private exerciseSetsService: ExerciseSetsService) {
    this.exerciseList = this.exerciseSetsService.getInitialList();
  }

  newList() {
    this.exerciseList = this.exerciseSetsService.refreshList();
  }
  addExercise(newSet: ExerciseSet) {
    this.exerciseList = this.exerciseSetsService.addNewItem(newSet);
  }

  deleteItem(id: string) {
    this.exerciseList = this.exerciseList.filter((item) => item.id !==
      id);
  }
  newRep(exerciseSet: ExerciseSet) {
    const id = exerciseSet.id;
    const i = this.exerciseList.findIndex((item) => item.id === id);
    if (i >= 0) {
      this.exerciseList[i] = { ...exerciseSet };
    }
  }
}

