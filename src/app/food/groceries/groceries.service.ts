import { Injectable } from '@angular/core';
import {delay, Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class GroceriesService {


  public categories = [
    {
      food_category_id: "23",
      food_category_name: "Biljni proizvodi",
      parent_category_id: null,
      icon_image: "fruits_and_vegetables.png",
      category_importance: "1",
      has_children: "6"
    },
    {
      food_category_id: "28",
      food_category_name: "Zivotinjski proizvodi",
      parent_category_id: null,
      icon_image: "animal.png",
      category_importance: "2",
      has_children: "4"
    },
    {
      food_category_id: "37",
      food_category_name: "Pecivo",
      parent_category_id: null,
      icon_image: "pastry.png",
      category_importance: "3",
      has_children: "2"
    },
    {
      food_category_id: "60",
      food_category_name: "Osnovne namirnice",
      parent_category_id: null,
      icon_image: "basic.png",
      category_importance: "4",
      has_children: "6"
    },
    {
      food_category_id: "68",
      food_category_name: "Jela",
      parent_category_id: null,
      icon_image: "prepared.png",
      category_importance: "5",
      has_children: "4"
    },
    {
      food_category_id: "81",
      food_category_name: "Prelivi",
      parent_category_id: null,
      icon_image: "toppings.png",
      category_importance: "6",
      has_children: "3"
    },
    {
      food_category_id: "75",
      food_category_name: "Pecurke",
      parent_category_id: null,
      icon_image: "mushrooms.png",
      category_importance: "7",
      has_children: "0"
    },
    {
      food_category_id: "88",
      food_category_name: "Musli i kaše",
      parent_category_id: null,
      icon_image: "musli.png",
      category_importance: "8",
      has_children: "0"
    },
    {
      food_category_id: "40",
      food_category_name: "Slatko i slano",
      parent_category_id: null,
      icon_image: "sweets.png",
      category_importance: "9",
      has_children: "9"
    },
    {
      food_category_id: "47",
      food_category_name: "Napici",
      parent_category_id: null,
      icon_image: "drinks_main.png",
      category_importance: "10",
      has_children: "7"
    },
    {
      food_category_id: "57",
      food_category_name: "Dodaci ishrani",
      parent_category_id: null,
      icon_image: "nutrition_additions.png",
      category_importance: "11",
      has_children: "1"
    }
  ]

  constructor() { }

  getData(): Observable<any[]> {
    return of(this.categories).pipe(delay(3000));
  }
}
