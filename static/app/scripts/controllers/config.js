angular.module('declutterApp')
 // Here we see the name of the controller defined.
 // Following the name, we see an anonymous function with one argument.
 // These arguments are functionality being injected into the controller.
 // Think of this as being like including scripts in HTML.
 // Unless they are referenced here, you cannot utilize them.
 .config(
   function($httpProvider){
       $httpProvider.defaults.xsrfCookieName = 'csrftoken';
       $httpProvider.defaults.xsrfHeaderName = 'X-CSRFToken';
     // $httpProvider.defaults.headers.common['Access-Control-Allow-Origin'] = "*";
     // $httpProvider.defaults.headers.common['Access-Control-Allow-Methods'] = ['OPTIONS', 'POST'];
     // $httpProvider.defaults.headers.common['Access-Control-Allow-Headers'] = 'Content-Type';
     // $httpProvider.defaults.headers.post["Content-Type"] = "multipart/form-data";
     // $httpProvider.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded";
     // delete $httpProvider.defaults.headers.common['X-Requested-With'];
   });
