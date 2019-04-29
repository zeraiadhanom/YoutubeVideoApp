"use strict";

const mongoose = require('mongoose')

mongoose.Promise = global.Promise;



// video schema:

const videoSchema = mongoose.Schema({
  person : {type: mongoose.Schema.ObjectId, ref: 'User'},
  videoTitle: { type: String, required: false},
  discription: {type: String},
  thubmnailURL: {type: String},
  uploadedDate: {type: Date, default: Date.now},
  myRating: {type: String},
  maxResults: {type: Number},
  created: {type: Date, default: Date.now}
}); 



videoSchema.virtual('personName').get(function(){
	return `${this.person.firstName} ${this.person.lastName}`.trim();
	
}); 


videoSchema.methods.serialize = function() {
  return {
    id: this._id,
    person: this.person,
    videoTitle: this.videoTitle,
    discription: this.discription,
    thubmnailURL: this.thubmnailURL,
    uploadedDate: this.uploadedDate,
    maxResults:this.maxResults,
    myRating: this.myRating,   
    comment: this.comment,
    created: this.created
  };
};


const Videos = mongoose.model("Videos", videoSchema);

module.exports = { Videos };
