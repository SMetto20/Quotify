import { Component, OnInit, } from '@angular/core';
import { DisplayComponent } from '../display/display.component';
import { Quote } from './quote';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
quote:Quote = new Quote("enter quote","author","person")
// quote = {
//   quote:"i am great"
  
// }
log(){
  // console.log(this.quote.quote,this.quote.author,this.quote.person)
  document.write("app-details")
}
  constructor() {}

  ngOnInit(): void {
  }

}
