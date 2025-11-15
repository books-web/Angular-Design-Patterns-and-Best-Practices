import { Component, inject } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { AsyncPipe, CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { EntryItem } from '../../diary/entry-item/entry-item';
import { ExerciseSet, ExerciseSetList } from '../../diary/interfaces/exercise-set';
import { ListEntries } from '../list-entries/list-entries';
import { NewItemButton } from "../new-item-button/new-item-button";

@Component({
  selector: 'app-diary',
  imports: [ListEntries, NewItemButton],
  templateUrl: './diary.html',
  styleUrl: './diary.css',
})
export class Diary {

  exerciseList: ExerciseSetList = [
    {
      id: '1', date: new Date(), exercise: 'Deadlift', reps: 15, sets:
        3
    },
    {
      id: '2', date: new Date(), exercise: 'Squat', reps: 15, sets: 3
    },
    {
      id: '3', date: new Date(), exercise: 'Barbell row', reps: 15,
      sets: 3
    },
  ];

  newList() {
    this.exerciseList = [
      {
        id: '1', date: new Date(), exercise: 'Deadlift', reps: 15,
        sets: 3
      },
      {
        id: '2', date: new Date(), exercise: 'Squat', reps: 15, sets: 3
      },
      {
        id: '3', date: new Date(), exercise: 'Barbell row', reps: 15,
        sets: 3
      },
      {
        id: '4', date: new Date(), exercise: 'Leg Press', reps: 15,
        sets: 3
      },
    ];
  }

  addExercise(newSet: ExerciseSet) {
    this.exerciseList.push(newSet);
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

