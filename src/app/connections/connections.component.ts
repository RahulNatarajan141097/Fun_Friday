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

  constructor(private sharedServicesComponent: SharedServicesComponent) {
    this.isConfigureGame = this.sharedServicesComponent.isConfigureGame;
  }  
  title: string[] = [
    'Technology',
    'Technology',
    'Technology',
    'Entertainment',
    'Entertainment',
    'Entertainment',
    'Sports',
    'Sports',
    'Sports',
    'Technology',
    'Technology',
    'Technology',
    'Entertainment',
    'Entertainment',
    'Entertainment',
    'Sports',
    'Sports',
    'Sports',
    'Technology',
    'Technology',
    'Technology',
    'Entertainment',
    'Entertainment',
    'Entertainment',
    'Sports',
    'Sports',
    'Sports'
  ];

  images: string[] = [
    'assets/Tech 1.jpg',
    'assets/Tech 2.jpg',
    'assets/Tech 3.gif',
    'assets/Enter 1.jpg',
    'assets/Enter 2.jpg',
    'assets/Enter 3.jpg',
    'assets/Sport 1.jpg',
    'assets/Sport 2.jpg',
    'assets/Sport 3.jpg',
    'assets/Tech 4.jpg',
    'assets/Tech 5.jpg',
    'assets/Tech 6.jpg',
    'assets/Enter 4.jpg',
    'assets/Enter 5.jpg',
    'assets/Enter 6.jpg',
    'assets/Sport 4.jpg',
    'assets/Sport 5.jpg',
    'assets/Sport 6.jpg',
    'assets/Tech 7.jpg',
    'assets/Tech 8.jpg',
    'assets/Tech 9.jpg',
    'assets/Enter 7.jpg',
    'assets/Enter 8.jpg',
    'assets/Enter 9.jpg',
    'assets/Sport 7.jpeg',
    'assets/Sport 8.jpg',
    'assets/Sport 9.jpg'
  ];

  answers: string[] = [
    'Backspace',
    'Laptop',
    'Array',
    'Pirates of the Caribbean',
    'Manjummel Boys',
    'Conjuring',
    'Socker',
    'Hokey',
    'Golf',
    'Artificial Intelligence',
    'Internet Of Things',
    'Full Stack Developer',
    'Un samayal arayil naan uppa',
    'Big Boss',
    'Ishwariyaray',
    'Frisbee',
    'Rugby',
    'Cricket',
    'Penetration Testing ',
    'Web Server',
    'Deep Learning',
    'Titanic',
    'Balakrishna',
    'KGF',
    'Dhoni',
    'Messi',
    'Usain Bolt',
  ];

  answerVisible: boolean = false;

  ngOnInit(): void {
  }

  goBack() {
    this.currentIndex = (this.currentIndex - 1) % this.images.length;
    this.answerVisible = false; 
  }

  goNext() {
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
    this.answerVisible = false; 
  }

  revealAnswer() {
    this.answerVisible = !this.answerVisible;
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
    
  }
}
