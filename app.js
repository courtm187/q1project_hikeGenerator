$(function(){
  console.log("it works");

    $(".accordion").on("click", ".accordion-control", function(e){ // When clicked
      e.preventDefault();                    // Prevent default action of button
      $(this)                                // Get the element the user clicked on
        .next(".accordion-panel")            // Select following panel
        .not(":animated")                    // If it is not currently animating
        .slideToggle();                      // Use slide toggle to show or hide it
    });

$(".btnClass").on('click', function(){
  $(this).parent().parent().slideToggle();
  $(this).parent().parent().parent().next().children('.accordion-panel').slideToggle();


})

$("#resetBtn").on("click", function(){
  console.log("reset");
  $(".btnClass").prop('checked', false);

});

  var hikeArray = [];
  var hike1 = {name: "Mt. Galbraith", area: "Golden",length: 4.2, steepness: "Medium", busyWeekend: true, link: ""};
  var hike2 = {name: "Chimney Gulch", area: "Golden",length: 5, steepness: "Medium", busyWeekend: false, link: ""};
  var hike3 = {name: "Mt. Falcon", area: "Golden",length: 6, steepness: "Medium", busyWeekend: true, link: ""};
  var hike4 = {name: "Mt. Morrison", area: "Golden",length: 5, steepness: "Steep", busyWeekend: true, link: "http://www.summitpost.org/mount-morrison/790630"};
  var hike5 = {name: "Dakota Ridge", area: "Golden", length: 6, lengthType: "long", steepness: "Medium", busyWeekend: false, link: "https://www.trails.com/tcatalog_trail.aspx?trailid=BGR030-030"};
  var hike6 = {name: "Anemone Hill", area: "Boulder", length: 3, steepness: "Medium", busyWeekend: false, link: ""};
  var hike7 = {name: "Mt. Sanitas", area: "Boulder", length: 3.1, steepness: "Steep", busyWeekend: true, link: "http://www.protrails.com/trail/36/boulder-denver-golden-fort-collins-lyons-mt-sanitas-loop-trail"};
  hikeArray.push(hike1, hike2, hike3, hike4, hike5, hike6, hike7);

  var filteredHikes = [];

  $(".submitBtn").on("click", function(){

   var lengthType;

    if ($('#boulderButton').prop('checked', true)) {

      $('#lengthForm').children('input').each(function(){
        if ($(this).prop("checked")) {
          lengthType = $(this).attr('value');
        }

      })

      var areaFilter = hikeArray.filter(function(hike){
        return hike.area == 'Boulder' && hike.lengthType == lengthType;
      });
      console.log(areaFilter);

    }

    if ($('#goldenButton').prop('checked', true)) {

    }

  });


}); //end function


// $(".circle").hover(function(){
//   console.log("argh");
//
//   //$(this).effect("bounce", {"slow");
//   $(this).toggle({
//         effect: "scale",
//         percent: "120%"
//       },900);
//   });

//button try 1
  //   $(".btnClass").on('click', function(){
  //     if ($(this).is(":checked")){
  //       console.log("button click");
  //
  //     $(".accordion-panel").slideToggle();
  //     $(".accordion").next(".accordion-panel").not(":animated").slideToggle();
  //   }
  // });//button click function

//button try 2
// $(".btnClass").on('change', function(){
//     $(this) ?'slideDown':'slideUp']();
// });

//button try 3
// $(".btnClass").on('click', function(){
//     if ($(this).is(":checked")){
//       console.log("button click");
//       if((".accordion-panel").index()[0]){
//         $(this).siblings()[1].slideToggle();
//        } //else if ((".accordion-panel").index()[1])
//      }
//    });
    //  $('.accordion-panel').siblings()[0]
