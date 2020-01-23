 /*animacion del menu*/
  var estado="inicial"
                $('#icono-btn').click(function(){
                        if(estado=="inicial"){
                        $('#buscador-exterior').css({'position':'absolute','z-index':'1000','padding-left':'5.5%'});
                        $('#buscador-exterior').show(500);
                        if($(window).width()>=1200){
                             $('#buscador-exterior').css({'transform': 'translate3d(-100.5%,0,0)'});
                             $('#buscador-exterior').css({'background-color':'#f0f0f0'});
                            $('#navcol-1').css({'background-color':'#f0f0f0'});
                        }
                        if($(window).width()>=1300){
                             $('#buscador-exterior').css({'transform': 'translate3d(-100%,0,0)'});
                             $('#buscador-exterior').css({'background-color':'#f0f0f0'});
                             $('#navcol-1').css({'background-color':'#f0f0f0'});
                        }
                        if($(window).width()<=1024){
                             $('#buscador-exterior').css({'transform': 'translate3d(-102.5%,0,0)'});
                             $('#buscador-exterior').css({'background-color':'#f0f0f0'});
                             $('#navcol-1').css({'background-color':'#f0f0f0'});
                        }
                        if($(window).width()<=1023){
                             $('#buscador-exterior').css({'transform': 'translate3d(12%,0,0)'});
                             $('#buscador-exterior').css({'background-color':'#fff'});
                             $('#navcol-1').css({'background-color':'#fff'});
                        }
                        $('#buscador-exterior').css({'transition': 'transform 0.80s;'});
                        $('#buscador-exterior').css({'font-size':'17px'});
                        $('#btn-icono').css({'background-color':'#f0f0f0'});
                        $('.padding-0').removeClass('py-2');
                        $('#icono-btn').removeClass('fa-search');
                        $('#icono-btn').addClass('fa-times');
                        $('#icono-btn').css({'margin-top':'10px'});
                        estado="click";
                    }else{
                        $('.navbar').css({'background-color':'#ffffff'});
                        $('#btn-icono').css({'background-color':'#ffffff'});
                        $('#buscador-exterior').hide(500);
                        $('#buscador-exterior').css({'width': '0'});
                        $('#icono-btn').css({'margin-top':'0px'});
                        $('.padding-0').addClass('py-2');
                        $('#icono-btn').removeClass('fa-times');
                        $('#icono-btn').addClass('fa-search');
                        $('.navbar').css({'border':'0'});
                         $('#navcol-1').css({'background-color':'#fff'});
                        estado="inicial";
                         }
                });

$(function(){
        $(".accordion-titulo").click(function(e){
           
        e.preventDefault();
    
        var contenido=$(this).next(".accordion-content");

        if(contenido.css("display")=="none"){ //open    
          contenido.slideDown(250);     
          $(this).addClass("open");
        }
        else{ //close   
          contenido.slideUp(250);
          $(this).removeClass("open");  
        }

          });
  });

var menu="active"
     $('.active-menu').click(function(){
      if (menu=="active") {
        $('.mostrar-menu').show(500);
         $('.derecha-menu').css({'transform': 'translate3d(-10%,0,0)'});
        menu="click"
      }else{
        $('.mostrar-menu').hide(500);
        $('.derecha-menu').css({'transform': 'translate3d(0,0,0)'});
         menu="active"
      }
     });

$(document).ready(function() { 
   $('.carousel-home').flickity({
                  groupCells:true,
                  autoPlay:true,
                  wrapAround:true,
                  pauseAutoPlayOnHover:true,
                  imagesLoaded: true,
                  pageDots: false,
                }); 
});

 $('[data-toggle="tooltip"]').tooltip();

  $(document).ready(function() {
         function clickcaja(e) {
             var lista = $(this).find("ul"),
                 triangulo = $(this).find("span:last-child");
             e.preventDefault();
             //lista.is(":hidden") ? $(this).find("ul").show() : $(this).find("ul").hide();
           $(this).find("ul").toggle();
             if(lista.is(":hidden")) {
                 triangulo.removeClass("triangulosup").addClass("trianguloinf");
             }
             else {
                 triangulo.removeClass("trianguloinf").addClass("triangulosup");
             }
         }
         function clickli(e) {
             var texto = $(this).text(),
                 seleccionado = $(this).parent().prev(),
                 lista = $(this).closest("ul"),
                 triangulo = $(this).parent().next();
             e.preventDefault();
             e.stopPropagation();    
             seleccionado.text(texto);
             lista.hide();
             triangulo.removeClass("triangulosup").addClass("trianguloinf");
         }
$(".cajaselect").click(clickcaja);
$(".cajaselect").on("click", "li", clickli);
});
 if($(window).width()>=1024){
    $('.fondo-azul-cartilla').addClass('sticky-top');
 }else{
    $('.fondo-azul-cartilla').removeClass('sticky-top');
    }
