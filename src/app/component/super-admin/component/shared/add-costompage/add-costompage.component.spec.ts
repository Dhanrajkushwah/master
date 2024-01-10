import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCostompageComponent } from './add-costompage.component';

describe('AddCostompageComponent', () => {
  let component: AddCostompageComponent;
  let fixture: ComponentFixture<AddCostompageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddCostompageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddCostompageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
