import { Component, OnInit } from '@angular/core';
import { SerieService } from '../serie.service';
import { Serie } from '../serie';
import { HttpClient } from '@angular/common/http';
import * as $ from 'jquery';

@Component({
  selector: 'app-serie-list',
  templateUrl: './serie-list.component.html',
  styleUrls: ['./serie-list.component.css'],
})
export class SerieListComponent implements OnInit {
  series: Array<Serie> = [];
  image: string = "";
  descrip: string = "";
  Co_seasons: number = 0;
  item: number = 0;

  constructor(
    private serieService: SerieService,
    private httpClient: HttpClient
  ) {}

  getSeries(): void {
    console.log('entra getSeries');
    this.serieService.getSeries().subscribe((series) => {
      this.series = series;
    });
  }

  getSeriesByJson(): void {
    console.log('entra getSeriesByJson');

    this.httpClient.get('assets/data.json').subscribe((data) => {
      let jsonString: string = JSON.stringify(data);
      let jsonObject: Serie[] = JSON.parse(jsonString);
      this.series = jsonObject;
    });
  }

  ngOnInit() {
    this.getSeriesByJson();
  }

  Model( image:string, descrip:string):void{
      this.image= image;
      this.descrip= descrip;
      $("#btnModal").click();
  }

  CountSeasons(s:number):void{
    this.Co_seasons+= s;
    this.item+=1;
  }
}
