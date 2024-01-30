import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-vertical-tabs',
  templateUrl: './vertical-tabs.component.html',
  styleUrls: ['./vertical-tabs.component.css']
})
export class VerticalTabsComponent {
  @Input() tabs: { title: string, content: string }[] = [];
  activeTabIndex: number = 0;

  setActiveTab(index: number): void {
    this.activeTabIndex = index;
  }

}
