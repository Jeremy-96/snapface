import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LandingPageComponent } from "./landing-page/landing-page.component";
import { FaceSnapListComponent } from "./face-snap-list/face-snap-list.component";
import { SingleFaceSnapComponent } from "./single-face-snap/single-face-snap.component";
import { NewFaceSnapComponent } from "./new-face-snap/new-face-snap.component";



const routes: Routes = [
  { path: 'create', component: NewFaceSnapComponent},
  { path: 'facesnaps/:id', component: SingleFaceSnapComponent },
  { path: 'facesnaps', component: FaceSnapListComponent },
  { path: '', component: LandingPageComponent  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ], 
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule{};