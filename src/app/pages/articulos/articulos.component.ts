import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder, FormControl } from '@angular/forms';

@Component({
  selector: 'app-articulos',
  templateUrl: './articulos.component.html',
  styleUrls: ['./articulos.component.css']
})
export class ArticulosComponent implements OnInit {

  public entradaForm: FormGroup;
  articulos: any = [];
  url: string = null;
  entrada: any;

  constructor(
    private _fb: FormBuilder
  ) {
  }
  
  ngOnInit(): void {
    this.entrada = {
      name: '',
      description: '',
      category: '',
      details: ''
    };
    this.entradaForm = this._fb.group({
      'name': [this.entrada.name, [Validators.required, Validators.maxLength(30)]],
      'description': [this.entrada.description, Validators.maxLength(50)],
      'category': [this.entrada.category, Validators.required],
      'details': [this.entrada.details, Validators.maxLength(50)]
    });;
  }

  initArticulo(): FormGroup{
    return ;
  }
  
  fileChange(event: any): void{
    if(event.target.files[0].type == 'image/png' || event.target.files[0].type == 'image/jpg'){
      console.log(event.target.files);
      let reader = new FileReader();
      let file = event.target.files[0];
      reader.onload = (event:any) => {
        this.url = event.target.result;
      }
      reader.readAsDataURL(event.target.files[0]);
    }else{
      alert('Tipo de archivo invalido');
      this.url = null;
    }
  }

  submit(form){
    console.log(form);
  }

}
