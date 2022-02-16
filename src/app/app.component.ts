import { Component } from '@angular/core';

// Selectors can be specify with different ways : 
// selector : 'app'  html -> <app></app>  (custom html tag)
// selecttor : '.app' html -> <div class='app'></div>
// selector : '[app]' html -> <div app> </div>

//template can also be inline and external.
//in inline template instead of templateUrl 
//template : '<div></div>'

//Similar to template style can also be inline
//eg style: [.app{}]

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Hello world ';
}
