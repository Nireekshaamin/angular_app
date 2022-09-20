import { Component, OnInit } from '@angular/core';
import * as alldeals from "../collen.json";
@Component({
  selector: 'app-child6',
  templateUrl: './child6.component.html',
  styleUrls: ['./child6.component.css']
})
export class Child6Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  all:any=(alldeals as any).default;
}
