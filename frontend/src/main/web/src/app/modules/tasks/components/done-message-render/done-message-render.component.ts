import { Component, OnInit } from '@angular/core';
import {ICellRendererAngularComp} from "ag-grid-angular";
import {ICellRendererParams} from "ag-grid-community";

@Component({
  selector: 'app-done-message-render',
  templateUrl: './done-message-render.component.html',
  styleUrls: ['./done-message-render.component.css']
})
export class DoneMessageRender implements ICellRendererAngularComp {
  public params: ICellRendererParams;

  constructor() { }

  refresh(params: any): boolean {
    return false;
  }

  agInit(params: ICellRendererParams): void {
    this.params = params;
  }

  onUpdate() {
    this.params.context.componentParent.updateTask(this.params.data);
    console.table(this.params.data);
  }
}
