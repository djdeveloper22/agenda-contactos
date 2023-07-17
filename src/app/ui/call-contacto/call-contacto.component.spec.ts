import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CallContactoComponent } from './call-contacto.component';

describe('CallContactoComponent', () => {
  let component: CallContactoComponent;
  let fixture: ComponentFixture<CallContactoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CallContactoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CallContactoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
