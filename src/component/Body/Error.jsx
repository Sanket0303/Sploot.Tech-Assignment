import React from 'react';
import "./ErrorCss.css"
import { Link } from 'react-router-dom';

export default function Error() {
  return (
    <section class="page_404">
	<div class="container">
		<div class="row">	
		<div class="col-sm-12 ">
		<div class="col-sm-10 col-sm-offset-1  text-center">
		<div class="four_zero_four_bg">
			<h1 class="text-center ">404</h1>
		
		
		</div>
		
		<div class="contant_box_404">
		<h3 class="h2">
		Look like you're lost
		</h3>
		
		<Link to={"/"} class="link_404">Sign In to continue</Link>
	</div>
		</div>
		</div>
		</div>
	</div>
</section>
  );
}