import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PoliticadeprivComponent } from './politicadepriv.component';

describe('PoliticadeprivComponent', () => {
  let component: PoliticadeprivComponent;
  let fixture: ComponentFixture<PoliticadeprivComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PoliticadeprivComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PoliticadeprivComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
