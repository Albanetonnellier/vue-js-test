new Vue({
	el: '#vue-app',
	data: {
		name: 'Albane',
		job: 'Dev',
		website: "https://www.youtube.com/watch?v=xIOwFTCBBDg&list=PL4cUxeGkcC9gQcYgjhBoeQH7wiAyZNrYa&index=5",
		age: '24'
	}
	methods: {
		greet: function(time){
			return 'Good' + time; + '' + this.name;
		}
		add: function(){
			this.age++;
		}
		substract: function(){
			this.age--;
		}
	}
	});
