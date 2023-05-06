import { Component } from '@angular/core';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss']
})
export class WorkComponent {
  items1 = [{ txt: 'Saas website for unique start-up brands', img: 1, col: '#DAE7FF' },
  {
    txt: 'Website redesign and development for new type.  ', img: 2, col: '#EBEBFB'
  }];
  items2 = [{ txt: 'Think with Google interactive experience.', img: 3, col: ' #FFE3DB' },
  {
    txt: 'Redesign of Google\'s Chrome Enterprise website.', img: 4, col: '#D4ECDF'
  }];
}
