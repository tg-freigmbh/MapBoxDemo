import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {ControlComponent, FullscreenControlDirective, MapComponent} from 'ngx-mapbox-gl';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MapComponent, ControlComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'MapBoxDemo';
}
