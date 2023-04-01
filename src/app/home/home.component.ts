import { Component } from '@angular/core';
import { FakeapiService } from '../fakeapi.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  user:any
  constructor(private api:FakeapiService) {}


  ngOnInit(){
    this.getdata()
  }
  getdata(){
    this.api.getUser().subscribe((res:any)=>{
      // console.log(res);
      this.user=res
      
    })
  }

}
