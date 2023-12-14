import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ManageEmployersPage } from './manage-employers.page';

describe('ManageEmployersPage', () => {
  let component: ManageEmployersPage;
  let fixture: ComponentFixture<ManageEmployersPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ManageEmployersPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
