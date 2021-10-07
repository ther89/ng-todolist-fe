import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-snackbar',
  templateUrl: './snackbar.component.html',
  styleUrls: ['./snackbar.component.scss']
})
export class SnackbarComponent implements OnChanges {

  @Input() text = '';
  isShown : boolean = false;

  ngOnChanges(changes: SimpleChanges): void {
      if(changes.text.currentValue != '') {
        this.isShown = true;
        setTimeout(() => this.isShown = false, 3000);
      }
  }
}
