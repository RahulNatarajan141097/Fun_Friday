import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class DataService {

  private imagesKey = 'images';
  private answersKey = 'answers';

  constructor() { }

  public FirstText_100: BehaviorSubject<string>[] = [
    new BehaviorSubject<string>('100'), new BehaviorSubject<string>('100'), new BehaviorSubject<string>('100'), new BehaviorSubject<string>('100'), new BehaviorSubject<string>('100'),
    new BehaviorSubject<string>('200'), new BehaviorSubject<string>('200'), new BehaviorSubject<string>('200'), new BehaviorSubject<string>('200'), new BehaviorSubject<string>('200'),
    new BehaviorSubject<string>('300'), new BehaviorSubject<string>('300'), new BehaviorSubject<string>('300'), new BehaviorSubject<string>('300'), new BehaviorSubject<string>('300'),
    new BehaviorSubject<string>('400'), new BehaviorSubject<string>('400'), new BehaviorSubject<string>('400'), new BehaviorSubject<string>('400'), new BehaviorSubject<string>('400'),
    new BehaviorSubject<string>('500'), new BehaviorSubject<string>('500'), new BehaviorSubject<string>('500'), new BehaviorSubject<string>('500'), new BehaviorSubject<string>('500')
  ];

  setFirstText_100(index: number) {
    if (this.FirstText_100[index]) {
      this.FirstText_100[index].next("Completed");
    }
  }
}




