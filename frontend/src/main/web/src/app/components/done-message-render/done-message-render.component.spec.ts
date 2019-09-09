import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoneMessageRender } from './done-message-render.component';

describe('DoneMessageRenderComponent', () => {
  let component: DoneMessageRender;
  let fixture: ComponentFixture<DoneMessageRender>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoneMessageRender ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoneMessageRender);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
