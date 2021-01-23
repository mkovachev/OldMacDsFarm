import { Component, OnInit } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'app-animal',
  templateUrl: './animal.component.html',
  styleUrls: ['./animal.component.css']
})
export class AnimalComponent implements Animal {
  data: any
}
