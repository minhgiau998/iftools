import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxSpinnerModule } from "ngx-spinner";
import { AgmCoreModule } from '@agm/core';
import { ClipboardModule } from 'ngx-clipboard';
// for Router import:
import { LoadingBarRouterModule } from '@ngx-loading-bar/router';
// for Core import:
import { LoadingBarModule } from '@ngx-loading-bar/core';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AdminLayoutRoutes } from './admin-layout.routing';
import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { IconsComponent } from '../../pages/icons/icons.component';
import { MapsComponent } from '../../pages/maps/maps.component';
import { UserProfileComponent } from '../../pages/user-profile/user-profile.component';
import { TablesComponent } from '../../pages/tables/tables.component';
import { TracerouteComponent } from '../../pages/traceroute/traceroute.component';
import { TestingpingComponent } from '../../pages/testingping/testingping.component';
import { DnslookupComponent } from '../../pages/dnslookup/dnslookup.component';
import { WhoisComponent } from 'src/app/pages/whois/whois.component';
import { GeoipComponent } from 'src/app/pages/geoip/geoip.component';
import { PortscanComponent } from 'src/app/pages/portscan/portscan.component';
import { HttpheaderComponent } from 'src/app/pages/httpheader/httpheader.component';
import { PagelinkComponent } from 'src/app/pages/pagelink/pagelink.component';

// import { ToastrModule } from 'ngx-toastr';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule,
    ClipboardModule,
    NgxSpinnerModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBMju-D1uJ8slg4WsdVnFDEXrDLcNqUe94'
    }),
    // for Router use:
    LoadingBarRouterModule,
    // for Core use:
    LoadingBarModule,
  ],
  declarations: [
    DashboardComponent,
    UserProfileComponent,
    TablesComponent,
    IconsComponent,
    MapsComponent,
    TracerouteComponent,
    TestingpingComponent,
    DnslookupComponent,
    WhoisComponent,
    GeoipComponent,
    PortscanComponent,
    HttpheaderComponent,
    PagelinkComponent,
  ]
})

export class AdminLayoutModule {}
