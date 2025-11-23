import { Component, inject, OnInit } from '@angular/core';
import { ExerciseSet, ExerciseSetList } from '../../diary/interfaces/exercise-set';
import { ListEntries } from '../list-entries/list-entries';
import { NewItemButton } from "../new-item-button/new-item-button";
import { ExerciseSetsService } from '../services/exercise-sets-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-diary',
  imports: [ListEntries, NewItemButton],
  templateUrl: './diary.html',
  styleUrl: './diary.css',
})
export class Diary implements OnInit {
  private exerciseSetsService = inject(ExerciseSetsService);

  private router = inject(Router)

  exerciseList!: ExerciseSetList;

  ngOnInit(): void {
    this.exerciseSetsService
      .getInitialList()
      .subscribe((dataApi) => (this.exerciseList = dataApi.items));
  }

  newList() {
    this.exerciseSetsService
      .refreshList()
      .subscribe((dataApi) => (this.exerciseList = dataApi.items));
  }
  addExercise(newSet: ExerciseSet) {
    /*  this.exerciseSetsService
       .addNewItem(newSet)
       .subscribe((_) => this.newList()); */
    this.router.navigate(['/new-template'])
  }
   addExerciseReactive(newSet: ExerciseSet) {
    /*  this.exerciseSetsService
       .addNewItem(newSet)
       .subscribe((_) => this.newList()); */
    this.router.navigate(['/new-reactive'])
  }
  deleteItem(id: string) {
    this.exerciseSetsService.deleteItem(id).subscribe(() => {
      this.exerciseList = this.exerciseList.filter(
        (exerciseSet) => exerciseSet.id !== id
      );
    });
  }
  newRep(updateSet: ExerciseSet) {
    const id = updateSet.id ?? '';
    this.exerciseSetsService
      .updateItem(id, updateSet)
      .subscribe();
  }
}

