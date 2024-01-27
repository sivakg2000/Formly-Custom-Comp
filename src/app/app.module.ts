import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyBootstrapModule } from '@ngx-formly/bootstrap';
import { AppComponent } from './app.component';
import { UserService } from './user.service';
import { FormlyFieldButton } from './button-type.components';
import { MytestComponent } from './mytest/mytest.component';
import { Mytest1Component } from './mytest1/mytest1.component';

@NgModule({
  imports: [BrowserModule, HttpClientModule, ReactiveFormsModule, FormlyBootstrapModule,

    
    FormlyModule.forRoot({
      types: [
        {
          name: 'button',
          component: FormlyFieldButton,
          wrappers: ['form-field'],
          defaultOptions: {
            props: {
              btnType: 'default',
              type: 'button',
            }, 
          },
        },
      ],
    }),],
  bootstrap: [AppComponent],
  declarations: [AppComponent, MytestComponent, Mytest1Component],
  providers: [UserService],
})
export class AppModule { }


/**  Copyright 2021 Formly. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at https://github.com/ngx-formly/ngx-formly/blob/main/LICENSE */