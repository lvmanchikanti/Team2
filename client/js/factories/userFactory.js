angular.module('user', []).factory('userFactory', function($https) {
    var userFactoryMethods = {
        signupUser: function(user){
            return $https.post('https://localhost:3000/signup', user);
        },

        loginUser: function(returnUser){
            console.log('in user factory ' + JSON.stringify(returnUser))

            return $https.post('https://localhost:3000/login/auth', returnUser);
        },

        getCurrentUser: function(){
            console.log('in fac id')
            return $https.get('https://localhost:3000/account/getinfo');

        },

        updateUser: function(updatedUser){
            return $https.post('https://localhost:3000/account/update', updatedUser);
        },

        logout: function() {
            console.log('still logging you out...')
            return $https.delete('https://localhost:3000/login/auth')
        },

        delete: function(){
            console.log('in process of deleting your account')
            return $https.delete('https://localhost:3000/account/delete')
        }

    };

    return userFactoryMethods;  
  });