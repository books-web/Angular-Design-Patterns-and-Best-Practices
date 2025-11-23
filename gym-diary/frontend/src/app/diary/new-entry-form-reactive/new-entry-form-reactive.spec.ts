import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewEntryFormReactive } from './new-entry-form-reactive';

describe('NewEntryFormReactive', () => {
  let component: NewEntryFormReactive;
  let fixture: ComponentFixture<NewEntryFormReactive>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewEntryFormReactive]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewEntryFormReactive);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
