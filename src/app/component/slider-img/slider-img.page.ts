import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider-img',
  templateUrl: './slider-img.page.html',
  styleUrls: ['./slider-img.page.scss'],
})
export class SliderImgPage implements OnInit {
  private slideData: any;

  constructor() { }

  ngOnInit() {
    this.slideData = [
      { image: '../../assets/images/image1.jpg' },
      { image: '../../assets/images/image2.jpg' },
      { image: '../../assets/images/image3.jpg' }];
  }

}
