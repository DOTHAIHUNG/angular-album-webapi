import {Component, OnInit} from '@angular/core';
import {IPhoto} from '../model/photo';
import {FormBuilder, FormGroup} from '@angular/forms';
import {PhotoService} from '../photo.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-photo-edit',
  templateUrl: './photo-edit.component.html',
  styleUrls: ['./photo-edit.component.css']
})
export class PhotoEditComponent implements OnInit {
  photo: IPhoto;
  photoForm: FormGroup;

  constructor(private photoService: PhotoService,
              private route: ActivatedRoute,
              private fb: FormBuilder,
              private router: Router) {
  }

  ngOnInit() {
    this.photoForm = this.fb.group({
      title: [''],
      url: [''],
      thumbnailUrl: ['']
    });
    const id = +this.route.snapshot.paramMap.get('id');
    this.photoService.getPhotoById(id).subscribe(
      data => {
        this.photo = data;
        this.photoForm.patchValue(this.photo);
      }, error => {
        console.log(error);
        this.photo = null;
      }
    );
  }

  onSubmit() {
    const {value} = this.photoForm;
    const data = {...this.photo, ...value};
    this.photoService.updatePost(data).subscribe(
      next => {
        this.router.navigate(['/photo']);
      }, error => console.log(error)
    );
  }

}
