import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomePageComponent } from './home-page/home-page.component';

@NgModule({
  imports: [
    BrowserModule,
     AppRoutingModule,
     RouterModule
    ],
  declarations: [
    HeaderComponent,
     AppComponent,
      FooterComponent,
      HomePageComponent],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
