import { Component, OnInit } from '@angular/core';
import { Animal } from '../animal/animal.model';
import { AnimalService } from '../services/animal.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  animals!: Array<Animal>

  constructor(private animalService: AnimalService) { }

  ngOnInit() {
    this.animals = this.animalService.getAnimals()
  }

}
