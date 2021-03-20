import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataLeagueComponent } from './data-league.component';

describe('DataLeagueComponent', () => {
  let component: DataLeagueComponent;
  let fixture: ComponentFixture<DataLeagueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataLeagueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DataLeagueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
