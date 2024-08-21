import { NgModule } from "@angular/core";
import { HeroeComponent } from "./components/heroe/heroe.component";
import { ListComponent } from "./components/list/list.component";
import { CommonModule } from "@angular/common";


@NgModule({
  declarations: [
    HeroeComponent,
    ListComponent,
  ],
  exports:[
    HeroeComponent,
    ListComponent,
  ]
  ,
  imports: [
    CommonModule
  ]

})
export class HeroesModule{}


