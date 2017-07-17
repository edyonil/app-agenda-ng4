import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContatoDetailComponent } from './contato-detail.component';

describe('ContatoDetailComponent', () => {
  let component: ContatoDetailComponent;
  let fixture: ComponentFixture<ContatoDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContatoDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContatoDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
