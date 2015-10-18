    
    //Container Page Pop Up
      var popupMadLibsStatus = 0;
      
      function loadPopupMadLibs(){
        if(popupMadLibsStatus==0){
          $("#popupMadLibs").fadeIn("slow");
          popupMadLibsStatus = 1;
        }
      }
      
      function disablePopupMadLibs(){
        if(popupMadLibsStatus==1){
          $("#popupMadLibs").fadeOut("slow");
          popupMadLibsStatus = 0;
        }
      }
      
      function centerPopupMadLibs(){
        var windowWidth = document.documentElement.clientWidth;
        var windowHeight = document.documentElement.clientHeight;
        var popupMadLibsHeight = $("#popupMadLibs").height();
        var popupMadLibsWidth = $("#popupMadLibs").width();
        $("#popupMadLibs").css({
          "position": "absolute",
          "top": windowHeight/2.3-popupMadLibsHeight/2,
          "left": windowWidth/2.08-popupMadLibsWidth/2
        });
      }
      
      
      $(document).ready(function(){
        $("#popupMadLibs").fadeOut();
        popupMadLibsStatus = 0;
        $("#madLib").click(function(){
        $("#popupMadLibs").css({
          "visibility": "visible"});
          centerPopupMadLibs();
          loadPopupMadLibs();
            $("#popupMadLibs").mCustomScrollbar("vertical",400,"easeOutCirc",1.05,"auto","yes","yes",10); 
        });
        $("#popupMadLibsClose").click(function(){
          disablePopupMadLibs();
        });
        $(".main").click(function(){
          disablePopupMadLibs();
        });
        $(document).keyup(function(e){
        if(e.keyCode === 27)
          disablePopupMadLibs();
        });

/////////////////////////////////////////////////////////////
      var popupMurmurStatus = 0;
      
      function loadPopupMurmur(){
        if(popupMurmurStatus==0){
          $("#popupMurmur").fadeIn("slow");
          popupMurmurStatus = 1;
        }
      }
      
      function disablePopupMurmur(){
        if(popupMurmurStatus==1){
          $("#popupMurmur").fadeOut("slow");
          popupMurmurStatus = 0;
        }
      }
      
      function centerPopupMurmur(){
        var windowWidth = document.documentElement.clientWidth;
        var windowHeight = document.documentElement.clientHeight;
        var popupMurmurHeight = $("#popupMurmur").height();
        var popupMurmurWidth = $("#popupMurmur").width();
        $("#popupMurmur").css({
          "position": "absolute",
          "top": windowHeight/2.3-popupMurmurHeight/2,
          "left": windowWidth/2.08-popupMurmurWidth/2
        });
      }

        $("#popupMurmur").fadeOut();
        popupMurmurStatus = 0;
        $("#murmur").click(function(){
        $("#popupMurmur").css({
          "visibility": "visible"});
          centerPopupMurmur();
          loadPopupMurmur();
            $("#popupMurmur").mCustomScrollbar("vertical",400,"easeOutCirc",1.05,"auto","yes","yes",10); 
        });
        $("#popupMurmurClose").click(function(){
          disablePopupMurmur();
        });
        $(".main").click(function(){
          disablePopupMurmur();
        });
        $(document).keyup(function(e){
        if(e.keyCode === 27)
          disablepopupMurmur();
        });
      });

/////////////////////////////////////////////////////////////
      var popupDageStatus = 0;
      
      function loadPopupDage(){
        if(popupDageStatus==0){
          $("#popupDage").fadeIn("slow");
          popupDageStatus = 1;
        }
      }
      
      function disablePopupDage(){
        if(popupDageStatus==1){
          $("#popupDage").fadeOut("slow");
          popupDageStatus = 0;
        }
      }
      
      function centerPopupDage(){
        var windowWidth = document.documentElement.clientWidth;
        var windowHeight = document.documentElement.clientHeight;
        var popupDageHeight = $("#popupDage").height();
        var popupDageWidth = $("#popupDage").width();
        $("#popupDage").css({
          "position": "absolute",
          "top": windowHeight/2.3-popupDageHeight/2,
          "left": windowWidth/2.08-popupDageWidth/2
        });
      }

        $("#popupDage").css({
          "visibility":"hidden"
        });
        popupDageStatus = 0;
        $("#dage").click(function(){
        $("#popupDage").css({
          "visibility": "visible"
        });
          centerPopupDage();
          loadPopupDage();
          $("#popupDage").mCustomScrollbar("vertical",400,"easeOutCirc",1.05,"auto","yes","yes",10); 
        });
        $("#popupDageClose").click(function(){
          disablePopupDage();
        });
        $(".main").click(function(){
          disablePopupDage();
        });
        $(document).keyup(function(e){
        if(e.keyCode === 27)
          disablepopupDage();
        });
