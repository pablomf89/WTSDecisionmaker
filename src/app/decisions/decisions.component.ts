import { Component, OnInit } from "@angular/core";
import { Directive, Output, Input, EventEmitter, HostBinding, HostListener } from '@angular/core';
import {
} from "@angular/forms";
import {MatDialog} from '@angular/material/dialog';
import {UploadDialogComponent} from "../shared/component/dialog/dialog.component";

@Component({
  selector: "app-decisions",
  templateUrl: "./decisions.component.html",
  styleUrls: ["./decisions.component.scss"]
})

export class DecisionsComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  openUploadDialog(): void {
    const dialogRef = this.dialog.open(UploadDialogComponent, {
      width: '500px',
      height: '300px',
      //data: {name: "TESTNAME"}

    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  async ngOnInit() {
  }

  @Output() onFileDropped = new EventEmitter<any>();

  @HostBinding('style.background-color') private background = '#f5fcff'
  @HostBinding('style.opacity') private opacity = '1'

  //Dragover listener
  @HostListener('dragover', ['$event']) onDragOver(evt) {
    evt.preventDefault();
    evt.stopPropagation();
    this.background = '#9ecbec';
    this.opacity = '0.8'
  }

  //Dragleave listener
  @HostListener('dragleave', ['$event']) public onDragLeave(evt) {
    evt.preventDefault();
    evt.stopPropagation();
    this.background = '#f5fcff'
    this.opacity = '1'
  }

  //Drop listener
  @HostListener('drop', ['$event']) public ondrop(evt) {
    evt.preventDefault();
    evt.stopPropagation();
    this.background = '#f5fcff'
    this.opacity = '1'
    let files = evt.dataTransfer.files;
    if (files.length > 0) {
      this.onFileDropped.emit(files)
    }
  }



}
