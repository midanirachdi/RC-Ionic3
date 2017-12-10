import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { JobOfferAddPage } from './job-offer-add';

@NgModule({
  declarations: [
    JobOfferAddPage,
  ],
  imports: [
    IonicPageModule.forChild(JobOfferAddPage),
  ],
})
export class JobOfferAddPageModule {}
