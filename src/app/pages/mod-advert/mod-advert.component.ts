import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AdvertiseService } from '../../shared/services/advertise.service';
import { UploadImagesComponent } from '../../shared/upload-images/upload-images.component';
import { Advertisement } from '../../shared/models/Advertisement';
import { AuthService } from '../../shared/services/auth.service';
import { FileUploadService } from '../../shared/services/file-upload.service';
import { Router } from '@angular/router';
import { MyadvertisementsComponent } from '../myadvertisements/myadvertisements.component';

@Component({
  selector: 'app-mod-advert',
  templateUrl: './mod-advert.component.html',
  styleUrls: ['./mod-advert.component.scss']
})
export class ModAdvertComponent implements OnInit, OnDestroy {
  loggedInUser?: firebase.default.User | null;
  advertIndexImage: string = "";
  advertId: string = "";

  modifyAdvForm = new FormGroup({
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

  constructor(private advertiseService: AdvertiseService, private authService: AuthService, private fileUploadService: FileUploadService, private router: Router) {
    this.modifyAdvForm.get('title')?.setValue(advertiseService.modifiableAdv?.title);
    this.modifyAdvForm.get('price')?.setValue(advertiseService.modifiableAdv?.price);
    this.modifyAdvForm.get('valuta')?.setValue(advertiseService.modifiableAdv?.valuta);
    this.modifyAdvForm.get('size')?.setValue(advertiseService.modifiableAdv?.size);
    this.modifyAdvForm.get('location')?.setValue(advertiseService.modifiableAdv?.location);
    this.modifyAdvForm.get('contacts.email')?.setValue(advertiseService.modifiableAdv?.contacts.email);
    this.modifyAdvForm.get('contacts.phonenumber')?.setValue(advertiseService.modifiableAdv?.contacts.phonenumber);
  }

 ngOnInit(): void {
   if(this.advertiseService.modifiableAdv?.index_image){
    this.advertIndexImage = this.advertiseService.modifiableAdv.index_image;
   }
   if(this.advertiseService.modifiableAdv?.id){
     this.advertId = this.advertiseService.modifiableAdv.id;
   }
 }

 onSubmit() {
   this.authService.isUserLoggedIn().subscribe(user => {
     this.loggedInUser = user;
     if(this.loggedInUser){
       const adv: Advertisement = {
         id: this.advertId,
         user_id: this.loggedInUser.uid,
         price: this.modifyAdvForm.get('price')?.value as string,
         valuta: this.modifyAdvForm.get('valuta')?.value,
         title: this.modifyAdvForm.get('title')?.value,
         size: this.modifyAdvForm.get('size')?.value,
         location: this.modifyAdvForm.get('location')?.value,
         contacts: {
           email: this.modifyAdvForm.get('contacts.email')?.value,
           phonenumber: this.modifyAdvForm.get('contacts.phonenumber')?.value
         },
         index_image: this.advertIndexImage
       }
       this.advertiseService.update(adv).then(() => {
         console.log("Update successful!");
         this.advertiseService.modifiableAdv = null;
         localStorage.setItem('modifiableAdv', JSON.stringify('null'));
         this.router.navigateByUrl('myadvertisements');
       }).catch(error => {
         console.error(error);
       });
      }
   })
  }

  ngOnDestroy(): void {
    this.advertiseService.modifiableAdv = null;
    localStorage.setItem('modifiableAdv', JSON.stringify('null'));
  }
}
