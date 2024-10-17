import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotaspComponent } from './notasp.component';

describe('NotaspComponent', () => {
  let component: NotaspComponent;
  let fixture: ComponentFixture<NotaspComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NotaspComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NotaspComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
