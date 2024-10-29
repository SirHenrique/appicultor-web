import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiarioComponent } from './apiario.component';

describe('ApiarioComponent', () => {
  let component: ApiarioComponent;
  let fixture: ComponentFixture<ApiarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApiarioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApiarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
