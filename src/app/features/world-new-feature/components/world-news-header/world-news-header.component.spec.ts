import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorldNewsHeaderComponent } from './world-news-header.component';

describe('WorldNewsHeaderComponent', () => {
  let component: WorldNewsHeaderComponent;
  let fixture: ComponentFixture<WorldNewsHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorldNewsHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorldNewsHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
