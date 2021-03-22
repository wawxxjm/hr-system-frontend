import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hr',
  templateUrl: './hr.component.html',
  styleUrls: ['./hr.component.css']
})
export class HrComponent implements OnInit {

  nowShowing = 'personalInfo';

  constructor() { }

  ngOnInit(): void {
  }

  switchDisplay(content: string): void{
    this.nowShowing = content;
  }
}
