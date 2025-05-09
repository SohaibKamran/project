import { Injectable } from "@angular/core";
import { Observable, of, delay } from "rxjs";
import { Product } from "../models/product.model";

@Injectable({
  providedIn: "root",
})
export class ProductService {
  private products: Product[] = [
    {
      id: 1,
      name: "Premium Headphones",
      price: 199.99,
      description:
        "Noise-cancelling wireless headphones with premium sound quality and 20-hour battery life.",
      imageUrl:
        "https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=600",
      category: "Electronics",
      rating: 4.7,
      inStock: true,
    },
    {
      id: 2,
      name: "Smart Watch",
      price: 249.99,
      description:
        "Advanced smartwatch with health monitoring, GPS, and smartphone notifications.",
      imageUrl:
        "https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg?auto=compress&cs=tinysrgb&w=600",
      category: "Electronics",
      rating: 4.5,
      inStock: true,
    },
    {
      id: 3,
      name: "Ergonomic Office Chair",
      price: 299.99,
      description:
        "Fully adjustable ergonomic chair with lumbar support and breathable mesh back.",
      imageUrl:
        "https://images.pexels.com/photos/1957478/pexels-photo-1957478.jpeg?auto=compress&cs=tinysrgb&w=600",
      category: "Furniture",
      rating: 4.3,
      inStock: false,
    },
    {
      id: 4,
      name: "Ultra HD Monitor",
      price: 349.99,
      description:
        "27-inch 4K monitor with HDR support, USB-C connectivity and adjustable stand.",
      imageUrl:
        "https://images.pexels.com/photos/1029757/pexels-photo-1029757.jpeg?auto=compress&cs=tinysrgb&w=600",
      category: "Electronics",
      rating: 4.8,
      inStock: true,
    },
    {
      id: 5,
      name: "Wireless Keyboard",
      price: 89.99,
      description:
        "Slim wireless keyboard with backlit keys and multi-device connectivity.",
      imageUrl:
        "https://images.pexels.com/photos/8972793/pexels-photo-8972793.jpeg?auto=compress&cs=tinysrgb&w=600",
      category: "Electronics",
      rating: 4.4,
      inStock: true,
    },
    {
      id: 6,
      name: "Coffee Maker",
      price: 129.99,
      description:
        "Programmable coffee maker with thermal carafe and auto-brewing features.",
      imageUrl:
        "https://images.pexels.com/photos/2878709/pexels-photo-2878709.jpeg?auto=compress&cs=tinysrgb&w=600",
      category: "Kitchen",
      rating: 4.6,
      inStock: true,
    },
  ];

  constructor() {}

  getProducts(): Observable<Product[]> {
    return of(this.products).pipe(delay(100));
  }

  getProductById(id: number): Observable<Product | undefined> {
    const product = this.products.find((p) => p.id === id);
    return of(product).pipe(delay(100));
  }
}
