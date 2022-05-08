import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AdvertiseService } from '../../shared/services/advertise.service';
import { UploadImagesComponent } from '../../shared/upload-images/upload-images.component';
import { Advertisement } from '../../shared/models/Advertisement';
import { AuthService } from '../../shared/services/auth.service';
import { FileUploadService } from '../../shared/services/file-upload.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-advertise',
  templateUrl: './advertise.component.html',
  styleUrls: ['./advertise.component.scss']
})
export class AdvertiseComponent implements OnInit, OnDestroy {
  loggedInUser?: firebase.default.User | null;
  subscribtion?: Subscription;

  advertismentForm = new FormGroup({
    title: new FormControl(''),
    price: new FormControl(''),
    valuta: new FormControl(''),
    size: new FormControl(''),
    location: new FormControl(''),
    contacts: new FormGroup({
      email: new FormControl(''),
      phonenumber: new FormControl('')
    })
  });

  @ViewChild(UploadImagesComponent) child: any;

  constructor(private advertiseService: AdvertiseService, private authService: AuthService, private fileUploadService: FileUploadService, private router: Router) {
   }

  ngOnInit(): void {
  }

  onSubmit() {
    this.subscribtion = this.authService.isUserLoggedIn().subscribe(user => {
      this.loggedInUser = user;
      if(this.loggedInUser){
        const adv: Advertisement = {
          id: "",
          user_id: this.loggedInUser.uid,
          price: this.advertismentForm.get('price')?.value as string,
          valuta: this.advertismentForm.get('valuta')?.value,
          title: this.advertismentForm.get('title')?.value,
          size: this.advertismentForm.get('size')?.value,
          location: this.advertismentForm.get('location')?.value,
          contacts: {
            email: this.advertismentForm.get('contacts.email')?.value,
            phonenumber: this.advertismentForm.get('contacts.phonenumber')?.value
          },
          index_image: "Images/" + this.child.path.name
        }
        console.log(adv);
        this.advertiseService.create(adv).then(() => {
          if(this.child.path){
            this.fileUploadService.uploadImage(this.child.path);
          }
        }).catch(error => {
          console.error(error);
        });
        this.router.navigateByUrl('/real-estates#new-advertisement-added');
      }
    })
  }

  ngOnDestroy(): void {
    this.subscribtion?.unsubscribe();
  }
}
