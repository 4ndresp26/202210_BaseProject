import { Component } from '@angular/core';
import { Serie } from './serie/serie';
import { HttpClient } from '@angular/common/http';
import * as data from '../assets/data.json';
import { SerieListComponent } from './serie/serie-list/serie-list.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  series: Array<Serie> = [];
  title = 'Parcial';

  constructor() {}

  ngOnInit(): void {}
}
