import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentcontentComponent } from './parentcontent.component';

describe('ParentcontentComponent', () => {
  let component: ParentcontentComponent;
  let fixture: ComponentFixture<ParentcontentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ParentcontentComponent]
    });
    fixture = TestBed.createComponent(ParentcontentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
