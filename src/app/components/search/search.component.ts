import { Component, Output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';


@Component({
  selector: 'app-search',
  standalone: true,
  imports: [MatButtonModule,MatInputModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss'
})
export class SearchComponent {
  onSearch(){
    console.log("hello from search component")
  }
  onChange(event : any){
    console.log("Changing",event.target.value)
  }
}
