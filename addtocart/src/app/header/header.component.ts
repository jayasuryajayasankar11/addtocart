import { Component } from '@angular/core';
import { CartserviceService } from '../services/cartservice.service';
import { PopupComponent } from '../popup/popup.component';
import { SidenavComponent } from '../sidenav/sidenav.component';



@Component({
  selector: 'app-header',
  standalone: true,
  imports: [PopupComponent,SidenavComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  public quantity: number = 0;

  constructor(private service:CartserviceService){
    this.service.mysubject$.subscribe((quantity:number)=>{
      console.log(quantity);
      this.quantity = quantity;
    })
  }

  handlepop(){
    this.service.popup(true);
     
  }

  handlesidenav(){
    this.service.sidenav(true);
    console.log('clicked');
  }
  

}
