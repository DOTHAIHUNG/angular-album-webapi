import {Component, OnInit} from '@angular/core';
import {IPhoto} from '../model/photo';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {PhotoService} from '../photo.service';

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.css']
})
export class PhotoComponent implements OnInit {
  photos: IPhoto[] = [];
  inputControl: FormGroup;

  constructor(private photoService: PhotoService,
              private fb: FormBuilder) {
  }

  ngOnInit() {
    this.inputControl = this.fb.group({
      title: [''],
      url: [''],
      thumbnailUrl: ['']
    });
    this.photoService.getPhotos()
      .subscribe(data => (this.photos = data), error => console.log(error));
  }

  onSubmit() {
    const {value} = this.inputControl;
    this.photoService.createPhoto(value)
      .subscribe(data => {
        this.photos.unshift(data);
        this.inputControl.reset({
          title: '',
          url: '',
          thumbnailUrl: ''
        });
      }, error => console.log(error));
  }

  deletePhoto(i) {
    const photo = this.photos[i];
    this.photoService.deletePhoto(photo.id).subscribe(() => {
      this.photos = this.photos.filter(t => t.id !== photo.id);
    });
  }

}
