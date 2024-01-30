import { AfterViewInit, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fullpagetabs',
  templateUrl: './fullpagetabs.component.html',
  styleUrls: ['./fullpagetabs.component.css']
})
export class FullpagetabsComponent implements  AfterViewInit{
  selectedTab: string = 'tab1';
  // ngOnInit() {
  //   this.selectTabs('tab1');
  // }
  selectTab(tabName: string): void {
    this.selectedTab = tabName;
  }
  ngAfterViewInit() {
    // Initially select the first tab
    this.selectTab;
  }
  // selectTab(cityName: string,color:string): void {
  //   const tabcontent = document.getElementsByClassName("tab-content");
  //   for (let i = 0; i < tabcontent.length; i++) {
  //     (tabcontent[i] as HTMLElement).style.display = "none";
  //   }
    
  //   // const tablinks = document.getElementsByClassName("tablink");
  //   // for (let i = 0; i < tablinks.length; i++) {
  //   //   (tablinks[i] as HTMLElement).style.backgroundColor = "";
  //   // }
    
  //   const selectedCity = document.getElementById(cityName);
  //   if (selectedCity) {
  //     selectedCity.style.display = "block";
  //   }
  //   const selectedTablink = document.getElementById(cityName + '-tab');
  //   if (selectedTablink) {
  //     selectedTablink.style.backgroundColor = color;
  //   }

  // }
  

}
