import { Component, OnInit } from '@angular/core';
import { CustomerService } from './find.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { InsertModalComponent } from '../insert-modal/insert-modal.component'
import { CompleteComponent } from '../../modal/complete/complete.component';

@Component( {
    selector: 'app-find',
    templateUrl: './find.component.html',
    styleUrls: [ './find.component.scss' ]
} )
export class FindComponent implements OnInit {

    private listOfCustomer: any;

        constructor( private customerService: CustomerService,
                     private modalService: NgbModal) {
        }

        ngOnInit() {
            this.getCustomer();
        }

        getCustomer() {
            this.customerService.getCustomer().subscribe( data => this.listOfCustomer = data);
        }

        getCustomerByID(id, sql) {
            this.customerService.getCustomerByID(id).subscribe( data => {
                const modalRef = this.modalService.open(InsertModalComponent);
                modalRef.componentInstance.Customer = data;
                modalRef.componentInstance.AllCustomer = this.listOfCustomer;
                modalRef.componentInstance.SQL = sql;

                modalRef.result.then( ( result ) => {
                    if (sql === 'insert') {
                        this.customerService.insertCustomer(result).subscribe( () => {
                            this.modalService.open(CompleteComponent);
                        });
                    } else if (sql === 'update') {
                        this.customerService.updateCustomer(result).subscribe( () => {
                            this.modalService.open(CompleteComponent);
                        });
                    }
                } );
            });
        }

        sentToParent(data) {

        }
}


