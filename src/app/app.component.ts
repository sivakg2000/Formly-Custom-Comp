import { Component, OnDestroy } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';
import { UserService } from './user.service';

import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { CommunicationService } from './CommunicationService';

@Component({
  selector: 'formly-app-example',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnDestroy {
  private destroy$: Subject<any> = new Subject<any>();
  form = new FormGroup({});
  options: FormlyFormOptions = {};
  model: any;
  fields: FormlyFieldConfig[];
  msg:string;

  constructor(private userService: UserService,private communicationService: CommunicationService) {
    this.userService
      .getUserData()
      .pipe(takeUntil(this.destroy$))
      .subscribe(([model, fields]) => {
        this.model = model;
        this.fields = this.mapFields(fields);
      }); 
      this.communicationService.subscribeToCustomFieldButtonClick('AppComponent').subscribe(() => this.search());
  
 
  }


  onNotify(message: string): void { 
    console.log('Method in Parent Component Called with message:', message);
  }

  submit() {
    if (this.form.valid) {
      alert(JSON.stringify(this.model));
    }
  }

  /**
   * Adjust the JSON fields loaded from the server.
   */
  mapFields(fields: FormlyFieldConfig[]) {
    return fields.map((f) => {
      // Bind an observable to `color` field.
      if (f.key === 'color') {
        f.type = 'radio';
        f.props.options = this.userService.getColors();
      } 
      if(f.key==='searchBtn'){
        f.props.onClick=this.search;
      }

      return f;
    });
  }
 

  search() { 
    console.log(this);
    alert("Search App");
  }

  public ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.complete();
  }
}


/**  Copyright 2021 Formly. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at https://github.com/ngx-formly/ngx-formly/blob/main/LICENSE */