import { Component, OnChanges, OnInit, OnDestroy } from '@angular/core';
import { AdvertiseService } from '../../shared/services/advertise.service';
import { Advertisement } from '../../shared/models/Advertisement';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { PageEvent } from '@angular/material/paginator';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-real-estates',
  templateUrl: './real-estates.component.html',
  styleUrls: ['./real-estates.component.scss']
})
export class RealEstatesComponent implements OnInit, OnChanges, OnDestroy {
  subscription1?: Subscription;
  subscription2?: Subscription;
  advertisements: Array<Advertisement> = [];
  pageSlice?: Array<Advertisement>;

  constructor(private advertiseService: AdvertiseService, private storage: AngularFireStorage) { }
  
  ngOnChanges(): void{
    this.subscription1 = this.advertiseService.findAll().subscribe(advertisements => {
      this.advertisements = advertisements;
      for(let i = 0; i < advertisements.length, i++;){
        this.storage.ref(advertisements[i].index_image).getDownloadURL().subscribe(data => {
          advertisements[i].index_image = data;
        }).unsubscribe()
      }
    })
  }

  ngOnInit(): void {
    this.subscription2 = this.advertiseService.findAll().subscribe(advertisements => {
      this.advertisements = advertisements;
      this.pageSlice = this.advertisements.slice(0, 8);
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

  ngOnDestroy(): void {
    this.subscription1?.unsubscribe();
    this.subscription2?.unsubscribe();
  }
}
