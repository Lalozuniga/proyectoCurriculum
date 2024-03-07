import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AlgoritmosSimplesPage } from './algoritmos-simples.page';

describe('AlgoritmosSimplesPage', () => {
  let component: AlgoritmosSimplesPage;
  let fixture: ComponentFixture<AlgoritmosSimplesPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AlgoritmosSimplesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
