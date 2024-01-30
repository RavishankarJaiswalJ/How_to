import { Component, ViewEncapsulation } from '@angular/core';
import { HostBinding } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  // ...
} from '@angular/animations';

@Component({
  selector: 'app-icon-bar',
  templateUrl: './icon-bar.component.html',
  styleUrls: ['./icon-bar.component.css'],
  // encapsulation: ViewEncapsulation.Emulated 
  // animations:[transition,trigger,state,style,animate,]
})
export class IconBarComponent {

  accordionItems = [
    { title: 'Postion 1', content: 'Content for item 1', expanded: false },
    { title: 'Postion 2', content: 'Content for item 2', expanded: false },
    { title: 'Postion 2', content: 'Content for item 3', expanded: false },
    // Add more items as needed
  ];

  tabs = [
    { title: 'Tab 1', content: 'Content for Tab 1' },
    { title: 'Tab 2', content: 'Content for Tab 2' },
    { title: 'Tab 3', content: 'Content for Tab 3' }
  ];

  activeTabIndex: number = 0;

  setActiveTab(index: number): void {
    this.activeTabIndex = index;
  }
 
}

