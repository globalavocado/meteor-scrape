describe("MongoDB template load", function () {
  it("should display search results", function (){
  	expect($('<li>PO</li>')).toHaveText('PO');
  });
});