import { Component } from '@angular/core';
import { ProductCardComponent } from '../product-card/product-card.component';
import { SearchComponent } from '../search/search.component';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ProductCardComponent,SearchComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
   products = [
   {
    id : "1",
   image : "https://rukminim2.flixcart.com/image/612/612/xif0q/t-shirt/w/o/6/4xl-db1024-3bros-original-imagt7byhhrqdkym.jpeg?q=70",
   brand: "3BROS",
   currentPrice: "299",
    standardPrice : "999",
    discount : "50",
    name : "Men Self Design Polo Neck Cotton Blend Pink T-Shirt"
   },
   {
    id : "2",
   image: "https://rukminim2.flixcart.com/image/612/612/xif0q/t-shirt/s/c/3/xl-fmtsh2011-flying-machine-original-imagg3x7fdtmhq5h.jpeg?q=70",
   brand: "FLYING MACHINE",
   currentPrice : "200",
    standardPrice : "499",
    discount : "59",
    name : "Men Solid Round Neck Cotton Blend Red T-Shirt"
   },
   {
    id : "3",
   image: "https://rukminim2.flixcart.com/image/612/612/l1whaq80/t-shirt/u/w/k/l-boa21amcwte5690946-abof-original-imagdcyhuy6bvwgy.jpeg?q=70",
   brand: "abof By Aditya Birla",
   currentPrice : "251",
    standardPrice : "899",
   discount : "72",
    name : "Men Printed Round Neck Polyester Green T-Shirt"
   },
   {
    id : "4",
    image : "https://rukminim2.flixcart.com/image/612/612/xif0q/t-shirt/a/5/f/xxl-ask-005-ausk-original-imagqaggr2aacyzy.jpeg?q=70",
   brand: "AUSK",
   currentPrice : "209",
    standardPrice : "999",
   discount : "79",
    name : "Men Striped Round Neck Cotton Blend Maroon, White T-Shirt"
   },
   {
    id: "5",
   image: "https://rukminim2.flixcart.com/image/612/612/xif0q/t-shirt/x/w/a/xl-or10-technosport-original-imagpfk2vrnz933t.jpeg?q=70",
   brand: "TECHNOSPORT",
   currentPrice : "300",
    standardPrice : "600",
   discount : "50",
    name: "Men Solid Round Neck Polyester Light Blue T-Shirt"
   },
   ];
    filteredProduct:any[]=[];
    ngOnInit(){
      this.filteredProduct = this.products;
    }
    onViewProduct(event:any){
    console.log("onViewProduct",event)
   }
   onSearch(search : string){
    console.log(search);
    if(search){
      this.filteredProduct = this.products.filter((x => x.name.includes(search)));
    }else{
      this.filteredProduct = this.products;
    }
   }
}
