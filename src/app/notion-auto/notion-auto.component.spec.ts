import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotionAutoComponent } from './notion-auto.component';

describe('NotionAutoComponent', () => {
  let component: NotionAutoComponent;
  let fixture: ComponentFixture<NotionAutoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NotionAutoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NotionAutoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
