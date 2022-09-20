import { Component, OnInit } from '@angular/core';
import * as alldeals from "../products1.json";
@Component({
  selector: 'app-boxchild',
  templateUrl: './boxchild.component.html',
  styleUrls: ['./boxchild.component.css']
})
export class BoxchildComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  all:any=(alldeals as any).default;
}
