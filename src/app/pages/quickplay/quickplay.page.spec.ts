import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuickplayPage } from './quickplay.page';

describe('QuickplayPage', () => {
  let component: QuickplayPage;
  let fixture: ComponentFixture<QuickplayPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [QuickplayPage],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuickplayPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
