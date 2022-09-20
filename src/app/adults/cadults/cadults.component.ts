import { Component, OnInit } from '@angular/core';
import * as alldeals from "../product4.json";


@Component({
  selector: 'app-cadults',
  templateUrl: './cadults.component.html',
  styleUrls: ['./cadults.component.css']
})
export class CadultsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  all:any=(alldeals as any).default;
}
