angular.module('user', []).factory('userFactory', function($http) {
    var userFactoryMethods = {
        signupUser: function(user){
            return $http.post('/signup', user);
        },

        loginUser: function(returnUser){
            console.log('in user factory ' + JSON.stringify(returnUser))

            return $http.post('/login/auth', returnUser);
        },

        // getAllUsers: function(){
        //     return $http.get('http://localhost:3000/account/getinfo');
        // },

        // getCurrentUser: function(_id){
        //     console.log('in fac id is ' + _id)
        //     return $http.get('http://localhost:3000/account/getinfo/:_id', _id);

        // },

        getCurrentUser: function(){
            console.log('in fac id')
            return $http.get('/account/getinfo');

        },

        updateUser: function(updatedUser){
            return $http.post('/account/update', updatedUser);
        },

        logout: function() {
            console.log('still logging you out...')
            return $http.delete('/login/auth')
        },

        delete: function(){
            console.log('in process of deleting your account')
            return $http.delete('/account/delete')
        }

    };

    return userFactoryMethods;  
  });
  