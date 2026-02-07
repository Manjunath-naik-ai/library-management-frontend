import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntryLayoutComponent } from './entry-layout.component';

describe('EntryLayoutComponent', () => {
  let component: EntryLayoutComponent;
  let fixture: ComponentFixture<EntryLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EntryLayoutComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EntryLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
