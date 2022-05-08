import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Observable } from 'rxjs';
import { FileUploadService } from '../services/file-upload.service';

@Component({
  selector: 'app-upload-images',
  templateUrl: './upload-images.component.html',
  styleUrls: ['./upload-images.component.scss']
})
export class UploadImagesComponent implements OnInit, OnChanges {
  @Input() selectedFiles?: FileList;
  selectedFileNames: string[] = [];
  progressInfos: any[] = [];
  previews: string[] = [];
  imageInfos?: Observable<any>;
  path?: File;
  constructor(private uploadService: FileUploadService) { }

  selectFiles(event: any): void {
    this.progressInfos = [];
    this.selectedFileNames = [];
    // this.selectedFiles = event.target.files[0];
    this.previews = [];
    // if (this.selectedFiles && this.selectedFiles[0]) {
    //   const numberOfFiles = this.selectedFiles.length;
    //   for (let i = 0; i < numberOfFiles; i++) {
    //     const reader = new FileReader();
    //     reader.onload = (e: any) => {
    //       console.log(e.target.result);
    //       this.previews.push(e.target.result);
    //     };
    //     reader.readAsDataURL(this.selectedFiles[i]);
    //     this.selectedFileNames.push(this.selectedFiles[i].name);
    //   }
    // }
    const reader = new FileReader();
        reader.onload = (e: any) => {
        console.log(e.target.result);
        this.previews.push(e.target.result);
    };
    reader.readAsDataURL(event.target.files[0]);
    this.path = event.target.files[0];
    console.log(this.path);
    this.selectedFileNames.push(event.target.files[0].name);
  }

  ngOnInit(): void {
  }

  ngOnChanges(): void {

  }
}

