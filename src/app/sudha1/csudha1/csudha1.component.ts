import { Component, OnInit } from '@angular/core';
import * as alldeals from "../feauthors.json";

@Component({
  selector: 'app-csudha1',
  templateUrl: './csudha1.component.html',
  styleUrls: ['./csudha1.component.css']
})
export class Csudha1Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  all:any=(alldeals as any).default;
}
