import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
})
export class NavBarComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  toggle() {
    var element = document.getElementById('nav');
    element.classList.toggle('collapsible-expanded');
  }
}
