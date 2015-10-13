//Container Page Pop Up
      var popupAboutStatus = 0;
      
      function loadPopupAbout(){
        if(popupAboutStatus==0){
          $("#popupAbout").fadeIn("slow");
          popupAboutStatus = 1;
        }
      }
      
      function disablePopupAbout(){
        if(popupAboutStatus==1){
          $("#popupAbout").fadeOut("slow");
          popupAboutStatus = 0;
        }
      }
      
      function centerPopupAbout(){
        var windowWidth = document.documentElement.clientWidth;
        var windowHeight = document.documentElement.clientHeight;
        var popupAboutHeight = $("#popupAbout").height();
        var popupAboutWidth = $("#popupAbout").width();
        $("#popupAbout").css({
          "position": "absolute",
          "top": windowHeight/2.3-popupAboutHeight/2,
          "left": windowWidth/2.08-popupAboutWidth/2
        });
      }
      
      
      $(document).ready(function(){
        $("#popupAbout").fadeOut();
        popupAboutStatus = 0;
        $("#madLib").click(function(){
        $("#popupAbout").css({
          "visibility": "visible"});
          centerPopupAbout();
          loadPopupAbout();
            $("#popupAbout").mCustomScrollbar("vertical",400,"easeOutCirc",1.05,"auto","yes","yes",10); 
        });
        $("#popupAboutClose").click(function(){
          disablePopupAbout();
        });
        $(".main").click(function(){
          disablePopupAbout();
        });
        $(document).keyup(function(e){
        if(e.keyCode === 27)
          disablePopupAbout();
      });
      });