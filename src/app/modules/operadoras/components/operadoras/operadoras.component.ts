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

  onChange = (_: any) => {};

  @Input() formControlName

  constructor(private operadorasService: OperadorasService) { }

  ngOnInit() 
  {
    this.getOperadoras()
  }

  //esse cara eh responsavel por pegar o valor atual do select operadoras e passar pra o registerOnChange
  set value(value)
  {    
    this.onChange(value)    
  }

  writeValue(obj: any): void {
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
