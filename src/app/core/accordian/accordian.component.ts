import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-accordian',
  templateUrl: './accordian.component.html',
  styleUrls: ['./accordian.component.css']
})
export class AccordianComponent {
  // items = [
  //   { title: 'Section 1', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste dolore undecumque obcaecati molestiae possimus dolores tempore autem quis est?Blanditiis atque, assumenda veniam delectus illum dicta nulla facilismollitia cupiditate natus deleniti rem voluptatibus aspernatur minus nequeeveniet reprehenderit enim quas magnam? Facilis commodi optio, blanditiisnecessitatibus labore adipisci?', expanded: false },
  //   { title: 'Section 2', content: 'Content for Section 2', expanded: false },
    // Add more sections as needed
  // ];
  @Input() items: any[] = [];

  // toggleItem(index: number): void {
  //   this.items[index].expanded = !this.items[index].expanded;
  // }
  toggleItem(item: any) {
    item.expanded = !item.expanded;
  }
}
