import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { CustomerService } from '../find/find.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CompleteComponent } from '../../modal/complete/complete.component';

@Component( {
	selector: 'app-insert-modal',
	templateUrl: './insert-modal.component.html',
	styleUrls: [ './insert-modal.component.scss' ]
} )
export class InsertModalComponent implements OnInit {

	@Input() public SQL;
	@Input() public Customer;
	@Input() public AllCustomer;

	private alert = false;

	private ibCustomerID: number;
	private ibFirstName: string;
	private ibLastName: string;
	private ibTelno: string;

	constructor( private activeModal: NgbActiveModal,
	 			private customerService: CustomerService,
                private modalService: NgbModal) {
	}

	ngOnInit() {
		this.createInit();
	}

	createInit() {
		this.ibCustomerID = this.Customer.customer_id;
		this.ibFirstName = this.Customer.firstname;
		this.ibLastName = this.Customer.lastname;
		this.ibTelno = this.Customer.telno;
	}

	sentBack( data ) {
		this.activeModal.close( data );
	}

	Insert() {
		const duplicate = this.AllCustomer.find( data => data.customer_id === this.ibFirstName );
		if ( duplicate ) {
			this.alert = true;
			return;
		} else {
			const data = {
				firstname: this.ibFirstName,
				lastname: this.ibLastName,
				telno: this.ibTelno,
			};
			this.sentBack( data );
		}
	}

	Update() {
		const data = {
			customer_id: this.ibCustomerID,
			firstname: this.ibFirstName,
			lastname: this.ibLastName,
			telno: this.ibTelno
		};
		this.sentBack( data );
	}

	Delete() {
    		this.customerService.deleteCustomer( this.ibCustomerID ).subscribe( () => {
    			this.modalService.open(CompleteComponent);
    		});
    		this.sentBack( '' );
    }

	closeAlert() {
		this.alert = false;
	}

}
