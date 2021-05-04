import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SlideshowBackDropComponent } from './slideshow-back-drop/slideshow-back-drop.component';
import { IonicModule } from '@ionic/angular';
import { PipesModule } from '../pipes/pipes.module';
import { SlideshowPosterComponent } from './slideshow-poster/slideshow-poster.component';

@NgModule({
  declarations: [
    SlideshowBackDropComponent,
    SlideshowPosterComponent],
  imports: [
    CommonModule,
    IonicModule,
    PipesModule
  ],
  exports: [
    SlideshowBackDropComponent,
    SlideshowPosterComponent
  ]
})
export class ComponentsModule { }
