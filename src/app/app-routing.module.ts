import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {PhotoComponent} from './photo/photo.component';
import {PhotodetailComponent} from './photodetail/photodetail.component';
import {PhotoEditComponent} from './photo-edit/photo-edit.component';
import {AppComponent} from './app.component';

const routes: Routes = [
  {path: 'photo', component: PhotoComponent},
  {path: 'photo/:id', component: PhotodetailComponent},
  {path: 'photo/:id/edit', component: PhotoEditComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
