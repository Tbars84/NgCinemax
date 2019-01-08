import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingPageComponent } from '@landing-components/landing-page.component';
import { MoviesFilterComponent } from '@landing-components/movies-filter/movies-filter.component';
import { WeeklyBillboardsComponent } from '@landing-components/weekly-billboards/weekly-billboards.component';
import { WeeklyPremieresComponent } from '@landing-components/weekly-premieres/weekly-premieres.component';
import { NavbarSocialComponent } from '@landing-components/navbar-social/navbar-social.component';
import { NavbarMenuComponent } from '@landing-components/navbar-menu/navbar-menu.component';
import { MainSlidesComponent } from '@landing-components/main-slides/main-slides.component';
import { FooterComponent } from '@landing-components/footer/footer.component';
import { CarouselComponent } from '@landing-components/carousel/carousel.component';

describe('LandingPageComponent', () => {
  let component: LandingPageComponent;
  let fixture: ComponentFixture<LandingPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        LandingPageComponent,
        CarouselComponent,
        FooterComponent,
        MainSlidesComponent,
        MoviesFilterComponent,
        NavbarMenuComponent,
        NavbarSocialComponent,
        WeeklyBillboardsComponent,
        WeeklyPremieresComponent
      ]

    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LandingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('debe crear el componente', () => {
    expect(component).toBeTruthy();
  });
});
