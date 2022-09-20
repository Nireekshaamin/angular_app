import { Component, OnInit } from '@angular/core';
import * as alldeals from "../collen.json";

@Component({
  selector: 'app-collenchild',
  templateUrl: './collenchild.component.html',
  styleUrls: ['./collenchild.component.css']
})
export class CollenchildComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  all:any=(alldeals as any).default;
}
