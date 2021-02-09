import { Component, OnInit } from '@angular/core';
import { CarouselConfig } from 'ngx-bootstrap/carousel';

@Component({
  selector: 'app-home-user',
  templateUrl: './home-user.component.html',
  providers: [
    { provide: CarouselConfig, useValue: { interval: 1500, noPause: false, showIndicators: true } }
 ],
  styleUrls: ['./home-user.component.css']
})
export class HomeUserComponent implements OnInit {

  slides = [
    {image: '../../assets/images/carousel3.jpg'},
    {image: '../../assets/images/carousel1.jpg'},
    {image: '../../assets/images/carousel2.jpg'}
 ];
 noWrapSlides = false;
 showIndicator = true;

  constructor() {}


  ngOnInit(): void {
  }

}
