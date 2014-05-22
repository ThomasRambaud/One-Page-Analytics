/* 
One Page Analytics
copyright 16 May 2014, by Thomas Rambaud http://thomasrambaud.com
Permission to use this Javascript on your web page is
granted provided that all of the code in this script (including
these comments) is used without any alteration 
*/ 
var OPA = (function($){
    return {
        sections: [],
        tracked: [],
        tolerance: 100,
        
        track: function(name){
            if(typeof ga != 'undefined'){
                ga('send', 'pageview', name);
            } else if(typeof _gaq != 'undefined'){
                _gaq.push(['_trackPageview', name]);
            }
            this.tracked.push(name);
        },
        
        init: function(){
            $(window).on('scroll', function(){
                var st = $(this).scrollTop(),
                    wh = $(this).height();
                
                for(var i = 0, len = OPA.sections.length; i < len; i++){
                    var sec = OPA.sections[i],
                    $element = $(sec.selector);

                    if($element.length > 0
                        && OPA.tracked.indexOf(sec.name) === -1 
                        && (st - OPA.tolerance) <= $element.offset().top
                        && (st - OPA.tolerance + wh) >= $element.offset().top){
                        
                        OPA.track(sec.name);
                    }
                }
            });
        }
    };
})(jQuery);