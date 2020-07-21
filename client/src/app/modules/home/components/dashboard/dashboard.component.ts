import { Component, OnInit } from '@angular/core';
import { ApiCallService } from 'src/app/shared/services/api-call.service';
import { PredictiveTermModel } from 'src/app/shared/models/predictive-term.model';
import { SearchResponseModel } from 'src/app/shared/models/product-details.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  searchString: string;
  searchResponse: SearchResponseModel = new SearchResponseModel();
  constructor(
    private apiCallService: ApiCallService
  ) { }

  ngOnInit(): void {
  }

  getSearchText(searchText: string) {
    this.searchString = searchText;
  }

  getSearchResult() {
    this.apiCallService.search(this.searchString).then(response => {
      this.searchResponse = response;
      console.log(response);
    });
  }

}
