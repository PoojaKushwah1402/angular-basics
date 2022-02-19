import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.css']
})
export class EventBindingComponent implements OnInit {

  public msg = 'Click'
  constructor() { }

  ngOnInit(): void {
  }

  onClick(event: any) {
    console.log(this,'in click',event.type)
    this.msg='clicked'
  }

  logData(data :any) {
    console.log(data.value)
  }

}
