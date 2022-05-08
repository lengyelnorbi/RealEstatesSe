import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFireStorage } from '@angular/fire/compat/storage';

@Injectable({
  providedIn: 'root'
})
export class FileUploadService {

  constructor(private afs: AngularFirestore, private af: AngularFireStorage) {}

  uploadImage(path: File){
    this.af.upload("Images/" + path.name, path);
  }
}
