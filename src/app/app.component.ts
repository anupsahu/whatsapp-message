import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  numberForm: FormGroup;

  ngOnInit() {
    this.numberForm = new FormGroup({
      mobile: new FormControl(null, [
        Validators.pattern('[0-9]{0-10}'),
        Validators.required,
      ]),
    });
  }

  onSubmit() {
    console.log(this.numberForm);
    window.open('https://wa.me/91' + this.numberForm.value.mobile);
  }
}
