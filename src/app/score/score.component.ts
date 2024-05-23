import { Component } from '@angular/core';

@Component({
  selector: 'app-score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.css']
})
export class ScoreComponent {

  resultteam1 = 0;
  resultteam2 = 0;
  resultteam3 = 0;
  resultteam4 = 0;
  input1 = '';
  input2 = '';
  input3 = '';
  input4 = '';
  history: Array<any> = [];

  calculate(value1: string, value2: string, value3: string, value4: string) {
    const num1 = parseInt(value1);
    const num2 = parseInt(value2);
    const num3 = parseInt(value3);
    const num4 = parseInt(value4);
    if (!isNaN(num1)) {
      this.resultteam1 += num1;
      this.history.push({ team: 'Team 1', value: num1 });
    }
    if (!isNaN(num2)) {
      this.resultteam2 += num2;
      this.history.push({ team: 'Team 2', value: num2 });
    }
    if (!isNaN(num3)) {
      this.resultteam3 += num3;
      this.history.push({ team: 'Team 3', value: num3 });
    }
    if (!isNaN(num4)) {
      this.resultteam4 += num4;
      this.history.push({ team: 'Team 4', value: num4 });
    }
  }

  undo() {
    if (this.history.length > 0) {
      const last = this.history.pop();
      const message = `Are you sure you want to undo ${last.value} points from ${last.team}?`;
      if (confirm(message)) {
        switch (last.team) {
          case 'Team 1':
            this.resultteam1 -= last.value;
            break;
          case 'Team 2':
            this.resultteam2 -= last.value;
            break;
          case 'Team 3':
            this.resultteam3 -= last.value;
            break;
          case 'Team 4':
            this.resultteam4 -= last.value;
            break;
        }
      } else {
        this.history.push(last); // add the last item back to the history if the user cancels
      }
    }
  }
}




