import { Component, OnInit } from '@angular/core';
import {clsCustomer} from 'src/app/models/clsCustomer'
@Component({
  selector: 'app-customer-reg',
  templateUrl: './customer-reg.component.html',
  styleUrls: ['./customer-reg.component.css']
})
export class CustomerRegComponent implements OnInit  {

  objCustomer:clsCustomer | undefined;
  testvar:string | undefined;

  constructor(
    
  ) { 

    this.testvar="";
    this.objCustomer=new clsCustomer();

  }
  ngOnInit(): void {
   this.testvar="Testing";
   
  }
  
  

}
