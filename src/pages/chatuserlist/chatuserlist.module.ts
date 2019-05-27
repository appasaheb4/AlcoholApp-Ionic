import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ChatuserlistPage } from './chatuserlist';

@NgModule({
  declarations: [
    ChatuserlistPage,
  ],
  imports: [
    IonicPageModule.forChild(ChatuserlistPage),
  ],
})
export class ChatuserlistPageModule {}
