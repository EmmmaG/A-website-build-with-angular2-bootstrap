import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AlertModule} from 'ng2-bootstrap';

import { AppComponent } from './app.component';
import { SlideshowComponent } from './slideshow/slideshow.component';
import { HomeComponent } from './home/home.component';
import { SlideshowbarComponent } from './slideshowbar/slideshowbar.component';
import { VideosectionComponent } from './videosection/videosection.component';
import { ParallaxComponent} from './parallax/parallax.component';
//import { ClientsComponent } from './clients/clients.component';
import { PopularareaComponent } from './populararea/populararea.component';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ProjectComponent } from './projects/project.component';
import { MapComponent} from './map/map.component';
import { ContactformComponent} from './contactform/contactform.component';
import { ServiceComponent } from './service/service.component';
import { TeamComponent } from './team/team.component';

import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    SlideshowComponent,
    HomeComponent,
    SlideshowbarComponent,
    VideosectionComponent,
    ParallaxComponent,
   //ClientsComponent,
    PopularareaComponent,
    FooterComponent,
    AboutComponent,
    ContactComponent,
    ProjectComponent,
    MapComponent,
    ContactformComponent,
    ServiceComponent,
    TeamComponent,
  ],
  imports: [
    AlertModule.forRoot(),
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
