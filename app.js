new Vue({
	el: '#vue-app',
	data: {
		name: 'Albane',
		job: 'Dev',
		website: "https://www.youtube.com/watch?v=xIOwFTCBBDg&list=PL4cUxeGkcC9gQcYgjhBoeQH7wiAyZNrYa&index=5",
		age: '24'
		a: 0,
		b: 0,
		available: false,
		nearby: false
	}
	method: {
		greet: function(time){
			return 'Good' + time; + '' + this.name;
		},
		add: function(){
			this.age++;
		},
		substract: function(){
			this.age--;
	}

	computed: {
		addToA: function(){
			console.log('addToA');
			return this.a + this.age;
		},
		addToB: function(){
			console.log('addToB');
			return.this.b + this.age;
		},

		compClasses: function(){
			return {
				available: this.available,
				nearby: this.nearby
			}
		}

	
	});
