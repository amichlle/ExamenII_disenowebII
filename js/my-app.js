// Initialize your app
var app = new Framework7({
	id: 'com.app',
  	root: '#app',
	theme: 'md',
	view: {
        pushState: false
    },
	cache:false,
	cacheDuration: 0,
	modalTitle: 'Floristería Mencía',
	dialog: {
		title: 'Floristería Mencia',
		buttonOk: 'Aceptar',
  	},
	routes: [
		{
		path: '/home/',
    	url: 'index.html',
    	name: 'home',
			
		path: '/perfil/',
    	url: 'perfil.html',
    	name: 'perfil',
				
		path: '/productos/',
    	url: 'productos.html',
    	name: 'productos',
  		}
	]
});

// Export selectors engine
var $$ = Dom7;

$$('#btn-alerta').on('click',function(){
	app.dialog.alert('Hola mundo');
	
});
					 
$$('#btnLogin').on('click', function(e){
	e.preventDefault();
	
	var usuario = $$('#username').val();
	var password = $$('#password').val();
	
	if (usuario == '' && password == ""){
		app.loginScreen.close('.login-screen');
	}else{
		app.dialog.alert('Datos ingresados NO son validos.');
	}
  
});



 

