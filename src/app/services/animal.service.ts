import { Injectable } from '@angular/core';
import { Animal } from '../animal/animal.model';

@Injectable({
  providedIn: 'root'
})
export class AnimalService {
  getAnimals() {
    return [
      new Animal({ name: 'Cow', sound: 'moo' }),
      new Animal({ name: 'Pig', sound: 'oink' }),
      new Animal({ name: 'Rooster', sound: 'crows' }),
      new Animal({ name: 'Donkey', sound: 'hee-haw' }),
      new Animal({ name: 'Chicken', sound: 'cluck' })
    ];
  }
}
