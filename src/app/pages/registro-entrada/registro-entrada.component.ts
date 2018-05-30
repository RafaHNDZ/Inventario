import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';

@Component({
  selector: 'app-registro-entrada',
  templateUrl: './registro-entrada.component.html',
  styleUrls: ['./registro-entrada.component.css']
})
export class RegistroEntradaComponent implements OnInit {

  items: FormArray;
  entradaForm: FormGroup;
  articulos: any = [];

  constructor(
    private _fb: FormBuilder
  ) { 
    this.articulos = [{
      producto: '12',
      serie: 'ds3ds2',
      codigo: '3423423',
      stock_ingreso: '23',
      precio_compra: '19.99',
      precio_venta_distribuidor: '25.99',
      precio_venta_publico: '28.99'
    }];
  }

  ngOnInit() {
    this.entradaForm = this._fb.group({
      sucursal: ['', Validators.required],
      proveedor: ['', Validators.required],
      empleado: ['', Validators.required],
      //items: this._fb.array([this.createItem()])
    });
  }

  createItem(): FormGroup{
    return this._fb.group({
      producto: ['', Validators.required],
      serie: ['', Validators.required],
      stock_ingreso: ['', Validators.required],
      precio_compra: ['', Validators.required],
      precio_venta_distribuidor: ['', Validators.required],
      precio_venta_publico: ['', Validators.required]
    });
  }

  addItem(): void{
    this.items = this.entradaForm.get('items') as FormArray;
    this.items.push(this.createItem());
  }

  removeItem(index: number): void{
    this.articulos.splice(index, 1);
  }

}
