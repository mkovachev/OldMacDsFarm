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
        breed: 'Duck', sound: 'quack', image: "../../assets/images/duck.png"
      }
    },
    {
      type: AnimalComponent,
      data:
      {
        breed: 'Dog', sound: 'woof', image: "../../assets/images/dog.png"
      }
    },
    {
      type: AnimalComponent,
      data:
      {
        breed: 'Cat', sound: 'meow', image: "../../assets/images/cat.png"
      }
    },
    {
      type: AnimalComponent,
      data:
      {
        breed: 'Cow', sound: 'moo', image: "../../assets/images/cow.png"
      }
    },
    {
      type: AnimalComponent,
      data:
      {
        breed: 'Sheep', sound: 'baa', image: "../../assets/images/sheep.png"
      }
    }
  ]

  all() {
    return this.animals
  }
}
