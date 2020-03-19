import { HttpClient, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';

interface ICustomer {
	customer_id: number;
	firstname: string;
	lastname: string;
	telno: string;
}

export class CustomerService {

	private CustomerURL = 'http://localhost:3000/api/customer';

	constructor( private http: HttpClient ) {
	}

	getCustomer(): Observable<ICustomer[]> {
		return this.http.get<ICustomer[]>( this.CustomerURL );
	}

	getCustomerByID( id: number ): Observable<ICustomer[]> {
		const url = `${this.CustomerURL}/${id}`;
		return this.http.get<ICustomer[]>( url );
	}

	insertCustomer( data: any ): Observable<ICustomer[]> {
		return this.http.post<ICustomer[]>( this.CustomerURL, data );
	}

    updateCustomer( data: any ): Observable<ICustomer[]> {
        return this.http.put<ICustomer[]>( this.CustomerURL, data );
    }

    deleteCustomer( id: number ): Observable<ICustomer[]> {
        const url = `${this.CustomerURL}/${id}`;
        return this.http.delete<ICustomer[]>( url );
    }

}


