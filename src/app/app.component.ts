import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'nemo-assignment';

  ngOnInit() {
    confirm('This app was made with display scale set at 100%. \n If your display font is set at 125%, set browser\'s zoom to 80%.');
  }
}
