import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {FirebaseListObservable} from 'angularfire2/database';
import {Post} from './post.interface';
import {PostService} from '../../services/post.service';
import {Vendor} from './vendor.interface';
import {VendorService} from '../../services/vendor.service';

@Component({
  selector: 'qs-dashboard',
  templateUrl: './dashboard.page.html',
})
export class DashboardPage implements OnInit, OnDestroy {

  posts$: FirebaseListObservable<Post[]>;
  vendors$: FirebaseListObservable<Vendor[]>;

  // constructor
  constructor(private VendorService: VendorService,
              private postService: PostService,
              private router: Router,
              private route: ActivatedRoute) {
  }

  loadPosts(): void {
    this.posts$ = this.postService.findPosts();
  }

  loadVendors(): void {
    this.vendors$ = this.VendorService.findVendors();
  }

  viewPost(post: Post): void {
    // this.router.navigate(['/detail', post.postNo]);
  }

  ngOnInit(): void {
    this.loadPosts();
    this.loadVendors();
  }

  ngOnDestroy(): void {
    // no op
  }
}
