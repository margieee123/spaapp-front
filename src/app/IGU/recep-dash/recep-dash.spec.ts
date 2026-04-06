import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecepDash } from './recep-dash';

describe('RecepDash', () => {
  let component: RecepDash;
  let fixture: ComponentFixture<RecepDash>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecepDash],
    }).compileComponents();

    fixture = TestBed.createComponent(RecepDash);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
