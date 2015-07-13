var app=angular.module('admin', ['ui.router', 'ui.bootstrap', 'ui.grid', 'ui.grid.expandable']);

app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
	$urlRouterProvider.otherwise('/customers');
	
	$stateProvider.state('customers', {
		url: '/customers',
		templateUrl: 'pages/customers.html',
		controller: 'CustomerList',
		controllerAs: 'customers'
	});
	
	$stateProvider.state('orders', {
		url: '/orders',
		template: '<p>Orders under construction</p>'
	});

	$stateProvider.state('currencies', {
		url: '/currencies',
		template: '<p>Currencies under construction</p>'
	});
	
	$stateProvider.state('accounts', {
		url: '/accounts',
		template: '<p>Accounts under construction</p>'
	});
}]);

function formatBirthday() {
	if (!!this.birthday) {
		return this.birthday.toLocaleDateString('ru', {});
	} else {
		return "";
	}
}

app.controller('CustomerList', function() {
	var list=[{
		name: 'Buzuverov Mikhail',
		birthday: new Date('1984-01-16'),
		phone: '+79124036404',
		formatBirthday: formatBirthday
	}, {
		name: 'John Dow',
		birthday: null,
		phone: '+11111111111',
		formatBirthday: formatBirthday
	},
	{
		name: 'Mr. Black',
		birthday: new Date('2000-01-01'),
		phone: '+55555555555',
		formatBirthday: formatBirthday
	}];
	
	var columns=[{
		displayName: 'Имя',
		field: 'name'
	}, {
		displayName: 'Дата рождения',
		field: 'formatBirthday()'
	},
	{
		displayName: 'Телефон',
		field: 'phone'
	}];
	
	this.grid={
			data: list,
			columnDefs: columns,
			expandableRowTemplate: 'pages/customerEditor.html',
			expandableRowHeight: 200
	}

})