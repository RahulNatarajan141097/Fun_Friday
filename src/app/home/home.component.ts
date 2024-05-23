import { Component, Output, EventEmitter, Injectable} from '@angular/core';
import { SharedServicesComponent } from '../shared-services/shared-services.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent {

  constructor(private sharedServicesComponent: SharedServicesComponent) { }

  toggleConfigureGame(): void {
    this.sharedServicesComponent.isConfigureGame = true;
  }
  
}
