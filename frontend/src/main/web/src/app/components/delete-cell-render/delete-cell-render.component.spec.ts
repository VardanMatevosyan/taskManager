import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteCellRender } from './delete-cell-render.component';

describe('DeleteCellRenderComponent', () => {
  let component: DeleteCellRender;
  let fixture: ComponentFixture<DeleteCellRender>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteCellRender ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteCellRender);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
