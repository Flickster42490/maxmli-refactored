       $(document).ready(function(){   
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
          "top": windowHeight/1.75-popupMadLibsHeight/2,
          "left": windowWidth/2.08-popupMadLibsWidth/2
        });
      }
      
      

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
        $("#work").mousedown(function(){
          disablePopupMadLibs();
        });
        $('#about').mousedown(function(){
          disablePopupMadLibs();
        });
        $(document).keydown(function(e){
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
          "top": windowHeight/1.75-popupMurmurHeight/2,
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
        $("#work").mousedown(function(){
          disablePopupMurmur();
        });
        $("#about").mousedown(function(){
          disablePopupMurmur();
        });
        $(document).keydown(function(e){
        if(e.keyCode === 27)
          disablePopupMurmur();
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
          "top": windowHeight/1.75-popupDageHeight/2,
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
        $("#about").mousedown(function(){
          disablePopupDage();
        });
        $('#work').mousedown(function(){
          disablePopupDage();
        });
        $(document).keydown(function(e){
        if(e.keyCode === 27)
          disablePopupDage();
        });
/////////////////////////////////////////////////////////////
      var popupKouplerStatus = 0;
      
      function loadPopupKoupler(){
        if(popupKouplerStatus==0){
          $("#popupKoupler").fadeIn("slow");
          popupKouplerStatus = 1;
        }
      }
      
      function disablePopupKoupler(){
        if(popupKouplerStatus==1){
          $("#popupKoupler").fadeOut("slow");
          popupKouplerStatus = 0;
        }
      }
      
      function centerPopupKoupler(){
        var windowWidth = document.documentElement.clientWidth;
        var windowHeight = document.documentElement.clientHeight;
        var popupKouplerHeight = $("#popupKoupler").height();
        var popupKouplerWidth = $("#popupKoupler").width();
        $("#popupKoupler").css({
          "position": "absolute",
          "top": windowHeight/1.75-popupKouplerHeight/2,
          "left": windowWidth/2.08-popupKouplerWidth/2
        });
      }

        $("#popupKoupler").css({
          "visibility":"hidden"
        });
        popupKouplerStatus = 0;
        $("#koupler").click(function(){
        $("#popupKoupler").css({
          "visibility": "visible"
        });
          centerPopupKoupler();
          loadPopupKoupler();
          $("#popupKoupler").mCustomScrollbar("vertical",400,"easeOutCirc",1.05,"auto","yes","yes",10); 
        });
        $("#popupKouplerClose").click(function(){
          disablePopupKoupler();
        });
        $("#about").mousedown(function(){
          disablePopupKoupler();
        });
        $("#work").mousedown(function(){
          disablePopupKoupler();
        });
        $(document).keydown(function(e){
        if(e.keyCode === 27)
          disablePopupKoupler();
        });
});