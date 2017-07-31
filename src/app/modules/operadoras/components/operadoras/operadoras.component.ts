import { OperadorasService } from './../../services/operadoras.service';
import { Operadoras } from './../../models/operadoras.model';
import { Component, OnInit, Input, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor, FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-operadoras',
  templateUrl: './operadoras.component.html',
  styleUrls: ['./operadoras.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => OperadorasComponent),
      multi: true
    }
  ]
})
export class OperadorasComponent implements OnInit, ControlValueAccessor {

  operadoras: Operadoras

  @Input() _counterValue = 0;

  @Input('option') optionNumber: number;

  private operadora;

  onChange = (_: any) => {};

  constructor(private operadorasService: OperadorasService) { }

  ngOnInit() 
  {
    this.getOperadoras()
  }

  //esse cara eh responsavel por pegar o valor atual do select operadoras e passar pra o registerOnChange
  set value(value)
  { 
    if (value !== this.operadora) {
      this.operadora = value;
      this.onChange(value);
    }
  }

  get value() {
    return this.operadora;
  }

  writeValue(obj: any): void {
    if (obj !== this.operadora) {
          this.operadora = obj;
      }
    //this.value = 1; seta default 1 mas nao ta setando no <select>, entender isso mais tarde
  }

  //toda vez que muda atualiza this.onChange
  registerOnChange(fn: any): void
  {
    this.onChange = fn
  }

  registerOnTouched(fn: any): void {}

  setDisabledState?(isDisabled: boolean): void {}

  getOperadoras()
  {
    this.operadorasService.getOperadoras().subscribe( operadoras => this.operadoras = operadoras )
  }
}
