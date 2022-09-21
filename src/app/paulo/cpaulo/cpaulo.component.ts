import { Component, OnInit } from '@angular/core';
import * as alldeals from "../books1.json";

@Component({
  selector: 'app-cpaulo',
  templateUrl: './cpaulo.component.html',
  styleUrls: ['./cpaulo.component.css']
})
export class CpauloComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  all:any=(alldeals as any).default;
}
