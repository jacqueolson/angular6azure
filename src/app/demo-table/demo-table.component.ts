import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort } from '@angular/material';
import { DemoTableDataSource } from './demo-table-datasource';

@Component({
  selector: 'app-demotable',
  templateUrl: './demo-table.component.html',
  styleUrls: ['./demo-table.component.css']
})
export class DemoTableComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource: DemoTableDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'name'];

  ngOnInit() {
    this.dataSource = new DemoTableDataSource(this.paginator, this.sort);
  }
}
