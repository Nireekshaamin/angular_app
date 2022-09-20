import { Component, OnInit } from '@angular/core';
import * as alldeals from "../books1.json";

@Component({
  selector: 'app-child5',
  templateUrl: './child5.component.html',
  styleUrls: ['./child5.component.css']
})
export class Child5Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  all:any=(alldeals as any).default;
}
