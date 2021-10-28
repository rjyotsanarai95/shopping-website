import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {

  // public countryList = ['India','USA','England']

 public countryList:country[]=[
    new country("1","India"),
    new country("2","England"),
    new country("3","USA"),

  ];

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(contactForm: { value: any; }){
    console.log(contactForm.value)
  }

}

export class country{
  id:string;
  name:string;

  constructor(id:string,name:string) {
    this.id=id;
    this.name=name;
  }
}
