import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChoosingRoleComponent } from './choosing-role.component';

describe('ChoosingRoleComponent', () => {
  let component: ChoosingRoleComponent;
  let fixture: ComponentFixture<ChoosingRoleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChoosingRoleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChoosingRoleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
