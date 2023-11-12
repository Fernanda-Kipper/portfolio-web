import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainAnimationComponent } from './main-animation.component';

describe('MainAnimationComponent', () => {
  let component: MainAnimationComponent;
  let fixture: ComponentFixture<MainAnimationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MainAnimationComponent]
    });
    fixture = TestBed.createComponent(MainAnimationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
