import { Component, OnInit, Input, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

    // <button (click)="increment()">+</button>
    // {{counterValue}}
    // <button (click)="decrement()">-</button>

    // <select>
    //     <option value="1">arroz</option>
    //     <option value="2">feijao</option>
    //     <option value="3">carne</option>
    // </select>
@Component({
  selector: 'counter',
  template: `
    <input type="text" [(ngModel)]="value">
  `,
    providers: [
    { 
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CounterComponent),
      multi: true
    }
  ]
})
export class CounterComponent implements OnInit, ControlValueAccessor{
    
  propagateChange = (_: any) => {};

  ngOnInit()
  {     
    
  }

  writeValue(value: any) {
      this.value = 1
  }

  set value(v: any) {
    this.propagateChange(v);
  }

  registerOnChange(fn) {
    this.propagateChange = fn;
  }

  registerOnTouched() {}

}