import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {Routes ,RouterModule } from '@angular/router';
import {FormsModule ,ReactiveFormsModule} from '@angular/forms';
import { SevenmService} from './sevenm.service';
import { HttpModule } from '@angular/http';
import { ShowtableService } from './showtable.service';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { AddressComponent } from './address/address.component';
import { SliderComponent } from './slider/slider.component';
import { ShowTableComponent } from './show-table/show-table.component';
import { EditComponent } from './edit/edit.component';


const routes:Routes=[
	{path:"Home",component:HomeComponent,data:{"g":"true"}},
	{path:"Login",component:LoginComponent},
	{path:"About",component:AboutComponent},
	{path:"Register",component:RegistrationComponent},
	{path:"Contact" ,component:ContactComponent},
	{path:"Address" ,component:AddressComponent},
	{path:"ShowTable" ,component:ShowTableComponent},
	{path:"edit/:id" ,component:EditComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    RegistrationComponent,
    AboutComponent,
    ContactComponent,
    AddressComponent,
    SliderComponent,
    ShowTableComponent,
    EditComponent
  ],
  imports: [
    BrowserModule,
	RouterModule.forRoot(routes),
	ReactiveFormsModule,
	FormsModule,
	HttpModule,
  ],
  providers: [SevenmService,
			  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
