import { Component } from '@angular/core';

@Component({
  selector: 'app-tab-header2',
  templateUrl: './tab-header2.component.html',
  styleUrls: ['./tab-header2.component.css']
})
export class TabHeader2Component {
  selectedTab: string = 'tab1';

  selectTab(tabName: string): void {
    this.selectedTab = tabName;
  }

}
