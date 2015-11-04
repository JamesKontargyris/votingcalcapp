"use strict";

angular.module("fipra.controllers", [])

	.controller('fipraCtrl', function($scope, $timeout, $ionicModal, Members, $ionicSideMenuDelegate, $q) {

    $scope.hamburger = false;
    
		//toggle sidebar
		$scope.toggleSidebar = function() {
			$ionicSideMenuDelegate.toggleLeft();
      $scope.isActive = !$ionicSideMenuDelegate.isOpen();
		};

	})
  .controller('CalculatorCtrl', function($scope, Members, $ionicModal) {

    /*
      Calculator types
    */
    var newCalc = function(member) {
      $scope.members
        .setVote(member)
        .calculateResults();
    }, origCalc = function(member) {
      $scope.members
        .setVote(member)
        .calculateResultsOriginal();
    };

    //vote type toggle
    $scope.newSystem = true;

    $scope.members = Members;
    //get initial count
    $scope.members.calculateResults();

    $scope.updateChecked = newCalc;

    //reset all votes to abstain
    $scope.reset = function () {
      $scope.members.resetVotes();
      if ($scope.updateChecked === newCalc) {
        $scope.members.calculateResults();
      } else {
        $scope.members.calculateResultsOriginal();
      }
    }

    //help modal
    $ionicModal.fromTemplateUrl("templates/partials/help-modal.html", {
      scope: $scope,
      animation: 'slide-in-up'
    }).then(function(modal) {
      $scope.modal = modal;
    });

    //this switches the calculator version
    $scope.toggleCalc = function() {
      $scope.newSystem = !$scope.newSystem;
      if ($scope.updateChecked === newCalc) {
        $scope.updateChecked = origCalc;
        $scope.members.calculateResultsOriginal();
      } else {
        $scope.updateChecked = newCalc;
        $scope.members.calculateResults();
      }
    };

    //this opens the modal
    $scope.help = function() {
      $scope.modal.show();
    };
    
    $scope.close = function() {
      $scope.modal.hide();
    };
    
    //clean up functions
    $scope.$on('$destroy', function() {
      $scope.modal.remove();
    });
    
    //when hidden
    $scope.$on('modal.hidden', function() {
      //
    });
    
    //when its removed
    $scope.$on('modal.removed', function() {
      //
    });

  })
	.controller('AboutCtrl', function($scope) {
		
	})
	.controller('ContactCtrl', function($scope) {
		
	})
	.controller('WhatWeDoCtrl', function($scope, $ionicSlideBoxDelegate) {
		
    $scope.pages = [
      {
        "name" : "what",
        "link" : "What we do",
        "template" : "templates/partials/what-we-do.html"
      },
      {
        "name" : "policy",
        "link" : "Consumer policy",
        "template" : "templates/partials/consumer-policy.html"
      },
      {
        "name" : "public",
        "link" : "Public affairs",
        "template" : "templates/partials/public-affairs.html"
      },
      {
        "name" : "sector",
        "link" : "Sector experience",
        "template" : "templates/partials/sector-experience.html"
      }
    ];

    $scope.currentSlide = 0;

    $scope.showSlide = function (index) {
      $scope.currentSlide = index;
      $ionicSlideBoxDelegate.slide(index);
    }

    $scope.slideChanged = function (index) {
      $scope.currentSlide = index;
    }

	});