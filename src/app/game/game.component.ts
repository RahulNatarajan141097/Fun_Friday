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
  SixthText_100 = this.DataService.FirstText_100[5];

  FirstText_200 = this.DataService.FirstText_100[6];
  SecondText_200 = this.DataService.FirstText_100[7];
  ThiredText_200 = this.DataService.FirstText_100[8];
  ForthText_200 = this.DataService.FirstText_100[9];
  FifthText_200 = this.DataService.FirstText_100[10];
  SixthText_200 = this.DataService.FirstText_100[11];

  FirstText_300 = this.DataService.FirstText_100[12];
  SecondText_300 = this.DataService.FirstText_100[13];
  ThiredText_300 = this.DataService.FirstText_100[14];
  ForthText_300 = this.DataService.FirstText_100[15];
  FifthText_300 = this.DataService.FirstText_100[16];
  SixthText_300 = this.DataService.FirstText_100[17];

  FirstText_400 = this.DataService.FirstText_100[18];
  SecondText_400 = this.DataService.FirstText_100[19];
  ThiredText_400 = this.DataService.FirstText_100[20];
  ForthText_400 = this.DataService.FirstText_100[21];
  FifthText_400 = this.DataService.FirstText_100[22];
  SixthText_400 = this.DataService.FirstText_100[23];

  FirstText_500 = this.DataService.FirstText_100[24];
  SecondText_500 = this.DataService.FirstText_100[25];
  ThiredText_500 = this.DataService.FirstText_100[26];
  ForthText_500 = this.DataService.FirstText_100[27];
  FifthText_500 = this.DataService.FirstText_100[28];
  SixthText_500 = this.DataService.FirstText_100[29];

  FirstText_600 = this.DataService.FirstText_100[30];
  SecondText_600 = this.DataService.FirstText_100[31];
  ThiredText_600 = this.DataService.FirstText_100[32];
  ForthText_600 = this.DataService.FirstText_100[33];
  FifthText_600 = this.DataService.FirstText_100[34];
  SixthText_600 = this.DataService.FirstText_100[35];

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
