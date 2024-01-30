import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FullpagetabsComponent } from './fullpagetabs.component';

describe('FullpagetabsComponent', () => {
  let component: FullpagetabsComponent;
  let fixture: ComponentFixture<FullpagetabsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FullpagetabsComponent]
    });
    fixture = TestBed.createComponent(FullpagetabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
