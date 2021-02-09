import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-account-user',
  templateUrl: './my-account-user.component.html',
  styleUrls: ['./my-account-user.component.css']
})
export class MyAccountUserComponent implements OnInit {

  title = 'appBootstrap';
  
  public isCollapsed = false;
  constructor() { }

  ngOnInit(): void {
  }

}
