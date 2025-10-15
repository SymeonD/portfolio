import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LesMainsBleuesComponent } from './les-mains-bleues.component';

describe('LesMainsBleuesComponent', () => {
  let component: LesMainsBleuesComponent;
  let fixture: ComponentFixture<LesMainsBleuesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LesMainsBleuesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LesMainsBleuesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
