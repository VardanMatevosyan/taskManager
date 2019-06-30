import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowLimitedTasksComponent } from './show-limited-tasks.component';

describe('ShowLimitedTasksComponent', () => {
  let component: ShowLimitedTasksComponent;
  let fixture: ComponentFixture<ShowLimitedTasksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowLimitedTasksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowLimitedTasksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
