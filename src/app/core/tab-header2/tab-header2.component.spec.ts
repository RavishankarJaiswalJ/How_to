import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabHeader2Component } from './tab-header2.component';

describe('TabHeader2Component', () => {
  let component: TabHeader2Component;
  let fixture: ComponentFixture<TabHeader2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TabHeader2Component]
    });
    fixture = TestBed.createComponent(TabHeader2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
