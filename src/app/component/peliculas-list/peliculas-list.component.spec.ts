import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PeliculasListComponent } from './peliculas-list.component';

describe('PeliculasListComponent', () => {
  let component: PeliculasListComponent;
  let fixture: ComponentFixture<PeliculasListComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PeliculasListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PeliculasListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
