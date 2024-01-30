import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IconBarComponent } from './icon-bar/icon-bar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AccordianComponent } from './core/accordian/accordian.component';
import { TabsComponent } from './core/tabs/tabs.component';
import { VerticalTabsComponent } from './core/vertical-tabs/vertical-tabs.component';
import { TabHeaderComponent } from './core/tab-header/tab-header.component';
import { TabHeader2Component } from './core/tab-header2/tab-header2.component';
import { FullpagetabsComponent } from './core/fullpagetabs/fullpagetabs.component';
import { TopNavigationComponent } from './core/top-navigation/top-navigation.component';
import { TopBarComponent } from './core/top-bar/top-bar.component';

@NgModule({
  declarations: [AppComponent, IconBarComponent, AccordianComponent, TabsComponent, VerticalTabsComponent, TabHeaderComponent, TabHeader2Component, FullpagetabsComponent, TopNavigationComponent, TopBarComponent],
  imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
