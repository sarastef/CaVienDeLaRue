angular.module('starter.controllers', ['ionic', 'ionic-pullup'])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {


  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

.controller('retardCtrl', function($scope, $ionicModal, $timeout, $ionicPopup,$controller) {
  

  // Form data for the retard modal
  $scope.retardData = {};

  $ionicModal.fromTemplateUrl('templates/retard.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeRetard = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.retard = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doRetard = function() {
    console.log('Doing login', $scope.retardData);
    var alertPopup = $ionicPopup.alert({
                title: '<img class="retard_check" src="img/check.svg" >',
                //title: "<img class='retard' src='img/check.svg' >",
                template: '<center>Votre signalement à été pris en compte<center>'
    });

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeRetard();
    }, 1000);
  };
})

.controller('problemCtrl', function($scope, $ionicModal, $timeout, $ionicPopup) {
  

  // Form data for the retard modal
  $scope.problemData = {};

  $ionicModal.fromTemplateUrl('templates/problem.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeProblem = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.problem = function() {
    $scope.modal.show();
  };

  $scope.change_range1 = function() {
  console.log("change");
  document.getElementsByTagName("img").src = "http://sandbox.manusset.com/beontime/i/arretdebus_" + this.value + ".svg";
  };

  // Perform the login action when the user submits the login form
  $scope.doProblem = function() {
    console.log('Doing login', $scope.retardData);
    var alertPopup = $ionicPopup.alert({
                title: '<img class="retard_check" src="img/check.svg" >',
                //title: "<img class='retard' src='img/check.svg' >",
                template: '<center>Votre signalement à été pris en compte<center>'
    });

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeProblem();
    }, 1000);
  };
})




.controller('listtrajetsCtrl', function($scope) {
  
})

.controller('homeCtrl', function($scope) {
  
})

.controller('Ctrl', function($scope) {
  $scope.footerExpand = function() {
    console.log('Footer expanded');
  };
  $scope.footerCollapse = function() {
    console.log('Footer collapsed');
  };
})
/*
.controller('MapController', function($scope, $ionicLoading) {

    google.maps.event.addDomListener(window, 'load', function() {
        var myLatlng = new google.maps.LatLng(37.3000, -120.4833);

        var mapOptions = {
            center: myLatlng,
            zoom: 16,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };

        var map = new google.maps.Map(document.getElementById("map"), mapOptions);

        navigator.geolocation.getCurrentPosition(function(pos) {
            map.setCenter(new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude));
            var myLocation = new google.maps.Marker({
                position: new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude),
                map: map,
                title: "My Location"
            });
        }, function(){
          console.log("erreur");
        });

        $scope.map = map;
    });

})
*/
/********* GEOLOCALISATION ***********/
    .controller('MapController', function($scope, $ionicLoading, $compile) {
      google.maps.event.addDomListener(window, 'load', function() {
        
        var myLatlng = new google.maps.LatLng(37.3000, -120.4833);

        var mapOptions = {
            center: myLatlng,
            zoom: 16,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };

        var map = new google.maps.Map(document.getElementById("map"), mapOptions);
        
        var contentString = "<div><a ng-click='clickTest()'> Vous êtes ici!!Click me!</a></div>";
        var compiled = $compile(contentString)($scope);

        $scope.centerOnMe = function() {
        if(!$scope.map) {
          return;
        }

        navigator.geolocation.getCurrentPosition(function(pos) {
          $scope.map.setCenter(new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude));
          var myLocation = new google.maps.Marker({
                position: new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude),
                map: map,
                title: "My Location"
            });
        }, function(error) {
          alert('Unable to get location: ' + error.message);
        });
      };
      $scope.map = map;
    });
      /*

      function initialize() {
        var myLatlng = new google.maps.LatLng(43.07493,-89.381388);
        
        var mapOptions = {
          center: myLatlng,
          zoom: 16,
          mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        var map = new google.maps.Map(document.getElementById("map"),
            mapOptions);
        
        //Marker + infowindow + angularjs compiled ng-click
        var contentString = "<div><a ng-click='clickTest()'> Vous êtes ici!!Click me!</a></div>";
        var compiled = $compile(contentString)($scope);

        var infowindow = new google.maps.InfoWindow({
          content: compiled[0]
        });

        var marker = new google.maps.Marker({
          position: myLatlng,
          map: map,
          title: 'Uluru (Ayers Rock)'
        });

        google.maps.event.addListener(marker, 'click', function() {
          infowindow.open(map,marker);
        });

        $scope.map = map;
      }
      
      google.maps.event.addDomListener(window, 'load', initialize);
      
      $scope.centerOnMe = function() {
        if(!$scope.map) {
          return;
        }

        navigator.geolocation.getCurrentPosition(function(pos) {
          $scope.map.setCenter(new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude));
          $scope.loading.hide();
        }, function(error) {
          alert('Unable to get location: ' + error.message);
        });
      };
      
      $scope.clickTest = function() {
        alert('Example of infowindow with ng-click')
      };

      */
      
      
    })

.controller('MapTrajetController', function($scope, $ionicLoading) {

    google.maps.event.addDomListener(window, 'load', function() {
        var myLatlng = new google.maps.LatLng(37.3000, -120.4833);

        var mapOptions = {
            center: myLatlng,
            zoom: 16,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };

        var map = new google.maps.Map(document.getElementById("map_trajet"), mapOptions);

        navigator.geolocation.getCurrentPosition(function(pos) {
            map.setCenter(new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude));
            var myLocation = new google.maps.Marker({
                position: new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude),
                map: map,
                title: "My Location"
            });
        });
        console.log(myLatlng);
        $scope.map = map;
    });

})


.controller('ProgressBarCtrl', function($scope, $http) {
  $scope.progressPercent = 0;
  $scope.username = "Doe JHON";

    var interval = setInterval(function() {     
      $scope.progressPercent++
        if ($scope.progressPercent == 70) {
          clearInterval(interval);       
        }
      $scope.$apply()
    }, 30);
  
})

.controller('LoginCtrl', function($scope,$ionicModal,loginService, $ionicPopup, $state,$timeout,  $ionicSideMenuDelegate) {
   
    $scope.loginData = {};
    /*
    $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
    }).then(function(modal) {
      $scope.modal = modal;
    });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.log= function() {
    $scope.modal.show();
  };
*/
  $scope.login = function() {
        
        loginService.loginUser($scope.loginData.username, $scope.loginData.password)
        .success(function(data) {
            $state.go('app.home');
            $scope.isLogin =true;
            //$timeout(function() { $scope.closeLogin(); }, 1000);
        })
        .error(function(data) {
            $scope.isLogin =false ;
            var alertPopup = $ionicPopup.alert({
                title: 'Login failed!',
                template: 'Please check your credentials!'
            });
        });
        
    };

 
})

.controller('RangeCtrl', function($scope, $timeout) {
  $scope.data3 = 1;
   $scope.src = "http://sandbox.manusset.com/beontime/i/arretdebus_" + $scope.data3 + ".svg";
  
  $scope.$watch('data3', function(val) {
    console.log('data3 changed: ', "http://sandbox.manusset.com/beontime/i/arretdebus_" + val + ".svg"); 
    var test=document.getElementsByClassName("img_change");
    console.log(test)
    $scope.src =  "http://sandbox.manusset.com/beontime/i/arretdebus_" + val + ".svg"; 
  });

  
})


