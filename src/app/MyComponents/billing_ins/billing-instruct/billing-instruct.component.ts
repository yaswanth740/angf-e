import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import { NetApiService } from 'src/app/Services/net-api.service';
import { ClientApiService } from 'src/app/Services/client-api.service';

@Component({
  selector: 'app-billing-instruct',
  templateUrl: './billing-instruct.component.html',
  styleUrls: ['./billing-instruct.component.css']
})
export class BillingInstructComponent implements OnInit {
  
  obj!:any
  item!:any
  cli_li:any=[]
  items = ['Carrots', 'Tomatoes', 'Onions', 'Apples', 'Avocados'];
  c_name!:string
  basket = [''];
  constructor(public service: ClientApiService,
    private router: Router) { }

  ngOnInit(): void {
    
    this.client_list();

  }
  client_list(){
    this.service.getClient().subscribe(res=>{
      this.cli_li=res;
    })
  }
  onSubmit(){
    this.c_name = this.c_name.toLowerCase();
    console.log(this.c_name)
    this.obj=this.cli_li.$values.find((z: { client_name: string; })=>z.client_name==this.c_name)
    
  }
  scroll(el: HTMLElement) {
    el.scrollIntoView({behavior: 'smooth'});
}
  loading(id:number){
    this.getdata(id)
  }
  getdata(id:number){
    
    this.service.getclientbyid(id).subscribe(res=>{
      this.item=res;
      console.log("inside ",this.item)
    })
    
  }
  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }
  
  
}
