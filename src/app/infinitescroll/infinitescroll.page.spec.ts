import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InfinitescrollPage } from './infinitescroll.page';

describe('InfinitescrollPage', () => {
  let component: InfinitescrollPage;
  let fixture: ComponentFixture<InfinitescrollPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(InfinitescrollPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
