import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TerapeutaDash } from './terapeuta-dash';

describe('TerapeutaDash', () => {
  let component: TerapeutaDash;
  let fixture: ComponentFixture<TerapeutaDash>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TerapeutaDash],
    }).compileComponents();

    fixture = TestBed.createComponent(TerapeutaDash);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
