///NOTE::: I made research and used some help here - i did not reach this point - in portfolio - alone /////

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

interface PortfolioItem {
  id: number;
  imageUrl: string;
  alt: string;
}

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterOutlet],
  templateUrl: './portfolio.html',
  styleUrls: ['./portfolio.css']
})
export class Portfolio {
  selectedImage?: PortfolioItem;

  items: PortfolioItem[] = [
    { id: 1, imageUrl: '../poert1.png', alt: 'Cabin' },
    { id: 2, imageUrl: '../port2.png', alt: 'Cake' },
    { id: 3, imageUrl: '../port3.png', alt: 'Circus' },
    { id: 4, imageUrl: '../poert1.png', alt: 'Cabin' },
    { id: 5, imageUrl: '../port2.png', alt: 'Cake' },
    { id: 6, imageUrl: '../port3.png', alt: 'Circus' }
  ];

  openImage(item: PortfolioItem): void {
    this.selectedImage = item;
  }

  closeImage(): void {
    this.selectedImage = undefined;
  }
}
