$(document).ready(function(){
      $('.parallax').parallax();
      console.log("Initial of website!");
      // initial
      $(".personal").sideNav();
      $(".personal").sideNav("hide");
      // navbar
      $(".button-collapse").sideNav();
      $(".button-collapse").sideNav("hide");
      // tabs
      $('ul.tabs').tabs();
});

function sideNav(flag){
    if(flag){
        $(".personal").sideNav("show");
    }
    else{
        $(".personal").sideNav("hide");
    }
}
