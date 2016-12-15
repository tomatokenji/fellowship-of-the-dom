console.log("Linked.");

// Dramatis Personae
var hobbits = [
  'Frodo Baggins',
  'Samwise \'Sam\' Gamgee',
  'Meriadoc \'Merry\' Brandybuck',
  'Peregrin \'Pippin\' Took'
];

var buddies = [
  'Gandalf the Grey',
  'Legolas',
  'Gimli',
  'Strider',
  'Boromir'
];

var lands = ['The Shire', 'Rivendell', 'Mordor'];
var body = document.querySelector('body');


// Part 1


function makeMiddleEarth() {
  // create a section tag with an id of middle-earth
  // add each land as an article tag
  // inside each article tag include an h1 with the name of the land
  // append middle-earth to your document body
  $('body').append('<section id="middle-earth">');

  for (var i=0; i<lands.length; i++){
    $('#middle-earth').append('<article>');
    console.log("article appended");
  }

  //append all articles with h1
  $('article').append('<h1>');

  for (var i=0; i<lands.length; i++){
    var landName = lands[i];
    var targetCell = 'article:nth-child(' + (i+1) + ') > h1';
    $(targetCell).html(landName);
  }

  var landArticleString;
  for (var i=0; i<lands.length; i++){
    landArticleString
  }

}

makeMiddleEarth();

// Part 2

function makeHobbits() {
  // display an unordered list of hobbits in the shire (which is the first article tag on the page)
  // give each hobbit a class of hobbit
  $('article:nth-child(1)').append($('<ul>'));

  for(var i=0; i<hobbits.length; i++){
    $('ul').append($('<li class="hobbit">'));
    var targetCell = 'ul>li:nth-child(' + (i+1) + ')';
    $(targetCell).html(hobbits[i]);
  }


}

makeHobbits();
// Part 3

function keepItSecretKeepItSafe() {
  // create a div with an id of 'the-ring'
  // give the div a class of 'magic-imbued-jewelry'
  // add an event listener so that when a user clicks on the ring, the nazgulScreech function (provided) is invoked
  // add the ring as a child of Frodo
  $('ul>li:nth-child(1)').append("<div id='the-ring' class='magic-imbued-jewelry'></div>");
  $('#the-ring').click(function(){
    nazgulScreech();
    console.log("clicked");
  })


}

keepItSecretKeepItSafe();


// Part 4


function makeBuddies() {
  // create an aside tag
  // attach an unordered list of the 'buddies' in the aside
  // insert your aside as a child element of rivendell
  $('article:nth-child(2)').append('<aside>');
  $('aside').append('<ul>');

  for(var i=0; i<buddies.length; i++){
    $('aside>ul').append('<li>');
    var tempString = 'aside>ul>li:nth-child(' + (i+1) + ')';
    var buddyName = buddies[i];
    $(tempString).html(buddyName);
  }
}

makeBuddies();


// Part 5


function beautifulStranger() {
  // change the 'Strider' textnode to 'Aragorn'

  $('aside>ul>li:contains("Strider")').html("Aragorn");

}

beautifulStranger();

// Part 6

function leaveTheShire() {
  // assemble the hobbits and move them to Rivendell
  $('#middle-earth>article:nth-child(1)>ul').clone().appendTo($("#middle-earth>article:nth-child(2)"));
    $('#middle-earth>article:nth-child(1)>ul').remove();



}

// leaveTheShire();

// Part 7


function forgeTheFellowShip() {
  // create a new div called 'the-fellowship' within rivendell
  // add each hobbit and buddy one at a time to 'the-fellowship'
  // after each character is added make an alert that they have joined your party

  $('#middle-earth>article:nth-child(2)').append('<div class="the-fellowship">');
  var allPlayers = hobbits.concat(buddies);
  $('.the-fellowship').html("FELLOWSHIP");
  $('.the-fellowship').append("<ul>");

  $('li').click(function(){
    $(this).appendTo($('.the-fellowship>ul'));
    alert($(this).html() + " has joined your party! ");
  })

  //
  // var addPlayer = function(){
  //   for (var i=0; i<allPlayers.length; i++){
  //     $('.the-fellowship>ul').append("<li>");
  //     var address = '.the-fellowship>ul>li:nth-child('+ (i+1) + ')';
  //     $(address).html(allPlayers[i]);
      // alert(allPlayers[i] + " has joined your party! ");
  //   }
  // }
  // addPlayer();
  // setTimeout(addPlayer,2000);


}
forgeTheFellowShip();


// Part 8


function theBalrog() {
  // change the 'Gandalf' textNode to 'Gandalf the White'
  // apply style to the element
  // make the background 'white', add a grey border
  $('li:contains("Gandalf")').html("Gandalf the White");
  $('li:contains("Gandalf")').css("background-color", "white");
  $('li:contains("Gandalf")').css("border", "4px solid grey");
}

// theBalrog();


// Part 9

function hornOfGondor() {
  // pop up an alert that the horn of gondor has been blown
  // Boromir's been killed by the Uruk-hai!
  // put a linethrough on boromir's name
  // Remove Boromir from the Fellowship
  alert("horn of gondor has been blown");
  $('li:contains("Boromir")').css("text-decoration","line-through");

  $('.the-fellowship>li:contains("Boromir")').remove();

}

// hornOfGondor();
// Part 10

function itsDangerousToGoAlone(){
  // take Frodo and Sam out of the fellowship and move them to Mordor
  // add a div with an id of 'mount-doom' to Mordor
  $('section>article:nth-child(3)').append("<div id='mount-doom'>");
  $('.the-felllowship>li:contains("Frodo")').appendTo('section>article:nth-child(3)');
}

itsDangerousToGoAlone();


// Part 11

function weWantsIt() {
  // Create a div with an id of 'gollum' and add it to Mordor
  // Remove the ring from Frodo and give it to Gollum
  // Move Gollum into Mount Doom
  $('section>article:nth-child(3)').append("<div id='gollum'>");

  $("#the-ring").appendTo($('#gollum'));
}

weWantsIt();


// Part 12

function thereAndBackAgain() {
  // remove Gollum and the Ring from the document
  // remove all the baddies from the document
  // Move all the hobbits back to the shire
  $("#gollum").remove();
  $("");


}




//////////for button activation

$(document).ready(function(){
  
})
