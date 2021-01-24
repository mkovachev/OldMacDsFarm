import { Injectable } from '@angular/core';
import { CustomAnimal } from '../models/custom-animal.model';

@Injectable({
  providedIn: 'root'
})
export class CustomFarmService {
  animals: CustomAnimal[] = []

  constructor() { }

  create(animal: CustomAnimal) { }
}
