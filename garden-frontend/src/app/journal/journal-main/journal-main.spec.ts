import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JournalMain } from './journal-main';

describe('JournalMain', () => {
  let component: JournalMain;
  let fixture: ComponentFixture<JournalMain>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JournalMain]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JournalMain);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
