import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserSavedListingsComponent } from './user-saved-listings.component';

describe('UserSavedListingsComponent', () => {
  let component: UserSavedListingsComponent;
  let fixture: ComponentFixture<UserSavedListingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserSavedListingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserSavedListingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
