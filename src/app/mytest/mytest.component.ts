import { Component, OnDestroy, OnInit } from '@angular/core';

import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core'; 

import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs'; 
import { FormGroup } from '@angular/forms';
import { UserService } from '../user.service';
import { CommunicationService } from '../CommunicationService';

@Component({
  selector: 'app-mytest',
  templateUrl: './mytest.component.html',
  styleUrls: ['./mytest.component.scss']
})
export class MytestComponent implements OnDestroy,OnInit {

  
  private destroy$: Subject<any> = new Subject<any>();
  form = new FormGroup({});
  options: FormlyFormOptions = {};
  model: any;
  fields: FormlyFieldConfig[];
  msg:string;

  constructor(private userService: UserService,private communicationService: CommunicationService) {
    this.userService
      .getUserData1()
      .pipe(takeUntil(this.destroy$))
      .subscribe(([model, fields]) => {
        this.model = model;
        this.fields = this.mapFields(fields);
      }); 
      
      this.communicationService.subscribeToCustomFieldButtonClick('MytestComponent').subscribe(() => this.search());
 
  }
  ngOnInit(): void { 
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
    alert("Search My Test");
  }

  public ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.complete();
  }

  

}
 
