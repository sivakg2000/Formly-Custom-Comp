import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, forkJoin } from 'rxjs';
import { FormlyFieldConfig } from '@ngx-formly/core';

@Injectable()
export class UserService {
  constructor(private http: HttpClient) {}

  getUserData(): Observable<any> {
    return forkJoin([this.getUser(), this.getFields()]);
  }

  getUserData1(): Observable<any> {
    return forkJoin([this.getUser(), this.getFields1()]);
  }

  getUser() {
    return this.http.get<{ firstName: string; lastName: string }>('assets/json-powered/user.json');
  }

  getFields() {
    return this.http.get<FormlyFieldConfig[]>('assets/json-powered/user-form.json');
  }


  getFields1() {
    return this.http.get<FormlyFieldConfig[]>('assets/json-powered/user-form1.json');
  }

  getColors() {
    return this.http.get<{ label: string; value: string }[]>('assets/json-powered/colors.json');
  }
}


/**  Copyright 2021 Formly. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at https://github.com/ngx-formly/ngx-formly/blob/main/LICENSE */