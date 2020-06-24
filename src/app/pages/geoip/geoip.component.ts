import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-geoip',
  templateUrl: './geoip.component.html',
  styleUrls: ['./geoip.component.scss']
})
export class GeoipComponent implements OnInit {
  url = 'https://freegeoip.app/json/';
  myForm: FormGroup;
  data: Object;
  error: string;

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private spinner: NgxSpinnerService
    ) { }

  ngOnInit(): void {
    this.myForm = this.fb.group({
      domain: ['', Validators.required],
    });
  }

  onSubmit(form: FormGroup) {
    this.getData(form.value.domain);
  }

  getData(domain: string) {
    this.spinner.show();
    this.http.get(this.url + domain, { responseType: 'json' }).subscribe(
      res => {
        console.log(res);
        this.data = res;
        this.spinner.hide();
      },
      (err: HttpErrorResponse) => {
        if(err.status === 404) {
          this.spinner.hide();
        }
        console.log(err.error);
        console.log(err.name);
        console.log(err.message);
        console.log(err.status);
      }
    );
  }
}
