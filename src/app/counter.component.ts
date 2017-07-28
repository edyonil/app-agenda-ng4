import { Component, OnInit, Input, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

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
  
  @Input() ipt = 1

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