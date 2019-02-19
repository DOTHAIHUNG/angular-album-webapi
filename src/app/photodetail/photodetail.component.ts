import {Component, OnInit} from '@angular/core';
import {IPhoto} from '../model/photo';
import {ActivatedRoute} from '@angular/router';
import {PhotoService} from '../photo.service';

@Component({
  selector: 'app-photodetail',
  templateUrl: './photodetail.component.html',
  styleUrls: ['./photodetail.component.css']
})
export class PhotodetailComponent implements OnInit {
  photo: IPhoto;

  constructor(private route: ActivatedRoute,
              private photoService: PhotoService) {
  }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.photoService.getPhotoById(id).subscribe(
      data => (this.photo = data),
      error => {
        console.log(error);
        this.photo = null;
      }
    );
  }
}
