import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RefugeeListJobOffersPage } from './refugee-list-job-offers';

@NgModule({
  declarations: [
    RefugeeListJobOffersPage,
  ],
  imports: [
    IonicPageModule.forChild(RefugeeListJobOffersPage),
  ],
})
export class RefugeeListJobOffersPageModule {}
