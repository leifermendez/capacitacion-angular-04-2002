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
import { LoginPageComponent } from './login-page/login-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ImgNotFoundDirective } from './img-not-found.directive';
import { ExamplePipe } from './example.pipe';
import { TableUserComponent } from './table-user/table-user.component';
import { DetailUserComponent } from './detail-user/detail-user.component';
import { SearchListPipe } from './search-list.pipe';

@NgModule({
  imports: [
    BrowserModule, 
    AppRoutingModule, 
    RouterModule, 
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  declarations: [
    HeaderComponent,
    AppComponent,
    FooterComponent,
    HomePageComponent,
    UserPageComponent,
    ContactPageComponent,
    LoginPageComponent,
    ImgNotFoundDirective,
    ExamplePipe,
    TableUserComponent,
    DetailUserComponent,
    SearchListPipe,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
