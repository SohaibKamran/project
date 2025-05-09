import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { Product } from '../../models/product.model';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl:'./product-detail.component.html',
  styleUrl:'product-detail.component.css'
})
export class ProductDetailComponent implements OnInit {
  product?: Product;
  loading = true;
  
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private productService: ProductService
  ) {}
  
  ngOnInit(): void {
    this.route.paramMap.pipe(
      switchMap(params => {
        const id = Number(params.get('id'));
        return this.productService.getProductById(id);
      })
    ).subscribe(product => {
      this.product = product;
      this.loading = false;
      
      if (!product) {
        this.router.navigateByUrl('/products')
      }
    });
  }
  
  addToCart(): void {
    if (this.product) {
      console.log('Product added to cart:', this.product);
      alert(`${this.product.name} added to cart!`);
    }
  }
}