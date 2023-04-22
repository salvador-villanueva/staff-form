import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private formBuilder: FormBuilder) {}

  staffForm = this.formBuilder.group({
    formDate: [''],
    jobTitle: [''],
    managerName: [''],
    managerEmail: ['']
  });

  // title = 'staff-form';
  // form = new FormControl({
  //   staffForm: new FormGroup({
  //     jobTitle: new FormControl(''),
  //     managerName: new FormControl(''),
  //     managerEmail: new FormControl('')
  //   })
  // });
  // minDate: Date;

  // constructor() {
  //   const currentYear = new Date().getFullYear();
  //   this.minDate = new Date(currentYear);
  // }
}
