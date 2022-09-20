import { Component, OnInit } from '@angular/core';
import * as alldeals from "../feauthors.json";


@Component({
  selector: 'app-csudha',
  templateUrl: './csudha.component.html',
  styleUrls: ['./csudha.component.css']
})
export class CsudhaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  all:any=(alldeals as any).default;
}
