import { Component, OnInit } from '@angular/core';
import * as alldeals from "../book2.json";
@Component({
  selector: 'app-child7',
  templateUrl: './child7.component.html',
  styleUrls: ['./child7.component.css']
})
export class Child7Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  all:any=(alldeals as any).default;
}
