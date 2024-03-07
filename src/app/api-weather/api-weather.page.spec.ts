import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ApiWeatherPage } from './api-weather.page';

describe('ApiWeatherPage', () => {
  let component: ApiWeatherPage;
  let fixture: ComponentFixture<ApiWeatherPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ApiWeatherPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
