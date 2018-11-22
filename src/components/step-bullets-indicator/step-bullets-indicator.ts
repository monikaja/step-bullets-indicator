import {Component, Input, SimpleChanges} from '@angular/core';

const MIN_LIST_SIZE = 3;
const MAX_LIST_SIZE = 15;
const VISIBLE_BULLETS = 5;//If it changes, logic also does.

@Component({
  selector: 'step-bullets-indicator',
  templateUrl: 'step-bullets-indicator.html'
})
export class StepBulletsIndicatorComponent {

  @Input() public selectedIndex: number;
  @Input() public showNumbers: boolean;
  @Input() public bulletsList: string[];

  public specialPosition: number = 0;
  public currentStyle: any = {};

  //Only are visible 2 bullets: the current one (active) and de previous one
  private visibleActiveBullets = 2;

  constructor() {
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('[UiStepBulletsIndicator] ngOnChanges');
    for (let propName in changes) {
      if (propName !== "showNumbers") {//selectedIndex || bulletsList
        if (this.correctParams()) {
          this.updateView();
        }
        else {
          console.error("[UiStepBulletsIndicator] params error");
        }
      }
    }
  }

  /**
   * With new params calculate new bullets list position if it is necessary
   */
  private updateView() {
    this.specialPosition = null;
    if (this.bulletsList.length < 6 || (this.selectedIndex < 3)) {
      this.setDefaultPosition();
    }
    if (this.selectedIndex > 2 && this.bulletsList.length > VISIBLE_BULLETS) {
      if (this.needsToMoveLeft()) {
        let bulletSpace = document.getElementsByClassName("step")[0].clientWidth;
        this.specialPosition = -(+(bulletSpace * (this.selectedIndex - this.visibleActiveBullets)));
        this.currentStyle = {'left.px': this.specialPosition};
      }
      else {//set to the right (visible bullets until the last one)
        this.currentStyle = {'right.px': 0};
      }
    }
  }

  /**
   * Checks if there are enough bullets to move list to the left and see 5 bullets
   */
  private needsToMoveLeft(): boolean {
    let visibleBullets = (this.bulletsList.length - (this.selectedIndex - this.visibleActiveBullets));
    return (visibleBullets > VISIBLE_BULLETS);
  }

  /**
   * Init position
   */
  private setDefaultPosition() {
    this.currentStyle = {'left.px': 0};
  }

  /**
   * true if params are between the limits and have sense
   */
  private correctParams() {
    return (this.bulletsList.length >= MIN_LIST_SIZE && this.bulletsList.length <= MAX_LIST_SIZE && (
        this.selectedIndex > 0 && this.selectedIndex <= this.bulletsList.length)
    );
  }
}

