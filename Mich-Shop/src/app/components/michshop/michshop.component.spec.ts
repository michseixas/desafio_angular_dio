import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MichShopComponent } from './MichShop.component';

describe('MichShopComponent', () => {
  let component: MichShopComponent;
  let fixture: ComponentFixture<MichShopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MichShopComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MichShopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
