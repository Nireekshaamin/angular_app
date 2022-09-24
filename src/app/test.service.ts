import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Test } from './test';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  constructor() { }
  test1:Test[]=[
    {
      id: 1,
      pname: 'How to Prepare for QUANTITATIVE APTITUDE for CAT',
      pdescription: 'Now with these CAT Practice Tests, you can practice and track your proficiency level, and  also improvise',
      price: 820,
      image: 'https://images-eu.ssl-images-amazon.com/images/I/51xh+P2PBIS._AC_SX368_.jpg',
      Status: 'In Stock'
    },
    {
      id: 2,
      pname: 'Physics Galaxy 2020-21 : Advanced Illustration in Physics',
      pdescription: '700 advanced problems with illustrations to help the students crack the JEE Advanced exam',
      price: 377,
      image: 'https://images-eu.ssl-images-amazon.com/images/I/41KzdOwOjZL._AC_SX368_.jpg',
      Status: 'In Stock'
    },
    {
      id: 3,
      pname: 'Objective NCERT at your FINGERTIPS for NEET-AIIMS - Biology',
      pdescription: 'It gives chapter-wise, student-friendly synopses for quick-and-easy revision of important concepts, ',
      price: 683,
      image: 'https://images-eu.ssl-images-amazon.com/images/I/51Zj0W-zVTL._AC_SX368_.jpg',
      Status: 'In Stock'
    },
    {
      id: 4,
      pname: '13 Years Solved Papers NEET 2021',
      pdescription: 'Solved Papers is collection of 13 years solved papers of NEET. This book covers all CBSE AIPMT and NTA NEET papers. ',
      price: 399,
      image: 'https://th.bing.com/th/id/OIP.lSwR1_qeCvSy-7r9_GHRyQHaE6?id=ImgDet&rs=1',
      Status: 'Out of Stock'
    },
    {
      id: 5,
      pname: 'The Official SAT Study Guide, 2020 Edition',
      pdescription: 'The official SAT study guide will help students get ready for the SAT exam with eight official SAT exam practice tests',
      price: 1233,
      image: 'https://images-eu.ssl-images-amazon.com/images/I/51aMvcPyqBL._AC_SX368_.jpghttps://images-na.ssl-images-amazon.com/images/I/41QHd+jF1uL._SX374_BO1,204,203,200_.jpg',
      Status: 'In Stock'
    },
    {
      id: 6,
      pname: 'GATE 2023 : Previous Solved Papers',
      pdescription: 'Here we have provided GATE Computer Science and Information Technology question papers for last 32 years',
      price: 571,
      image: 'https://images-na.ssl-images-amazon.com/images/I/41u6hhOxcJL._SX373_BO1,204,203,200_.jpg',
      Status: 'Out of Stock'
    }
  ];

  public getTestDetails(): any {
    const testObservable = new Observable(observe => {
      setTimeout(() => {
        observe.next(this.test1);
      }, 5000);
    });
    return testObservable;
  }
}
