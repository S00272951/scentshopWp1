import { Injectable, inject, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Perfume } from '../models/perfume';
import { environment } from '../../environments/environments/environment';

@Injectable({ providedIn: 'root' })
export class ItemsapiService {
  private _http = inject(HttpClient);
  private _apiUrl = environment.apiURL;
  private _dummyUrl = 'https://dummyjson.com/products/category/fragrances';
  private _dummyUrl2 = 'https://dummyjson.com/products/category/skin-care';

  items = signal<Perfume[]>([]);
  searchResults = signal<any[]>([]);
  isLoading = signal<boolean>(false);
  showSuccess = signal<boolean>(false);

  getItems() {
    this._http.get<Perfume[]>(this._apiUrl).subscribe(data => this.items.set(data));
  }

  addItem(myName: string, myBrand: string, myPrice: number, myImage: string, myDescription: string) {
    const perfume = { name: myName, brand: myBrand, price: myPrice, image: myImage, description: myDescription };
    this._http.post<Perfume[]>(this._apiUrl, perfume).subscribe(() => {
      this.getItems();
      this.showSuccess.set(true);
      setTimeout(() => this.showSuccess.set(false), 3000);
    });
  }

  deleteItem(myId: string) {
    this._http.delete(`${this._apiUrl}/${myId}`).subscribe(() => this.getItems());
  }

  searchPerfumes() {
    this.isLoading.set(true);

    this._http.get<any>(this._dummyUrl).subscribe({
      next: (data) => {
        let allProducts = data.products;

    
        this._http.get<any>(this._dummyUrl2).subscribe({
          next: (data2) => {
            allProducts = allProducts.concat(data2.products);
            this.searchResults.set(allProducts);
            this.isLoading.set(false);
          },
          error: () => {
            this.searchResults.set(allProducts);
            this.isLoading.set(false);
          }
        });
      },
      error: () => this.isLoading.set(false)
    });
  }
}