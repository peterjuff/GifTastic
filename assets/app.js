$(document).ready(function() {

    var topics = ["plott hound", "golden retriever", "pit bull", "poodle"];

    $(document).on("click", ".dog", function() {
        console.log("hi")

        $("#gifs-appear-here").empty();
        var dog = $(this).attr("data-dog");

        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + dog + "&api_key=uvfOJc7DA2mHG117C4kyF5lRa6eAKJzN&limit=10&offset=0&rating=G&lang=en"
        
        $.ajax({
            url: queryURL,
            method: "GET"
        })
        //after data comes back from API call
        .done(function(response) {
            var results = response.data;
            console.log(response.data)
        })

        for (var i = 0; i < results.length; i++) {
            var newDiv = $("<div>");
            var p = $("<p>").text("Rating: " + results[i].rating);

            var dogImage = $("<img>");

            dogImage.attr("src", results[i].images.fixed_height_still.url);
            dogImage.attr("data-still", results[i].images.fixed_height_still.url)
            dogImage.attr("data-animate", results[i].images.fixed_height.url);
            dogImage.addClass("dogPic");
            dogImage.attr("data-state", "still");

            dogDiv.append(p);
            dogDiv.append(dogImage);

            $("#gifs-appear-here").prepend(dogDiv);


        };

    });

    function makeButtons() {

        $("#newButtonsHere").empty();

        for (var j = 0; j < topics.length; j++) {

            var a = $("<button>");
            a.addClass("dog");
            a.attr("data-dog", topics[j]);
            a.text(topics[j]);
            $("#newButtonsHere").append(a);
        }
    };

    $("#add-dog").on("click", ".dogPic", function(event) {

        event.preventDefault();
        var dog = $("#dog-input").val().trim();

        topics.push(dog);

        makeButtons();

    });

    $(document).on("click", ".dogPic", function() {
        var state = $(this).attr("data-state");

        if (state === "still") {
            $(this).attr("src", $(this).attr("data-animate"))
            $(this).attr("data-state", "animate")
         }
        else {
            $(this).attr("src", $(this).attr("data-still"))
            $(this).attr("data-state", "still")
        };

    });


    makeButtons();



});










// var topics = ["plott hound", "golden retriever", "pit bull", "poodle"];

               

//                 $(document).on("click", ".dog", function() {

//                 console.log("button clicked");

        
//                 var dog = $(this).attr("data-dog");

//                 var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + dog + "&api_key=uvfOJc7DA2mHG117C4kyF5lRa6eAKJzN&limit=10&offset=0&rating=G&lang=en"
                
                
                
//                 $.ajax({
//                 url: queryURL,
//                 method: "GET"
//                 })
                
//                 .done(function(response) {
//                     console.log(queryURL);   
//                     console.log(response);
//                     var results = response.data;
//                     console.log("got data");


                

//                     for (var i = 0; i < results.length; i++) {
//                         var dogDiv = $("<div>");

//                         var p = $("<p>").text("Rating: " + results[i].rating);

//                         var dogImage = $("<img>");

//                         dogImage.attr("src", results[i].images.fixed_height_still.url);
//                         dogImage.attr("data-still", results[i].images.fixed_height_still.url)
//                         dogImage.attr("data-animate", results[i].images.fixed_height.url);
//                         dogImage.addClass("dogPic");
//                         dogImage.attr("data-state", "still")

                        

                

//                         dogDiv.append(p);
//                         dogDiv.append(dogImage);

//                         $("#gifs-appear-here").prepend(dogDiv);

//                     }
//                    })  })
//                 function makeButtons() {

//                     $("#newButtonsHere").empty();

//                     for(var i = 0; i < topics.length; i++) {
                        
//                         var a = $("<button>");
//                         a.addClass("dog");
//                         a.attr("data-dog", topics[i]);
//                         a.text(topics[i]);
//                         $("#newButtonsHere").append(a);


//                     }

//                 }

//                 $("#add-dog").on("click", function(event) {
//                  event.preventDefault();
//                  var dog = $("#dog-input").val().trim();

//                  topics.push(dog);

//                  makeButtons();
//                 });

//                 $(document).on("click", ".dogPic", function(){
//                     console.log("click working");
//                     var state = $(this).attr("data-state");

//                     if (state === "still") {
//                         $(this).attr("src", $(this).attr("data-animate"))
//                         $(this).attr("data-state", "animate")
//                     }

//                     else {
//                         $(this).attr("src", $(this).attr("data-still"))
//                         $(this).attr("data-state", "still")
//                     }

//                 });

              

//                 makeButtons();