import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AdduserComponent } from './adduser/adduser.component';

@Injectable({
  providedIn: 'root'
})
export class UnsavedchangesGuard implements CanDeactivate <AdduserComponent>  {
  userName:any;
  canDeactivate(component: AdduserComponent) {
   
    if(component.userName.dirty)
    {
      return window.confirm('You have some unsaved changes. Are you sure you want to navigate?')
    } else {
      true;
    }
   }
  }
