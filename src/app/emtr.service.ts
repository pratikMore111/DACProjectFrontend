import { Injectable } from '@angular/core';
import { Input, Output, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmtrService {

  @Output() fire: EventEmitter<any> = new EventEmitter();
  @Output() fireforuser: EventEmitter<any> = new EventEmitter();

  logInBtnSwitch(value) {
    this.fire.emit(value);
  }
  
  getEmittedValueForLogbtnSwitch() {
    return this.fire;
  }

  userSwitch(value) {
    this.fireforuser.emit(value);
  }
  
  getEmittedValueForUserSwitch() {
    
    return this.fireforuser;
  }


  constructor() { }
}
