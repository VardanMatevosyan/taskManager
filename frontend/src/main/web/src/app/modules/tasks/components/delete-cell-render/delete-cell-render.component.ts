import { Component, OnInit } from '@angular/core';
import {ICellRendererAngularComp} from 'ag-grid-angular';
import {ICellRendererParams} from 'ag-grid-community';


@Component({
  selector: 'app-delete-cell-render',
  templateUrl: './delete-cell-render.component.html',
  styleUrls: ['./delete-cell-render.component.css']
})
export class DeleteCellRender implements ICellRendererAngularComp {
  private params: ICellRendererParams;

  constructor() { }

  agInit(params: ICellRendererParams): void {
    this.params = params;
  }

  refresh(params: any): boolean {
   return false;
  }

  onDelete(): void {
    this.params.context.componentParent.deleteTask(this.params.data);
  }
}
