import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SingleFaceSnapComponent } from './components/single-face-snap/single-face-snap.component';
import { FaceSnapComponent } from './components/face-snap/face-snap.component';
import { NewFaceSnapComponent } from './components/new-face-snap/new-face-snap.component';
import { FaceSnapListComponent } from './components/face-snap-list/face-snap-list.component';
import { CoreModule } from '../core/core.module';
import { ReactiveFormsModule } from '@angular/forms';
import { FaceSnapRoutingModule } from './face-snaps-routing.module';



@NgModule({
  declarations: [
    SingleFaceSnapComponent,
    FaceSnapComponent,
    NewFaceSnapComponent,
    FaceSnapListComponent
  ],
  imports: [
    CommonModule,
    FaceSnapRoutingModule,
    CoreModule,
    ReactiveFormsModule
  ],
  exports: [
    SingleFaceSnapComponent,
    FaceSnapComponent,
    NewFaceSnapComponent,
    FaceSnapListComponent
  ],
})
export class FaceSnapsModule { }
