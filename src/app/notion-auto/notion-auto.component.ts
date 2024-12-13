import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MenuComponent } from '../menu/menu.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-notion-auto',
  standalone: true,
  imports: [CommonModule, FooterComponent, MenuComponent],
  templateUrl: './notion-auto.component.html',
  styleUrl: './notion-auto.component.css'
})
export class NotionAutoComponent {

}
