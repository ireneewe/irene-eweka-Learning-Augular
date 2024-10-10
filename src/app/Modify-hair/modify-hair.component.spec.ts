import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifyHairComponent } from './modify-hair.component';

describe('ModifyHairComponent', () => {
  let component: ModifyHairComponent;
  let fixture: ComponentFixture<ModifyHairComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModifyHairComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModifyHairComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
