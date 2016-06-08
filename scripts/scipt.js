$( document ).ready(function() {
  $( "p" ).text( "The DOM is now loaded and can be manipulated." );
    
    
    $(".button").click(function(){
        $(".button").remove();
        for (var i=0;i<100;i++)
        {
            $("#grid").append("<div class='block'></div>");
            
        
            
        }
                        
        
    });
    $('#grid').on("mouseenter",".block",function(){
       $(this).addClass("altered-block"); 
    });
        
    
    
});

