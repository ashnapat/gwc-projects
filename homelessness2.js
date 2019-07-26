var sheltermarkers = [];
var grocerymarkers = [];
var clothingmarkers = [];
var orgmarkers = [];
var jobOppmarkers = [];
var sheltertoggle = false;
var grocerytoggle = false;
var clothingtoggle = false;
var orgtoggle = false;
var jobOpptoggle = false;

var shelterlist = [
 {name: "St. Vincent De Paul Society", lat: 37.787749, lng: -122.408974, url: "https://svdp-sf.org/"},
 {name: "The Sanctuary", lat: 37.776294, lng: -122.411174, url: "https://fhomeless.wikia.org/wiki/Episcopal_Community_Services_-_Sanctuary_201_8th_Street"},
 {name: "Next Door Shelter", lat: 37.786002, lng: -122.419866, url:"https://ecs-sf.org/"},
 {name: "Hamilton Families", lat: 37.781805, lng: -122.414977, url:"https://hamiltonfamilies.org/"},
 {name: "Cityteam", lat: 37.780003, lng: -122.407638, url:"https://www.cityteam.org/san-francisco/"},
 {name: "Mission Neighborhood Health Center", lat: 37.764584, lng: -122.41641, url: "https://slack-redir.net/link?url=http%3A%2F%2Fwww.mnhc.org%2Fcommunity_programs%2Fmission-neighborhood-resource-center%2F"},
 {name: "Pets of the Homelessness", lat: 37.754087, lng: -122.415809, url: "https://www.petsofthehomeless.org/get-help/"}
]
var grocerylist = [
 {name: "Foods Co", lat: 37.782688, lng: -122.400337, url: "https://www.yelp.com/biz/foods-co-san-francisco-4"},
 {name: "Food Pantries", lat: 37.788003, lng: -122.417538, url:"https://www.foodpantries.org/"},
 {name: "Rainbow Grocery", lat: 37.769137, lng: -122.415075, url:"https://slack-redir.net/link?url=https%3A%2F%2Fwww.rainbow.coop%2F"},
 {name: "Gus's Haight Street Market", lat: 37.770209, lng: -122.447588, url: "https://gussmarket.com/"},
 {name: "Le Beau Market", lat: 37.792884, lng: -122.416234, url: "https://slack-redir.net/link?url=https%3A%2F%2Flebeaumarket.com%2F"},
 {name: "Whole Foods", lat: 37.768744, lng: -122.427065, url:"https://www.wholefoodsmarket.com/stores/2001marketstreet"}
]
var clothinglist = [
 {name: "St. Anthony's", lat: 37.7821, lng: -122.4132, url: "https://slack-redir.net/link?url=https%3A%2F%2Fwww.stanthonysf.org%2Fclothing-donation-san-francisco%2F"},
 {name: "Goodwill", lat: 37.80577, lng: -122.411726, url:"https://sfgoodwill.org/shop/shop-online/?utm_campaign=Fillmore&utm_medium=Ad-Driven-Website&utm_source=Yelp" },
 {name: "Self Help Elderly", lat: 37.797105, lng: -122.402061, url: "https://slack-redir.net/link?url=https%3A%2F%2Fwww.selfhelpelderly.org%2F"}
]
var orglist = [
 {name: "Childrens Health Fund", lat: 37.79151, lng: -122.399906, url: "https://www.nhchc.org/resources/national-hch-grantee-directory/"},
 {name: "National HCH", lat: 37.783703, lng: -122.419195, url: "https://www.nhchc.org/resources/national-hch-grantee-directory/"},
 {name: "Homeless Prenatal Program", lat: 37.762009, lng: -122.40735, url: "https://slack-redir.net/link?url=http%3A%2F%2Fwww.homelessprenatal.org%2F"},
 {name: "San Francisco VA Downtown Clinic", lat: 37.782651, lng: -122.397023, url:"https://www.sanfrancisco.va.gov/locations/downtownclinic.asp"},
 {name: "St. Anthony's", lat: 37.782243, lng: -122.41323, url:"https://www.stanthonysf.org/techlab/"}
]
var jobOpplist = [
 {name: "Arriba Juntos", lat: 37.793741, lng: -122.392568, url: "https://slack-redir.net/link?url=http%3A%2F%2Fwww.arribajuntos.org"},
 {name: "St. Joseph's Family Center", lat: 37.75757, lng: -122.423359, url: "http://www.cccyo.org/"},
 {name: "Community Housing Partnership", lat: 37.781376, lng: -122.41184, url:"https://slack-redir.net/link?url=http%3A%2F%2Fwww.chp-sf.org%2F"},
 {name: "Episcopal Community Services", lat: 37.776787, lng: -122.412113, url: "http://www.ecs-sf.org/"},
 {name: "Swords to Plowshares", lat: 37.778709, lng: -122.40861, url: "https://slack-redir.net/link?url=http%3A%2F%2Fwww.swords-to-plowshares.org%2F"}
]

var map;

function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 37.7749, lng: -122.4194},
    zoom: 12
  });
}

