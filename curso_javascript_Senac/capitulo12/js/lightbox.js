// Definindo a posição inicial
var slideIndex = 1;

// Obtendo o elemento HTML
modal = document.getElementById('Lightbox');

// Caso queira fechar o modal com a tecla ESC
document.querySelector('body').addEventListener('keydown', function(event) {
	var tecla = event.keyCode;
	// Tecla ESC = 27
	if(tecla == 27) {
		fechaLightbox();
	} 
});

// Caso queira fechar o modal clicando nele
modal.addEventListener('click', function(e) {
	if (e.target == this) fechaLightbox();
});

// Função para abrir o modal    
function abreLightbox() {
	modal.style.display = 'block';
};

// Função para fechar o modal    
function fechaLightbox() {
	modal.style.display = 'none';
};

// Função para navegar entre os slides    
function trocaSlide(n) {
	mostraSlide(slideIndex += n);
};

// Função para abrir um slide específico    
function vaParaSlide(n) {
	mostraSlide(slideIndex = n);
};

// Função principal    
function mostraSlide(n) {
	// Obtendo o elemento HTML
	var slides = document.getElementsByClassName('slide');

	if (n > slides.length) {
		slideIndex = 1;	
	};

	if (n < 1) {
		slideIndex = slides.length;
	};

	for (var i = 0; i < slides.length; i++) {
		slides[i].style.display = "none";
	};

	slides[slideIndex - 1].style.display = 'block';
};

// Chamando a função para mostrar o slide
mostraSlide(slideIndex);