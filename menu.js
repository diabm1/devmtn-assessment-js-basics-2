///////////////////////////////////////////////
///////////////////MENU.JS/////////////////////
///////////////////////////////////////////////
/*
    In this file, you'll be writing code that
    deals with food objects, arrays of objects
    and filtering those arrays. 
*/

//////////////////PROBLEM 1////////////////////
/*  
    Create an object called `pizza` that has 6
    properties: 
        - name (string)
        - price (number)
        - category (string)
        - popularity (number)
        - rating (number)
        - tags (array of strings)

    Make sure that you give your properties values
    of the correct data type.

    Note: the category is something like appetizer/entree,
    the popularity is an overall ranking, the
    rating is an average of all customer ratings, and
    for the tags, think of things that a
    user might filter by, like 'gluten-free' or
    'kids'
*/

//CODE HERE
const pizza = {
  name: "Margherita",
  price: 10.99,
  category: "Traditional",
  popularity: 8,
  rating: 4.5,
  tags: ["vegetarian", "cheese", "tomato", "basil"],
};

//////////////////PROBLEM 2////////////////////
/* 
    Let's print a few values from our pizza object.

    First, log the popularity of pizza. 
    Use dot notation to access the value.
*/

//CODE HERE
// console.log(pizza.popularity);

/*
    Second, log the second tag in your pizza's
    tags array.
    Use a combination of dots and brackets to
    get the value.
*/

//CODE HERE
// console.log(pizza.tags[1]);

/*
    Third, destructure the price off of the
    pizza object.
    
    Print the value of your new price variable.
*/

//CODE HERE
let { price } = pizza;
// console.log(price);

/*
    Fourth, and last, destructure the category
    property.

    Print the value of your category variable. 
*/

//CODE HERE
let { category } = pizza;
// console.log(category);

//////////////////PROBLEM 3////////////////////
/* 
    Create an array with about 5 objects in it.
    The objects should mimic the `pizza` object.
    Call the array `foodArr`.

    Make sure that they have slightly different
    values for price, popularity, rating, and
    tags. That way, you'll be able to use this
    data in some functions that you'll write.
*/

//CODE HERE

const foodArr = [
  {
    name: "Cheeseburger",
    price: 8.99,
    category: "Burgers",
    popularity: 7,
    rating: 4.2,
    tags: ["beef", "cheese", "lettuce", "tomato"],
  },
  {
    name: "Pepperoni Pizza",
    price: 12.99,
    category: "Traditional",
    popularity: 9,
    rating: 4.7,
    tags: ["pepperoni", "cheese", "tomato"],
  },
  {
    name: "Grilled Chicken Sandwich",
    price: 9.99,
    category: "Sandwiches",
    popularity: 6,
    rating: 4.3,
    tags: ["chicken", "lettuce", "tomato", "mayo"],
  },
  {
    name: "Pad Thai",
    price: 11.99,
    category: "Noodles",
    popularity: 8,
    rating: 4.5,
    tags: ["noodles", "chicken", "peanuts", "vegetables"],
  },
  {
    name: "Veggie Wrap",
    price: 7.99,
    category: "Wraps",
    popularity: 5,
    rating: 4.0,
    tags: ["vegetarian", "lettuce", "tomato", "avocado"],
  },
];

//////////////////PROBLEM 4////////////////////
/* 
    Let's filter the food objects according
    to their tags.

    Write a callback function below that will
    return only food objects that have a certain tag.

    You can check for any tag that at least 1 of
    your food objects has.
*/

//CODE HERE

// const filteredFood = foodArr.filter(function (params) {
//   // tag = beef
//   for (let i = 0; i < params.tags.length; i++) {
//     if (params.tags[i] === "beef") {
//       return params.tags;
//     }
//     return;
//   }
// });

// console.log(filteredFood);

// const filteredFood = foodArr.filter(function(food) {
//     // Check if the 'tags' array includes 'beef'
//     return food.tags.includes('beef');
//   });

function isTagThere(food) {
  // Check if the 'tags' array includes 'beef'
//   console.log(food.tags.includes("beef"));
}

//   console.log(filteredFood);
// console.log(foodArr);

//////////////////PROBLEM 5////////////////////
/* 
    Now let's write a function that's a little
    more flexible than just filtering for one
    value. We want to be able to filter for 
    food that has above a certain rating, 
    below a certain price, or any other combo.

    Write a function called `filterByProperty`
    that takes in three arguments: `property`, 
    `number`, and `type. 

    The property will be a string (rating,
    popularity, or price)

    The number will be the number that you want
    to compare against 

    The type should be 'above' or 'below' to 
    indicate whether you want to get foods with
    values that are above or below the given number
    for the given property

    Inside the function, create a variable to hold
    a filtered array

    Use the filter method to filter the foodArr

        In the callback, check if the `type` is `above`, 
        if it is, return objects whose value for the given
        property is greater than the `number` passed in

        If the type is `below`, return objects whose
        value for the given property is less than the 
        `number` passed in
    
    Return the filtered array from the entire function
*/

//CODE HERE
// Write a function called `filterByProperty`
// that takes in three arguments: `property`,
// `number`, and `type.
function filterByProperty(property, number, type) {
  // Inside the function, create a variable to hold
  // a filtered array
  //     Use the filter method to filter the foodArr
  //     In the callback, check if the `type` is `above`,
  //     if it is, return objects whose value for the given
  //     property is greater than the `number` passed in
  const filteredFood = foodArr.filter((food) => {
    if (type === "above") {
      return food[property] > number;
      //If the type is `below`, return objects whose value for the given property is less than the `number` passed in
    } else if (type === "below") {
      return food[property] < number;
    }

    // Return the filtered array from the entire function
  });
  return filteredFood;
}

/*
    Invoke the `filterByProperty` function passing
    in a value for each paramter.

    You'll have to console.log to see the filtered array
*/

//CODE HERE
console.log(filterByProperty('price', 9, 'below'))
