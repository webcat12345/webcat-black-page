import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarDatepickerComponent } from './sidebar-datepicker.component';

describe('SidebarDatepickerComponent', () => {
  let component: SidebarDatepickerComponent;
  let fixture: ComponentFixture<SidebarDatepickerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SidebarDatepickerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarDatepickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
