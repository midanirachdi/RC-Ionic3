import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { JobOfferPage } from './job-offer';

@NgModule({
  declarations: [
    JobOfferPage,
  ],
  imports: [
    IonicPageModule.forChild(JobOfferPage),
  ],
})
export class JobOfferPageModule {}
