import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Inicioespeci } from './inicioespeci';

describe('Inicioespeci', () => {
  let component: Inicioespeci;
  let fixture: ComponentFixture<Inicioespeci>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Inicioespeci],
    }).compileComponents();

    fixture = TestBed.createComponent(Inicioespeci);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
