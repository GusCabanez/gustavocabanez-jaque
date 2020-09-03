import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-section-header',
  templateUrl: './section-header.component.html',
  styleUrls: ['./section-header.component.css']
})
export class SectionHeaderComponent implements OnInit {

  @Output() isVisible = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
  }

  openModal(){
    this.isVisible.emit(true);
  }
}
