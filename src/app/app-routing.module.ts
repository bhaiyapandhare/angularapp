import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
// import { AdminlistComponent } from './admin/adminlist/adminlist.component';
import { AppComponent } from './app.component';
import { AuthGuard } from './auth.guard';
import { ContactusComponent } from './contactus/contactus.component';
import { CutomerlistComponent } from './customer/cutomerlist/cutomerlist.component';
import { DemopostComponent } from './demopost/demopost.component';
import { DemouserComponent } from './demouser/demouser.component';
import { DemouserdetailsComponent } from './demouserdetails/demouserdetails.component';
import { FashiondetComponent } from './fashion/fashiondet/fashiondet.component';
import { FashiongentsComponent } from './fashion/fashiongents/fashiongents.component';
import { FashionladiesComponent } from './fashion/fashionladies/fashionladies.component';
import { HomeComponent } from './home/home.component';
import { OrderlistComponent } from './orders/orderlist/orderlist.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { CameraComponent } from './product/camera/camera.component';
import { LaptopComponent } from './product/laptop/laptop.component';
import { MobileComponent } from './product/mobile/mobile.component';
import { ProductComponent } from './product/product.component';
import { WatchComponent } from './product/watch/watch.component';
import { TemplateformsComponent } from './templateforms/templateforms.component';
import { TodoComponent } from './todo/todo.component';
import { WikipediaComponent } from './wikipedia/wikipedia.component';

const routes: Routes = [
  { path: '', redirectTo:'home', pathMatch:'full'}, // http:localhost:4200 
  { path: 'home', component: HomeComponent},
  { path: 'aboutus', component: AboutusComponent }, // http://localhost:4200/aboutus
  { path: 'contactus', component: ContactusComponent },
  {path:'product',  canActivate:[AuthGuard], component:ProductComponent,
  children:[
    // {path:'', component:ProductComponent},
    {path:'laptop', component:LaptopComponent},
    {path:'mobile', component:MobileComponent},
    {path:'camera', component:CameraComponent},
    {path:'watch', component:WatchComponent}

  ]
 },
 {path:'post', component:DemopostComponent},
 {path:'users', component:DemouserComponent,
 children:[
  {path:'id', component:DemouserComponent}
 ]
},
{path:'demouserdetails/:id',component:DemouserdetailsComponent},
{path:'login', component:TemplateformsComponent},
{path:'orders', component:OrderlistComponent},
{path:'fashion', component:FashiondetComponent},
{path:'fashiongents',component:FashiongentsComponent},
{path:'fashionladies', component:FashionladiesComponent},

// {path:'customer', component:CutomerlistComponent},
// {path:'admin', component:AdminlistComponent},

{path: 'customer', loadChildren:'./customer/customer.module#CustomerModule'},
{ path: 'admin', loadChildren: './admin/admin.module#AdminModule'},
{path:'todo', component:TodoComponent},

{path:'wikipedia', component:WikipediaComponent},
  { path:'**', component:PagenotfoundComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes ,{ preloadingStrategy: PreloadAllModules})], //
  exports: [RouterModule]
})
export class AppRoutingModule { }
