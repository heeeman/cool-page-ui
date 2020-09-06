import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BackendComponentComponent } from './backend-component.component';

describe('BackendComponentComponent', () => {
  let component: BackendComponentComponent;
  let fixture: ComponentFixture<BackendComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BackendComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BackendComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
