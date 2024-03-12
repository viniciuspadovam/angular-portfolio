
import {
  trigger,
  state,
  style,
  animate,
  transition,
  keyframes
} from '@angular/animations';

export const fadeInOut = trigger('fadeInOut', [
  transition(':enter', [
    style({opacity: 0, width: 0}),
    animate('350ms ease-out', keyframes([
      style({offset: 0, opacity:0, width:0}),
      style({offset: 0.8, opacity:0.5, width:'*'}),
      style({offset: 1, opacity:1, width:'*'})
    ]))
  ]),
  transition(':leave', [
    animate('0s cubic-bezier(.13,.9,.8,.1)', style({ opacity: 0, width: 0}))
  ])
]);
