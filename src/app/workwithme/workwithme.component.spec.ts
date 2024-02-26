import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkwithmeComponent } from './workwithme.component';

describe('WorkwithmeComponent', () => {
  let component: WorkwithmeComponent;
  let fixture: ComponentFixture<WorkwithmeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WorkwithmeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WorkwithmeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
