import {NgModule} from '@angular/core';
import {StepBulletsIndicatorComponent} from "./step-bullets-indicator";
import {IonicModule} from "ionic-angular";

/**
 * Component for the bullet indicator
 */
@NgModule({
  declarations: [StepBulletsIndicatorComponent],
  imports: [IonicModule],
  exports: [StepBulletsIndicatorComponent]
})
export class StepBulletsIndicatorComponentModule {
}
