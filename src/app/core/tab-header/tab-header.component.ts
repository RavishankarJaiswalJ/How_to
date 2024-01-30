import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-tab-header',
  templateUrl: './tab-header.component.html',
  styleUrls: ['./tab-header.component.css']
})
export class TabHeaderComponent implements OnInit{
  // @Input() title: string = '';
  // @Input() active: boolean = false;
  // @Output() tabClick = new EventEmitter<void>();

  // onTabClick(): void {
  //   this.tabClick.emit();
  // }

  ngOnInit() {
    this.openCity('London', 'red');
  }

  openCity(cityName: string, color: string): void {
    const tabcontent = document.getElementsByClassName("tabcontent");
    for (let i = 0; i < tabcontent.length; i++) {
      (tabcontent[i] as HTMLElement).style.display = "none";
    }
    
    const tablinks = document.getElementsByClassName("tablink");
    for (let i = 0; i < tablinks.length; i++) {
      (tablinks[i] as HTMLElement).style.backgroundColor = "";
    }
    
    const selectedCity = document.getElementById(cityName);
    if (selectedCity) {
      selectedCity.style.display = "block";
    }

    const selectedTablink = document.getElementById(cityName + '-tab');
    if (selectedTablink) {
      selectedTablink.style.backgroundColor = color;
    }
  }

}
