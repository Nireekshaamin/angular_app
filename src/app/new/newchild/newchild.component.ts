import { Component, OnInit } from '@angular/core';
import * as alldeals from "../products.json";
@Component({
  selector: 'app-newchild',
  templateUrl: './newchild.component.html',
  styleUrls: ['./newchild.component.css']
})
export class NewchildComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  all:any=(alldeals as any).default;
}
