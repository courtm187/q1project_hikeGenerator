$(function(){
  console.log("it works");

//toggle accordion panels
    $(".accordion").on("click", ".accordion-control", function(e){ // When clicked
      e.preventDefault();
      console.log($(this));                 // Prevent default action of button
      $(this)                                // Get the element the user clicked on
        .next(".accordion-panel")            // Select following panel
        .not(":animated")                    // If it is not currently animating
        .slideToggle();                      // Use slide toggle to show or hide it
    });


// toggle one panel at a time
$(".btnClass").on('click', function(){
  $(this).parent().slideToggle();
  $(this).parent().parent().next().children('.accordion-panel').slideToggle();
});


// on reset, clear buttons and close panels
$("#resetBtn").on("click", function(){
  console.log("reset");
  $(".btnClass").prop('checked', false);
  $(".accordion-panel").hide();
});


//show about popup
$("#aboutClick").on("click", function(){
  event.stopPropagation();
  $('#aboutPopup').show();
});

// close dialogue when click outside
$('body').on('click', function(e) {
  var target = $(e.target);
  console.log(target.parents('.circle').length);
  if (target.hasClass('.inDialog') || target.parents('.inDialog').length === 0) {
    $(".inDialog").hide();
  }
})

//hike function filters array based on form inputs
  var hikeArray = [];

var hike1 = {name: "McClintock-Enchanted Mesa", area: "boulder", miles: 2, elev: "440'", lengthType: "short", steepness: "mild", busyWeekend: "yes", link: "http://www.protrails.com/trail/153/boulder-denver-golden-fort-collins-lyons-mcclintock-enchanted-mesa-loop"};
var hike2 = {name: "Mallory Cave", area: "boulder", miles: 2.8, elev: "940'", lengthType: "short", steepness: "moderate", busyWeekend: "yes", link: "http://www.protrails.com/trail/73/boulder-denver-golden-fort-collins-lyons-mallory-cave-ncar"};
var hike3 = {name: "Flatirons 1 and 2", area: "boulder", miles: 2.9, elev: "1,440'", lengthType: "short", steepness: "difficult", busyWeekend: "yes", link: "http://www.protrails.com/trail/138/boulder-denver-golden-fort-collins-lyons-flatiron-1"};
var hike4 = {name: "Old Stage Open Space", area: "boulder", miles: 2.2, elev: "200'", lengthType: "short", steepness: "mild", busyWeekend: "no", link: "http://www.elevationoutdoors.com/boulders-overlooked-hiking-trails/"};
var hike5 = {name: "Hogback-Lollipop Loop", area: "boulder", miles: 2.95, elev: "900'", lengthType: "short", steepness: "moderate", busyWeekend: "no", link: "http://www.protrails.com/trail/154/boulder-denver-golden-fort-collins-lyons-hogback-lollipop-loop"};
var hike6 = {name: "Anemone Hill", area: "boulder", miles: 3, elev: "1,000'", lengthType: "short", steepness: "steep", busyWeekend: "no", link: "http://www.elevationoutdoors.com/boulders-overlooked-hiking-trails/"};
var hike7 = {name: "Woods Quarry", area: "boulder", miles: 3.5, elev: "800'", lengthType: "medium", steepness: "mild", busyWeekend: "yes", link: "https://bouldercolorado.gov/osmp/cultural-resources-chautauqua-historic-loop"};
var hike8 = {name: "Royal Arch", area: "boulder", miles: 3.2, elev: "1,400'", lengthType: "medium", steepness: "moderate", busyWeekend: "yes", link: "http://www.protrails.com/trail/69/boulder-denver-golden-fort-collins-lyons-royal-arch"};
var hike9 = {name: "Mt. Sanitas", area: "boulder", miles: 3.1, elev: "1,400'", lengthType: "medium", steepness: "difficult", busyWeekend: "yes", link: "http://www.protrails.com/trail/36/boulder-denver-golden-fort-collins-lyons-mt-sanitas-loop-trail"};
var hike10 = {name: "Mesa-Bluestern Loop", area: "boulder", miles: 4.35, elev: "850'", lengthType: "medium", steepness: "mild", busyWeekend: "no", link: "http://www.protrails.com/trail/329/boulder-denver-golden-fort-collins-lyons-mesa-trail-big-bluestem-trail-loop"};
var hike11 = {name: "Shadow Canyon", area: "boulder", miles: 5, elev: "1,200'", lengthType: "medium", steepness: "moderate", busyWeekend: "no", link: "http://www.elevationoutdoors.com/boulders-overlooked-hiking-trails/"};
var hike12 = {name: "Green Mountain", area: "boulder", miles: 5.4, elev: "2,300'", lengthType: "medium", steepness: "difficult", busyWeekend: "no", link: "http://www.protrails.com/trail/18/boulder-denver-golden-fort-collins-lyons-green-mountain"};
var hike13 = {name: "Wapiti Trail to Ponderosa Loop", area: "boulder", miles: 7.7, elev: "900'", lengthType: "long", steepness: "mild", busyWeekend: "yes", link: "http://www.protrails.com/trail/4/boulder-denver-golden-fort-collins-lyons-wapiti-trail-to-ponderosa-loop"};
var hike14 = {name: "Bitterbrush Trail to Nelson Loop", area: "boulder", miles: 9.4, elev: "1,500'", lengthType: "long", steepness: "moderate", busyWeekend: "yes", link: "http://www.protrails.com/trail/13/boulder-denver-golden-fort-collins-lyons-bitterbrush-trail-to-nelson-loop"};
var hike15 = {name: "Bear Peak", area: "boulder", miles: 8, elev: "3,000'", lengthType: "long", steepness: "difficult", busyWeekend: "yes", link: "http://www.summitpost.org/bear-peak/151499"};
var hike16 = {name: "Teller Farms/East Boulder Trail", area: "boulder", miles: 12.3, elev: "800'", lengthType: "long", steepness: "mild", busyWeekend: "no", link: "http://www.protrails.com/trail/351/boulder-denver-golden-fort-collins-lyons-teller-farms-east-boulder-trail"};
var hike17 = {name: "Picture Rock Trail", area: "boulder", miles: 10.4, elev: "1,100'", lengthType: "long", steepness: "moderate", busyWeekend: "no", link: "http://www.protrails.com/trail/419/boulder-denver-golden-fort-collins-lyons-picture-rock-trail"};
var hike18 = {name: "South Boulder Peak", area: "boulder", miles: 6.7, elev: "3,000'", lengthType: "long", steepness: "difficult", busyWeekend: "no", link: "http://www.protrails.com/trail/77/boulder-denver-golden-fort-collins-lyons-shadow-canyon-to-south-boulder-peak"};
var hike19 = {name: "Red Rocks Trading Post Trail", area: "golden", miles: 1.4, elev: "200'", lengthType: "short", steepness: "mild", busyWeekend: "yes", link: "http://www.protrails.com/trail/77/boulder-denver-golden-fort-collins-lyons-shadow-canyon-to-south-boulder-peak"};
var hike20 = {name: "South Table Mountain - Basalt Cap Loop", area: "golden", miles: 2.4, elev: "400'", lengthType: "short", steepness: "moderate", busyWeekend: "yes", link: "http://jeffco.us/open-space/parks/south-table-mountain-park/"};
var hike21 = {name: "Windy Saddle to Lookout Mountain", area: "golden", miles: 3, elev: "600'", lengthType: "short", steepness: "difficult", busyWeekend: "no", link: "http://www.gohikeco.com/2014/06/beaver-brook-trail-windy-saddle-park.html"};
var hike22 = {name: "Sawmill Trail", area: "golden", miles: 2.95, elev: "300'", lengthType: "short", steepness: "mild", busyWeekend: "no", link: "http://www.protrails.com/trail/136/boulder-denver-golden-fort-collins-lyons-sawmill-trail"};
var hike23 = {name: "Raccoon Loop", area: "golden", miles: 2.3, elev: "550'", lengthType: "short", steepness: "moderate", busyWeekend: "no", link: "http://www.protrails.com/trail/81/boulder-denver-golden-fort-collins-lyons-raccoon-loop-trail"};
var hike24 = {name: "Mt. Morrison", area: "golden", miles: 2.6, elev: "1,400'", lengthType: "short", steepness: "difficult", busyWeekend: "yes", link: "http://www.examiner.com/article/hiking-mt-morrison-trail-3"};
var hike25 = {name: "North Table Mountain", area: "golden", miles: 5.9, elev: "950'", lengthType: "medium", steepness: "mild", busyWeekend: "yes", link: "http://www.protrails.com/trail/440/boulder-denver-golden-fort-collins-lyons-north-table-loop"};
var hike26 = {name: "Mt. Galbraith", area: "golden", miles: 4.2, elev: "900'", lengthType: "medium", steepness: "moderate", busyWeekend: "yes", link: "http://alltrails.com/trail/us/colorado/mount-galbraith-trail"};
var hike27 = {name: "Mt. Falcon", area: "golden", miles: 4.5, elev: "1,200'", lengthType: "medium", steepness: "difficult", busyWeekend: "yes", link: "http://jeffco.us/open-space/parks/mount-falcon-park/"};
var hike28 = {name: "Tilting Mesa - Mesa Top Loop", area: "golden", miles: 3.2, elev: "600'", lengthType: "medium", steepness: "mild", busyWeekend: "no", link: "http://www.protrails.com/trail/441/boulder-denver-golden-fort-collins-lyons-north-table-tilting-mesa-mesa-top-loop"};
var hike29 = {name: "Shorthorn to Longhorn Trail", area: "golden", miles: 5.2, elev: "900'", lengthType: "medium", steepness: "moderate", busyWeekend: "no", link: "http://www.protrails.com/trail/137/boulder-denver-golden-fort-collins-lyons-shorthorn-to-longhorn-trail"};
var hike30 = {name: "Chimney Gulch", area: "golden", miles: 5, elev: "2,000'", lengthType: "medium", steepness: "difficult", busyWeekend: "no", link: "http://www.cityofgolden.net/play/recreation-attractions/trails/chimney-gulch-trail/"};
var hike31 = {name: "Centennial Cone", area: "golden", miles: 12, elev: "1,000'", lengthType: "long", steepness: "mild", busyWeekend: "yes", link: "http://jeffco.us/open-space/parks/centennial-cone-park/"};
var hike32 = {name: "Belcher Hill", area: "golden", miles: 9, elev: "1,800'", lengthType: "long", steepness: "moderate", busyWeekend: "yes", link: "http://www.protrails.com/trail/133/boulder-denver-golden-fort-collins-lyons-belcher-hill-trail"};
var hike33 = {name: "Belcher Hill - Rawhide - Longhorn - Whipple Tree Trail", area: "golden", miles: 8.8, elev: "2,140'", lengthType: "long", steepness: "difficult", busyWeekend: "yes", link: "http://www.protrails.com/trail/135/boulder-denver-golden-fort-collins-lyons-belcher-hill-rawhide-longhorn-whippletree-loop"};
var hike34 = {name: "Dakota Ridge", area: "golden", miles: 6, elev: "700'", lengthType: "long", steepness: "mild", busyWeekend: "no", link: "https://www.trails.com/tcatalog_trail.aspx?trailid=BGR030-030"};
var hike35 = {name: "Bergen Peak", area: "golden", miles: 9.4, elev: "2,100'", lengthType: "long", steepness: "difficult", busyWeekend: "no", link: "http://www.protrails.com/trail/644/boulder-denver-golden-fort-collins-lyons-bergen-peak"};
var hike36 = {name: "Windy Peak", area: "golden", miles: 7.9, elev: "1,800'", lengthType: "long", steepness: "moderate", busyWeekend: "no", link: "http://www.protrails.com/trail/23/boulder-denver-golden-fort-collins-lyons-mountain-lion-loop-trail-windy-peak"};


  hikeArray.push(hike1, hike2, hike3, hike4, hike5, hike6, hike7, hike8, hike9, hike10, hike11, hike12, hike13, hike14, hike15, hike16, hike17, hike18, hike19,
                hike20, hike21, hike22, hike23, hike24, hike25, hike26, hike27, hike28, hike29, hike30, hike31, hike32, hike33, hike34, hike35, hike36);

//form validation
  $("#hikeForm").on("submit", function(e){
    e.preventDefault();

    if (!$('input[name=area]:checked').val() ) {
        alert("Please select area");
      }
    if (!$('input[name=lengthType]:checked').val() ) {
        alert("Please select length");
      }
    if (!$('input[name=steepness]:checked').val() ) {
        alert("Please select strenuousness");
      }
    if (!$('input[name=busyWeekend]:checked').val() ) {
        alert("Please select if you are hiking on a weekend.");
        return false;
      }

    var inputs = $(this).serializeArray();
    console.log(inputs); // yay logs user's inputs from form

    // values of the form inputs
    var formData = {};

    $(inputs).each(function(index, obj){
      formData[obj.name] = obj.value;
    });

    console.log(formData);


    // var storeData = localStorage.setItem("Input Results", formData);
    // console.log(storeData);
    // stringify(storeData);


    // var data = {
    //   title: "My favorite data",
    //   submittedBy: "Fred",
    //   points: 1337
    // }

  //  data.title = "I hate data"
    localStorage.formData = JSON.stringify(formData);


    var myObject = JSON.parse(localStorage.formData);
    console.log("local storage woo!")
    console.log(myObject);

















































    // formData = {area: "boulder", miles: "short", steepness: "mild", busyWeekend: "yes"} <-- put this in local storage??
    //local storage to save boulder or golden to use for the weather //for local storage could also put input box to type in initials

    // hikes that match form input values
    var filteredHikes = hikeArray.filter(function(hike) {

      return hike.area === formData.area &&
             hike.lengthType === formData.lengthType &&
             hike.steepness === formData.steepness &&
             hike.busyWeekend !== formData.busyWeekend;

    });

    console.log(filteredHikes); // IT WORKS!!!!!
    console.log(filteredHikes[0].area); // works!
    console.log(filteredHikes[0].name); // TRAIL NAME

      $("#trailName").html(filteredHikes[0].name);
      $("#trailLength").html(filteredHikes[0].miles);
      $("#trailElev").html(filteredHikes[0].elev);
      $("#trailWeb").html("<a href=" + filteredHikes[0].link + " target='_blank' alt='trail description'>Click Here</a>");

      $("#resultPopup").show();

      getWeather(filteredHikes[0].area);

  });// end hikefilter code //submit click

// weather API
function getWeather (param){
  $.ajax({
    url: 'https://api.apixu.com/v1/forecast.json?key=7cca46df45774803b2d211925162902&q='+param,
    method: "GET",
    success: function(data){
      console.log(data);
      var currentTemp = data.current.temp_f;

      console.log(currentTemp);

  //   $("#weather").html($("<span class='current'>" + currentTemp +" F</span>"));
        $("#weather").html($("<span class='current'>" + currentTemp +" F</span>"));
      }
  });
}; //end API function


}); //end document.ready function
