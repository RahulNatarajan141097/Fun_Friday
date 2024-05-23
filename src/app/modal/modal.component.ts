import { Component, Input, OnInit, EventEmitter, Output, ElementRef, ViewChild } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  constructor(private DataService: DataService) { }

  ngOnInit(): void {
  }

  @ViewChild('audioPlayer') audioPlayerRef!: ElementRef;

  playAudio() {
    const audioPlayer = this.audioPlayerRef.nativeElement;
    audioPlayer.play();
  }

  modalBody: any;
  timeRemaining: number = 180; // 3 minutes in seconds
  timerInterval: any;
  audio: boolean = false;

  open(a: any, score: number) {
    this.audio = true;
    const modelDiv = document.getElementById("myModal");
    if (modelDiv != null) {
      modelDiv.style.display = 'block';
      this.modalBody = a;
      // Start the timer
      if (score == 100 || score == 200) {
        this.timeRemaining = 60; // Set the initial time remaining to 60 seconds
      }
      else if (score == 300) {
        this.timeRemaining = 120; // Set the initial time remaining to 120 seconds
      }
      else {
        this.timeRemaining = 180; // Set the initial time remaining to 180 seconds
      }
      const timerDiv = document.querySelector(".timer");
      if (timerDiv != null) {
        timerDiv.innerHTML = this.getTimeRemaining();
        timerDiv.classList.remove('red', 'blink');
      }
      this.timerInterval = setInterval(() => {
        this.timeRemaining--;
        if (this.timeRemaining < 0) {
          // Time's up!
          clearInterval(this.timerInterval);
        } else if (this.timeRemaining < 30) {
          // Timer has reached 30 seconds, change color and add class
          const timerDiv = document.querySelector(".timer");
          if (timerDiv != null) {
            timerDiv.innerHTML = this.getTimeRemaining();
            timerDiv.classList.add('red', 'blink');
            if (this.audio == true) {
              this.playAudio();
            }
            this.audio = false;
          }
        } else {
          // Timer still has more than 30 seconds remaining, update timer element
          const timerDiv = document.querySelector(".timer");
          if (timerDiv != null) {
            timerDiv.innerHTML = this.getTimeRemaining();
          }
        }
      }, 1000);
    }
  }

  showSecondImage() {
    const firstImage = document.getElementById("firstImage") as HTMLImageElement;
    const secondImage = document.getElementById("secondImage") as HTMLImageElement;
    const thirdImage = document.getElementById("thirdImage") as HTMLImageElement;
    if (thirdImage == null) {
      if (firstImage != null && secondImage != null) {
        firstImage.style.display = 'none';
        secondImage.style.display = 'block';
      }      
    }
    else {
      firstImage.style.display = 'none';
      secondImage.style.display = 'block';
      thirdImage.style.display = 'none';
    }
    this.DataService.setFirstText_100(this.modalBody);
  }

  showthirdImage() {
    const firstImage = document.getElementById("firstImage") as HTMLImageElement;
    const secondImage = document.getElementById("secondImage") as HTMLImageElement;
    const thirdImage = document.getElementById("thirdImage") as HTMLImageElement;
    if (firstImage != null && secondImage != null) {
      firstImage.style.display = 'none';
      secondImage.style.display = 'none';
      thirdImage.style.display = 'block';
    }
  }

  close() {
    const modelDiv = document.getElementById("myModal");
    const firstImage = document.getElementById("firstImage") as HTMLImageElement;
    const secondImage = document.getElementById("secondImage") as HTMLImageElement;
    const thirdImage = document.getElementById("thirdImage") as HTMLImageElement;

    if (thirdImage == null) {
      if (modelDiv != null && firstImage != null && secondImage != null) {
        modelDiv.style.display = 'none';
        firstImage.style.display = 'block';
        secondImage.style.display = 'none';
      }
    } else {
      if (modelDiv != null && firstImage != null && secondImage != null && thirdImage != null) {
        modelDiv.style.display = 'none';
        firstImage.style.display = 'block';
        secondImage.style.display = 'none';
        thirdImage.style.display = 'none';
      }
    }
    clearInterval(this.timerInterval);
    const audio = document.querySelector('audio');
    if (audio != null) {
      audio.pause();
      audio.currentTime = 0;
    }
  }


  getTimeRemaining() {
    const minutes = Math.floor(this.timeRemaining / 60);
    const seconds = this.timeRemaining % 60;
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  }
}
