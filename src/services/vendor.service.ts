import {Injectable} from '@angular/core';
import {AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable} from 'angularfire2/database';
import {Vendor} from '../app/dashboard/Vendor.interface';

@Injectable()
export class VendorService {

  constructor(private  db: AngularFireDatabase) {
    // no op
  }

  findVendors(): FirebaseListObservable<Vendor[]> {
    return this.db.list('Vendors');
  }

  findVendorById(id: string): FirebaseObjectObservable<Vendor> {
    return this.db.object('Vendors/' + id);
  }
}
