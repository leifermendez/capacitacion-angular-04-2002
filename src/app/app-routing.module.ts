import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { FooterComponent } from "./footer/footer.component";


const routes:Routes = [
    {
        path:'',
        component:FooterComponent
    }
]

@NgModule({
    imports:[
        RouterModule.forRoot(routes)
    ]
})
export class AppRoutingModule {}