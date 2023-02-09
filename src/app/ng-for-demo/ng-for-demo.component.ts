import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-for-demo',
  templateUrl: './ng-for-demo.component.html',
  styleUrls: ['./ng-for-demo.component.css']
})
export class NgForDemoComponent implements OnInit {

  selectedCountry = 'IN';
selectedState = 'AP';
countries = [
  { code: 'IN', name: 'India', states: [{ code: 'AP', name: 'Andhra Pradesh' }, { code: 'TS', name: 'Telangana' }] },
  { code: 'US', name: 'United States', states: [{ code: 'NY', name: 'New York' }, { code: 'CA', name: 'California' }] },
  { code: 'UK', name: 'United Kingdom', states: [{ code: 'LN', name: 'London' }, { code: 'BH', name: 'Birmingham' }] },
];
states = [];

updateStates() {
  const selectedCountryData = this.countries.find(country => country.code === this.selectedCountry);
  this.states = selectedCountryData ? selectedCountryData.states : [];
  if (this.states.length) {
    this.selectedState = this.states[0].code;
  }
}

  constructor() { }

  ngOnInit() {
    this.updateStates();

  }

}
