import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RefugeesPage } from './refugees';

@NgModule({
  declarations: [
    RefugeesPage,
  ],
  imports: [
    IonicPageModule.forChild(RefugeesPage),
  ],
  exports: [
    RefugeesPage
  ]
})
export class RefugeesPageModule {}
