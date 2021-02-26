import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { MatCarousel, MatCarouselComponent } from '@ngmodule/material-carousel';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PopupComponent } from '../popup/popup.component';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.scss']
})
export class AccueilComponent implements OnInit {

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
      600: {
        items: 3
      },
      800: {
        items: 4
      },
      1000: {
        items: 5
      }
    },
    nav: true
  }
  customOptions2: OwlOptions = {
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
      0: {
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
      }
    },
    nav: true
  }
  slides = [{ 'image': 'assets/slider/slide.png' }, { 'image': 'assets/slider/slide.png' }];
  timer=true
  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  rechercher(): void {
    const dialogRef = this.dialog.open(PopupComponent, {
      width: '600px',

    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result)

      if (result == true) {
       
        if (this.timer) {
          Swal.fire(
            {
              html:
                '<div style="text-align:center;font-weight:bold" > <b>Félicitations !</b><br> ' +
                '<a >Votre message a été envoyé. <br>' +
                'Nous revenons vers vous rapidement.</a> ' +
                '</div>',
              showCloseButton: false,
              showCancelButton: false,
            }
          )
        }
        setTimeout(() => {
          this.timer = false
        }, 3000)
      }


    });
  }

}
