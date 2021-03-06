import { Component, OnInit, OnChanges, OnDestroy } from '@angular/core';
import { AdvertiseService } from '../../shared/services/advertise.service';
import { Advertisement } from '../../shared/models/Advertisement';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { PageEvent } from '@angular/material/paginator';
import { AuthService } from 'src/app/shared/services/auth.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-myadvertisements',
  templateUrl: './myadvertisements.component.html',
  styleUrls: ['./myadvertisements.component.scss']
})
export class MyadvertisementsComponent implements OnInit, OnChanges, OnDestroy {
  subscription1?: Subscription;
  subscription2?: Subscription;
  subscription3?: Subscription;
  subscription4?: Subscription;
  advertisements: Array<Advertisement> = [];
  pageSlice?: Array<Advertisement>;

  constructor(private advertiseService: AdvertiseService, private storage: AngularFireStorage, private auth: AuthService) { }
  
  ngOnChanges(): void{
    this.subscription1 = this.advertiseService.findUserAdvertisements(this.auth.getUserId()).subscribe(advertisements => {
      this.advertisements = advertisements;
      for(let i = 0; i < this.advertisements.length; i++){
        if(this.advertisements[i].index_image.startsWith("Images")){
          this.subscription4 = this.advertiseService.loadImage(this.advertisements[i].index_image).subscribe(data => {
            this.advertisements[i].index_image = data;
          })
        }
      }
    })
  }

  ngOnInit(): void {
    this.subscription2 = this.advertiseService.findUserAdvertisements(this.auth.getUserId()).subscribe(advertisements => {
      this.advertisements = advertisements;
      this.pageSlice = this.advertisements.slice(0, 8);
      for(let i = 0; i < this.advertisements.length; i++){
        if(this.advertisements[i].index_image.startsWith("Images")){
          this.subscription3 = this.advertiseService.loadImage(this.advertisements[i].index_image).subscribe(data => {
            this.advertisements[i].index_image = data;
          })
        }
      }
    })
  }

  OnPageChange(event: PageEvent){
    console.log(event);
    const startIndex = event.pageIndex * event.pageSize;
    let endIndex = startIndex + event.pageSize;
    if(endIndex > this.advertisements.length){
      endIndex = this.advertisements.length;
    }
    this.pageSlice = this.advertisements.slice(startIndex, endIndex);
  }


  onDeleteClick(advId: string){
    this.advertiseService.delete(advId);
  }

  onModifyClick(modAdv: Advertisement){
    this.advertiseService.modifiableAdv = modAdv;
    localStorage.setItem('modifiableAdv', JSON.stringify(this.advertiseService.modifiableAdv));
  }

  ngOnDestroy(): void{
    this.subscription1?.unsubscribe();
    this.subscription2?.unsubscribe();
    this.subscription3?.unsubscribe();
    this.subscription4?.unsubscribe();
  }
}
