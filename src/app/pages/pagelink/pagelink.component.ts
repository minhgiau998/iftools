import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-pagelink',
  templateUrl: './pagelink.component.html',
  styleUrls: ['./pagelink.component.scss']
})
export class PagelinkComponent implements OnInit {
  url = 'https://api.hackertarget.com/pagelinks/?q=';
  myForm: FormGroup;
  data: string;

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
    this.http.get(this.url + domain, { responseType: 'text' }).subscribe(
      res => {
        this.data = res;
        this.spinner.hide();
      },
      (err: HttpErrorResponse) => {
        console.log(err.error);
        console.log(err.name);
        console.log(err.message);
        console.log(err.status);
      }
    );
  }
}
