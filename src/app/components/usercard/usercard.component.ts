import { Component, OnInit, Input } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { GithubService } from 'src/app/Service/github.service';

@Component({
  selector: 'app-usercard',
  templateUrl: './usercard.component.html',
  styleUrls: ['./usercard.component.css']
})
export class UsercardComponent implements OnInit {

  @Input() user:any;
  constructor(private githubService: GithubService,
    private toast: ToastrService) { }

  ngOnInit(): void {
  }

}
