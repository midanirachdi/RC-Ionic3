import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { JobOffersPage } from './job-offers';

@NgModule({
  declarations: [
    JobOffersPage,
  ],
  imports: [
    IonicModule.forRoot(JobOffersPage),
  ],
  exports: [
    JobOffersPage
  ]
})
export class JobOffersPageModule {}
