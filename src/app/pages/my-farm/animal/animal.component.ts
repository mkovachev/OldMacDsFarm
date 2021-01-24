import { Component, Input } from '@angular/core';
import { MyAnimal } from '../../../models/my-animal.model';

@Component({
  selector: 'app-animal',
  templateUrl: './animal.component.html',
  styleUrls: ['./animal.component.css']
})
export class AnimalComponent implements MyAnimal {
  @Input() data: any;
  type: any;

}
