"use strict";

angular.module('fipra.factory', [])

  /**
  voting can either be yes, no, abstain
  */
  .factory('Members', function() {

    var order = ["yes", "no", "abstain"],
      cssClass = ["fa fa-check white", "fa fa-times white", "fa fa-minus midgrey"],
      members = [
        {
          name : "Austria",
          image : "austria.png",
          population : 2.0,
          votes : 10,
          vote : order[2],
          cssClass : cssClass[2] + " " + "button icon abstain"
        },{
          name : "Belgium",
          image : "belgium.png",
          population : 2.6,
          votes : 12,
          vote : order[2],
          cssClass : cssClass[2] + " " + "button icon abstain"
        },{
          name : "Bulgaria",
          image : "bulgaria.png",
          population : 1.6,
          votes : 10,
          vote : order[2],
          cssClass : cssClass[2] + " " + "button icon abstain"
        },{
          name : "Croatia",
          image : "croatia.png",
          population : 0.9,
          votes :  7,
          vote : order[2],
          cssClass : cssClass[2] + " " + "button icon abstain"
        },{
          name : "Cyprus",
          image : "cyprus.png",
          population : 0.2,
          votes :  4,
          vote : order[2],
          cssClass : cssClass[2] + " " + "button icon abstain"
        },{
          name : "Czech Rep.",
          image : "czech-republic.png",
          population : 2.3,
          votes : 12,
          vote : order[2],
          cssClass : cssClass[2] + " " + "button icon abstain"
        },{
          name : "Denmark",
          image : "denmark.png",
          population : 1.3,
          votes :  7,
          vote : order[2],
          cssClass : cssClass[2] + " " + "button icon abstain"
        },{
          name : "Estonia",
          image : "estonia.png",
          population : 0.3,
          votes :  4,
          vote : order[2],
          cssClass : cssClass[2] + " " + "button icon abstain"
        },{
          name : "Finland",
          image : "finland.png",
          population : 1.2,
          votes :  7,
          vote : order[2],
          cssClass : cssClass[2] + " " + "button icon abstain"
        },{
          name : "France",
          image : "france.png",
          population : 15.0,
          votes : 29,
          vote : order[2],
          cssClass : cssClass[2] + " " + "button icon abstain"
        },{
          name : "Germany",
          image : "germany.png",
          population : 18.5,
          votes : 29,
          vote : order[2],
          cssClass : cssClass[2] + " " + "button icon abstain"
        },{
          name : "Greece",
          image : "greece.png",
          population : 2.4,
          votes : 12,
          vote : order[2],
          cssClass : cssClass[2] + " " + "button icon abstain"
        },{
          name : "Hungary",
          image : "hungary.png",
          population : 2.3,
          votes : 12,
          vote : order[2],
          cssClass : cssClass[2] + " " + "button icon abstain"
        },{
          name : "Ireland",
          image : "ireland.png",
          population : 1.0,
          votes :  7,
          vote : order[2],
          cssClass : cssClass[2] + " " + "button icon abstain"
        },{
          name : "Italy",
          image : "italy.png",
          population : 13.7,
          votes : 29,
          vote : order[2],
          cssClass : cssClass[2] + " " + "button icon abstain"
        },{
          name : "Latvia",
          image : "latvia.png",
          population :  0.4,
          votes :  4,
          vote : order[2],
          cssClass : cssClass[2] + " " + "button icon abstain"
         },{
          name : "Lithuania",
          image : "lithuania.png",
          population : 0.6,
          votes :  7,
          vote : order[2],
          cssClass : cssClass[2] + " " + "button icon abstain"
        },{
          name : "Luxembourg",
          image : "luxembourg.png",
          population : 0.1,
          votes :  4,
          vote : order[2],
          cssClass : cssClass[2] + " " + "button icon abstain"
        },{
          name : "Malta",
          image : "malta.png",
          population : 0.1,
          votes :  3,
          vote : order[2],
          cssClass : cssClass[2] + " " + "button icon abstain"
        },{
          name : "Netherlands",
          image : "netherlands.png",
          population : 3.9,
          votes : 13,
          vote : order[2],
          cssClass : cssClass[2] + " " + "button icon abstain"
        },{
          name : "Poland",
          image : "poland.png",
          population : 8.5,
          votes : 27,
          vote : order[2],
          cssClass : cssClass[2] + " " + "button icon abstain"
        },{
          name : "Portugal",
          image : "portugal.png",
          population : 2.3,
          votes : 12,
          vote : order[2],
          cssClass : cssClass[2] + " " + "button icon abstain"
        },{
          name : "Romania",
          image : "romania.png",
          population : 4.4,
          votes : 14,
          vote : order[2],
          cssClass : cssClass[2] + " " + "button icon abstain"
        },{
          name : "Slovakia",
          image : "slovakia.png",
          population : 1.2,
          votes :  7,
          vote : order[2],
          cssClass : cssClass[2] + " " + "button icon abstain"
        },{
          name : "Slovenia",
          image : "slovenia.png",
          population : 0.5,
          votes :  4,
          vote : order[2],
          cssClass : cssClass[2] + " " + "button icon abstain"
        },{
          name : "Spain",
          image : "spain.png",
          population : 10.4,
          votes : 27,
          vote : order[2],
          cssClass : cssClass[2] + " " + "button icon abstain"
        },{
          name : "Sweden",
          image : "sweden.png",
          population : 2.2,
          votes : 10,
          vote : order[2],
          cssClass : cssClass[2] + " " + "button icon abstain"
        }
        // ,{
        //   name : "UK",
        //   image : "united-kingdom.png",
        //   population : 12.39,
        //   votes : 29,
        //   vote : order[2],
        //   cssClass : cssClass[2] + " " + "button icon abstain"
        //  }
      ],
      result = {
        title : "Rejected",
        typeTitle : "Population",
        yesCount : 0,
        noCount : 0,
        abstainCount : 0,
        yesVotes : 0,
        noVotes : 0,
        abstainVotes : 0,
        yesPopulation : 0,
        noPopulation : 0,
        type : "% population"
      };

    return {

      members : members,

      result : result,

      setVote : function (member) {
        member.vote = (order.indexOf(member.vote) === 2) ? order[0] : order[order.indexOf(member.vote) + 1];
        member.cssClass = cssClass[order.indexOf(member.vote)] + " " + member.vote + " button icon";
        return this;
      },

      getVotes: function(member) {
        return members[member].votes;
      },

      resetVotes : function () {
        var c;
        for(c in members) {
          members[c].vote = "abstain";
          members[c].cssClass = cssClass[2] + " " + members[c].vote + " button icon";
        }
        return this;
      },

      /**
      *  Description: calculate the yes, no, and abstains in a vote. The new system is primarily about the population percentages.
      *  @returns Object containing message and results
      */
      calculateResults : function () {

        var c, //iterator counter
        yesCount = 0, //how many vote yes
        noCount = 0, //how many vote no
        abstainCount = 0, //how many abstain
        yesVotes = 0, //the total number of yes votes countries have
        noVotes = 0, //the total number of yes votes countries have
        abstainVotes = 0, //the total number of abstain votes countries have
        yesPopulation = 0, //the yes population count total of each country
        noPopulation = 0, //the no population count total of each country
        abstainPopulation = 0, //the abstain population count total of each country
        participatingYesPercent = 0, //percentage of voters
        participatingNoPercent = 0, //percentage of voters
        participatingAbstainPercent = 0; //percentage of no voters

        result.title = ""; //votes or population
        result.result_bg = "rejected";
        result.typeTitle = "Population"; //title of results
        result.type = "% population"; //for results description

        for(c in members) {

          //set display result type
          members[c].typeResult = members[c].population;

          if (members[c].vote === "yes") {

            yesCount++;
            yesVotes += members[c].votes;
            yesPopulation += members[c].population;

          } else if (members[c].vote === "no") {

            noCount++;
            noVotes += members[c].votes;
            noPopulation += members[c].population;

          } else { //must be an abstain

            abstainCount++;
            abstainVotes += members[c].votes;
            abstainPopulation += members[c].population;

          }
        }

        //the % of yes votes
        participatingYesPercent = Math.round(((yesCount / Object.keys(members).length) * 100)).toFixed(1);
        participatingNoPercent = Math.round(((noCount / Object.keys(members).length) * 100)).toFixed(1);
        participatingAbstainPercent = Math.round(((abstainCount / Object.keys(members).length) * 100)).toFixed(1);
        
        //total of votes
        result.yesVotes = yesVotes;
        result.noVotes = noVotes;
        result.abstainVotes = abstainVotes;

        //number of actual yes, no and abstain members
        result.yesCount = yesCount;
        result.noCount = noCount;
        result.abstainCount = abstainCount;

        //population count
        result.yesPopulation = Math.round(yesPopulation).toFixed(1);
        result.noPopulation = Math.round(noPopulation).toFixed(1);
        result.abstainPopulation = Math.round(abstainPopulation);

        //% of members
        result.participatingYesPercent = Math.ceil(participatingYesPercent);
        result.participatingNoPercent = Math.ceil(participatingNoPercent);
        result.participatingAbstainPercent = Math.ceil(participatingAbstainPercent);

        if (yesPopulation >= 55 && participatingYesPercent >= 65 && yesCount >= 15) {
          result.title = "A Qualified Majority";
          result.result_bg = "majority";
        } else if (noCount >= 4 && noPopulation >= 35) {
          result.title = "A Blocking Minority";
          result.result_bg = "blocked";
        }

        if (result.title === "") {
          result.title = "Rejected";
          result.result_bg = "rejected";
        }

        //footer results
        result.yesResult = result.yesPopulation + " %";
        result.yesResultCount = result.yesCount;

        result.noResult = result.noPopulation + " %";
        result.noResultCount = result.noCount;

        result.abstainResult = result.abstainPopulation + " %";
        result.abstainResultCount = result.abstainCount;

        return result;

      },

      calculateResultsOriginal : function () {

        var c, //iterator counter
        yesCount = 0, //how many vote yes
        noCount = 0, //how many vote no
        abstainCount = 0, //how many abstain
        yesVotes = 0, //the total number of yes votes countries have
        noVotes = 0, //the total number of yes votes countries have
        abstainVotes = 0, //the total number of abstain votes countries have
        yesPopulation = 0, //the yes population count total of each country
        noPopulation = 0, //the no population count total of each country
        abstainPopulation = 0;

        result.title = "";
        result.type = "votes";
        result.typeTitle = "Votes";

        for(c in members) {

          //set display result type
          members[c].typeResult = members[c].votes;

          if (members[c].vote === "yes") {

            yesCount++;
            yesVotes += members[c].votes;
            yesPopulation += members[c].population;

          } else if (members[c].vote === "no") {

            noCount++;
            noVotes += members[c].votes;
            noPopulation += members[c].population;

          } else { //must be an abstain

            abstainCount++;
            abstainVotes += members[c].votes;
            abstainPopulation += members[c].population;

          }
        }

        if (yesVotes >= 260 && yesCount >= 15 && yesPopulation >= 60) {
          result.title = "A Qualified Majority";
          result.result_bg = "majority";
        }

        if (noVotes >= 93 && noCount >= 14 && yesPopulation > 38) {
          result.title = "A Blocking Minority";
          result.result_bg = "blocked";
        }

        if (result.title === "") {
          result.title = "Rejected";
          result.result_bg = "rejected";
        }

        //total of votes
        result.yesVotes = yesVotes;
        result.noVotes = noVotes;
        result.abstainVotes = abstainVotes;

        //number of actual yes, no and abstain members
        result.yesCount = yesCount;
        result.noCount = noCount;
        result.abstainCount = abstainCount;

        result.yesPopulation = yesPopulation;
        result.noPopulation = noPopulation;

        //footer results
        result.yesResult = result.yesVotes;
        result.yesResultCount = result.yesCount;

        result.noResult = result.noVotes;
        result.noResultCount = result.noCount;

        result.abstainResult = result.abstainVotes;
        result.abstainResultCount = result.abstainCount;

        return result;

      }

    }
  });