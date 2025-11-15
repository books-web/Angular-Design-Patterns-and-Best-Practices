import { Component, inject } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { AsyncPipe, CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { EntryItem } from '../../diary/entry-item/entry-item';
import { ExerciseSet, ExerciseSetList } from '../../diary/interfaces/exercise-set';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  imports: [
    CommonModule
  ],

})
export class HomeComponent {
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

  itemTrackBy(index: number, item: ExerciseSet) {
    return item.id;
  }

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
}
