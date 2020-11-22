import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardImageRightComponent } from './card-image-right.component';

describe('CardImageRightComponent', () => {
  let component: CardImageRightComponent;
  let fixture: ComponentFixture<CardImageRightComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardImageRightComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardImageRightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
