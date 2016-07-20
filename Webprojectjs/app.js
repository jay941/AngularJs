var sudoApp = angular.module('sudoApp',['ui.router']);

sudoApp.config(function($stateProvider,$urlRouterProvider)
{

$urlRouterProvider.otherwise('/home');
$stateProvider
.state('home',{
	url:'/home',
	views:{
		nav:{
			   templateUrl:'pages/navbar.html'
		},
		main:{
				templateUrl:'pages/home.html'
		},
		footer:
		{
				templateUrl:'pages/footer.html'
		}
	}
})
.state('about',{

	url:'/about',
	views:{
		  nav:{
			         templateUrl:'pages/navbar.html'
		         },
		  main:{
			         templateUrl:'pages/about.html'
		     },
		   footer:{
			           templateUrl:'pages/footer.html'
		     }
	}
})

.state('contact',{
          url:'/contact',
          views:{
			     nav:{
					  templateUrl:'pages/navbar.html'
			          },
			     main:{
			    	  templateUrl:'pages/contact.html'
			           },
			 	 footer:{
				        templateUrl:'pages/footer.html'
			            }
                }
})

.state('signin',{
	url:'/signin',
	   views:{
	   				nav:
	   				    {
	   				    		templateUrl:'pages/navbar.html'
	   				     },
	   				main: {
	   							templateUrl:'pages/signin.html'
	   				       },
	   				footer:{
	   							templateUrl:'pages/footer.html'
	   				     }
	         }
})
.state('signup',{
	url:'/signup',
	   views:{
	   				nav:
	   				    {
	   				    		templateUrl:'pages/navbar.html'
	   				     },
	   				main: {
	   							templateUrl:'pages/signup.html'
	   				       },
	   				footer:{
	   							templateUrl:'pages/footer.html'
	   				     }
	         }
})

.state('Garlicicecream',{
	url:'/Garlicicecream',
	   views:{
	   				nav:
	   				    {
	   				    		templateUrl:'pages/navbar.html'
	   				     },
	   				main: {
	   							templateUrl:'pages/Garlicicecream.html'
	   				       },
	   				footer:{
	   							templateUrl:'pages/footer.html'
	   				     }
	         }
})
.state('Chocolateicecream',{
	url:'/Chocolateicecream',
	views:{
		 				nav:
	   				   	 	{
	   				   	 		templateUrl:'pages/navbar.html'
	   				     	},

						main:{
								templateUrl:'pages/Chocolateicecream.html'
							},
						footer:{
	   							templateUrl:'pages/footer.html'
	   				    		 }
	}
})

.state('Mangoicecream',{
	url:'/Mangoicecream',
	views:{
		 				nav:
	   				   	 	{
	   				   	 		templateUrl:'pages/navbar.html'
	   				     	},

						main:{
								templateUrl:'pages/Mangoicecream.html'
							},
						footer:{
	   							templateUrl:'pages/footer.html'
	   				    		 }
	}
})

.state('Greenteaicecream',{
	url:'/Greenteaicecream',
	views:{
		 				nav:
	   				   	 	{
	   				   	 		templateUrl:'pages/navbar.html'
	   				     	},

						main:{
								templateUrl:'pages/Greenteaicecream.html'
							},
						footer:{
	   							templateUrl:'pages/footer.html'
	   				    		 }
	}
});

});