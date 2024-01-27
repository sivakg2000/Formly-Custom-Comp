// communication.service.ts
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CommunicationService {
    private customFieldButtonClick = new Subject<string>();
    private subscribers: { [key: string]: Subject<void> } = {};
  
    customFieldButtonClick$ = this.customFieldButtonClick.asObservable();
  
    subscribeToCustomFieldButtonClick(identifier: string): Observable<void> {
      if (!this.subscribers[identifier]) {
        this.subscribers[identifier] = new Subject<void>();
      }
      return this.subscribers[identifier];
    }
  
    notifyCustomFieldButtonClick(identifier: string) {
      if (this.subscribers[identifier]) {
        this.subscribers[identifier].next();
      }
    }
}
