//fetch the content
fetch("https://kea-alt-del.dk/t7/api/brands")
  .then((res) => res.json())
  .then(goThroughEach);
//forreach
function goThroughEach(data) {
  console.log(data);
  data.forEach(showBrand);
}
//that function
function showBrand(oneBrand) {
  //1 find the first letter
  const firstLetter = oneBrand.brandname.charAt(0).toLowerCase();
  console.log(
    `I'm ${oneBrand.brandmane} and my first letter it ${firstLetter} and my selector would be #letter_${firstLetter}`
  );
  //do the usual things
  //grab the template
  const template = document.querySelector("template").content;
  //clone it
  const myCopy = template.cloneNode(true);
  //change some content
  myCopy.querySelector("a").textContent = oneBrand.brandname;
  myCopy.querySelector(
    "a"
  ).href = `productlist.html?brandmane=${oneBrand.brandname}`;
  //find the correct parent

  console.log(oneBrand);

  //find the parent
  const parent = document.querySelector(`#letter_${firstLetter}`);
  if (parent) {
    //append it
    parent.appendChild(myCopy);
  }
}
