import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateDonkeyComponent } from './create-donkey/create-donkey.component';
import { ListDonkeyComponent } from './list-donkey/list-donkey.component';
import { UserDonkeyComponent } from './user-donkey/user-donkey.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateDonkeyComponent,
    ListDonkeyComponent,
    UserDonkeyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
