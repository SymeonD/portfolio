import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";

@Component({
  selector: 'app-resume',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './resume.component.html',
  styleUrl: './resume.component.css'
})
export class ResumeComponent {

  ngOnInit() {
    let resumeSection = document.getElementById("Resume");
    let resumeImage = document.getElementById("ResumeImage");
    let resumelightbox = document.getElementById("ResumeLightbox");
    resumeSection?.addEventListener("click", function() {
      resumeImage?.classList.toggle("expand");
      // Scroll to the center of the resume section when the image is expanded
      setTimeout(() => {
        resumeSection?.scrollIntoView({behavior: "smooth", block: "center"});
      }, 300);
    });

    resumelightbox?.addEventListener("click", function() {
      Fancybox.bind("[data-fancybox]", {
        // Your custom options
      });
    });
  }

}
