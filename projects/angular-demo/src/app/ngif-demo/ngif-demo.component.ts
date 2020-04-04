import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngif-demo',
  templateUrl: './ngif-demo.component.html',
  styleUrls: ['./ngif-demo.component.css']
})
export class NgifDemoComponent implements OnInit {
  isTrue = true;
  trueText = 'This content in DOM when true.';
  falseText = 'This content in DOM when false.';

  constructor() { }

  ngOnInit() {
  }

  toggle() {
    this.isTrue = !this.isTrue
  }
}
