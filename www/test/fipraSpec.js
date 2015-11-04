"use strict";

describe("FIPRA Unit tests", function () {

    var $scope, ctrl, $timeout;

    beforeEach(function () {

        module("fipra");

        // INJECT! This part is critical
        // $rootScope - injected to create a new $scope instance.
        // $controller - injected to create an instance of our controller.
        // $q - injected so we can create promises for our mocks.
        // _$timeout_ - injected to we can flush unresolved promises.
        inject(function ($rootScope, $controller, $q, _$timeout_) {

            // create a scope object for us to use.
            $scope = $rootScope.$new();

            // assign $timeout to a scoped variable so we can use
            // $timeout.flush() later. Notice the _underscore_ trick
            // so we can keep our names clean in the tests.
            $timeout = _$timeout_;

            // now run that scope through the controller function,
            // injecting any services or other injectables we need.
            // **NOTE**: this is the only time the controller function
            // will be run, so anything that occurs inside of that
            // will already be done before the first spec.
            ctrl = $controller("CalculatorCtrl", {
                $scope: $scope
            });
        });

    });

    /* % Population tests */

    it("should have members", function() {
        expect($scope.members).toBeDefined();
    });

    it("should have an updateChecked function", function() {
        expect(typeof $scope.updateChecked).toEqual("function");
    });

    it("all yes votes should equal A Qualified Majority", function() {

        for(var i in $scope.members.members) {
            $scope.members.setVote($scope.members.members[i]);
        }

        $scope.members.calculateResults();

        expect($scope.members.result.title).toEqual("A Qualified Majority");
        expect($scope.members.result.yesVotes).toEqual(352);

    });

    it("all yes votes should equal 352", function() {

        for(var i in $scope.members.members) {
            $scope.members.setVote($scope.members.members[i]);
        }

        $scope.members.calculateResults();

        expect($scope.members.result.yesVotes).toEqual(352);

    });

    it("should set vote count 267", function() {

        var j, yesVoters = ["belgium", "czech rep.", "france", "germany", "greece", "hungary", "italy", "netherlands", "poland", "portugal", "romania", "spain", "sweden", "uk"];

        for(j in $scope.members.members) {
            if(yesVoters.indexOf($scope.members.members[j].name.toLowerCase()) !== -1 ) {
                $scope.members.setVote($scope.members.members[j]);
            }
        }

        $scope.members.calculateResults();

        expect($scope.members.result.yesVotes).toEqual(267);

    });

    it("should equal Rejected", function() {

        var j, yesVoters = ["germany", "france", "uk", "italy", "spain", "poland", "romania", "netherlands", "greece", "belgium", "portugal", "czech rep.", "hungary", "sweden"];
        
        for(j in $scope.members.members) {
            if(yesVoters.indexOf($scope.members.members[j].name.toLowerCase()) !== -1 ) {
                $scope.members.setVote($scope.members.members[j]);
            }
        }

        $scope.members.calculateResults();

        expect($scope.members.result.title).toEqual("Rejected");

    });

    it("should equal A Qualified Majority", function() {

        var j, yesVoters = ["belgium", "bulgaria", "czech rep.", "france", "germany", "greece", "hungary", "italy", "netherlands", "poland", "portugal", "romania", "slovenia", "spain", "sweden", "uk", "austria", "bulgaria", "denmark", "slovakia", "finland"];
        
        for(j in $scope.members.members) {
            if(yesVoters.indexOf($scope.members.members[j].name.toLowerCase()) !== -1 ) {
                $scope.members.setVote($scope.members.members[j]);
            }
        }

        $scope.members.calculateResults();

        expect($scope.members.result.title).toEqual("A Qualified Majority");

    });

    it("should equal A Blocking Minority", function() {

        var j, noVoters = ["belgium", "bulgaria", "czech rep.", "france", "germany", "greece", "hungary", "italy", "netherlands", "poland", "portugal", "romania", "slovenia", "spain", "sweden", "uk"];
        
        for(j in $scope.members.members) {
            if(noVoters.indexOf($scope.members.members[j].name.toLowerCase()) !== -1 ) {
                $scope.members.setVote($scope.members.members[j]).setVote($scope.members.members[j]);
            }
        }

        $scope.members.calculateResults();

        expect($scope.members.result.title).toEqual("A Blocking Minority");

    });

});