import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';

import { HousingLocationComponent } from '../housing-location/housing-location.component';
import { IHousingLocation } from '../housing-location/housinglocation.interface';
import { HousingService } from '../services/housing.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HousingLocationComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  housingLocationList: IHousingLocation[] = [];
  housingSerice: HousingService = inject(HousingService);
  filteredLocationList: IHousingLocation[] = [];

  // constructor() {
  //   this.housingSerice.getAllHousingLocations().then((housingLocationList: IHousingLocation[]) => {
  //     this.housingLocationList = housingLocationList;
  //     this.filteredLocationList = this.housingLocationList;
  //   })
  //   // this.housingLocationList = this.housingSerice.getAllHousingLocations();
  //   // this.filteredLocationList = this.housingLocationList;
  // }

  ngOnInit(): void {
    this.housingSerice.getAllHousingLocations().then((housingLocationList: IHousingLocation[]) => {
      this.housingLocationList = housingLocationList;
      this.filteredLocationList = this.housingLocationList;
    })
  }

  filterResults(text: string) {
    if (!text) {
      this.filteredLocationList = this.housingLocationList;
      return;
    }
    this.filteredLocationList = this.housingLocationList.filter((housingLocation) =>
      housingLocation?.city.toLowerCase().includes(text.toLowerCase()),
    );
  }
}
