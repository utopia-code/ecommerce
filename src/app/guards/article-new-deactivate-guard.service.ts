import { Injectable } from '@angular/core';
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { ArticleNewReactiveComponent } from '../articles/article-new-reactive/article-new-reactive.component';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ArticleNewDeactivateGuardService 
       implements CanDeactivate<ArticleNewReactiveComponent>{

  private formSubmitted: boolean = false;

  constructor() { }

  canDeactivate(component: ArticleNewReactiveComponent, 
                currentRoute: ActivatedRouteSnapshot, 
                currentState: RouterStateSnapshot, 
                nextState: RouterStateSnapshot): 
                boolean | Observable<boolean> | Promise<boolean> {
    if (!this.formSubmitted && component.reactiveForm.dirty) {
      return window.confirm('Do you want to navigate away from this page?')
    }
    return true;
  }

  setFormSubmitted(value: boolean) {
    this.formSubmitted = value;
  }
}
