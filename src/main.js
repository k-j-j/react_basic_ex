import $ from 'jquery';



$(function(){
      $(".test li a").on("mouseenter",function(){
        $(".menubox").stop().slideDown(100);
      })
      $("#menu").on("mouseleave",function(){
        $(".menubox").stop().slideUp(100);
      });

});