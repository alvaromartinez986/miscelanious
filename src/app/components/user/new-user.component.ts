import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-new-user',
  template: `
    <p>
      new-user Works!
    </p>
  `,
  styles: []
})
export class NewUserComponent implements OnInit {

	constructor(private route:ActivatedRoute) {
  	  this.route.parent.params.subscribe( parameters=> {
		  console.log(parameters);
  	  });
    }

  ngOnInit() {
  }

}
