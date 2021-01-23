import { Injectable } from '@angular/core';
import { AnimalComponent } from '../animal/animal.component';
import { Animal } from '../animal/animal.model';

@Injectable({
  providedIn: 'root'
})

export class AnimalService {
  getAnimals() {
    return [
      new Animal(AnimalComponent, { name: 'Cow', sound: 'moo', image: "../../assets/images/cow.png" }),
      new Animal(AnimalComponent, { name: 'Pig', sound: 'oink', image: "../../assets/images/pig.png" }),
      new Animal(AnimalComponent, { name: 'Rooster', sound: 'crows', image: "../../assets/images/rooster.gif" }),
      new Animal(AnimalComponent, { name: 'Donkey', sound: 'hee-haw', image: "../../assets/images/donkey.png" }),
      new Animal(AnimalComponent, { name: 'Chicken', sound: 'cluck', image: "../../assets/images/chicken.png" })
    ];
  }
}
