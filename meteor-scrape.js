RightmoveList = new Mongo.Collection('rightmove');

if(Meteor.isClient){
  Template.searchresults.helpers({
    'house': function(){
        return RightmoveList.find()
    } 
  });

  Meteor.call('getHouses', function (error, result){
    if (error){
      console.log("error", error);
    };

    console.log(result);

    Session.set("houses", result);
  });

  Template.houses.helpers({
    search: function(){
      return Session.get("houses");
    }
  })

}

if(Meteor.isServer) {
  Meteor.startup(function(){
    var cheerio = Meteor.npmRequire('cheerio');

    Meteor.methods({
      getHouses: function(){
        result = Meteor.http.get("http://www.rightmove.co.uk/property-for-sale/find.html?locationIdentifier=OUTCODE%5E2119&insId=1&sortType=1&minBedrooms=1&maxBedrooms=2&retirement=false&displayPropertyType=flats&oldDisplayPropertyType=flats&partBuyPartRent=false");
        
        $ = cheerio.load(result.content);
        
        var resp = $('div.summarymaincontent > div.details.clearfix > a.description.touchsearch-summary-list-item-description > span').text();
        
        return resp;
      }
    })
  });
}

