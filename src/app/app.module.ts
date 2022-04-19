import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomePageComponent } from './home-page/home-page.component';
import { UserPageComponent } from './user-page/user-page.component';
import { ContactPageComponent } from './contact-page/contact-page.component';

@NgModule({
  imports: [BrowserModule, AppRoutingModule, RouterModule, HttpClientModule],
  declarations: [
    HeaderComponent,
    AppComponent,
    FooterComponent,
    HomePageComponent,
    UserPageComponent,
    ContactPageComponent,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
