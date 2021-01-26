import { Injectable } from '@angular/core';
import { Animal } from '../models/animal.model';

@Injectable({
  providedIn: 'root'
})

export class FarmService {
  custom: Animal[] = []
  animals: Animal[] = [
    {
      breed: 'Duck', sound: 'quack', image: "../../assets/images/duck.png"
    },
    {
      breed: 'Dog', sound: 'woof', image: "../../assets/images/dog.png"
    },
    {
      breed: 'Cat', sound: 'meow', image: "../../assets/images/cat.png"
    },
    {
      breed: 'Cow', sound: 'moo', image: "../../assets/images/cow.png"
    },
    {
      breed: 'Sheep', sound: 'baa', image: "../../assets/images/sheep.png"
    }
  ]

  allMyFarm() {
    return this.animals
  }

  allCustom() {
    return this.custom
  }

  create(animal: Animal): void {
    this.custom.push(animal)
  }

}
