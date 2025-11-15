import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntryItem } from './entry-item';

describe('EntryItem', () => {
  let component: EntryItem;
  let fixture: ComponentFixture<EntryItem>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EntryItem]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EntryItem);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
