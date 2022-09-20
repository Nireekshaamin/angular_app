import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Contact } from './contact';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor() { }
  contact1:Contact[]=[
    {
     info1:"Address",
     info2:"RVCE Post, Mysore Rd",
     info3:"Mailasandra, Bengaluru",
     info4:"Karnataka 560059",
     info5:"fa fa-address-card"
    },
    {
      info1:"Phone",
     info2:"+91 7892101574",
     info3:"+91 9141931635",
     info4:"0820 2581635",
     info5:"fa fa-phone"
    },
    {
      info1:"Email",
     info2:"nireekshaamin2000@gmail.com",
     info3:"nireekshaamin15@gmail.com",
     info4:"",
     info5:"fa fa-envelope"
    
    }
  ];

  public getContactDetails(): any {
    const contactObservable = new Observable(observe => {
      setTimeout(() => {
        observe.next(this.contact1);
      }, 5000);
    });
    return contactObservable;
  }
}