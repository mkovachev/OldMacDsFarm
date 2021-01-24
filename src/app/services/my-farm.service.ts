import { Injectable } from '@angular/core';
import { AnimalComponent } from '../pages/my-farm/animal/animal.component';
import { MyAnimal } from '../models/my-animal.model';

@Injectable({
  providedIn: 'root'
})

export class MyFarmService {
  animals: MyAnimal[] = [
    {
      type: AnimalComponent,
      data:
      {
        name: 'Duck', sound: 'quack', image: "../../assets/images/duck.png"
      }
    },
    {
      type: AnimalComponent,
      data:
      {
        name: 'Dog', sound: 'woof', image: "../../assets/images/dog.png"
      }
    },
    {
      type: AnimalComponent,
      data:
      {
        name: 'Cat', sound: 'meow', image: "../../assets/images/cat.png"
      }
    },
    {
      type: AnimalComponent,
      data:
      {
        name: 'Cow', sound: 'moo', image: "../../assets/images/cow.png"
      }
    },
    {
      type: AnimalComponent,
      data:
      {
        name: 'Sheep', sound: 'baa', image: "../../assets/images/sheep.png"
      }
    }
  ]

  all() {
    return this.animals
  }
}
