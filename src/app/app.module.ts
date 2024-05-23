import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ModalComponent } from './modal/modal.component';
import { RulesComponent } from './rules/rules.component';
import { GameComponent } from './game/game.component';
import { ScoreComponent } from './score/score.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { PlaygamesComponent } from './playgames/playgames.component';
import { ConnectionsComponent } from './connections/connections.component';
import { HttpClientModule } from '@angular/common/http';
import { SharedServicesComponent } from './shared-services/shared-services.component';

const routes: Routes = [
  { path: 'rules', component: RulesComponent },
  { path: 'game', component: GameComponent },
  { path: 'score', component: ScoreComponent },
  { path: 'home', component: HomeComponent},
  { path: 'playgames', component: PlaygamesComponent},
  { path: 'connections', component: ConnectionsComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  declarations: [
    AppComponent,
    ModalComponent,
    RulesComponent,
    GameComponent,
    ScoreComponent,
    HomeComponent,
    PlaygamesComponent,
    ConnectionsComponent,
    SharedServicesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    FormsModule,
    HttpClientModule
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
