import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css']
})
export class CountryComponent implements OnInit {

  posts: any | undefined;
  constructor(private http: HttpClient) {
    http.get('https://www.statbureau.org/get-data-json?country=turkey')
      .subscribe(response => {
        this.posts = response;
      })
   }

  ngOnInit(): void {
  }

}
