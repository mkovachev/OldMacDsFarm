import { Component, OnInit } from '@angular/core';
import { Animal } from 'src/app/models/animal.model';
import { FarmService } from 'src/app/services/farm.service';

@Component({
  selector: 'myfarm-render',
  templateUrl: './myfarm-render.component.html',
  styleUrls: ['./myfarm-render.component.css']
})

export class MyFarmRenderComponent implements OnInit {
  animals!: Array<Animal>

  constructor(private animalService: FarmService) { }

  ngOnInit() {
    this.animals = this.animalService.allMyFarm()
  }

}
