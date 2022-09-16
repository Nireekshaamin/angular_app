import { Component, OnInit } from '@angular/core';
import * as allprod from "../data/authors.json";
@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css']
})
export class AuthorsComponent implements OnInit {

  constructor() { }
 

  ngOnInit(): void {
  }

  all:any=(allprod as any).default;
 

}
