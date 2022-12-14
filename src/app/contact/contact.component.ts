import { Component, OnInit } from '@angular/core';
import { Contact } from '../contact';
import { ContactService } from '../contact.service';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  contact1: Contact[]=[];

  constructor(private contactservice:ContactService) { }
  title = 'BookWorm';

  ngOnInit(): void {
    const contactObservable= this.contactservice.getContactDetails();
    contactObservable.subscribe((contactData:  Contact[])=>{
      this.contact1=contactData;
    });
  }

}
