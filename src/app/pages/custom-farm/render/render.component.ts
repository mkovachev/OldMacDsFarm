import { Component, OnInit } from '@angular/core';
import { CustomAnimal } from 'src/app/models/custom-animal.model';
import { CustomFarmService } from 'src/app/services/custom-farm.service';

@Component({
  selector: 'app-render',
  templateUrl: './render.component.html',
  styleUrls: ['./render.component.css']
})
export class RenderComponent implements OnInit {
  animals!: Array<CustomAnimal>

  constructor(private animalService: CustomFarmService) { }

  ngOnInit() {
    this.animals = this.animalService.all()
  }
}
