import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ConwayPage } from './conway.page';

describe('ConwayPage', () => {
  let component: ConwayPage;
  let fixture: ComponentFixture<ConwayPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ConwayPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
