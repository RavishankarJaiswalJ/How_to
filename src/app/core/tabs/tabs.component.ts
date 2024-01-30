import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent {
  @Input() tabs: { title: string, subtitle:string, content: string }[] = [];
  activeTabIndex: number = 0;

  setActiveTab(index: number): void {
    this.activeTabIndex = index;
  }

  // @Input() tabs: any[] = [];
  // selectedTab: string = 'Tab 1';

  // selectTab(tab: string): void {
  //   this.selectedTab = tab;
  // }

}
