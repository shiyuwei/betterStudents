function Clock(canvas) {
	this.elem = canvas;
	this.ctx = canvas.getContext("2d");
}

Object.assign(Clock.prototype, {
	init: function() {
		this.drawCanvas();
		this.setInterval();
	},

	drawCanvas: function() {
		this.drawPannel();
		this.drawCenterPoint();
		this.drawMinutes();
		this.drawHours();
		this.drawHoursNum();
		this.getTimes();
		this.drawHourPointer();
		this.drawMinutePointer();
		this.drawSecondPointer();
	},

	setInterval: function() {
		var this_ = this;
		setInterval(function(){
			this_.ctx.clearRect(0, 0, 500, 500);
			this_.drawCanvas();
		},1000)
	},

	drawPannel: function() {
		this.ctx.save();
		this.ctx.beginPath();
		this.ctx.translate(250, 250);
		this.ctx.arc(0, 0, 100, 0, Math.PI * 2);
		this.ctx.stroke();
		this.ctx.restore();
	},

	drawCenterPoint: function() {
		this.ctx.beginPath();
		this.ctx.arc(250, 250, 2, 0, Math.PI * 2);
		this.ctx.fill();
	},

	drawMinutes: function() {
		this.ctx.save();
		this.ctx.translate(250, 250);
		this.ctx.strokeStyle = '#666'
		for(var i = 0;i < 60;i++){	
			this.ctx.beginPath();		
			this.ctx.moveTo(0, -98);
			this.ctx.lineTo(0, -96);
			this.ctx.stroke();
			this.ctx.rotate(Math.PI / 180 * 6);
		}
		this.ctx.restore();
	},

	drawHours: function() {
		this.ctx.save();
		this.ctx.translate(250, 250);
		for(var i = 0;i < 12;i++){	
			this.ctx.beginPath();		
			this.ctx.moveTo(0, -98);
			this.ctx.lineTo(0, -94);
			this.ctx.stroke();
			this.ctx.rotate(Math.PI / 180 * 30);
		}
		this.ctx.restore();
	},

	drawHoursNum: function() {
		this.ctx.save();
		this.ctx.translate(250, 250);
		this.ctx.textAlign = "center";
		this.ctx.textBaseline = "middle";
		for(var i = 1;i <= 12;i++){	
			this.ctx.beginPath();
			var x = Math.sin(Math.PI / 180 * 30 * i) * 80;
			var y = -Math.cos(Math.PI / 180 * 30 * i) * 80;
			this.ctx.fillText(i, x, y);
		}
		this.ctx.restore();
	},

	getTimes: function() {
		var date = new Date();
		this.hours = date.getHours() + (date.getMinutes() / 60);
		this.minutes = date.getMinutes();
		this.seconds = date.getSeconds();
	},

	drawHourPointer: function() {
		this.ctx.save();
		this.ctx.beginPath();
		this.ctx.translate(250, 250);
		this.ctx.rotate(Math.PI / 180 * 30 * this.hours);
		this.ctx.moveTo(0, -40);
		this.ctx.lineTo(0, 10);
		this.ctx.stroke();
		this.ctx.restore();
	},

	drawMinutePointer: function() {
		this.ctx.save();
		this.ctx.beginPath();
		this.ctx.translate(250, 250);
		this.ctx.rotate(Math.PI / 180 * 6 * this.minutes);
		this.ctx.moveTo(0, -60);
		this.ctx.lineTo(0, 10);
		this.ctx.stroke();
		this.ctx.restore();
	},

	drawSecondPointer: function() {
		this.ctx.save();
		this.ctx.beginPath();
		this.ctx.translate(250, 250);
		this.ctx.strokeStyle = 'red';
		this.ctx.rotate(Math.PI / 180 * 6 * this.seconds);
		this.ctx.moveTo(0, -80);
		this.ctx.lineTo(0, 10);
		this.ctx.stroke();
		this.ctx.restore();
	}	
});

function inherit(child, parent) {
	function tempCtor(){};
	tempCtor.prototype = parent.prototype;
	child.prototype = new tempCtor();
	child.prototype.constructor = child;
}

function NewCanvas(canvas) {
	this.elem = canvas;
	this.ctx = canvas.getContext("2d");
};

inherit(NewCanvas, Clock);

NewCanvas.prototype.drawPannel = function() {
		this.ctx.save();
		this.ctx.beginPath();
		this.ctx.translate(250, 250);
		this.ctx.arc(0, 0, 100, 0, Math.PI * 2);
		this.ctx.fillStyle = 'pink';
		this.ctx.fill();
		this.ctx.stroke();
		this.ctx.restore();
}

