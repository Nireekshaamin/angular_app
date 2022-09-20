import { Component, OnInit } from '@angular/core';
import * as alldeals from "../bs.json";
@Component({
  selector: 'app-child8',
  templateUrl: './child8.component.html',
  styleUrls: ['./child8.component.css']
})
export class Child8Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  all:any=(alldeals as any).default;
}
