describe("MongoDB template load", function () {
  it("should display search results", function (){
  	expect($('<li>PO</li>')).toHaveText('PO');
  });
});

describe("web scraping result", function(){
	it("should include the word bedroom", function(){
		expect($('<ul>bedroom</ul>')).toHaveText('bedroom');
	});
});