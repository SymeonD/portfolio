import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {

  typewriterWords: string[] | null;

  constructor() {
    this.typewriterWords = ["WEBSITE", "SERVER", "MOBILE APPLICATION", "DESKTOP APPLICATION", "GAME"];
  }

   // TypeWriter
   typeWriter(word: string, i: number, text: string): void {
    if (i < word.length) {
      text += word.charAt(i);
      document.getElementById("Typewriter")!.innerHTML = text;
      i++;
      setTimeout(() => this.typeWriter(word, i, text), 100);
    }else{
      setTimeout(() => this.typeWriterBack(word, i, text), 1000);
    }
  }

  typeWriterBack(word: string, i: number, text: string): void {
    if (i > 0) {
      text = text.slice(0, -1);
      document.getElementById("Typewriter")!.innerHTML = text;
      i--;
      setTimeout(() => this.typeWriterBack(word, i, text), 50);
    }else{
      // Change the word
      let index = this.typewriterWords!.indexOf(word);
      index = (index + 1) % this.typewriterWords!.length;
      word = this.typewriterWords![index];
      setTimeout(() => this.typeWriter(word, i, text), 1000);
    }
  }

  // Loop through the words
  typeWriterLoop(): void {
    let i = 0;
    let text = "";
    let word = this.typewriterWords![i];
    this.typeWriter(word, 0, text);
  }

  ngOnInit(): void {
    this.typeWriterLoop();
  }
}
