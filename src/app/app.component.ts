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
        Validators.required,
        Validators.min(1000000000),
        Validators.max(999999999999),
      ]),
    });
  }

  onSubmit() {
    console.log(this.numberForm);
    window.open('https://wa.me/' + this.numberForm.value.mobile);
  }
}
