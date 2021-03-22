import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-normal-user',
  templateUrl: './normal-user.component.html',
  styleUrls: ['./normal-user.component.css']
})
export class NormalUserComponent implements OnInit {

  nowShowing = 'personalInfo';

  constructor() { }

  ngOnInit(): void {
  }

  switchDisplay(content: string): void{
    this.nowShowing = content;
  }
}
