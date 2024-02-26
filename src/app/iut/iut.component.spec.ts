import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IutComponent } from './iut.component';

describe('IutComponent', () => {
  let component: IutComponent;
  let fixture: ComponentFixture<IutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IutComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
