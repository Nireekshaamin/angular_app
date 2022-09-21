import { Component, OnInit } from '@angular/core';
import * as alldeals from "../books1.json";
@Component({
  selector: 'app-cmorgan',
  templateUrl: './cmorgan.component.html',
  styleUrls: ['./cmorgan.component.css']
})
export class CmorganComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  all:any=(alldeals as any).default;
}
