$(document).ready(function(){

    $(".anyclass").click(function() {  // Действие при клике
            $('.anyclass').hide(200)  // Действие скрывать
            $(".anyclass").show(200)    // Действие показывать
            $(".anyclass").fadeOut(300) // Плавное исчезновение
            $(".anyclass").fadeIn(300) // Плавное показ
            $(".anyclass").fadeTo(300, 0.5).fadeTo(300, 1) // Исчезновение и Показ 

            $(".anyclass").css({ // Css свойства
                'display':'flex'
            });


            $(".anyclass").animate({ // анимирование на высоту или ширину
                'display':'flex'
            }3000);

            $(".anyclass").slideUp(300) // Сворачивать Скрывать с верху

            $(".anyclass").slideDown(300) // Сворачивать Показывать с верху

            $(".anyclass").text(Hi) // текст

            $(".anyclass").width(150) // ширина
             $(".anyclass").height(300) // высота
    });


});