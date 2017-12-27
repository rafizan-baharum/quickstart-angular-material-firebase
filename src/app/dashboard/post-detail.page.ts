import {Component, OnDestroy, OnInit, ViewContainerRef} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {ActivatedRoute, Router} from '@angular/router';
import {MdDialog, MdDialogConfig, MdDialogRef} from '@angular/material';
import {PostService} from '../../services/post.service';
import {Post} from './post.interface';
import {FirebaseObjectObservable} from 'angularfire2/database';

@Component({
  selector: 'qs-post-detail',
  templateUrl: './post-detail.page.html',
})
export class PostDetailPage implements OnInit, OnDestroy {

  post$: FirebaseObjectObservable<Post>;

  columns: any[] = [
    {name: 'referenceNo', label: 'Reference No'},
    {name: 'maintainedDate', label: 'Date'},
    {name: 'cost', label: 'Cost'},
  ];

  // constructor
  constructor(private postService: PostService,
              private router: Router,
              private route: ActivatedRoute,
              private vcf: ViewContainerRef,
              private dialog: MdDialog) {
  }

  loadPost(postNo: string): void {
    this.post$ = this.postService.findPostById(postNo);
  }

  ngOnInit(): void {
    this.route.params.subscribe((params: { postNo: string }) => {
      this.loadPost(params.postNo);
    });
  }

  ngOnDestroy(): void {
    // no op
  }
}
