import { RegisterService } from './register.service';
import { NgForm } from '@angular/forms';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title='crudapp2'
  x:any={};
  person: any=[];
  constructor()
  {
    this.person=[
      {
        id:101,
        name:'puneet',
        course:'bca',
        fees:200,
        phone:123,
      }
    ]
  }
  addVal()
  {
    this.person.push(this.x);
    console.log('add');
  }
  clearForm()
  {
    this.x={};
  }
  deleteRow(id:number)
  {
    let index=this.person.findIndex((x:any)=>x.id==id)
    this.person.splice(index,1);
  }
  getVal(id:number)
  {
    this.x=JSON.parse(JSON.stringify(this.person.find((x:any)=>x.id==id)));
  }
  editForm()
  {
    var id=this.x.id;
    let index=this.person.findIndex((x:any)=>x.id==id);
    this.person[index]=this.x;
  }
}

