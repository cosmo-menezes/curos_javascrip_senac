$(document).ready(function() {
  // Função principal para abrir o modal
  $('a[name=modal]').click(function(e) {
    // Previne o comportamento default do objeto
    e.preventDefault();

    var id = $(this).attr('href');
    var largura = $(window).width();
    var altura = $(document).height();

    $('#fundo').css({
      'width': largura,
      'height': altura
    });

    $('#fundo').fadeIn(1000);	
    $('#fundo').fadeTo("slow", 0.8);	

    //Obtém a largura e altura da janela
    var winH = $(window).height();
    var winW = $(window).width();

    //Posiciona o modal no centro da tela          
    $(id).css('top',  winH/2 - $(id).height()/2);
    $(id).css('left', winW/2 - $(id).width()/2);
    $(id).fadeIn(2000); 
  });

  // Quando clicar no botão fechar do modal1
  $('#modal1 .fechar').click(function (e) {
    e.preventDefault();
    // Oculta o fundo e o modal
    $('#fundo').hide();
    $('#modal1').hide();
  });	

  // Quando clicar no botão fechar do modal2
  $('#modal2 .fechar').click(function (e) {
    e.preventDefault();
    // Oculta o fundo e o modal
    $('#fundo').hide();
    $('#modal2').hide();
  });	

  // Quando clicar no botão fechar do modal3
  $('#modal3 .fechar').click(function (e) {
    e.preventDefault();
    // Oculta o fundo e o modal
    $('#fundo').hide();
    $('#modal3').hide();
  });

  // Quando clicar no fundo o modal também fecha
  $('#fundo').click(function () {
    $(this).hide();
    $('#modal1').hide();
    $('#modal2').hide();
    $('#modal3').hide();
  });

  // Caso queira fechar o modal com a tecla ESC
  $(document).keyup(function(e) {
    if (e.keyCode == 27) {
      $('#fundo').hide();
      $('#modal1').hide();
      $('#modal2').hide();
      $('#modal3').hide();
    } 
  });	
});