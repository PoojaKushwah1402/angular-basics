import { Component, OnInit } from '@angular/core';

export interface Industries {
  name: string;
}

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
  }

  industry: Industries[] = [
    {name: 'Construction'},
    {name: 'Consulting'},
    {name: 'Information Technology'},
    {name: 'Outsourcing'},
  ];

}
