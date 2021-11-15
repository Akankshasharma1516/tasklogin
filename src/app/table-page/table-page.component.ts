import { Component, OnInit } from '@angular/core';
import User from "../../assets/mocks/strategy.json"
interface LoginUser {
  strategies: string;
  period: string;
  price: number;
  count: number;
  geographies: string;
  fundSizes: string;
  ratings: string;
  vintage: string;
  timePeriod: string;
}
@Component({
  selector: 'app-table-page',
  templateUrl: './table-page.component.html',
  styleUrls: ['./table-page.component.css']
})
export class TablePageComponent implements OnInit {
  tableData: LoginUser[] = User.data;

  constructor() {
    window.console.log(this.tableData);
  }

  ngOnInit(): void {

  }

}
