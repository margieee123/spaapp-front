import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClienteDash } from './cliente-dash';

describe('ClienteDash', () => {
  let component: ClienteDash;
  let fixture: ComponentFixture<ClienteDash>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClienteDash],
    }).compileComponents();

    fixture = TestBed.createComponent(ClienteDash);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
