import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TerminosdeserComponent } from './terminosdeser.component';

describe('TerminosdeserComponent', () => {
  let component: TerminosdeserComponent;
  let fixture: ComponentFixture<TerminosdeserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TerminosdeserComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TerminosdeserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
