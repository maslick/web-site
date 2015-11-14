define([
    'angular', 'jquery', 'rainbow', 'keycloak'
], function (angular, $, topbar) {


    var rainbow = function() {
        topbar.show();
        var sleeping = function() {
            topbar.hide();
            $('#splash').remove();
        }
        setTimeout(sleeping, 1000);
    }

    var authenticate = function() {
        keycloak = new Keycloak();
        console.log(keycloak);
        keycloak.init({ onLoad: 'login-required' })
            .success(function(authenticated) {
                $("#hello").append("<p>Authenticated</p>");
            }).error(function() {
                $("#hello").append("<p>Failed to authenticate</p>");
            });
    };

    return {
        authenticate: authenticate,
        run: rainbow
    };
});