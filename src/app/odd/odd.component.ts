import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-odd',
  templateUrl: './odd.component.html',
  styleUrls: ['./odd.component.css']
})
export class OddComponent implements OnInit {
  @Input() number1: number;
  numberText: string = '';

  constructor() { }

  ngOnInit() {
  }

  private setText(number: number): string {
    if(number % 2 === 0) {
      return this.numberText = 'Even';
    } else {
      return this.numberText = 'Odd';
    }
  }

}
