import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { EventsDashboardRoutingModule } from './events-dashboard-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SharedModule } from '@app/shared';
import { PreviewMarketsComponent } from './preview-markets/preview-markets.component';
import { EventComponent } from './event/event.component';
import { CategoryComponent } from './category/category.component';
import { LineComponent } from './line/line.component';
import { MarketLinesComponent } from './market-lines/market-lines.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

@NgModule({
  declarations: [
    DashboardComponent,
    PreviewMarketsComponent,
    EventComponent,
    CategoryComponent,
    LineComponent,
    MarketLinesComponent
  ],
  imports: [
      CommonModule, 
      SharedModule, 
      ScrollingModule,
      AngularFontAwesomeModule,
      EventsDashboardRoutingModule]
})
export class EventsDashboardModule {}
