import { Component, inject, signal } from '@angular/core';
import { ExerciseSet, ExerciseSetList } from '../../diary/interfaces/exercise-set';
import { ListEntries } from '../list-entries/list-entries';
import { NewItemButton } from "../new-item-button/new-item-button";
import { ExerciseSetsService } from '../services/exercise-sets-service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-diary',
  imports: [ListEntries, NewItemButton],
  templateUrl: './diary.html',
  styleUrl: './diary.css',
})
export class Diary {
  private exerciseSetsService = inject(ExerciseSetsService);
  private router = inject(Router);
  private route = inject(ActivatedRoute);

  exerciseList = signal<ExerciseSetList>([]);
  isLoading = signal(false);

  constructor() {
    console.log('loadInitialList');
    this.loadInitialList();
  }

  private loadInitialList(): void {
    this.isLoading.set(true);
    this.route.data.subscribe({
      next: (dataApi) => {
        console.log('Resolved dataApi:', dataApi);
        this.exerciseList.set(dataApi['diaryApi']['items']);
        this.isLoading.set(false);
      },
      error: (err) => {
        console.error('Failed to load exercises:', err);
        this.isLoading.set(false);
      },
    });
  }

  newList(): void {
    this.isLoading.set(true);
    this.exerciseSetsService.refreshList().subscribe({
      next: (dataApi) => {
        this.exerciseList.set(dataApi['items']);
        this.isLoading.set(false);
      },
      error: (err) => {
        console.error('Failed to refresh exercises:', err);
        this.isLoading.set(false);
      },
    });
  }

  addExercise(newSet: ExerciseSet): void {
    this.router.navigate(['/diary/entry']);
  }

  deleteItem(id: string): void {
    this.exerciseSetsService.deleteItem(id).subscribe({
      next: () => {
        const currentList = this.exerciseList();
        this.exerciseList.set(currentList.filter((item) => item.id !== id));
      },
      error: (err) => console.error('Failed to delete exercise:', err),
    });
  }

  editEntry(updateSet: ExerciseSet): void {
    const id = updateSet.id ?? '';
    this.router.navigate([`/diary/entry/${id}`]);
  }

}

