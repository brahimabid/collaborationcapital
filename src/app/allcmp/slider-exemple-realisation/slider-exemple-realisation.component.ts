import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-slider-exemple-realisation',
  templateUrl: './slider-exemple-realisation.component.html',
  styleUrls: ['./slider-exemple-realisation.component.scss']
})
export class SliderExempleRealisationComponent implements OnInit {
  customOptions: OwlOptions = {
    loop: true,
    center: true,
    margin: 10,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    navSpeed: 700,
    navText: ['<i class="material-icons">arrow_back_ios</i>', '<i class="material-icons">arrow_forward_ios</i>'],
    responsive: {
      200: {
        items: 1
      },
      400: {
        items: 2
      },
      800: {
        items: 3
      },
      1200: {
        items: 4
      },
      1600: {
        items: 5
      }
    },
    nav: true
  }
  constructor() { }

  ngOnInit(): void {
  }

}
