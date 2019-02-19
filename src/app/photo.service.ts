import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {IPhoto} from './model/photo';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {
  private readonly API_URL = 'http://jsonplaceholder.typicode.com/photos';

  constructor(private http: HttpClient) {
  }

  getPhotos(count = 5): Observable<IPhoto[]> {
    return this.http.get<IPhoto[]>(this.API_URL).pipe(
      map(response => response.filter((photo, i) => i < count))
    );
  }

  getPhotoById(id: number): Observable<IPhoto> {
    return this.http.get<IPhoto>(`${this.API_URL}/${id}`);
  }

  createPhoto(photo: Partial<IPhoto>): Observable<IPhoto> {
    return this.http.post<IPhoto>(this.API_URL, photo);
  }

  deletePhoto(id: number): Observable<any> {
    console.log(id)
    return this.http.delete<IPhoto>(`${this.API_URL}/${id}`);
  }

  updatePost(photo: IPhoto): Observable<IPhoto> {
    console.log(photo.url);
    return this.http.patch<IPhoto>(`${this.API_URL}/${photo.id}`, photo);
  }
}
