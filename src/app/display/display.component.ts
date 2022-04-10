import { Component, OnInit, Input} from '@angular/core';
import { Quote } from '@angular/compiler';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {
 
    // vote(){
    //   alert(" NB; each up vote and down vote begins at a value of zero.")
    // }
    // delete(){
    //   alert("are you sure you want to delete this quote?")
    //        $('.hide').hide()     
    // }
   
  // vote(){

  // }
  constructor() { }

  ngOnInit(): void {
  }

}
