import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectedValueComponent } from './selected-value.component';

describe('SelectedValueComponent', () => {
  let component: SelectedValueComponent;
  let fixture: ComponentFixture<SelectedValueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SelectedValueComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectedValueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
