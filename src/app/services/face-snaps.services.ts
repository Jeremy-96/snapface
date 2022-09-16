import { Injectable } from "@angular/core";
import { FaceSnap } from "../models/face-snap.models";

@Injectable({
  providedIn: 'root'
})

export class FaceSnapsService {
  faceSnaps: FaceSnap[] = [
    {
      id: 1,
      title: 'Edouard',
      description: 'This is my friend Edouard',
      imageUrl: 'https://dl.memuplay.com/new_market/img/com.snapchat.android.icon.2022-07-01-11-42-48.png',
      createDate: new Date(),
      snaps: 0,
    },
    {
      id: 2,
      title: 'My beautyfull son <3',
      description: 'This is my son, Claudy',
      imageUrl: 'https://images0.persgroep.net/rcs/Xw53zOT5vcqBsbBRU3bgc1VOl3E/diocontent/147987642/_fill/680/453/?appId=21791a8992982cd8da851550a453bd7f&quality=0.9',
      createDate: new Date(),
      snaps: 0,
      location: 'Anderlecht, BE'
    },
    {
      id: 3,
      title: 'Doudou',
      description: 'My big doudou',
      imageUrl: 'https://leszarsouilles.be/38773-large_default/tiamo-doudou-ours-50-cm.jpg',
      createDate: new Date(),
      snaps: 0,
      location: 'Dreamland'
    }
  ];

  getAllFaceSnaps(): FaceSnap[] {
    return this.faceSnaps;
  }
  
  getFaceSnapById(faceSnapId: number): FaceSnap {
    const faceSnap = this.faceSnaps.find(faceSnap => faceSnap.id === faceSnap.id);
    if(!faceSnap) {
      throw new Error('FaceSnap not found');
    }else {
      return faceSnap;
    }
  }

  snapFaceSnapById(faceSnapId: number, snapType:'snap'| 'unsnap'): void {
    const faceSnap = this.getFaceSnapById(faceSnapId);
    snapType === 'snap' ? faceSnap.snaps++ : faceSnap.snaps--
  }
}