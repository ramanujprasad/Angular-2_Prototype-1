import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `

  	<div class="navbar navbar-inverse navbar-fixed-top" role="navigation">
	  <div class="container-fluid">
	    <div class="navbar-header">
	      <a class="navbar-brand" routerLink='/'>Home</a>
	      <a class="navbar-brand" routerLink='/about'>About</a>
	    </div>
	    <div class="collapse navbar-collapse">
	      <ul class="nav navbar-nav navbar-right">
	        <li><a href="https://github.com/ramanujprasad">My Github</a></li>
	      </ul>
	    </div>
	  </div>
	</div>

	<div class="container-fluid">
	  <div class="content">
	    <router-outlet></router-outlet>
	  </div>
	</div>
  `,
})
export class AppComponent  { 
	
}
