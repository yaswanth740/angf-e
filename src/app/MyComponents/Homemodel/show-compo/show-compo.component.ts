import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { NetApiService } from 'src/app/Services/net-api.service';
@Component({
  selector: 'app-show-compo',
  templateUrl: './show-compo.component.html',
  styleUrls: ['./show-compo.component.css']
})
export class ShowCompoComponent implements OnInit {
    id!:number
    constructor(private service:NetApiService,private router: Router) { }
    homels:any=[]
    ngOnInit(): void {
      this.refreshHomeLs();
      
    }
    refreshHomeLs(){
      this.service.getHome().subscribe(data=>{
        this.homels=data;
      });
  }
  deletelob(id:number){
    
    this.service.deleteHome(id).subscribe(res => {
      console.log('deletes  successfully!');
      this.refreshHomeLs();
    })
  }

}

