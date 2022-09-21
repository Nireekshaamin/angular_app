import { Component, OnInit } from '@angular/core';
import * as alldeals from "../books1.json";
@Component({
  selector: 'app-crowling',
  templateUrl: './crowling.component.html',
  styleUrls: ['./crowling.component.css']
})
export class CrowlingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  all:any=(alldeals as any).default;
}
