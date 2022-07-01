/* FACT GENERATOR */
var factList = ["Any food deserts near you? Check out this link: https://www.ers.usda.gov/data-products/food-access-research-atlas/go-to-the-atlas.aspx", "About 2.3 million U.S. citizens living in low-income and rural areas do not have a supermarket nearby for more than 10 miles away.", "Residents of food deserts often eat at fast food chains or local stores that may not sell organic food.", "About 2 million households do not own a personal vehicle to drive themselves to their nearest supermarket.", "Life expectancy in food deserts are up to 15 years lower than the U.S. national average.", "People residing in the poorest social-economic places are 2.5x more exposed to fast food chains than people in wealthy areas."];
var button = document.getElementById("facts");
var fact = document.getElementById("factsHere");
var count = 0;
button.addEventListener("click", displayFact);
function displayFact(){
  fact.innerHTML = factList[count];
  count++;
  if(count==factList.length){
    count=0;
  }
}
