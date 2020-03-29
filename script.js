// question 1

var cat = {
  complain: function() {
    console.log("Meow!");
  }
};
cat.complain();

// question 2

var heading = document.querySelector("h3");
console.log(heading);

// question 3

const heading = document.querySelector("h3");
heading.style.fontSize = "2em";

// question 4

heading.classList.add("subheading");
console.log(heading.className);

// question 5

const paragraphs = document.querySelectorAll("p");
console.log(paragraphs);

// question 6

const resultsContainer = (document.querySelector(".results").innerHTML =
  "<p>New paragraph</p>");

// question 7

const cats = [
  {
    name: "Blob",
    age: 10
  },
  {
    name: "Harold"
  },
  {
    name: "Blurt",
    age: 21
  }
];

function catNames(catArray) {
  for (let i = 0; i < catArray.length; i++) {
    console.log(catArray[i].name);
  }
}

catNames(cats);

// question 8

function getNamesAsH5(catArray) {
  let h5 = "";
  for (i = 0; i < catArray.length; i++) {
    h5 += "<h5>" + catArray[i].name + "</h5>";
  }
  return h5;
}

getNamesAsH5(cats);

// question 9

const cats = [
  {
    name: "Blob",
    age: 10
  },
  {
    name: "Harold"
  },
  {
    name: "Blurt",
    age: 21
  }
];

const resultsContainer = document.querySelector(".results");

function getCatNames(catArray) {
  let content = "";
  for (var i = 0; i < catArray.length; i++) {
    content += "<h5>" + catArray[i].name + "</h5>";
  }
  return content;
}

resultsContainer.innerHTML = getCatNames(cats);

// question 10

const cats = [
  {
    name: "Blob",
    age: 10
  },
  {
    name: "Harold"
  },
  {
    name: "Blurt",
    age: 21
  }
];

const resultsContainer = document.querySelector(".results");

function catNames(catArray) {
  let content = "";
  for (var i = 0; i < catArray.length; i++) {
    content += "<div><h3>" + catArray[i].name + "</h3><p>";
    if (!isNaN(catArray[i].age)) {
      content += catArray[i].age;
    } else {
      content += "Age unknown";
    }
    content += "</p></div>";
  }
  return content;
}

resultsContainer.innerHTML = catNames(cats);
