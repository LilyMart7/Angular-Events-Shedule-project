import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { EventsComponent } from './events/events.component';
import { EventListComponent } from './events/event-list/event-list.component';
import { EventDetailComponent } from './events/event-detail/event-detail.component';
import { SkillsComponent } from './skills/skills.component';
import { EventItemComponent } from './events/event-list/event-item/event-item.component';
import { SkillsEditComponent } from './skills/skills-edit/skills-edit.component';
import { SkillsService } from './skills/skills.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    EventsComponent,
    EventListComponent,
    EventDetailComponent,
    SkillsComponent,
    EventItemComponent,
    SkillsEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [SkillsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
