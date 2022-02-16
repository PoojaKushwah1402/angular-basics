import { Component, OnInit } from '@angular/core';

/*
  Interpolation is a simplest way to bind data from class to html template
  within the curly brackets we can perform various operations.
  like add, sub and string concatenation

  Apart from js built in method we can also create some methods in class and can use them
  inside template

  What we cannot do : 
  1.we cannot perform assignment to variable in html template inside double curly brackets
  2. we cannot access js global variable eg. window, but we can bind then in call and can use it
*/

@Component({
  selector: 'app-interpolation',
  templateUrl: './interpolation.component.html',
  styleUrls: ['./interpolation.component.css']
})
export class InterpolationComponent implements OnInit {

  public title = 'Pooja'
  public siteUrl = window.location.href
  constructor() { }

  ngOnInit(): void {
  }

  greetUser () {
    return `Welcome back ${this.title}`
  }

}
