'use strict';

angular.module('christopherDuarteApp')
  .controller('FooterCtrl', function ($scope) {
    $scope.footerLinks = [{
      'title': 'Email',
      'link': 'mailto:nazcaastronaut@gmail.com?subject=Interstellar%20Message&body=Do%20you%20exist?',
      'class': 'fa fa-paper-plane fa-2x'
    }, {
      'title': 'LinkedIn',
      'link': 'http://www.linkedin.com/in/christopherduarte',
      'class': 'fa fa-linkedin fa-2x'
    }, {
      'title': 'Twitter',
      'link': 'https://www.twitter.com/chrisduarte',
      'class': 'fa fa-twitter fa-2x'
    }, {
      'title': 'GitHub',
      'link': 'https://gist.github.com/cdduarte',
      'class': 'fa fa-github-alt fa-2x'
    }];
  });