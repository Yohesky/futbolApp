import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyPlayersComponent } from './my-players.component';

describe('MyPlayersComponent', () => {
  let component: MyPlayersComponent;
  let fixture: ComponentFixture<MyPlayersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyPlayersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyPlayersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
