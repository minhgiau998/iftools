import { Routes } from '@angular/router';

import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { IconsComponent } from '../../pages/icons/icons.component';
import { MapsComponent } from '../../pages/maps/maps.component';
import { UserProfileComponent } from '../../pages/user-profile/user-profile.component';
import { TablesComponent } from '../../pages/tables/tables.component';
import { TracerouteComponent } from '../../pages/traceroute/traceroute.component';
import { TestingpingComponent } from 'src/app/pages/testingping/testingping.component';
import { DnslookupComponent } from 'src/app/pages/dnslookup/dnslookup.component';
import { WhoisComponent } from 'src/app/pages/whois/whois.component';
import { GeoipComponent } from 'src/app/pages/geoip/geoip.component';
import { PortscanComponent } from 'src/app/pages/portscan/portscan.component';
import { HttpheaderComponent } from 'src/app/pages/httpheader/httpheader.component';
import { PagelinkComponent } from 'src/app/pages/pagelink/pagelink.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'introduction', component: DashboardComponent },
    { path: 'about', component: UserProfileComponent },
    { path: 'tables', component: TablesComponent },
    { path: 'icons', component: IconsComponent },
    { path: 'maps', component: MapsComponent },
    { path: 'traceroute', component: TracerouteComponent },
    { path: 'testing-ping', component: TestingpingComponent },
    { path: 'dns-lookup', component: DnslookupComponent},
    { path: 'whois', component: WhoisComponent },
    { path: 'geoip', component: GeoipComponent },
    { path: 'port-scan', component: PortscanComponent },
    { path: 'http-header', component: HttpheaderComponent },
    { path: 'page-link', component: PagelinkComponent },
];
