import { Component, OnInit, signal } from '@angular/core';

import { DoctorRank } from '../../interfaces/doctor-rank';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { ReviewDirective } from '../../directives/review';

import { RouterLink } from '@angular/router';
import { last } from 'rxjs';
import { NgClass, NgStyle } from '@angular/common';

@Component({
  selector: 'app-doc-rank',
  imports: [FontAwesomeModule, ReviewDirective, NgClass, NgStyle],
  templateUrl: './doc-rank.html',
  styleUrl: './doc-rank.css',
})
export class DocRank implements OnInit {
  arrow = faArrowRight;
  // ranking = input.required<DoctorRank>();
  ranking = signal<DoctorRank>({
    rank: 3.5,
    totalReviewers: 3,
    ratingDistribution: {
      1: 0,
      2: 1,
      3: 1,
      4: 0,
      5: 1,
    },
  });
  starIcon = faStar;
  starIconLatestPart() {
    let last = {
      /*
      الtoFixed(0)
      بيعمل تقريب فاحل  احلوها ل 
      string 
      , و اعملها بعد عن الtofixed
      متنساش
      
      */
      rank: Number(this.ranking().rank.toFixed(0).split('.')[0]) + 1,
      lastRank: Number(this.ranking().rank.toFixed(2).split('.')[1]),
    };

    return last;
  }
  ngOnInit() {
    // console.log(this.ranking());
    console.log(this.starIconLatestPart());
  }
}
