import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Advertisement } from '../models/Advertisement';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { Subscription } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AdvertiseService {

  collectionName: string = "RealEstates";
  modifiableAdv?: Advertisement | null;

  constructor(private afs: AngularFirestore, private storage: AngularFireStorage) { }

  create(advertise: Advertisement){
    advertise.id = this.afs.createId();
    return this.afs.collection<Advertisement>(this.collectionName).doc(advertise.id).set(advertise);
  }

  findAll(){
    return this.afs.collection<Advertisement>(this.collectionName).valueChanges();
  }

  findUserAdvertisements(userId: string){
    return this.afs.collection<Advertisement>(this.collectionName, ref => ref.where('user_id', "==", userId)).valueChanges();
  }

  loadImage(imageUrl: string) {
    return this.storage.ref(imageUrl).getDownloadURL();
  }

  delete(advId: string){
    this.afs.collection<Advertisement>(this.collectionName).doc(advId).delete();
  }

  update(advert: Advertisement){
    return this.afs.collection<Advertisement>(this.collectionName).doc(advert.id).set(advert)
  }
}
