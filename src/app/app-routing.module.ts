import { ContactPageComponent } from './contact-page/contact-page.component';
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { FooterComponent } from "./footer/footer.component";
import { HomePageComponent } from "./home-page/home-page.component";
import { UserPageComponent } from "./user-page/user-page.component";
import { LoginPageComponent } from './login-page/login-page.component';


const routes:Routes = [
    {
        path:'',//TODO /home
        component:HomePageComponent
    },
    {
        path:'user',
        component:UserPageComponent
    },
    {
        path:'contact',
        component:ContactPageComponent
    },
    {
        path:'login',
        component:LoginPageComponent
    }
]

@NgModule({
    imports:[
        RouterModule.forRoot(routes)
    ]
})
export class AppRoutingModule {}