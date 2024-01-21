import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpaddeditComponent } from './empaddedit.component';

describe('EmpaddeditComponent', () => {
  let component: EmpaddeditComponent;
  let fixture: ComponentFixture<EmpaddeditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmpaddeditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpaddeditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
