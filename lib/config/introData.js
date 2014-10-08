'use strict';

var mongoose = require('mongoose'),
  Intro = mongoose.model('Intro');

/**
 * Populate database with sample application data
 */

//Clear old things, then add things in

Intro.find({}).remove(function() {
	Intro.create({
		title : 'Introduction',
		subtitle : 'Introduction',
		text : 'Welcome to my site. As a student of information technology development, analysis, and strategy, I’m interested in the creation of customer delight through forward postured product offerings. I am pursuing a career as a dedicated colleague in a development or consulting team with big ideas and the ambition to pursue them. Moreover, I want to help build constructive environments that serve as engines for creating actionable information and productive affiliations for clients. My coursework at SU has covered web development technologies, n-tier application development, database administration, information systems analysis, information architecture, and information management. If you would like to work together or have any questions, please get in touch with me.',
		awesomeness: 10
	}, {
		title : 'Info [Sci]',
		subtitle : 'Introduction',
		text: 'Info Sci represents my body of academic work that includes projects heavy in programming. The languages Java SE and Python 2.x have been used to code the majority of my projects. Most of my projects coded in Java SE involve the creation of Java generic classes that create data structures including a handful of getter and setter methods. The projects coded in Python 2.x center on natural language processing, basic cryptology, and unrelated assignments. All of my coding is hosted on Github as Gists and are available below. I will be adding my JavaScript work shortly; however, my website has been coded with a full MEAN stack. Scaffolding of the stack was completed with Yeoman, dependencies managed with Bower, and development automation completed with Grunt.',
		awesomeness: 10
	}, {
		title : '[Info Mgmt]',
		subtitle : 'Introduction',
		text : 'Info Mgmt represents my body of academic work that involves the management of information and communication technologies (ICT). Topics covered in my management coursework include the economics, public policy, and project management of ICTs. The course work varies in length and type. Some of the work represents online discussions with other students managed over Blackboard or essays and literature reviews.',
		awesomeness: 10	
	}, {
		title : 'About',
		subtitle : 'About Me',
		text : 'A little bit more about myself. I recently finished an MS in Information Management (MSIM) in May from <a href=””>Syracuse University</a> and concentrated on web development. I also have an MArch from the <a href=””>University of Texas</a> and a BA in Art Practice from <a href=””>U.C. Berkeley</a>. After architecture school, I successfully practiced architecture for a few years before pivoting from building space to architecture space in order to expose myself to more opportunities for creating effective and productive people space. I’m pursuing entry-level web development positions to create delight for customers. Below is a list of skills I acquired through my MSIM program and the course work I completed along with the projects I worked on in class. Over the summer of 2013, I’ve also acquired skills through an internship I completed with <a href=””>StreamSpec</a>, a Brooklyn based start-up, as a front-end web developer working with raw JavaScript and JQuery.',
		awesomeness: 10
	}, function() {
		console.log('finished populating things');
	});
});