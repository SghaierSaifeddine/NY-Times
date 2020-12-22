import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-latest-world-news',
  templateUrl: './latest-world-news.component.html',
  styleUrls: ['./latest-world-news.component.scss']
})
export class LatestWorldNewsComponent implements OnInit {
  articls: any = [];

  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
    this.httpClient.get("assets/data.json").subscribe(data =>{
      console.log(data);
      this.articls = data;
    })
  }
}
