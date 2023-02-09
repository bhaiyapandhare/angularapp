import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { CardComponent } from './card/card.component';
import { PasswordgeneratorComponent } from './passwordgenerator/passwordgenerator.component';
import { ChildToParentComponent } from './child-to-parent/child-to-parent.component';
import { NgForComponent } from './ng-for/ng-for.component';
import { NgForDemoComponent } from './ng-for-demo/ng-for-demo.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    PasswordgeneratorComponent,
    ChildToParentComponent,
    NgForComponent,
    NgForDemoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
