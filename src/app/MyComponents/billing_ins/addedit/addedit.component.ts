import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClientApiService } from 'src/app/Services/client-api.service';

@Component({
  selector: 'app-addedit',
  templateUrl: './addedit.component.html',
  styleUrls: ['./addedit.component.css']
})
export class AddeditComponent implements OnInit {
  @Input() item!:any;
  
  desc!:string
  contact_name!:string
  id!:number
  public instr_level:string="1"
  public ird_account:boolean=true
  public ird_contact:boolean=false
  constructor(public service: ClientApiService,private router: Router) { }
 
  ngOnInit(): void {
  }
  submit(){
    var data={
      instr_level:this.instr_level,
      agency_code:'At5H7',
      s_id:'909',
      contact_name:this.contact_name,
      glob:'OTHERS',
      desc:this.desc,
      updated_by:'User Test',
      updated_on:null,
      client_inv_del:null
    }
    console.log(data)
    this.id=this.item.id
    this.service.clientmeta(this.id,data).subscribe(res=>{

      console.log(data,this.id);
      this.router.navigateByUrl('Lobcat');
    })
  }
   ird(){
    this.ird_account=true;
    this.ird_contact=false;
}
      irds(){
    this.ird_account=false;
    this.ird_contact=true;
}


}

