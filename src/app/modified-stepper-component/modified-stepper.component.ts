import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'modified-stepper',
  templateUrl: './modified-stepper.component.html',
  styleUrls: ['./modified-stepper.component.css']
})
export class ModifiedStepperComponent {
  firstStepFormGroup: FormGroup;
  secondStepFormGroup: FormGroup;
  thirdStepFormGroup: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.firstStepFormGroup = this.formBuilder.group({
      // Define form controls for the first step
      // Example: controlName: ['', Validators.required]
    });

    this.secondStepFormGroup = this.formBuilder.group({
      // Define form controls for the second step
      // Example: controlName: ['', Validators.required]
    });

    this.thirdStepFormGroup = this.formBuilder.group({
      // Define form controls for the third step
      // Example: controlName: ['', Validators.required]
    });
  }
}
