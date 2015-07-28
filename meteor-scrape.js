RightmoveList = new Mongo.Collection('rightmove');

if(Meteor.isClient){
  Template.searchresults.helpers({
    'house': function(){
        return RightmoveList.find()
    } 
  });
}

if(Meteor.isServer){

}
