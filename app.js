new Vue({
	el: '#vue-app',
	data: {
		name: 'Albane',
		job: 'Dev',
		website: "https://www.youtube.com/watch?v=xIOwFTCBBDg&list=PL4cUxeGkcC9gQcYgjhBoeQH7wiAyZNrYa&index=5"
	}
	methods: {
		greet: function(time){
			return 'Good' + time; + '' + this.name;
		}
	}
	});
