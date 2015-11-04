"use strict";

angular.module('fipra', [ 'ionic', 'fipra.controllers', 'fipra.factory' ])

  .run(function($ionicPlatform) {
    $ionicPlatform.ready(function() {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard for form inputs)
      if(window.cordova && window.cordova.plugins.Keyboard) {
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      }
    });
  })

  .config(function($stateProvider, $urlRouterProvider) {

    ionic.Platform.ready(function() {
      //hide the status bar using the StatusBar plugin
      if(window.StatusBar) {
        // org.apache.cordova.statusbar required
        StatusBar.hide();
        ionic.Platform.fullScreen();
      }
    });

    $urlRouterProvider.otherwise("/");

    $stateProvider
      .state('home', {
        url : "/",
        templateUrl: 'templates/calculator.html',
        controller: "CalculatorCtrl"
      })
      .state('rules', {
        url : "/calculator",
        templateUrl: 'templates/home.html',
        controller: "CalculatorCtrl"
      })
      .state('about', {
        url : "/about",
        templateUrl: 'templates/about.html',
        controller: "AboutCtrl"
      })
      .state('what-we-do', {
        url : "/what-we-do",
        templateUrl: 'templates/what-we-do.html',
        controller: "WhatWeDoCtrl"
      })
      .state('contact', {
        url : "/contact",
        templateUrl: 'templates/contact.html',
        controller: "ContactCtrl"
      });
  });