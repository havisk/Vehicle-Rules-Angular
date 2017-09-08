import {Component, Input, OnInit} from '@angular/core';
import { Data } from './shared/data.model';


// gets access to jquery
declare let $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  data: Data [] = [
    new Data(1, 'Active', 'Van Speeding', 'All', 'Michelle Jones', '6/21/16'),
    new Data(2, 'Active', 'Van Excessive Idle', 'All', 'Michelle Jones', '6/21/16'),
    new Data(3, 'Active', 'Dump Truck Speeding SE', 'Southeast', 'John James', '2/24/16'),
    new Data(4, 'Inactive', 'Dump Truck Quick Acceleration', 'All', 'Roger Martin', '2/25/16'),
    new Data(5, 'Active', 'Dump Truck Speeding NE', 'All', 'John James', '2/24/16'),
    new Data(6, 'Active', 'Dump Truck Sudden Stop', 'Southeast', 'John James', '2/24/16'),
    new Data(7, 'Inactive', 'Vehicle Leave Southeast', 'Southeast', 'Roger Martin', '8/17/16'),
    new Data(8, 'Inactive', 'Vehicle Leave Northeast', 'Northeast', 'Roger Martin', '8/17/16'),
    new Data(9, 'Inactive', 'Vehicle Leave Midwest', 'Midwest', 'Roger Martin', '8/17/16'),
    new Data(10, 'Active', 'Dump Truck Engine Off', 'All', 'John James', '8/12/16'),
  ];

  // variables for two way binding
  ruleInput = '';
  regionInput = '';

  // loading overlay
  loading = false;
  rules = this.data;
  message = '';
  name = '';

  ngOnInit() {
    $(document).foundation();
  }

  // clears inputs & refresh data
  refreshData() {
    this.data = [];
    this.ruleInput = '';
    this.regionInput = '';
    setTimeout(() => {
      this.data = this.rules;
      $('#refreshModal').foundation('close');
    }, 2000);
  }

  // set display of progress bar
  setDisplay() {
    return this.loading === false ? 'none' : '';
  }

  // turn rule on or off
  toggleStatus(status) {
    this.loading = true;

    setTimeout(() => {
      this.loading = false;
      // open modal
      $('#statusModal').foundation('open');
      return status === 'Active' ? this.message = 'The status is now Inactive' : this.message = 'The status is now Active';
    }, 3000);
  }

  // put name on button
  toggleOn(status) {
    return status === 'Active' ? this.name = 'Turn Off' : this.name = 'Turn On';
  }
}

