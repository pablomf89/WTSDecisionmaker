import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from "./footer/footer.component";
import { GlobalElementsComponent } from "./global-elements/global-elements.component";

//Angular Material Components

import { MatInputModule } from "@angular/material/input";
import { MatAutocompleteModule } from "@angular/material/autocomplete";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatRadioModule } from "@angular/material/radio";
import { MatSelectModule } from "@angular/material/select";
import { MatSliderModule } from "@angular/material/slider";
import { MatSlideToggleModule } from "@angular/material/slide-toggle";
import { MatMenuModule } from "@angular/material/menu";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatListModule } from "@angular/material/list";
import { MatGridListModule } from "@angular/material/grid-list";
import { MatCardModule } from "@angular/material/card";
import { MatStepperModule } from "@angular/material/stepper";
import { MatTabsModule } from "@angular/material/tabs";
import { MatExpansionModule } from "@angular/material/expansion";
import { MatButtonToggleModule } from "@angular/material/button-toggle";
import { MatChipsModule } from "@angular/material/chips";
import { MatIconModule } from "@angular/material/icon";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { MatProgressBarModule } from "@angular/material/progress-bar";
import { MatDialogModule } from "@angular/material/dialog";
import { MatTooltipModule } from "@angular/material/tooltip";
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { MatTableModule } from "@angular/material/table";
import { MatSortModule } from "@angular/material/sort";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatButtonModule } from "@angular/material/button";
import { MatBadgeModule } from "@angular/material/badge";

import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { WizardComponent } from "./wizard/wizard.component";
import { LoginComponent } from "./login/login.component";
import { ResetPasswordComponent } from "./reset-password/reset-password.component";
import { ForgottenPasswordComponent } from "./forgottenPassword/forgottenPassword.component";
import { DecisionsComponent } from "./decisions/decisions.component";
import { UploadDialogComponent } from "./shared/component/dialog/dialog.component";
import { DecisionDetailsComponent } from "./decision-details/decision-details.component";
import { DecisionEditComponent } from "./decision-edit/decision-edit.component";
import { ReportsComponent } from "./reports/reports.component";
import { ReportDetailsComponent } from "./report-details/report-details.component";
import { ReportEditComponent } from "./report-edit/report-edit.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
const appRoutes: Routes = [
  { path: "", component: HomeComponent },
  { path: "global", component: GlobalElementsComponent },
  { path: "wizard", component: WizardComponent },
  { path: "login", component: LoginComponent },
  { path: "forgottenPassword", component: ForgottenPasswordComponent },
  { path: "reset-password", component: ResetPasswordComponent },
  { path: "decisions", component: DecisionsComponent },
  { path: "dialog-upload", component: UploadDialogComponent },
  { path: "decision-details", component: DecisionDetailsComponent },
  { path: "decision-edit", component: DecisionEditComponent },
  { path: "reports", component: ReportsComponent },
  { path: "report-details", component: ReportDetailsComponent },
  { path: "report-edit", component: ReportEditComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    GlobalElementsComponent,
    HomeComponent,
    WizardComponent,
    LoginComponent,
    ForgottenPasswordComponent,
    ResetPasswordComponent,
    DecisionsComponent,
    UploadDialogComponent,
    DecisionDetailsComponent,
    DecisionEditComponent,
    ReportsComponent,
    ReportDetailsComponent,
    ReportEditComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,

      { enableTracing: true, useHash: true } // <-- debugging purposes only
    ),
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatCheckboxModule,
    MatInputModule,
    MatAutocompleteModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatRadioModule,
    MatSelectModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatMenuModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatStepperModule,
    MatTabsModule,
    MatExpansionModule,
    MatButtonToggleModule,
    MatChipsModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    MatDialogModule,
    MatTooltipModule,
    MatSnackBarModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatButtonModule,
    MatBadgeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
