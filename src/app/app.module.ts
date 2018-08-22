import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { OnsenModule } from 'ngx-onsenui';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';


import { AppComponent } from './app.component';
import { PlaylistComponent } from './playlist/playlist.component';
import { SettingsComponent } from './settings/settings.component';
import { LibraryComponent } from './library/library.component';

@NgModule({
  declarations: [
    AppComponent,
    PlaylistComponent,
    SettingsComponent,
    LibraryComponent
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  imports: [
    BrowserModule,
    OnsenModule
  ],
  entryComponents: [
    PlaylistComponent,
    SettingsComponent,
    LibraryComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
