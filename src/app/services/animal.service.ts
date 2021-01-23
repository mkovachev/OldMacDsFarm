import { Injectable } from '@angular/core';
import { AnimalComponent } from '../animal/animal.component';
import { Animal } from '../animal/animal.model';

@Injectable({
  providedIn: 'root'
})

export class AnimalService {
  getAnimals() {
    return [
      new Animal(AnimalComponent, { name: 'Duck', sound: 'quack', image: "../../assets/images/duck.png" }),
      new Animal(AnimalComponent, { name: 'Dog', sound: 'woof', image: "../../assets/images/dog.png" }),
      new Animal(AnimalComponent, { name: 'Cat', sound: 'meow', image: "../../assets/images/cat.png" }),
      new Animal(AnimalComponent, { name: 'Cow', sound: 'moo', image: "../../assets/images/cow.png" }),
      new Animal(AnimalComponent, { name: 'Sheep', sound: 'baa', image: "../../assets/images/sheep.png" })
    ];
  }
}
