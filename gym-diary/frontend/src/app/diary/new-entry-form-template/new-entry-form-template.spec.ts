import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewEntryFormTemplate } from './new-entry-form-template';

describe('NewEntryFormTemplate', () => {
  let component: NewEntryFormTemplate;
  let fixture: ComponentFixture<NewEntryFormTemplate>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewEntryFormTemplate]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewEntryFormTemplate);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
