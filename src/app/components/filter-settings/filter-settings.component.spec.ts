import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterSettingsComponent } from './filter-settings.component';

describe('FilterSettingsComponent', () => {
  let component: FilterSettingsComponent;
  let fixture: ComponentFixture<FilterSettingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilterSettingsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FilterSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
