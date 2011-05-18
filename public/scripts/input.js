var text = "time flies like an arrow";
var container = $("#container");
for (var i = 0; i < text.length; i++)
{ 
    function(i)
    {
        var s = $(document.createElement("span"));
        s.html(text.charAt(i));
        s.css({ position: "absolute"});
        s.appendTo(container);

       mouseMove.Delay(i * 100).Subscribe(function(mouseEvent)
       {
            s.css({ 
              top: mouseEvent.offsetY + "px", 
              left:  mouseEvent.offsetX mouseEvent.clientX + i * 10 + 15 + "px"
             });       
       });
    })(i);
}
