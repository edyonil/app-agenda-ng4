import { Component, OnInit, Input, Output, EventEmitter, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

    // <button (click)="incrementa()">+</button>
    // <input type="text" [(ngModel)]="valor" [value]=value readonly>
    // <button (click)="decrementa()">-</button>

@Component({
  selector: 'counter',
  template: ` 
            <input type="text" [(ngModel)]="valor" [value]="value">
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
  
  @Input() value;

  @Output() mudouValor = new EventEmitter()

  @Input() outerCounterValue = 2

  propagateChange = (_: any) => {};

  constructor()
  {
  
  }

  incrementa()
  {
    this.value++
    this.mudouValor.emit({novoValor: this.value})
  }

  decrementa()
  {
    this.value--;
    this.mudouValor.emit({novoValor: this.value})
  }

  ngOnInit()
  {     
     this.mudouValor.emit()
  }

  writeValue(value: any) {
      // this.value = 1
  }

  set valor(v: any) {
    this.outerCounterValue = v;
    this.propagateChange(v);
  }

  registerOnChange(fn) {
    this.propagateChange = fn;
  }

  registerOnTouched() {}

  arroz(form)
  {
  }

}