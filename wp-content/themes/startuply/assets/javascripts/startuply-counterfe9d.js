$(window).on("load",function(){function n(n){if(!n.is(".vsc_ready")){var t=n.find(".vsc_counter_value_place"),a=parseInt(n.attr("data-counter-value")),o=0,e=0;n.addClass("vsc_ready");var i=function(n){return 1- --n*n*n*n},c=setInterval(function(){o+=.01,e=i(o)*a,Math.round(e)>=a?(t.html(a),clearInterval(c)):t.html(Math.round(e))},40)}}$(".vsc_counter").not(".no-animation").length&&$.each($(".vsc_counter").not(".no-animation"),function(t,a){"undefined"!=typeof $.fn.waypoint?$(this).waypoint(function(t){n($(this))},{offset:"90%"}):n($(this))})});
//# sourceMappingURL=startuply-counter.js.map
