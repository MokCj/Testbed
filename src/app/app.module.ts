import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {AppConfigService} from './app-config-service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {DragDropModule} from "@angular/cdk/drag-drop";
import {MatButtonModule} from "@angular/material/button";
import {MatMenuModule} from "@angular/material/menu";
import {ParentFolderComponent} from "./parent-folder-component/parent-folder.component";
import {MatIconModule} from "@angular/material/icon";
import {FileManagerComponent} from "./file-manager-component/file_manager-component";
import {MatStepperModule} from "@angular/material/stepper";
import {ModifiedStepperComponent} from "./modified-stepper-component/modified-stepper.component";
import {MatBadgeModule} from "@angular/material/badge";
import {TimerComponent} from "./timer-component/timer.component";
import {SecondTimerComponent} from "./second-timer-component/second-timer.component";
import {RouterModule, Routes} from "@angular/router";
import {NgrxMainComponent} from "./ngrx-component/ngrx-main.component";
import {authReducer} from "./ngrx-component/reducer/auth.reducer";
import { StoreModule } from '@ngrx/store';
import {AuthEffects} from "./ngrx-component/effects/auth.effects";
import { EffectsModule } from '@ngrx/effects';
import {MultiLineComponent} from "./multiline-snackbar/multiline-snackbar.component";
import {MatSnackBarModule} from "@angular/material/snack-bar";
import {CustomizedSnackbarComponent} from "./multiline-snackbar/customized-snackbar.component";
import {AuthComponent} from "./auth-component/auth.component";
import {LoginComponent} from "./auth-component/login.component";

/**
 * This is the main module of the application.
 * It contains the root component and the routes.
 * The root component is the entry point of the application.
 * The routes are used to navigate between the components.
 *
 */
const routes: Routes = [
  { path: 'timer', component: TimerComponent },
  { path: 'second-timer', component: SecondTimerComponent },
  { path: '', redirectTo: '/timer', pathMatch: 'full' },
  { path: 'ngrx-test', component: NgrxMainComponent },
  { path: 'multiline', component: MultiLineComponent },
]

@NgModule({
  declarations: [
    AppComponent,
    ParentFolderComponent,
    FileManagerComponent,
    ModifiedStepperComponent,
    TimerComponent,
    SecondTimerComponent,
    NgrxMainComponent,
    MultiLineComponent,
    CustomizedSnackbarComponent,
    AuthComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    DragDropModule,
    MatMenuModule,
    MatButtonModule,
    MatIconModule,
    MatStepperModule,
    MatBadgeModule,
    MatSnackBarModule,
    RouterModule.forRoot(routes),
    StoreModule.forRoot({auth: authReducer}),
    EffectsModule.forRoot([AuthEffects]),
  ],
  exports: [RouterModule],
  providers: [AppConfigService, AuthEffects],
  bootstrap: [AppComponent]
})
export class AppModule {

}
