import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AppService} from './app.service';
import { MainComponent } from './page/main/main.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
  private opened = true;

  title = 'ckm';
  public refresh = true;
  constructor(private modalService: NgbModal,
              private appService: AppService,
              private mainComponent: MainComponent) {}

  ngOnInit() {
    // this.startCounter();
  }
  open() {
    this.opened = !this.opened;
  }
  openLg(content) {
    this.modalService.open(content, { size: 'lg' });
  }
  startCounter() {
    this.appService.startCounter().subscribe(value => console.log('Start: ', value) );
  }
  stopCounter() {
    this.appService.stopCounter().subscribe(value => console.log('Stop!!'));
  }
  // ไม่ทำงาน
  ngOnDestroy() {
    console.log('Close Program');
    this.stopCounter();
  }

}
