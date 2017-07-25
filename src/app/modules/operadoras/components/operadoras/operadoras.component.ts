import { NgModel } from '@angular/forms';
import { OperadorasService } from './../../services/operadoras.service';
import { Operadoras } from './../../models/operadoras.model';
import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-operadoras',
  templateUrl: './operadoras.component.html',
  styleUrls: ['./operadoras.component.css']
})
export class OperadorasComponent implements OnInit, OnChanges {

  operadoras: Operadoras

  constructor(private operadorasService: OperadorasService) { }

  ngOnInit() 
  {
    this.getOperadoras()
  }

  ngOnChanges()
  {   
  }

  getOperadoras()
  {
    this.operadorasService.getOperadoras().subscribe( operadoras => this.operadoras = operadoras )
  }
}
