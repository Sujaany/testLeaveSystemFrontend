import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';

@Component({
  selector: 'app-view-inquire-applicants',
  templateUrl: './view-inquire-applicants.component.html',
  styleUrls: ['./view-inquire-applicants.component.css']
})
export class ViewInquireApplicantsComponent implements OnInit {

  displayedColumns: string[] = ['name','nic','contact', 'email','hq','cv','edit','delete'];

  appoinments = [
    { 'name':'peter','nic':'4564646164v','contact':'12345678', 'email':'test@gmail','hq':'NVQ 6','cv':'123','edit':'edit','delete':'delete'},
    { 'name':'peter','nic':'4564646164v','contact':'12345678', 'email':'test@gmail','hq':'NVQ 6','cv':'123','edit':'edit','delete':'delete'},
    { 'name':'peter','nic':'4564646164v','contact':'12345678', 'email':'test@gmail','hq':'NVQ 6','cv':'123','edit':'edit','delete':'delete'},
    { 'name':'peter','nic':'4564646164v','contact':'12345678', 'email':'test@gmail','hq':'NVQ 6','cv':'123','edit':'edit','delete':'delete'},
  ]
  dataSource = new MatTableDataSource<any>(this.appoinments);
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor() { }

  ngOnInit() {
    this.dataSource = new MatTableDataSource<any>(this.appoinments);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
