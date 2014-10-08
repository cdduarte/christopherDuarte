'use strict';

var mongoose = require('mongoose'),
  Background = mongoose.model('Background');

/**
 * Populate database with sample application data
 */

 //Clear old things, then add things in

 Background.find({}).remove(function() {
  Background.create({
    section : 'Objective',
    title : 'Objective',
    date : 'Spring 2014',
    text : 'Develop Productive Affiliations, Information, and Environments that Create Customer Delight',
    awesomeness: 10
  }, {
    section : 'Education',
    title : 'Syracuse University, School of Information Studies, Syracuse, NY',
    date : 'May 2014',
    text : 'Master of Information Management',
    awesomeness: 10
  }, {
    section : 'Education',
    title : 'University of Texas at Austin School of Architecture, Austin, TX',
    date : 'May 2007',
    text : 'Master of Architecture First Professional',
    awesomeness: 10
  }, {
    section : 'Education',
    title : 'University of California at Berkeley, College of Letters and Science, Berkeley, CA',
    date : 'May 1999',
    text : 'Bachelor of Arts in Art Practice',
    awesomeness: 10
  }, {
    section : 'Skills',
    title : 'Hard Skills',
    date : 'Summer 2014',
    text : 'Java, Python, JavaScript, HTML5, CSS3, Angular, JQuery, SQL, NoSQL, MEAN, LAMP, Mongoose, Mongo, Express, Node, Linux/Unix, Apache Tomcat/Axis2/Webserver, Eclipse, WordPress, MS Access, MS Visio, MS Office, MS Project, Illustrator, Photoshop',
    awesomeness: 10
  }, {
    section : 'Academic Projects',
    title : 'Multi-tier Application Development',
    date : 'Spring 2013',
    text : 'Development of small enterprise level applications with  COBOL/JCL/SQL in RDz/TSO/ISPF/SDSF for an IBM z/10 EC mainframe computer with a z/OS environment<br />Assembly of an enterprise application web server with Apache Tomcat, Axis2, and Webserver<br />Review of web service design and enterprise application architecture patterns (REST/SOAP)',
    awesomeness: 10
  }, {
    section : 'Academic Projects',
    title : 'Information Architecture',
    date : 'Fall 2012',
    text : 'Reorganized and prototyped a website case study to improve navigation and search<br />Assessed usability and suggested strategic improvements<br />Created content inventories and audience definition',
    awesomeness: 10
  }, {
    section : 'Academic Projects',
    title : 'Social Web Technologies',
    date : 'Fall 2012',
    text : 'Designed and implemented an MVC web service with teammates<br />Ruby on Rails/Unix Ubuntu Server/MS SQL database backend and HTML/CSS/JavaScript frontend',
    awesomeness: 10
  }, {
    section : 'Academic Projects',
    title : 'Systems Analysis',
    date : 'Fall 2012',
    text : 'Conducted a semester long systems analysis for a local start-up that provides a C2C market place for university communities<br />Managed the project through SDLC phases and teamwork<br />Modeled the system through ERDs, DFDs, UML, and MS Visio',
    awesomeness: 10
  }, {
    section : 'Academic Projects',
    title : 'Database Management',
    date : 'Spring 2012',
    text : 'Constructed a database system using MS SQL Server, Access, and Visio that housed construction data including costs, equipment, and product inventories<br />Created a construction project dashboard with MS Access that included calculations for material costs and time management',
    awesomeness: 10
  }, {
    section : 'Academic Projects',
    title : 'Graphic Design for the Web',
    date : 'Spring 2014',
    text : 'Covered basic and advanced website design principles utilizing HTML5, CSS3, JQuery, WordPress, and Adobe Photoshop with an emphasis on typography, color theory, and layout. Created a redesign of <a ng-href=http://www.ist523.com/spring2014/cdduarte/wordpress/>Netflix’s website</a> utilizing the aforementioned technologies and design principles. Carousels were created from scratch with JQuery and I also created a WordPress theme to manage all of the media content.',
    awesomeness: 10
  }, {
    section : 'Academic Projects',
    title : 'Scripting Foundations (Python)',
    date : 'Fall 2013',
    text : 'Created scripts for cryptanalysis that included the decryption of a NY Times article encrypted with a Caesar cipher; in addition, I created a script that encrypted the NY Times article with a Caesar cipher. I also created scripts for simple data mining, such as parsing newspaper articles for words or letters, letter frequency, and splitting lines.',
    awesomeness: 10
  }, {
    section : 'Academic Projects',
    title : 'Modern Programming in Java',
    date : 'Fall 2013',
    text : 'Programmed in Java with generic classes. Defined generic classes including hash table, queue, linked list, and array list. I also wrote short programs for cross product calculation, transposing, and insertion sort.',
    awesomeness: 10
  }, function() {
      console.log('finished populating things');
    }
  );
});