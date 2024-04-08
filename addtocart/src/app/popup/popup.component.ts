import { Component} from '@angular/core';
import { CartserviceService } from '../services/cartservice.service';
import { CommonModule } from '@angular/common';
import { cardtype } from '../data/datatype';
import { Input } from '@angular/core';

@Component({
  selector: 'app-popup',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './popup.component.html',
  styleUrl: './popup.component.css'
})
export class PopupComponent {

  public data:boolean = false;

  constructor(private service:CartserviceService){
    this.service.mysubject1$.subscribe((data)=>{
      this.data = data;
    })
  }

  handleclose(){
    this.data = false;
  }

  @Input() arrobj:cardtype[] = []

  handleAddQ(productname: string) {
    this.arrobj.forEach((value) => {
      if (value.name == productname) {
        value.orderedq += 1;
      }
    })
  }

  handlesubQ(productname: string) {
    this.arrobj.forEach((value) => {
      if (value.name == productname && value.orderedq > 0) {
        value.orderedq -= 1;
      }
    })
  }
}
