import { Component, OnInit } from '@angular/core';
import { COLUMNS } from 'src/shared/columns';
import { Router } from '@angular/router';


@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {
  columns = COLUMNS;
  

  constructor(
    
  ) { }

  ngOnInit(): void {
    
  }

}
