import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@ng-stack/forms';
import { Animal } from 'src/app/models/animal.model';
import { FarmService } from 'src/app/services/farm.service';

@Component({
  selector: 'custom-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent {
  animals!: Array<Animal>
  form!: FormGroup<Animal>

  constructor(
    private fb: FormBuilder,
    private farmService: FarmService) {
    this.form = this.fb.group<Animal>({
      breed: [null, Validators.required],
      sound: [null, Validators.required],
      image: ''
    })
  }

  create(): void {
    const animal = this.farmService.create(this.form.value)
    this.form.reset()
    console.log(animal);
  }
}