import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AnimationComponent } from './practice/animation/animation.component';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './practice/main/main.component';

const appRoutes: Routes = [
  { path: 'animation', component: AnimationComponent },
  { path: '', component: MainComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    AnimationComponent,
    MainComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
