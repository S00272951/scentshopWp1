import { Component, inject, OnInit } from '@angular/core';
import { ItemsapiService } from '../../services/itemsapi.service';

@Component({
  selector: 'app-product-list',
  standalone: true,
  templateUrl: './product-list.html',
  styleUrl: './product-list.css'
})
export class ProductList implements OnInit {
  public service = inject(ItemsapiService);

  ngOnInit() {
    this.service.searchPerfumes();
  }

  saveToCart(perfume: any) {
    const desc = perfume.description || 'No description';
    this.service.addItem(perfume.title, perfume.brand, perfume.price, perfume.thumbnail, desc);
  }
}