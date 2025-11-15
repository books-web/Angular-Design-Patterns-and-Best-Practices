import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewItemButton } from './new-item-button';

describe('NewItemButton', () => {
  let component: NewItemButton;
  let fixture: ComponentFixture<NewItemButton>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewItemButton]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewItemButton);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
