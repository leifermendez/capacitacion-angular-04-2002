import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  imports: [BrowserModule, AppRoutingModule, RouterModule],
  declarations: [
    HeaderComponent,
     AppComponent,
      FooterComponent],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
