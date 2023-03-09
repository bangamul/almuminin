import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MaulidsimtuddurrorPage } from './maulidsimtuddurror.page';

describe('MaulidsimtuddurrorPage', () => {
  let component: MaulidsimtuddurrorPage;
  let fixture: ComponentFixture<MaulidsimtuddurrorPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MaulidsimtuddurrorPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MaulidsimtuddurrorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
