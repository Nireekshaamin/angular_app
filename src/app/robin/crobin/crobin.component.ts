import { Component, OnInit } from '@angular/core';
import * as alldeals from "../books1.json";
@Component({
  selector: 'app-crobin',
  templateUrl: './crobin.component.html',
  styleUrls: ['./crobin.component.css']
})
export class CrobinComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  all:any=(alldeals as any).default;
}
