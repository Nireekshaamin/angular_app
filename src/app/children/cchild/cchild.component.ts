import { Component, OnInit } from '@angular/core';
import * as alldeals from "../products2.json";

@Component({
  selector: 'app-cchild',
  templateUrl: './cchild.component.html',
  styleUrls: ['./cchild.component.css']
})
export class CchildComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  all:any=(alldeals as any).default;
}