function shelter() {
  if (sheltertoggle == false) {
    sheltertoggle = true;
    var marker, i;
    var infoWindow = new google.maps.InfoWindow(), marker, i;
    for (i = 0; i < shelterlist.length; i++) {
      marker = new google.maps.Marker({
        name: shelterlist[i].name,
        position: new google.maps.LatLng(shelterlist[i].lat, shelterlist[i].lng),
        map: map,
        url: shelterlist[i].url,
        animation: google.maps.Animation.DROP
      });
      google.maps.event.addListener(marker, 'click', (function(marker, i) {
        return function() {
          shelterIWcontent = `<a href= ${marker.url}>` + marker.name + `</a>`
          infoWindow.setContent(shelterIWcontent);
          infoWindow.open(map, marker);
        }
      })(marker, i));
      sheltermarkers.push(marker);
    };
  } else if (sheltertoggle == true) {
    sheltertoggle = false;
    for (i = 0; i < sheltermarkers.length; i++){
        sheltermarkers[i].setMap(null);
    };
    sheltermarkers = []
  };
}

function grocery() {
  if (grocerytoggle == false) {
    grocerytoggle = true;
    var marker, i;
    var infoWindow = new google.maps.InfoWindow(), marker, i;
    for (i = 0; i < grocerylist.length; i++) {
      marker = new google.maps.Marker({
        name: grocerylist[i].name,
        position: new google.maps.LatLng(grocerylist[i].lat, grocerylist[i].lng),
        map: map,
        url: grocerylist[i].url,
        animation: google.maps.Animation.DROP
      });
      google.maps.event.addListener(marker, 'click', (function(marker, i) {
        return function() {
          groceryIWcontent = `<a href= ${marker.url}>` + marker.name + `</a>`
          infoWindow.setContent(groceryIWcontent);
          infoWindow.open(map, marker);
        }
      })(marker, i));
      grocerymarkers.push(marker);
    };
  } else if (grocerytoggle == true) {
    grocerytoggle = false;
    for (i = 0; i < grocerymarkers.length; i++){
        grocerymarkers[i].setMap(null);
    };
    grocerymarkers = []
  };
}

function clothing() {
  if (clothingtoggle == false) {
    clothingtoggle = true;
    var marker, i;
    var infoWindow = new google.maps.InfoWindow(), marker, i;
    for (i = 0; i < clothinglist.length; i++) {
      marker = new google.maps.Marker({
        name: clothinglist[i].name,
        position: new google.maps.LatLng(clothinglist[i].lat, clothinglist[i].lng),
        map: map,
        url: clothinglist[i].url,
        animation: google.maps.Animation.DROP
      });
      google.maps.event.addListener(marker, 'click', (function(marker, i) {
        return function() {
          clothingIWcontent = `<a href= ${marker.url}>` + marker.name + `</a>`
          infoWindow.setContent(clothingIWcontent);
          infoWindow.open(map, marker);
        }
      })(marker, i));
      clothingmarkers.push(marker);
    };
  } else if (clothingtoggle == true) {
    clothingtoggle = false;
    for (i = 0; i < clothingmarkers.length; i++){
        clothingmarkers[i].setMap(null);
    };
    clothingmarkers = []
  };
}

function organization() {
  if (orgtoggle == false) {
    orgtoggle = true;
    var marker, i;
    var infoWindow = new google.maps.InfoWindow(), marker, i;
    for (i = 0; i < orglist.length; i++) {
      marker = new google.maps.Marker({
        name: orglist[i].name,
        position: new google.maps.LatLng(orglist[i].lat, orglist[i].lng),
        map: map,
        url: orglist[i].url,
        animation: google.maps.Animation.DROP
      });
      google.maps.event.addListener(marker, 'click', (function(marker, i) {
        return function() {
          orgIWcontent = `<a href= ${marker.url}>` + marker.name + `</a>`
          infoWindow.setContent(orgIWcontent);
          infoWindow.open(map, marker);
        }
      })(marker, i));
      orgmarkers.push(marker);
    };
  } else if (orgtoggle == true) {
    orgtoggle = false;
    for (i = 0; i < orgmarkers.length; i++){
        orgmarkers[i].setMap(null);
    };
    orgmarkers = []
  };
}

function jobOpp() {
  if (jobOpptoggle == false) {
    jobOpptoggle = true;
    var marker, i;
    var infoWindow = new google.maps.InfoWindow(), marker, i;
    for (i = 0; i < jobOpplist.length; i++) {
      marker = new google.maps.Marker({
        name: jobOpplist[i].name,
        position: new google.maps.LatLng(jobOpplist[i].lat, jobOpplist[i].lng),
        map: map,
        url: jobOpplist[i].url,
        animation: google.maps.Animation.DROP
      });
      google.maps.event.addListener(marker, 'click', (function(marker, i) {
        return function() {
          jobOppIWcontent = `<a href= ${marker.url}>` + marker.name + `</a>`
          infoWindow.setContent(jobOppIWcontent);
          infoWindow.open(map, marker);
        }
      })(marker, i));
      jobOppmarkers.push(marker);
    };
  } else if (jobOpptoggle == true) {
    jobOpptoggle = false;
    for (i = 0; i < jobOppmarkers.length; i++){
        jobOppmarkers[i].setMap(null);
    };
    jobOppmarkers = []
  };
}
