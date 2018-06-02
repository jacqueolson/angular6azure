
import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoTableComponent } from './demo-table.component';

describe('DemoTableComponent', () => {
  let component: DemoTableComponent;
  let fixture: ComponentFixture<DemoTableComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DemoTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
