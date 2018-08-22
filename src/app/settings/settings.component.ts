import { Component, OnInit } from '@angular/core';
import { SettingSection } from '../setting-section';
import { Setting } from '../setting';
import { Switch } from '../switch';

@Component({
  selector: 'ons-page[settings]',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})

export class SettingsComponent implements OnInit {

	switch_array: Switch[] = [{id: 0, name: "Testknopf", active: true, state: true}];
  sections: SettingSection[] = [
    {
      name: "Input wechsel",
      settings: [
        { title: "Automatisch", subtitle: "Aktiviert", icon: "ion-arrow-swap", state: false, active: false, id: "auto_source" }
      ]
    },
    {
      name: "Dienste",
      settings: [
        { title: "Mopidy", subtitle: "Aktiviert", icon: "ion-bluetooth", state: true, active: true, id: "mopidy" },
        { title: "Airplay", subtitle: "Aktiviert", icon: "ion-bluetooth", state: false, active: false, id: "airplay" },
        { title: "Bluetooth", subtitle: "Aktiviert", icon: "ion-bluetooth", state: false, active: false, id: "bluetooth" },
        { title: "Bluetooth", subtitle: "Koppeln", icon: "ion-bluetooth", state: false, active: false, id: "bluetooth_pairable" }
      ]
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
