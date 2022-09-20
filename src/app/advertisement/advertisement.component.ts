import { Component, OnInit } from '@angular/core';
import * as productdetails from '../data/category.json'

@Component({
  selector: 'app-advertisement',
  templateUrl: './advertisement.component.html',
  styleUrls: ['./advertisement.component.css']
})
export class AdvertisementComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  product:any = (productdetails as any).default;
}
