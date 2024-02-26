import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScuComponent } from './scu.component';

describe('ScuComponent', () => {
  let component: ScuComponent;
  let fixture: ComponentFixture<ScuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ScuComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ScuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
