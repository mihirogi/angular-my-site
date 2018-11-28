import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfileComponent } from './profile/profile.component';
import { ArtComponent } from './art/art.component';
import { DevelopComponent } from './develop/develop.component';

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    ArtComponent,
    DevelopComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
