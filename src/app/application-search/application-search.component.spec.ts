import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ApplicationSearchComponent } from './application-search.component';

describe('ApplicationSearchComponent', () => {
  let component: ApplicationSearchComponent;
  let fixture: ComponentFixture<ApplicationSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ApplicationSearchComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplicationSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  // You can add more test cases based on your component's functionality
});
