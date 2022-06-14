import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-page',
  templateUrl: './test-page.component.html',
  styleUrls: ['./test-page.component.css']
})
export class TestPageComponent implements OnInit {
 num=0
  display(num:number){
    this.num = num
  }

  constructor() { }

  ngOnInit(): void {
  }

}
