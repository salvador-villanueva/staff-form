import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

interface Department {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  displayedColumns = ['formDate', 'jobTitle', 'department', 'managerName', 'managerEmail'];
  dataSource = elementData;

  departments: Department[] = [
    {value: 'hr', viewValue: 'HR'},
    {value: 'softwareDevelopment', viewValue: 'Software Development'},
    {value: 'marketing', viewValue: 'Marketing'}
  ];

  title = 'staff-form';
  
  minDate = new Date();

  staffForm!: FormGroup;

  constructor(private formBuilder: FormBuilder) {}
  ngOnInit() {

    this.staffForm = this.formBuilder.group({

      formDate: [new Date(), Validators.required],
      jobTitle: ['', Validators.required],
      department: ['', Validators.required],
      managerName: ['', Validators.required],
      managerEmail: ['', Validators.required],
    });
}

  onSubmit(form: any) {
    let inputs = form.value;
    let obj:any = {
      formDate: inputs.formDate,
      jobTitle: inputs.jobTitle,
      department: inputs.department,
      managerName: inputs.managerName,
      managerEmail: inputs.managerEmail,
  };
    this.dataSource.push(obj);
    this.dataSource = [...this.dataSource];
    this.staffForm.reset();

  }
}

export interface Element {
  formDate: Date;
  jobTitle: string;
  department: string;
  managerName: string;
  managerEmail: string;
}

var formDate = new Date();
const elementData: Element[] = [
  {formDate: formDate, jobTitle: '', department: '', managerName: '', managerEmail: '',},
];


