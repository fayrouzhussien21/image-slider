$(function()
{
    $("#about").click(function() 
    {
        $(".formcontainer").hide();
        $(".listmenue").hide();
        $(".form2container").hide();
        $(".imgAdded").hide();
        $(".added").hide();
        var txt2 = $("<textarea></textarea>").text("About snow man story");
        txt2.addClass("added");
        txt2.css({"box-shadow":"5px 10px #888888" ,"margin-left":"600px","margin-top":"100px","width":"400px","height":"300px","text-align": "center"});
        $("body").append(txt2);
    }

);
$("#gallary").click(function() 
{
    $(".listmenue").hide();
    $(".imgAdded").hide();
    $(".formcontainer").hide();
    $(".form2container").hide();
    var arr=["1.jpg","2.jpg","3.jpg","4.jpg","5.jpg","6.jpg"];
    var i=0;
    var imgContainer=$("<div></div>");
    imgContainer.addClass("imgAdded");
    imgContainer.css({"margin-left":"450px","margin-top":"100px"});
    $(".added").hide();
    $("body").append(imgContainer);
    var img1=$("<img>");
    img1.attr("src","left.png");
    $(imgContainer).append(img1);
    
    var img2=$("<img>");
    img2.attr("src","1.jpg");
    $(imgContainer).append(img2);

    var img3=$("<img>");
    img3.attr("src","right.png");
    $(imgContainer).append(img3);
    img3.click(function()
    {

        img2.attr("src",arr[++i%6]);

    });
    img1.click(function()
    {
        i=(--i+6)%6;
        img2.attr("src",arr[i]);

    });
    

});
$("#services").click(function() 
{
    $(".added").hide();
    $(".imgAdded").hide();
    $(".formcontainer").hide();
    $(".form2container").hide();
    $(".listmenue").hide();
    var btn1=$("<button>item1</button>");
    btn1.css({"margin-left":"917px","background-color":"pink"});
    btn1.addClass("listmenue");
    $("body").append(btn1);
    btn1.slideDown("slow");

    var btn2=$("<button>item2</button>");
    btn2.css({"margin-left":"917px","background-color":"pink"});
    btn2.addClass("listmenue");
    $("body").append(btn2);
    btn2.slideDown("slow");
});

$("#complain").click(function() 
{
        $(".form2container").hide();
        $(".listmenue").hide();
        $(".added").hide();
        $(".imgAdded").hide();
        $(".formcontainer").hide();
        var form1 = $("<div></div>");
        form1.addClass("formcontainer");
        form1.css({"box-shadow":"4px 5px 2px 2px #888888" ,"margin-left":"670px","margin-top":"100px","width":"400px","height":"300px","border":"solid"});
        $("body").append(form1);
        var label1 = $("<label></label>").text("Name:");
        label1.css({"margin-left":"73px","margin-top":"10px"});
        form1.append(label1);
        var input1 = $("<input>");
        input1.css({"margin-left":"10px","margin-top":"10px"});
        form1.append(input1);
        input1.addClass("input1");

        var label2 = $("<label></label>").text("Email:");
        label2.css({"margin-left":"75px","margin-top":"10px"});
        form1.append(label2);
        var input2 = $("<input>");
        input2.css({"margin-left":"10px","margin-top":"10px"});
        form1.append(input2);
        input2.addClass("input2");

        var label3 = $("<label></label>").text("Phone:");
        label3.css({"margin-left":"75px","margin-top":"10px"});
        form1.append(label3);
        var input3 = $("<input>");
        input3.css({"margin-left":"10px","margin-top":"10px"});
        form1.append(input3);
        input3.addClass("input3");


        var label4 = $("<label></label>").text("complain");
        label4.css({"margin-left":"180px","margin-top":"50px"});
        form1.append(label4);
        var input4 = $("<textarea></textarea>");
        input4.css({"box-shadow":"5px 10px #888888" ,"margin-left":"120px","margin-top":"10px","width":"190px","height":"130px","text-align": "center"});
        form1.append(input4);
        input4.addClass("input4");

        var btn=$("<button></button>").text("Send");
        btn.css({"margin-left":"200px" ,"margin-top":"10px","width":"50px","height":"20px"});
        btn.addClass("sendButton");
        form1.append(btn);

        $(".sendButton").click(function()
        {
            $(".formcontainer").hide();
            $(".form2container").hide();
            var inputText1=$(".input4").val();
            var form2 = $("<div></div>");
                form2.addClass("form2container");
                form2.css({"box-shadow":"4px 5px 2px 2px #888888" ,"margin-left":"670px","margin-top":"100px","width":"400px","height":"300px","border":"solid"});
                $("body").append(form2);
                var txt1=$("<p></p>").text(" your complain is " + inputText1).css({"margin-left":"100px","margin-top":"10px", "font-family": "Arial, Helvetica, sans-serif"});
                form2.append(txt1);

                var inputText2=$(".input1").val();
                var txt2=$("<p></p>").text(" your name is " + inputText2).css({"margin-left":"120px","margin-top":"30px", "font-family": "Arial, Helvetica, sans-serif"});
                form2.append(txt2);

                var inputText3=$(".input2").val();
                var txt3=$("<p></p>").text(" your email is " + inputText3).css({"margin-left":"120px","margin-top":"30px", "font-family": "Arial, Helvetica, sans-serif"});
                form2.append(txt3);


                var inputText4=$(".input3").val();
                var txt4=$("<p></p>").text(" your email is " + inputText4).css({"margin-left":"120px","margin-top":"30px", "font-family": "Arial, Helvetica, sans-serif"});
                form2.append(txt4);

                var btn2=$("<button></button>").text("Back to the form");
                btn2.css({"margin-left":"150px" ,"margin-top":"10px","width":"120px","height":"40px"});
                btn2.addClass("backButton");
                form2.append(btn2);


        $(".backButton").click(function()
        {
            $(".form2container").hide();
            $(".formcontainer").show();
        });
            
        });
});

    
})