import { Component, OnInit, HostBinding } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.sass']
})
export class LayoutComponent implements OnInit {
  @HostBinding('class.wrapper') wrapper = true;

  constructor() { }

  ngOnInit() {
  }

}
