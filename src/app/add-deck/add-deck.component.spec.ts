import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDeckComponent } from './add-deck.component';

describe('AddDeckComponent', () => {
  let component: AddDeckComponent;
  let fixture: ComponentFixture<AddDeckComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddDeckComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddDeckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
