angular.module('starter')
.service('loginService', function($q,$http) {
    return {
        loginUser: function(name, pw) {
            var deferred = $q.defer();
            var promise = deferred.promise;
            var users;

            $http.get('data.json').success(function(data){
	        users = data;
	        angular.fromJson(users);
				for(var i=0;i<users.users.length;i++)
		      	{
			        if(name == users.users[i].login && pw == users.users[i].mdp) {
			         deferred.resolve('Bienvenue ' + name + '!');
		        	}
			        else {
			         deferred.reject('Wrong credentials.');
			        }
		      	}
	      
	     	});
			promise.success = function(fn) {
                promise.then(fn);
                return promise;
            }
            promise.error = function(fn) {
                promise.then(null, fn);
                return promise;
                
            }
            return promise;
        }
    }
});