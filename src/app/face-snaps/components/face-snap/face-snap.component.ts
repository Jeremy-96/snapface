import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { FaceSnap } from 'src/app/core/models/face-snap.models';
import { FaceSnapsService } from 'src/app/core/services/face-snaps.services';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})
export class FaceSnapComponent implements OnInit {
  @Input() faceSnap!: FaceSnap;
  btnTxt!: string;
  
  constructor(private faceSnapsService: FaceSnapsService,
              private router: Router) {}

  ngOnInit() {
    
  }

  onViewFaceSnap() {
    this.router.navigateByUrl(`facesnaps/${this.faceSnap.id}`);
  }
}
