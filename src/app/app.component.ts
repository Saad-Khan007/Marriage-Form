import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Shadi-Form';
  marriageForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.marriageForm = this.formBuilder.group({
      name: ['', Validators.required],
      fatherName: ['', Validators.required],
      fatherOccupation: [''],
      gender: ['', Validators.required],
      maritalStatus: ['Single', Validators.required],
      sons: [0, Validators.required],
      daughters: [0, Validators.required],
      lifeStyle: [''],
      height: ['', Validators.required],
      age: [18, Validators.required],
      color: ['', Validators.required],
      bloodType: [''],
      haveBeard: ['Yes'],
      disabilities: [''],
      qualification: ['', Validators.required],
      islamicEducation: ['Yes'],
      parentsAlive: ['Both', Validators.required],
      brothers: [0, Validators.required],
      marriedBrothers: [0, Validators.required],
      sisters: [0, Validators.required],
      marriedSisters: [0, Validators.required],
      caste: ['', Validators.required],
      religion: ['', Validators.required],
      sect: ['', Validators.required],
      live_in_country: [''],
      live_in_state: [''],
      live_in_city: [''],
      from_country: [''],
      from_state: [''],
      from_city: [''],
      postalAddress: [''],
      houseStatus: [''],
      requirements: ['', Validators.required],
      profession: ['', Validators.required],
      designation: ['', Validators.required],
      monthlyIncome: ['', Validators.required]
    });
  }

  onSubmit() {
    // if (this.marriageForm.valid) {
      console.log(this.marriageForm.value);
    // }
  }
}
