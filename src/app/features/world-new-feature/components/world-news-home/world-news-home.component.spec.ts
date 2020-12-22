import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorldNewsHomeComponent } from './world-news-home.component';

describe('WorldNewsHomeComponent', () => {
  let component: WorldNewsHomeComponent;
  let fixture: ComponentFixture<WorldNewsHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorldNewsHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorldNewsHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
