<?php /* Template Name: giacophieu */ ?>

<?php
/**
 * The main template file
 */
get_header(); ?>

<main class="container">
	<div class="box">
	
		<h2>Share price</h2>
	
		<div class="pageentry">
	
			<p>Quotes delayed by approximately 15 mins</p>
			<div class="notowaniawidget">
				<script
					src="https://f416b30d742baaa79624-e04135c5ab67ab5829e9855aaf292e33.ssl.cf1.rackcdn.com/widget/_xsWidget.js"
					type="text/javascript"></script>
				<script>var xsWidgetCharts = new XsWidget({ "containerId": "xsWidgetContainer", "accountId": "10431748", "endpointID": "meta1", "accessCode": "DupcXRVAJhX8fDbedzV5", "language": "en", "skin": "white", "clickUrl": "http://xtb.com", "moduleId": "charts", "instruments": ["XTB.PL"], "template": "Green & Red", "timeFrame": 3600000, "height": 500, "viewVersion": "standard" }); xsWidgetCharts.init();</script>
				<!-- xs5 Widget : END -->
			</div>
	
		</div>
	
	
	
	</div>
</main>

<?php get_footer(); ?>