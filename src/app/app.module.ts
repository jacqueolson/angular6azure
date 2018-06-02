import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DemoTableComponent } from './demo-table/demo-table.component';
import { MatTableModule, MatPaginatorModule, MatSortModule, MatGridListModule,
   MatCardModule, MatMenuModule, MatIconModule, MatButtonModule, MatToolbarModule,
    MatSidenavModule, MatListModule } from '@angular/material';
import { DemoDashboardComponent } from './demo-dashboard/demo-dashboard.component';
import { DemoNavComponent } from './demo-nav/demo-nav.component';
import { LayoutModule } from '@angular/cdk/layout';

const appRoutes: Routes = [
  { path: 'demoTable', component: DemoTableComponent },
  { path: 'demoDashboard',      component: DemoDashboardComponent },
  { path: 'demoNav', component: DemoNavComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    DemoTableComponent,
    DemoDashboardComponent,
    DemoNavComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    LayoutModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
