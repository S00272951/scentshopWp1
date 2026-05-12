import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductList } from '../product-list/product-list';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, ProductList],
  templateUrl: './home.html',
  styleUrl: './home.css'
})

export class Home {

}