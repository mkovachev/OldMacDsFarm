import { Component, OnInit } from '@angular/core';
import { MyAnimal } from 'src/app/models/my-animal.model';
import { MyFarmService } from 'src/app/services/my-farm.service';

@Component({
  selector: 'app-render',
  templateUrl: './render.component.html'
})

export class RenderComponent implements OnInit {
  animals!: Array<MyAnimal>

  constructor(private animalService: MyFarmService) { }

  ngOnInit() {
    this.animals = this.animalService.all()
  }

}
