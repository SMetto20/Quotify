import { Component, OnInit, } from '@angular/core';
import { DisplayComponent } from '../display/display.component';
import { Quote } from './quote';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
quote: Quote  = new Quote("","","",0,0)
                 



// quote = {
//   quote:"i am great"
  
// }
// upVote = 1
// voteDown = 1

vote(){

    // alert(" NB; each up vote and down vote begins at a value of zero.")
     +this.quote.upVote++ 

  }

  downVote(){
  
    this.quote.upVote --
    
        
  }

  
log(){
  // console.log(this.quote.quote,this.quote.author,this.quote.person)
  
}
  constructor() {}

  ngOnInit(): void {
  }

}
