import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LatestWorldNewsComponent } from './latest-world-news.component';

describe('LatestWorldNewsComponent', () => {
  let component: LatestWorldNewsComponent;
  let fixture: ComponentFixture<LatestWorldNewsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LatestWorldNewsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LatestWorldNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
