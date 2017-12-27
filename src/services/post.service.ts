import {Injectable} from '@angular/core';
import {AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable} from 'angularfire2/database';
import {Post} from '../app/dashboard/post.interface';

@Injectable()
export class PostService {

  constructor(private  db: AngularFireDatabase) {
    // no op
  }

  findPosts(): FirebaseListObservable<Post[]> {
    return this.db.list('Post');
  }

  findPostById(id: string): FirebaseObjectObservable<Post> {
    return this.db.object('Post/' + id);
  }
}
