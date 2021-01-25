import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@ng-stack/forms';
import { Router } from '@angular/router';
import { CustomAnimal } from 'src/app/models/custom-animal.model';
import { CustomFarmService } from 'src/app/services/custom-farm.service';

@Component({
  selector: 'custom-farm-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent {
  animals!: Array<CustomAnimal>
  animalForm!: FormGroup<CustomAnimal>;

  constructor(
    private fb: FormBuilder,
    private farmService: CustomFarmService,
    private router: Router) {
    this.animalForm = this.fb.group<CustomAnimal>({
      breed: [null, Validators.required],
      sound: [null, Validators.required]
    })
  }

  create() {
    this.farmService.create(this.animalForm.value)
    console.log(this.animalForm.value);
    this.router.navigate(['custom'])
  }
}
