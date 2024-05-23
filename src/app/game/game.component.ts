import { Component, ViewChild } from '@angular/core';
import { DataService } from '../data.service';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent {

  constructor(private DataService: DataService) { }

  FirstText_100 = this.DataService.FirstText_100[0];
  SecondText_100 = this.DataService.FirstText_100[1];
  ThiredText_100 = this.DataService.FirstText_100[2];
  ForthText_100 = this.DataService.FirstText_100[3];
  FifthText_100 = this.DataService.FirstText_100[4];

  FirstText_200 = this.DataService.FirstText_100[5];
  SecondText_200 = this.DataService.FirstText_100[6];
  ThiredText_200 = this.DataService.FirstText_100[7];
  ForthText_200 = this.DataService.FirstText_100[8];
  FifthText_200 = this.DataService.FirstText_100[9];

  FirstText_300 = this.DataService.FirstText_100[10];
  SecondText_300 = this.DataService.FirstText_100[11];
  ThiredText_300 = this.DataService.FirstText_100[12];
  ForthText_300 = this.DataService.FirstText_100[13];
  FifthText_300 = this.DataService.FirstText_100[14];

  FirstText_400 = this.DataService.FirstText_100[15];
  SecondText_400 = this.DataService.FirstText_100[16];
  ThiredText_400 = this.DataService.FirstText_100[17];
  ForthText_400 = this.DataService.FirstText_100[18];
  FifthText_400 = this.DataService.FirstText_100[19];

  FirstText_500 = this.DataService.FirstText_100[20];
  SecondText_500 = this.DataService.FirstText_100[21];
  ThiredText_500 = this.DataService.FirstText_100[22];
  ForthText_500 = this.DataService.FirstText_100[23];
  FifthText_500 = this.DataService.FirstText_100[24];

  @ViewChild(ModalComponent) modal: ModalComponent | undefined;

  openModal(cell: any, cellnumber: number) {
    if (this.modal) {
      this.modal.open(cell, cellnumber);
    }
  }
  closeModal() {
    if (this.modal) {
      this.modal.close();
    }
  }
}
