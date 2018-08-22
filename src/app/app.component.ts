import { Component } from '@angular/core';

import { LibraryComponent } from './library/library.component';
import { PlaylistComponent } from './playlist/playlist.component';
import { SettingsComponent } from './settings/settings.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'BassOS'
  tab1 = LibraryComponent
  tab2 = PlaylistComponent
  tab3 = SettingsComponent
}
