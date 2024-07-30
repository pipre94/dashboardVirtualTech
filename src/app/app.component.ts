import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { VirtualApiServicesService } from './services/virtual-api-services.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'dashboardVirtualTech';

  constructor(private virtualServices:VirtualApiServicesService){}
  ngOnInit(): void {
  }
}
