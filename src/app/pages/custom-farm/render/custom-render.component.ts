import { Component, OnInit } from '@angular/core';
import { Animal } from 'src/app/models/animal.model';
import { FarmService } from 'src/app/services/farm.service';


@Component({
  selector: 'custom-render',
  templateUrl: './custom-render.component.html',
  styleUrls: ['./custom-render.component.css']
})
export class CustomRenderComponent implements OnInit {
  animals!: Array<Animal>

  constructor(private animalService: FarmService) { }

  ngOnInit() {
    this.animals = this.animalService.allCustom()
  }
}
