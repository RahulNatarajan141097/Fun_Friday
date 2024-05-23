import { Component, Injectable } from '@angular/core';

@Component({
  selector: 'app-shared-services',
  templateUrl: './shared-services.component.html',
  styleUrls: ['./shared-services.component.css']
})

@Injectable({
  providedIn: 'root'
})

export class SharedServicesComponent {
  
  public isConfigureGame: boolean = false;

  constructor() {}
}
