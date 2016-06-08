$( document ).ready(function() {
  
    var count = 0;
    for (var i=0;i<15000;i++)
        {
            
            $("#grid").append("<div class='block'></div>");
            
        
            
        }
    $(".button").click(function(){
        
        $(".block").css("background-color","white");
        $("h3").text("0");
        count=0;
                        
        
    });
    $('#grid').on("mouseenter",".block",function(){
       $(this).css("background-color","black");
        count++;
        $('h3').text(count);
    });
        
    
    
});

