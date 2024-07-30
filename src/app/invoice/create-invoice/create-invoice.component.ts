import { Component, OnInit } from '@angular/core';
import { VirtualApiServicesService } from '../../services/virtual-api-services.service';

@Component({
  selector: 'app-create-invoice',
  standalone: true,
  imports: [],
  templateUrl: './create-invoice.component.html',
  styleUrl: './create-invoice.component.css'
})
export class CreateInvoiceComponent implements OnInit{
  listCustomer:any[] =[]
  listProduct:any[]=[];
  subtotal:number=0;
  taxes:number=0;
  total:number=0;

  constructor(private virtualServices:VirtualApiServicesService){}
  ngOnInit(): void {
    this.virtualServices.getAllCustomer()
    .subscribe((data)=>
      { 
        this.listCustomer = data
        console.log(this.listCustomer);
      });    
  }

  AddProdcut(){
    this.virtualServices.getAllProduct()
    .subscribe((data) =>{
        this.listProduct = data;
        this.listProduct.forEach(element => {          
          this.total += element.precioUnitario;
        });
        this.taxes= this.total * 0.16;
        this.subtotal = this.total - this.taxes;
        console.log(this.total)
    });
  }

  ClearData(){
    this.total = 0;
    this.taxes = 0;
    this.subtotal = 0;
    this.listProduct = [];
  }
}
