import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeccionListContactosComponent } from './seccion-list-contactos.component';

describe('SeccionListContactosComponent', () => {
  let component: SeccionListContactosComponent;
  let fixture: ComponentFixture<SeccionListContactosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeccionListContactosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeccionListContactosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
