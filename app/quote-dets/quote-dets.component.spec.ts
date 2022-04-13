import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuoteDetsComponent } from './quote-dets.component';

describe('QuoteDetsComponent', () => {
  let component: QuoteDetsComponent;
  let fixture: ComponentFixture<QuoteDetsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuoteDetsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuoteDetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
