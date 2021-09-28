import { Component, OnInit } from '@angular/core';
import { CommonService } from '../../services/common.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  list: any[] = [];
  domain: string = "";
  constructor(private common: CommonService) {
    this.domain = this.common.domain;
  }


  ngOnInit(): void {
    this.common.get("api/productlist").then((data: any) => {
      this.list = data.result;
      console.log(this.list);
    })
  }

}
