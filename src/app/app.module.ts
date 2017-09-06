import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import { RuleFilterPipe } from './rule-filter.pipe';
import { RegionFilterPipe } from './region-filter.pipe';
import {NglModule} from 'ng-lightning';

@NgModule({
  declarations: [
    AppComponent,
    RuleFilterPipe,
    RegionFilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NglModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
