import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@ng-stack/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CustomAnimal } from 'src/app/models/custom-animal.model';
import { CustomFarmService } from 'src/app/services/custom-farm.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent {
  animals!: Array<CustomAnimal>
  animalForm!: FormGroup<CustomAnimal>;

  constructor(
    private fb: FormBuilder,
    private farmService: CustomFarmService,
    public toastr: ToastrService,
    private router: Router) {
    this.animalForm = this.fb.group<CustomAnimal>({
      breed: [null, Validators.required],
      noise: [null, Validators.required],
      imageUrl: [null]
    })
  }

  create() {
    this.farmService.create(this.animalForm.value)
    this.router.navigate(['custom'])
    this.toastr.success("Your animal was successfully added to your farm")
  }
}
