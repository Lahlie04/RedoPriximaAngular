import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

  //   $('#projects-slider').owlCarousel({
  //     loop: true,
  //     nav: false,
  //     items: 2,
  //     dots: true,
  //     smartSpeed: 600,
  //     center: true,
  //     autoplay: true,
  //     autoplayTimeout: 4000,
  //     responsive: {
  //         0: {
  //             items: 1
  //         },
  //         768: {
  //             items: 2,
  //             margin: 8,
  //         }
  //     }
  // })

  document.getElementById('projecyt-slider')
  }

}
