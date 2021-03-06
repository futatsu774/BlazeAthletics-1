import { Component, Injectable, OnInit } from '@angular/core';
import { AuthenticationService } from './service/authentication.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'BlazeAthletics';

  constructor(private authService: AuthenticationService){}

  ngOnInit()
  {
    this.authService.autoLogin();
  }
}
