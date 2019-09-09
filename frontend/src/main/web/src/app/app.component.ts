import { Component, OnInit } from '@angular/core';
import { PaginationService } from './services/pagination/pagination.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'task-manager';
  private colmDef;
  private gridColumnsApi;
  private gridApis;

  constructor() { }

  ngOnInit() {
    this.colmDef = [
      {
        headerName: "Name",
        field: "athlete",
        width: 150,
        sortable: true,
        filter: true,
        rowDrag: true
      },
      {
        headerName: "Age",
        field: "age",
        width: 50,
      },
      {
        headerName: "Country",
        field: "country",
        width: 120
      },
      {
        headerName: "Year",
        field: "year",
        width: 90
      },
      {
        headerName: "Date",
        field: "date",
        width: 90
      },
      {
        headerName: "Sport",
        field: "sport",
        width: 90
      },
      {
        headerName: "Gold",
        field: "silver",
        width: 90
      },
      {
        headerName: "Bronze",
        field: "bronze",
        width: 90
      },
      {
        headerName: "Total",
        field: "total",
        width: 90
      }
    ]

  }

  // onGridReady(params) {
  //   this.gridApis = params.api;
  //   this.gridColumnsApi = params.columnApi;
  //   // this.httpC.get("https://raw.githubusercontent.com/ag-grid/ag-grid-docs/master/src/olympicWinnersSmall.json").subscribe(data => {
  //   // console.log(data)
  //     params.api.setRowData(data);
  //
  //   });
  // }

}
