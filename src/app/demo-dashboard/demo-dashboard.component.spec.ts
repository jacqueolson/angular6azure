
import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoDashboardComponent } from './demo-dashboard.component';

describe('DemoDashboardComponent', () => {
  let component: DemoDashboardComponent;
  let fixture: ComponentFixture<DemoDashboardComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoDashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DemoDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
