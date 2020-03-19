import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component( {
    selector: 'app-main',
    templateUrl: './main.component.html',
    styleUrls: [ './main.component.scss' ],
} )
export class MainComponent implements OnInit {

    private listOfConvert: any;
    private PartData = [];
    private PartConvert: any;
    private check: any;

    constructor( private modalService: NgbModal ) {
    }

    ngOnInit() {
    }

    // Open Part Modal
    partDetail( content, id ) { // ยังไม่ได้รับค่าของ order ที่เลือกมาจากฝั่ง html filter ไม่ได้
        this.modalService.open( content, { size: 'lg' } );
        this.PartConvert = this.PartData.filter( article => article.convert_id === id );
    }// backdrop: 'static' ใช้ตรึง Modal ให้ click ข้องนนอกกรอบก็ไม่หลุด
}
