import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator/paginator';
import { ThumbnailComponent } from '../thumbnail/thumbnail.component'; 


export interface MovieElem {
  id: number;
  name: string;
  url: string;
  year: number;
}

const ELEMENT_DATA: MovieElem[] = [
  {id: 1, name: 'Hydrogen',url: "xyz1",year: 2001},
  {id: 2, name: 'Helium', url: "xyz2",year: 2001},
  {id: 3, name: 'Lithium', url: "xyz3",year: 2001},
  {id: 4, name: 'Beryllium', url: "xyz4",year: 2001},
  {id: 5, name: 'Boron', url: "xyz5",year: 2001},
  {id: 6, name: 'Carbon', url: "xyz6",year: 2001},
  {id: 7, name: 'Nitrogen', url: "xyz7",year: 2001},
  {id: 8, name: 'Oxygen', url: "xyz8",year: 2001},
  {id: 9, name: 'Fluorine', url: "xyz9",year: 2001},
  {id: 10, name: 'Neon', url: "xyz10",year: 2001},
];

@Component({
  selector: 'app-recent',
  templateUrl: './recent.component.html',
  styleUrls: ['./recent.component.css']
})

export class RecentComponent implements OnInit {

  length: number = 0;
  pageSize: number = 3;  //displaying three cards each row
  pageSizeOptions: number[] = [3, 6, 9, 12];

  productsList: MovieElem[]= [];
  pagedList: MovieElem[]= [];

  breakpoint: number = 3;  //to adjust to screen

  displayedColumns: string[] = ['id', 'name', 'url', 'year'];

  constructor() { }

  ngOnInit(): void {
        this.breakpoint = (window.innerWidth <= 800) ? 1 : 3;
        this.productsList = ELEMENT_DATA;
        this.pagedList = this.productsList.slice(0, 3);
        this.length = this.productsList.length;
  }

  OnPageChange(event: PageEvent){
    let startIndex = event.pageIndex * event.pageSize;
    let endIndex = startIndex + event.pageSize;
    if(endIndex > this.length){
      endIndex = this.length;
    }
    this.pagedList = this.productsList.slice(startIndex, endIndex);
  }

  onResize(event: any) { //to adjust to screen size
    this.breakpoint = (event.target.innerWidth <= 800) ? 1 : 3;
  }

}
