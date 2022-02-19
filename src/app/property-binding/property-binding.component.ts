import { Component, OnInit } from '@angular/core';


//We can do data binding with the help of square brackets
//with interpolation we can only use strings 
//there is alternate syntax for data-binding 
//by useing bind-attribute

@Component({
  selector: 'app-property-binding',
  templateUrl: './property-binding.component.html',
  styleUrls: ['./property-binding.component.css']
})
export class PropertyBindingComponent implements OnInit {

  public myId = 'testId';
  public test = true;
  public someClass = 'some-class';
  public isDanger = true;
  public whichClass = {
    'some-class' : this.test,
    danger : this.isDanger,
    success : !this.isDanger
  }

  constructor() { }

  ngOnInit(): void {
  }

}
