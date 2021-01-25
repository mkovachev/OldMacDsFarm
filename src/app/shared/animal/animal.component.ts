import { Component, Input } from '@angular/core';
import { Animal } from '../../models/animal.model';

@Component({
  selector: 'farm-animal',
  templateUrl: './animal.component.html',
  styleUrls: ['./animal.component.css']
})
export class AnimalComponent implements Animal {
  @Input() breed!: string;
  @Input() sound!: string;
  @Input() image!: string;
}
