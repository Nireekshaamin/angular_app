import { Component, OnInit } from '@angular/core';
import * as alldeals from "../feauthors.json";

@Component({
  selector: 'app-cfeatured',
  templateUrl: './cfeatured.component.html',
  styleUrls: ['./cfeatured.component.css']
})
export class CfeaturedComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  all:any=(alldeals as any).default;
}
