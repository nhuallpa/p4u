import { bootstrap } from '@angular/platform-browser-dynamic';
import {HTTP_PROVIDERS} from '@angular/http';
import { enableProdMode } from '@angular/core';
import { AppComponent, environment} from './app/';
import { UserSettingsService } from './app/user-settings.service';
import { AppSettingsService } from './app/app-settings.service';
import { AppService } from './app/app.service';

if (environment.production) {
  enableProdMode();
}

bootstrap(AppComponent, [HTTP_PROVIDERS, UserSettingsService, AppSettingsService, 
	AppService]);
