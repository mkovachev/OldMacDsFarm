import { Component } from '@angular/core';
import { Animal } from './animal/animal.model';
import { AnimalService } from './services/animal.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = `old Mac's Farm`
  animals!: Array<Animal>

  constructor(private animalService: AnimalService) { }

  ngOnInit() {
    this.animals = this.animalService.getAnimals()
  }

}
