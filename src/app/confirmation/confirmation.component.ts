import { Component, OnInit } from '@angular/core';

import { Input } from '@angular/core';
@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css']
})
export class ConfirmationComponent implements OnInit {
  @Input() items;
  constructor() { }

  ngOnInit() {
  }

}
