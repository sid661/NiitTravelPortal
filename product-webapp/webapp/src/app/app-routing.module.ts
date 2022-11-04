import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CabComponent } from './component/cab/cab.component';
import { CabsComponent } from './component/cabs/cabs.component';
import { ExploreComponent } from './component/explore/explore.component';
import { HolidaypackagesComponent } from './component/holidaypackages/holidaypackages.component';
import { HotelComponent } from './component/hotel/hotel.component';
import { HotelsComponent } from './component/hotels/hotels.component';
import { LandingpageComponent } from './component/landingpage/landingpage.component';
import { LoginComponent } from './component/login/login.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { PackageRegistrationComponent } from './component/package-registration/package-registration.component';
import { PackageComponent } from './component/package/package.component';
import { PlacesComponent } from './component/places/places.component';
import { RegisterComponent } from './component/register/register.component';
import { RollerComponent } from './component/roller/roller.component';
import { Roller2Component } from './component/roller2/roller2.component';
import { ViewhotelComponent } from './component/viewhotel/viewhotel.component';

const routes: Routes = [

  {path:'',component:LandingpageComponent,children:[{
    path:'',component:HotelsComponent},
    {path:'hotel1',component:HotelComponent},
  {path:'navbar',component:NavbarComponent},
  {path:'hotels',component:HotelsComponent},
  {path:'cabs',component:CabsComponent},
  {path:'cab',component:CabComponent},
  {path:'explore',component:ExploreComponent},
  {path:'holidaypackage',component:HolidaypackagesComponent
  },
  {path:'places',component:PlacesComponent},
  {path:'package',component:PackageComponent},
  {path:'viewhotel',component:ViewhotelComponent}
]},
  
  {path:'login',component:LoginComponent},
  {path:"register",component:RegisterComponent},
  {path:"reg",component:PackageRegistrationComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

