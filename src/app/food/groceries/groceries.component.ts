import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {GroceriesService} from "./groceries.service";


interface Category {
  food_category_id: string;
  food_category_name: string;
  parent_category_id: null;
  icon_image: string;
  category_importance: string;
  has_children: string;
}

@Component({
  selector: 'app-groceries',
  templateUrl: './groceries.component.html',
  styleUrls: ['./groceries.component.css']
})

export class GroceriesComponent implements OnInit {

  public categories: Array<Category> | undefined;
  public loading: boolean = true;

  constructor(private router: Router,
              private groceriesService: GroceriesService) {
  }

  public skeletonLoaderCardStyle = {
    'border-radius': '5px',
    height: '350px',
    'background-color': '#E2e2e2',
    width: '400px',
    margin: '15px',
    border: '1px solid white'
  }
  public skeletonLoaderCardStyleXs = {
    'border-radius': '5px',
    height: '250px',
    'background-color': '#E2e2e2',
    width: '300px',
    margin: '0px 10px 0px 30px',
    border: '1px solid white'
  }


  ngOnInit() {
    this.groceriesService.getData().subscribe((categories: Array<Category>)=> {
      this.categories = categories;
      this.loading = false;
    });
  }

  goToCategory(category: Category) {
    this.router.navigate([`/category/${category.food_category_id}`]);
  }

  getImage(iconImage: string) {
    return `assets/images/${iconImage}`;
  }

  getColor(importance: string) {
    switch (importance) {
      case '1':
        return '#ef7c72';
      case '2':
        return '#b66f86';
      case '3':
        return '#a538d3';
      case '4':
        return '#6e49b6';
      case '5':
        return '#6270bd';
      case '6':
        return '#3e9df1';
      case '7':
        return '#03A9F4';
      case '8':
        return '#08d7f3';
      case '9':
        return '#009688';
      case '10':
        return '#4CAF50';
      case '11':
        return '#8BC34A';
      default:
        return '#FFC107';
    }
  }

}
