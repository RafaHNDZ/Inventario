import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { ArticuloService } from '../../services/articulo.service';

@Component({
  selector: 'app-registro-entrada',
  templateUrl: './registro-entrada.component.html',
  styleUrls: ['./registro-entrada.component.css']
})
export class RegistroEntradaComponent implements OnInit {

  items: FormArray;
  entradaForm: FormGroup;
  articulos: any = [];
  resultados: any = [];
  page: number = 1;
  per_page: number = 10;
  order_by: string = '';
  query: string = '';
  total_results: number = 0;
  isLoading: boolean = false;

  constructor(
    private _fb: FormBuilder,
    private _articulo: ArticuloService
  ) { 
    //this.articulos = [];
  }

  ngOnInit() {
    this.entradaForm = this._fb.group({
      sucursal: ['', Validators.required],
      proveedor: ['', Validators.required],
      empleado: ['', Validators.required],
      //items: this._fb.array([this.createItem()])
    });

    this.getItems();
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

  addItem(item:any): void{
    //this.items = this.entradaForm.get('items') as FormArray;
    //this.items.push(this.createItem());
    let temp = {
      id: item.idproducto,
      nombre: item.nombre,
      serie: '',
      codigo: '',
      stock_ingreso: 1,
      precio_compra: '00.00',
      precio_venta_distribuidor: '00.00',
      precio_venta_publico: '00.00'
    };
    this.articulos.push(temp);
  }

  removeItem(index: number): void{
    this.articulos.splice(index, 1);
  }

  getItems(): void {
    this.isLoading = true;
    this._articulo.get(this.page, this.per_page, this.order_by, this.query).subscribe((res:any) => {
      if(res.code != 200){
        alert(res.message);
        console.log(res.error);
      }else{
        this.resultados = res.data;
        this.total_results = res.rows;
        console.log(res);
      }
    }, (err) => {

    }, () => {
      this.isLoading = false;
    });
  }

}
