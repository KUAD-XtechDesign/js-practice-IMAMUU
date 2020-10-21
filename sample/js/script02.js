$(function(){

    let txt = "おはようございます！";
    let txt = "お元気ですか？";
    let num1 = 20;
    let num2 = 32;

    $("#buton01").on("click",function(){
        $("#content").text("こんにちは！");
    })

    $("#buton02").on("click",function(){
        $("#content").text(txt1);
    })

    $("#buton03").on("click",function(){
        $("#content").text(txt2);
    })

    $("#buton02").on("click",function(){
        $("#content").text(num1 + num2);
    })

    $("#buton02").on("click",function(){
        $("#content").text(num1+ "たす" + num2 + "は" + (num1 + num2) + "です");
    })
});