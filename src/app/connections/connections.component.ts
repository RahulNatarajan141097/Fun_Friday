import { Component, OnInit, Input } from '@angular/core';
import { SharedServicesComponent } from '../shared-services/shared-services.component';

@Component({
  selector: 'app-connections',
  templateUrl: './connections.component.html',
  styleUrls: ['./connections.component.css']
})

export class ConnectionsComponent implements OnInit {

  currentIndex: number = 0;
  isConfigureGame: boolean = false;
  imagePath: string = '';
  currentAudio: HTMLAudioElement | null = null;

  constructor(private sharedServicesComponent: SharedServicesComponent) {
    this.isConfigureGame = this.sharedServicesComponent.isConfigureGame;
  }  

  title: string[] = [
    'Tamil Movie Name',
    'Tamil Movie Name',
    'Tamil Movie Name',
    'Tamil Movie Name',
    'Tamil Movie Name',
    'Tamil Movie Name',
    'Tamil Movie Name',
    'Tamil Movie Name',
    'Tamil Movie Name',
    'Tamil Movie Name',
    'Tamil Movie Name',
    'Tamil Movie Name',
    'Tamil Dialogue',
    'Tamil Dialogue',
    'Tamil Dialogue',
    'Tamil Dialogue',
    'Tamil Dialogue',
    'Tamil Dialogue',
    'Guess the song',
    'Guess the song',
    'Guess the song',
    'Guess the song',
    'Guess the song',
    'Guess the song',
    'Guess the song',
    'Guess the song',
    'Guess the song'
  ];

  images: string[] = [
    'assets/image 1.png',
    'assets/image 2.jpg',
    'assets/image 3.png',
    'assets/image 4.png',
    'assets/image 5.png',
    'assets/image 6.png',
    'assets/image 7.png',
    'assets/image 8.png',
    'assets/image 9.png',
    'assets/image 10.png',
    'assets/image 11.jpg',
    'assets/image 12.png',
    'assets/image 13.png',
    'assets/image 14.png',
    'assets/image 15.png',
    'assets/image 16.png',
    'assets/image 17.png',
    'assets/image 18.jpg',
    'assets/image 19.png',
    'assets/image 20.png',
    'assets/image 21.png',
    'assets/image 22.png',
    'assets/image 23.jpg',
    'assets/image 24.jpg',
    'assets/image 25.jpng',
    'assets/image 26.png',
    'assets/image 27.png'
  ];

  answers: string[] = [
    'தர்ம துரை',
    'காப்பான்',
    'வேட்டையாடு விளையாடு',
    'பொன்னியின் செல்வன்',
    'சீதா ராமம்',
    'பைரவா',
    'அழகிய தமிழ் மகன்',
    'ஜவான்',
    'காதலுக்கு மரியாதை',
    'திருச்சிற்றம்பலம் ',
    'அசுரன்',
    'விக்ரம் வேதா',
    'மண்டை மேல இருக்குற கொண்டையை மறந்துட்டேன்',
    'ஏய் ஆதிவாசி அடக்கி வாசி',
    'வாழ்க்கை ஒரு வட்டம்',
    'அமுல் பேபி ராகுவரான வில்லனா தான பாத்துருக்க',
    'சங்கு ஊதுற வயசுல சங்கீதா',
    'அது போன மாசம் இது இந்த மாசம்',
    'Ovvoru Pookalume',
    'Web Server',
    'Deep Learning',
    'Titanic',
    'Balakrishna',
    'KGF',
    'Dhoni',
    'Messi',
    'Usain Bolt',
  ];

  answeraudioFiles: string[] = [
    'assets/answeraudio1.mp3',
    'assets/answeraudio2.mp3',
    'assets/answeraudio3.mp3',
    'assets/answeraudio4.mp3',
    'assets/answeraudio5.mp3',
    'assets/answeraudio6.mp3',
    'assets/answeraudio7.mp3',
    'assets/answeraudio8.mp3',
    'assets/answeraudio9.mp3',
    'assets/answeraudio10.mp3',
    'assets/answeraudio11.mp3',
    'assets/answeraudio12.mp3',
    'assets/answeraudio13.mp4',
    'assets/answeraudio14.mp4',
    'assets/answeraudio15.mp4',
    'assets/answeraudio16.mp4',
    'assets/answeraudio17.mp4',
    'assets/answeraudio18.mp4',
    'assets/answeraudio19.mp3',
    'assets/answeraudio20.mp3',
    'assets/answeraudio21.mp3',
    'assets/answeraudio22.mp3',
    'assets/answeraudio23.mp3',
    'assets/answeraudio24.mp3',
    'assets/answeraudio25.mp3',
    'assets/answeraudio26.mp3',
    'assets/answeraudio27.mp3'
  ];

  questionaudioFiles: string[] = [
    'assets/questionaudio1.mpeg',
    'assets/questionaudio2.mpeg',
    'assets/questionaudio3.mpeg',
    'assets/questionaudio4.mpeg',
    'assets/questionaudio5.mpeg',
    'assets/questionaudio6.mpeg',
    'assets/questionaudio7.mpeg',
    'assets/questionaudio8.mpeg',
    'assets/questionaudio9.mpeg',
    'assets/questionaudio10.mpeg',
    'assets/questionaudio11.mpeg',
    'assets/questionaudio12.mpeg',
    'assets/questionaudio13.mpeg',
    'assets/questionaudio14.mpeg',
    'assets/questionaudio15.mpeg',
    'assets/questionaudio16.mpeg',
    'assets/questionaudio17.mpeg',
    'assets/questionaudio18.mpeg',
    'assets/questionaudio19.mpeg',
    'assets/questionaudio20.mpeg',
    'assets/questionaudio21.mpeg',
    'assets/questionaudio22.mpeg',
    'assets/questionaudio23.mpeg',
    'assets/questionaudio24.mpeg',
    'assets/questionaudio25.mpeg',
    'assets/questionaudio26.mpeg',
    'assets/questionaudio27.mpeg'
  ];

  answerVisible: boolean = false;

  ngOnInit(): void {
  }

  goBack() {
    this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
    this.answerVisible = false; 
    if (this.currentAudio) {
      this.currentAudio.pause();
      this.currentAudio.currentTime = 0;
    }
  }

  goNext() {
    if (this.currentAudio) {
        this.currentAudio.pause();
        this.currentAudio.currentTime = 0;
    }

    this.currentIndex = (this.currentIndex + 1) % this.images.length;
    this.answerVisible = false;

    this.currentAudio = new Audio(this.questionaudioFiles[this.currentIndex]);
    this.currentAudio.play();
  }

  revealAnswer() {
    this.answerVisible = !this.answerVisible;
    if (this.answerVisible) {
      if (this.currentAudio) {
          this.currentAudio.pause();
          this.currentAudio.currentTime = 0;
      }
      this.currentAudio = new Audio(this.answeraudioFiles[this.currentIndex]);
      this.currentAudio.play();
    }
  }

  isBackDisabled(): boolean {
    return this.currentIndex === 0;
  }  

  addImagePath() {
    if (this.imagePath.trim() !== '') { // Check if input is not empty
      this.images.push(this.imagePath.trim()); // Add the input path to the array
      this.answers.push(''); // Add an empty answer for the new image (you may want to adjust this)
      this.imagePath = ''; // Clear the input field
    }
  }

  edit(){
    // Implement edit functionality here
  }
}