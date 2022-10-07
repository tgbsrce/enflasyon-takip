import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
})
export class AdminComponent implements OnInit {
  constructor(private router: ActivatedRoute, private route: Router) {}

  ngOnInit(): void {
    this.router.params.subscribe((params) => {
      if (Object.keys(params).length === 0) {
        this.route.navigate(['dashboard'], { relativeTo: this.router });
      }
    });
  }
}
