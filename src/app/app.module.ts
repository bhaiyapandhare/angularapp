import { BrowserModule } from '@angular/platform-browser';
import { NgModule ,CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {enableProdMode} from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CardComponent } from './card/card.component';
import { PasswordgeneratorComponent } from './passwordgenerator/passwordgenerator.component';
import { ChildToParentComponent } from './child-to-parent/child-to-parent.component';
import { NgForComponent } from './ng-for/ng-for.component';
import { NgForDemoComponent } from './ng-for-demo/ng-for-demo.component';
import { NgIfComponent } from './ng-if/ng-if.component';
import { NgIfPracticeComponent } from './ng-if-practice/ng-if-practice.component';
import { NgstyleComponent } from './ngstyle/ngstyle.component';
import { NgclassComponent } from './ngclass/ngclass.component';
import { DirectiveassignmentComponent } from './directiveassignment/directiveassignment.component';
import { PracticeComponent } from './practice/practice.component';
//import { CustomDirective } from './custom.directive';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { TemplateformsComponent } from './templateforms/templateforms.component';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button'
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {MatTabsModule} from '@angular/material/tabs';
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatDialogModule } from "@angular/material/dialog";
import {  MatInputModule } from "@angular/material/input";
import {  MatListModule } from "@angular/material/list";
import { MatPaginatorModule } from "@angular/material/paginator";
import {  MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { MatSelectModule } from "@angular/material/select";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatSortModule } from "@angular/material/sort";
import { MatTableModule } from "@angular/material/table";
import { MatToolbarModule } from "@angular/material/toolbar";
import {MatNativeDateModule} from '@angular/material/core';
import {MatRadioModule} from '@angular/material/radio';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatStepperModule} from '@angular/material/stepper';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { MatSliderModule } from '@angular/material';
import { TemplateformPracticeComponent } from './templateform-practice/templateform-practice.component';
import { ReactiveformComponent } from './reactiveform/reactiveform/reactiveform.component';
import { TempformassignmentComponent } from './tempformassignment/tempformassignment.component';
import { AssignReactiveformComponent } from './assign-reactiveform/assign-reactiveform.component';
import { NewBaseComponent } from './new-base/new-base.component';
import { AssignmentReactiveFormComponent } from './assignment-reactive-form/assignment-reactive-form.component';
import { HttpClientModule } from '@angular/common/http';
import { PipeexampleComponent } from './pipeexample/pipeexample.component';
import { SearchPipe } from './search.pipe';
import { ProductFilterComponent } from './product-filter/product-filter.component';
import { CustomPipePipe } from './custom-pipe.pipe';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { HomeComponent } from './home/home.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { DemopostComponent } from './demopost/demopost.component';
import { DemouserComponent } from './demouser/demouser.component';
import { UseridComponent } from './demouser/userid/userid.component';
import { DemouserdetailsComponent } from './demouserdetails/demouserdetails.component';
import { ProductModule } from './product/product.module';
import { OrdersModule } from './orders/orders.module';
import { FashionModule } from './fashion/fashion.module';
import { CustomerModule } from './customer/customer.module';
import { AdminModule } from './admin/admin.module';
import { NewsandquoteComponent } from './newsandquote/newsandquote.component';

// import { TemplateFormAssignmentComponent } from './template-form-assignment/template-form-assignment.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    PasswordgeneratorComponent,
    ChildToParentComponent,
    NgForComponent,
    NgForDemoComponent,
    NgIfComponent,
    NgIfPracticeComponent,
    NgstyleComponent,
    NgclassComponent,
    DirectiveassignmentComponent,
    PracticeComponent,
    //CustomDirective,
    TemplateformsComponent,
    TemplateformPracticeComponent,
    ReactiveformComponent,
    TempformassignmentComponent,
    AssignReactiveformComponent,
    NewBaseComponent,
    AssignmentReactiveFormComponent,
    PipeexampleComponent,
    SearchPipe,
    ProductFilterComponent,
    CustomPipePipe,
    AboutusComponent,
    ContactusComponent,
    HomeComponent,
    PagenotfoundComponent,
    DemopostComponent,
    DemouserComponent,
    UseridComponent,
    DemouserdetailsComponent,
    NewsandquoteComponent,
    
    // TemplateFormAssignmentComponent
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatButtonToggleModule,
    MatSlideToggleModule,
    MatSliderModule,
    MatMenuModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatTabsModule,
    MatSidenavModule,
    MatListModule,
    MatToolbarModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatProgressSpinnerModule,
    MatDialogModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatRadioModule,
    MatCheckboxModule,
    MatStepperModule,
    MatProgressBarModule, 
    ReactiveFormsModule,
    HttpClientModule,
    ProductModule,
    OrdersModule,
    FashionModule
    // CustomerModule,
    // AdminModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
constructor(){
    
  console.log('AppModule called');
  
}
}

enableProdMode();