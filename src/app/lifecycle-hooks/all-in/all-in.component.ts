import {
  Component,
  OnInit,
  OnDestroy,
  DoCheck,
  OnChanges,
  AfterContentChecked,
  AfterContentInit,
  AfterViewInit,
  AfterViewChecked
} from '@angular/core';

@Component({
  selector: 'app-all-in',
  templateUrl: './all-in.component.html',
  styleUrls: ['./all-in.component.sass']
})
export class AllInComponent implements OnInit,
  OnDestroy,
  DoCheck,
  OnChanges,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked {

  counter: number;

  constructor() {
    console.log('into --------- [constructor]');
  }

  inc() {
    console.log('after component --------- [counter]');
    this.counter += 1;
  }
  ngOnInit() {
    console.log('after component - OnInit');
  }
  ngOnDestroy() {
    console.log('after component - OnDestroy');
  }

  // overwrite onChange here
  ngDoCheck() {
    console.log('after component - DoCheck');
  }
  ngOnChanges() {
    console.log('after component - OnChanges');
  }
  ngAfterContentInit() {
    console.log('after component - AfterContentInit');
  }
  ngAfterContentChecked() {
    console.log('after component - AfterContentChecked');
  }
  ngAfterViewInit() {
    console.log('after component - AfterViewInit');
  }
  ngAfterViewChecked() {
    console.log('after component - AfterViewChecked');
  }

}
