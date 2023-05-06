import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-work-card',
  templateUrl: './work-card.component.html',
  styleUrls: ['./work-card.component.scss']
})
export class WorkCardComponent {
  @Input() data: any;

  constructor() {
    this.data = 'title'; // initialize the property in the constructor
  }

  getValueByParam(param: Number): string {
    let value: string;
    // Set the value based on the parameter
    if (param === 1) {
      value = '../../assets/img1.png';
    }
    else if (param === 2) {
      value = '../../assets/img2.png';
    }
    else if (param === 3) {
      value = '../../assets/img3.png';
    }
    else {
      value = '../../assets/img4.png';
    }
    return value;
  }
}
