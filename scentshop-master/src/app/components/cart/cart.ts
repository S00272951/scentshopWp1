import { Component, inject, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ItemsapiService } from '../../services/itemsapi.service';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './cart.html',
  styleUrl: './cart.css'
})
export class Cart implements OnInit {
  public service = inject(ItemsapiService);
  purchaseSuccess = false;

  ngOnInit() {
    this.service.getItems();
  }

  getTotal(): number {
    let total = 0;
    for (let item of this.service.items()) {
      total += item.price;
    }
    return Math.round(total * 100) / 100;
  }

  deleteItem(id: string | undefined) {
    if (id) {
      this.service.deleteItem(id);
    }
  }

  purchaseItem(id: string) {
    this.service.deleteItem(id);
    this.purchaseSuccess = true;
    setTimeout(() => this.purchaseSuccess = false, 3000);
  }
}