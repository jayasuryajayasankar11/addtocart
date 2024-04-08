import { Component } from '@angular/core';
import { CartserviceService } from '../services/cartservice.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sidenav',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.css'
})
export class SidenavComponent {
  
  public data:boolean = false;

  constructor(private service:CartserviceService){
    this.service.mysubject2$.subscribe((data)=>{
      this.data = data;
    })
  }

  handleclose(){
    this.data = false;
  }
}
