const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

const storyText = "The CU Boulder campus was 'popping' as the kids nowadays say, so insertx went for a walk to find a function to crash. When they got to inserty, they looked in awe, then insertz. Bob offered to take a pic— insertx is a big fan, and Bob is a good friend.";

const insertX = ["your mom", "Big Daddy", "Chad Brown"];

const insertY = ["the darty", "football field", "Farrand Field"];

const insertZ = ["got down to their knees to praise Shedeur Sanders", "took a selfie with Coach Prime", "dapped up Travis Hunter"];

randomize.addEventListener('click', result);

function result() {
    
    let newStory = storyText 
    
    const xItem = randomValueFromArray(insertX);
    const yItem = randomValueFromArray(insertY);
    const zItem = randomValueFromArray(insertZ);

    newStory = newStory.replaceAll("insertx", xItem);
    newStory = newStory.replaceAll("inserty", yItem);
    newStory = newStory.replaceAll("insertz", zItem);

  if(customName.value !== '') {
    const name = customName.value;
    newStory = newStory.replaceAll("Bob", name);

  }

  if(document.getElementById("uk").checked) {
    const weight = `${Math.round(300/14)} stone`;
    const temperature =  `${Math.round((94-32)*(.555555555))} centigrade`;
    newStory = newStory.replaceAll("94 fahrenheit", temperature);
    newStory = newStory.replaceAll("300 pounds", weight);

  }

  story.textContent = newStory;
  story.style.visibility = 'visible';
}