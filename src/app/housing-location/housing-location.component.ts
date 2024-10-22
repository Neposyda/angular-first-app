import { Component, Input } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

import { IHousingLocation } from './housinglocation.interface';

@Component({
  selector: 'app-housing-location',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  templateUrl: './housing-location.component.html',
  styleUrl: './housing-location.component.css'
})
export class HousingLocationComponent {
  @Input() housingLocationChild!: IHousingLocation;
}
