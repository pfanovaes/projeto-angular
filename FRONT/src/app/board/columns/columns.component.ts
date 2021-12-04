import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-columns',
  templateUrl: './columns.component.html',
  styleUrls: ['./columns.component.css']
})
export class ColumnsComponent implements OnInit {
  @Input() column!: string;

  constructor() { }

  ngOnInit(): void {
  }

}
