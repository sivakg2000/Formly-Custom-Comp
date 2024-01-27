import { Component, EventEmitter, Input, Output, ViewContainerRef } from '@angular/core';
import { FieldType } from '@ngx-formly/core';
import { AppComponent } from './app.component';
import { CommunicationService } from './CommunicationService';

@Component({
    selector: 'formly-field-button',
    template: `
    <div>
      <button [type]="props.type"  (click)="callCustomMethod()">
        {{ props.text }}
      </button>
    </div>
  `,
})
export class FormlyFieldButton extends FieldType {


    @Input() identifier: string; 


    constructor(private communicationService: CommunicationService) {
        super(); 
   
      }
    
      callCustomMethod() {
        console.log(this);  
        this.communicationService.notifyCustomFieldButtonClick(this.field["identifier"]);

      }

    onClick($event: Event) {
        if (this.props.onClick) {
            
    
            

            if( typeof this.props.onClick  === "function" )
            {   
                this.props.onClick(this.form.controls['someInput'].value);
                //this.formComponent.search("Siva");
            }else{
            var fun = eval('(' + this.props.onClick + ')');
            fun();
            }

           

        }
    }


}