import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaygamesComponent } from './playgames.component';

describe('PlaygamesComponent', () => {
  let component: PlaygamesComponent;
  let fixture: ComponentFixture<PlaygamesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlaygamesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlaygamesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
