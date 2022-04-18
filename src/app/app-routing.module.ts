import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { FooterComponent } from "./footer/footer.component";
import { HomePageComponent } from "./home-page/home-page.component";


const routes:Routes = [
    {
        path:'',
        component:HomePageComponent
    }
]

@NgModule({
    imports:[
        RouterModule.forRoot(routes)
    ]
})
export class AppRoutingModule {}