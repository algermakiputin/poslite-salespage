import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SinglePageBlogComponentComponent } from './single-page-blog-component.component';

describe('SinglePageBlogComponentComponent', () => {
  let component: SinglePageBlogComponentComponent;
  let fixture: ComponentFixture<SinglePageBlogComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SinglePageBlogComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SinglePageBlogComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
