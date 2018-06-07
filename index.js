(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
var rect; // used to reference frame bounds
lib.ssMetadata = [
		{name:"index_atlas_", frames: [[0,0,800,233],[0,235,800,232]]}
];


// symbols:



(lib.decorFixe1 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.decorFixe2 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.clipChiffres = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{chiffre0:0,chiffre1:1,chiffre2:2,chiffre3:3,chiffre4:4,chiffre5:5,chiffre6:6,chiffre7:7,chiffre8:8,chiffre9:9});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(10));

	// 9
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhTCoIgKgHIAAhOIAKgHIEDAAQAAAOgIASQgJAQgNANQgOAOgTAIQgTAJgWAAgAhMCXICXAAQATAAAOgHQAQgJAKgKQAKgMAFgIQAGgKAAgCIjnAAgAhcA6QgsAAgUgQQgTgQAAgaIAAhDQAAg2AbgXQAbgXArAAICYAAQA/AAATAfQAUAeAAAnIAAB9gAhxiRQgNAFgKAIQgJAJgEAJQgGAMgBAGIgCARIAABOQAAAUATALQAUAMAkAAIDyAAIAAhuQAAgbgRgcQgSgcgzAAIiWAAQgVABgPAFgAhGgdQgTgBgMgDQgMgDgEgFQgFgGAAgIQAAgKAEgFQAEgFAKgCQAJgCAVgBICVAAQAUABAKACQALADACAFQACAEAAAKQAAAJgCAFQgCAFgLADQgLADgTABQgUABgiABQhIgBgTgBgAhbg+QgIABgCACQgDACAAADQAAACADACIAMAEQAJABAQAAICBAAQARAAAHgBIAKgEQACgCAAgCQAAgBAAgBQAAgBgBAAQAAgBAAAAQgBgBAAAAQgCgCgIgBIgYgBIiDAAIgZABg");
	this.shape.setTransform(17.6,16.8);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(9).to({_off:false},0).wait(1));

	// 8
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhRCoQgeAAgTgGQgSgFgMgNQgKgNgEgTQgEgUAAgZIAAhCQAAgaATgRQAUgQAsAAIC/AAQAsAAAUAQQATARAAAaIAABCQAAAcgDARQgFATgKANQgLAMgSAGQgUAGgeAAgAiPgfQgSALAAAWIAABCQAAA2AWAOQAVAPAmAAIChAAQAnAAAWgPQAUgOAAg2IAAhCQABgWgWgLQgVgKgXAAIjBAAQgcAAgTAKgAhOBRQgTgBgKgCQgLgDgDgFQgDgFgBgJQABgIAEgGQAEgFAMgDQANgEAQgBICVAAQASABANAEQALADAGAFQAEAGAAAIQAAAIgEAGQgDAFgLADQgLACgTABgAhbAvIgMADQgEACAAADQABADACACQACACAJABICjABQARAAAIgBQAHgBADgCQADgCgBgDQAAgDgCgCIgNgDQgFgBgSAAIiKAAQgRAAgFABgAishMQAAgOAIgRQAIgQAOgNQAOgOATgJQASgIAWAAICLAAQAWAAASAIQATAJAOAOQANAMAKARQAHASAAANgAh4iAQgZAXAAANIEoAAQAAgOgbgWQgcgXgiAAIh8AAQgjAAgXAXg");
	this.shape_1.setTransform(17.9,16.8);
	this.shape_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(8).to({_off:false},0).to({_off:true},1).wait(1));

	// 7
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhsCoIBujpIB3AAIhsDpgAhSCXIBUAAIBcjHIhQAAgAiYhHIgKgIIAAhRIAKgHIE7AAIgoBggAiRhYID/AAIAag/IkZAAg");
	this.shape_2.setTransform(16.3,16.8);
	this.shape_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(7).to({_off:false},0).to({_off:true},1).wait(2));

	// 6
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AhJCoQg+AAgVgfQgTgfAAgnIAAh9IEMAAQAsAAAUAQQATARAAAaIAABCQAAA4gbAWQgcAXgqAAgAieBEQAAAbARAcQASAcAzAAICWAAQAVAAAOgGQAQgFAIgHQAJgKAEgIQAGgMABgHIACgRIAAhNQAAgUgTgLQgUgMgkAAIjyAAgAhKBRQgUgBgKgCQgLgEgCgEQgDgGAAgIQAAgIADgGQACgFALgDQALgEATgBQAUgBAiAAQBIAAATABQATABAMAEQAMADAEAFQAFAGAAAIQAAAJgEAFQgDAFgLADQgKACgUABgAhZAvQgIACgBABIgCAFQAAADACACQACACAIABIAYABICDAAIAZgBQAIgBACgCQADgCAAgDQAAgDgEgCIgLgDIgZgBIiBAAIgZABgAivhMQAAgPAIgQQAHgQAPgNQAPgOASgJQASgIAWAAICcAAIAKAHIAABNIgKAHgAhsiPQgPAJgKAJQgKAMgFAJQgGAJAAADIDnAAIAAg7IiXAAQgTABgPAHg");
	this.shape_3.setTransform(17.6,16.8);
	this.shape_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(6).to({_off:false},0).to({_off:true},1).wait(3));

	// 5
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AikCoIgJgHIAAhOIAJgHICxAAQALABAMgGQALgFALgKQAKgJAHgNQAGgOAAgNIBdAAQAAAkgOAcQgNAcgXAXQgXAWgbALQgdANgcAAgAicCXICdAAQAdAAAWgGQAYgGAQgNQARgLAMgPQAOgSAGgMQAHgOAEgOIAEgSIg/AAQAAAEgEAKQgFAMgJAKQgLANgQAIQgSALgZABIihAAgAifgaIgJgIIAAh+IAJgHIE6AAIAJAHIAABQIgJAIIjIAAIAAAmIgKAIgAiYgrIBaAAIAAguIDRAAIAAg+IkrAAg");
	this.shape_4.setTransform(17.4,16.8);
	this.shape_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(5).to({_off:false},0).to({_off:true},1).wait(4));

	// 4
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("ABMCoIgJgHIAAk/IAJgJIBOAAIAKAJIAAE/IgKAHgABUCXIA/AAIAAkuIg/AAgAiaBKIgJgHIAAgrICIh4IAxAAIAKAHIAABFIASAAIAJAHIAABQIgJAHgAiSAeIAAAcIC8AAIAAg9IgbAAIAAhNIgjAAg");
	this.shape_5.setTransform(16.4,16.8);
	this.shape_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_5).wait(4).to({_off:false},0).to({_off:true},1).wait(5));

	// 3
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AikCoIgJgHIAAhOIAJgHICxAAQALABAMgGQALgFALgKQAKgJAHgNQAGgOAAgNIBdAAQAAAkgOAcQgNAcgXAXQgXAWgbALQgdANgcAAgAicCXICdAAQAdAAAWgGQAYgGAQgNQARgLAMgPQAOgSAGgMQAHgOAEgOIAEgSIg/AAQAAAEgEAKQgFAMgJAKQgLANgQAIQgSALgZABIihAAgAgUAHIgKgHIAAhHIiAAAIgKgIIAAhRIAKgHIFDAAIAJAHIAAArIiSB8gAiXhYICKAAIAABPIAjAAICHh0IAAgaIk0AAg");
	this.shape_6.setTransform(17.4,16.8);
	this.shape_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_6).wait(3).to({_off:false},0).to({_off:true},1).wait(6));

	// 2
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AivCoICTinIAdAAIAKAHIAAA3ICZAAIAJAIIAABaIgJAHgAiFCXIEhAAIAAhGIihAAIAAg/IgPAAgABKgEQAAgXgHgQQgHgNgLgJQgLgIgNgCQgPgCgKgBQgGAAgNAEQgMADgNAIQgMAIgJAOQgJAPAAAWIhlAAQAAgQADgQQADgRAJgTQAIgTANgQQANgRAUgNQASgOAcgIQAdgIAfAAQAhAAAdAIQAbAIATAOQATALAOATQAOASAHARQAIAUADAQQADAVAAALgACegUQgDgagJgTQgIgSgNgPQgLgMgOgLQgPgJgNgGQgggNgogBQgjAAgiANQgPAGgMAIQgPALgLANQgNAOgJAUQgKATgEAaIBAAAQAJgdAPgOQAQgPAQgHQASgIAUgCQAWACASAIQAQAHAOAPQAPAOAHAdIBCAAIAAAAg");
	this.shape_7.setTransform(17.6,16.8);
	this.shape_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_7).wait(2).to({_off:false},0).to({_off:true},1).wait(7));

	// 1
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgbCoIgKgHIAAi0IgUAAIAeiLIBVgJIAAFIIgKAHgAgPiPIgUBsIAPAAIAAC6IA9AAIAAktg");
	this.shape_8.setTransform(16.8,16.8);
	this.shape_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_8).wait(1).to({_off:false},0).to({_off:true},1).wait(8));

	// 0
	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AhDCcQgfgNgYgXQgWgWgOggQgOgfAAgiQAAgjAOgeQAOghAWgVQAXgXAggOQAggOAjAAQAkAAAfAOQAhAOAWAXQAYAWANAgQAOAeAAAjQAAAigOAfQgNAfgYAXQgWAXghANQgeAOglAAQgkAAgfgOgAg9iLQgcAMgXAVQgVAWgMAbQgNAdAAAfQAAAhANAbQAMAcAVAVQAXAXAcALQAcAMAhAAQAgAAAdgMQAdgMAVgWQAXgVAMgcQAMgcAAggQAAgfgMgdQgMgbgXgWQgUgVgegMQgdgMggAAQghAAgcAMgAgjBWQgRgHgNgNQgMgMgHgQQgIgQAAgTQAAgSAIgQQAHgQAMgNQANgMARgHQARgHASAAQASAAARAHQARAHANAMQAMAMAHARQAIAQAAASQAAATgIAQQgHARgMALQgNANgRAHQgRAHgSAAQgSAAgRgHgAgdhAQgPAHgIAJQgLAKgGANQgGAOAAAOQAAAQAGANQAGAOALAKQAKAJANAHQAOAFAPAAQAOAAAPgFQANgHALgJQALgKAFgOQAHgNgBgQQABgOgHgOQgFgNgLgKQgJgJgPgHQgPgGgOAAQgPAAgOAGgAgaBAQgMgFgKgJQgJgKgFgLQgFgMgBgOQABgMAFgNQAFgLAJgKQALgJALgGQAMgEAOAAQAOAAAMAEQAMAGAJAJQAKAJAGAMQAFANAAAMQAAAOgFAMQgGAMgKAJQgIAIgNAGQgNAGgNAAQgMAAgOgGgAgTgqQgJADgHAIQgHAHgEAJQgEAJAAAJQAAAKAEAJQADAIAIAIQAHAGAJAFQAJAEAKAAQAKAAAKgEQAKgFAGgGQAHgIAEgIQADgHAAgMQAAgKgDgIQgEgJgHgHQgGgHgKgEQgLgEgJAAQgJAAgKAEg");
	this.shape_9.setTransform(17.3,17);

	this.timeline.addTween(cjs.Tween.get(this.shape_9).to({_off:true},1).wait(9));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,34.6,33.9);
p.frameBounds = [rect, new cjs.Rectangle(11,0,11.6,33.6), new cjs.Rectangle(0,0,35.3,33.6), new cjs.Rectangle(0,0,34.9,33.6), new cjs.Rectangle(0,0,32.8,33.6), new cjs.Rectangle(0,0,34.9,33.6), new cjs.Rectangle(0,0,35.3,33.6), new cjs.Rectangle(0,0,32.6,33.6), new cjs.Rectangle(0,0,35.8,33.6), new cjs.Rectangle(0,0,35.3,33.6)];


(lib.ClipPanneauNiveau = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{jour1:0,jour2:1});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// jour1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1BF3E6").s().p("AgpD8IgPgLIAAkOIgdAAIAsjQIB/gOIAAHsIgOALgAgXjXIgdChIAVAAIAAEZIBcAAIAAnEg");
	this.shape.setTransform(502.5,289.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#1BF3E6").s().p("ABuD8IjLjSIAAheIAQgRIFdAAQgCATgFAPQgGARgJAQQgKARgRAPQgSAQgaALQgaALglAEICcCYIAAAcgAhEAiIC/DBIBzAAIi2i0IA2AAQAqgDAYgOQAYgNAQgRQASgUAFgYIkzAAgAj5D8IgQgRIAAkfIAQgRIByAAIAQARIAAEfIgQARgAjvDjIBfAAIAAkPIhfAAgAkQhvIAAiMIGHAAQAgAAAdANQAdAOAUASQAVATAMAZQALAYgBAbgAj3iIIHmAAQAAgJgHgNQgHgMgRgRQgTgRgTgJQgTgKglgDIlpAAg");
	this.shape_1.setTransform(429.2,289.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#1BF3E6").s().p("AhPD8QgRAAgXgLQgYgMgRgSQgUgRgOgZQgOgZgBgZIAAlhIAQgRIByAAIAPARIAAFRIAKAIIBuAAIAJgIIAAlRIAQgRIBwAAIAQARIAAFhQAAAagNAYQgPAZgSARQgSARgYANQgWALgRAAgAi4BuQABAPAHAVQAIASAPATQAPARAWANQAUANAfABICEAAQAegBAXgNQAWgMAOgSQAPgSAHgTQAGgVAAgPIAAlQIheAAIAAFIQAAARgKAIQgLAJgKAAIh0AAQgJAAgMgJQgLgIAAgQIAAlJIhfAAg");
	this.shape_2.setTransform(379.6,289.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#1BF3E6").s().p("AhkDoQgugTgjgiQgigigVguQgUgvAAg0QAAgyAUgvQAUgtAjgjQAighAvgVQAwgUA0AAQA1AAAvAUQAvAUAjAiQAjAjAUAtQAUAtAAA0QAAA1gUAuQgUAugjAiQgjAigvATQgwAUg0AAQg0AAgwgUgAhYjQQgqASggAfQggAfgRApQgTAqAAAtQAAAvATApQARApAgAfQAgAfAqASQAqASAvAAQAvAAArgSQArgTAggeQAggeARgqQATgpAAgvQAAgtgTgqQgRgqgggeQgggegrgTQgrgSgvAAQgvAAgqASgAgzCAQgZgLgSgSQgUgTgKgYQgLgYAAgcQAAgcALgYQAKgZAUgSQASgSAZgLQAZgLAbAAQAdAAAZALQAbALARASQATASAMAZQAKAZABAbQgBAagKAaQgMAZgTASQgSASgaALQgZAKgdAAQgbAAgZgKgAgohhQgVAJgPAQQgRAQgIASQgJAUAAAWQAAAXAJATQAIATARAQQAPAPAVAIQAUAJAWAAQAXAAAUgJQAUgIAQgPQAQgPAJgUQAJgUAAgWQAAgVgJgVQgJgUgQgOQgPgPgVgKQgUgJgXAAQgWAAgUAJg");
	this.shape_3.setTransform(331.5,289.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#1BF3E6").s().p("AiSD8IgQgRIAAhpIAQgSICZAAIAMgJIAAlRIAPgRIByAAIAPARIAAFhQAAAagOAYQgNAYgUASQgUATgWALQgWALgRAAgAiJDjICeAAQAdgBAUgOQAWgNAPgSQAPgSAIgSQAIgSAAgRIAAlQIhfAAIAAFIQgBARgKAJQgLAJgJABIiVAAg");
	this.shape_4.setTransform(288,289.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#205874").s().p("AwjCMQg5AAgqgpQgpgpAAg6IAAAAQAAg5ApgpQApgpA6AAMAhIAAAQA5AAApApQApApAAA5IAAAAQAAA6gpApQgpApg5AAg");
	this.shape_5.setTransform(397,291);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#213158").s().p("AwoEYQh0AAhShSQhShSAAh0IAAAAQAAhzBShSQBShSB0AAMAhRAAAQB0AABSBSQBSBSAABzIAAAAQAAB0hSBSQhSBSh0AAg");
	this.shape_6.setTransform(397.5,291);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[]},1).wait(1));

	// fond
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#1BF3E6").s().p("Eg6qArDMAAAhWFMB1VAAAMAAABWFgEg6gAq5MB1BAAAMAAAhVxMh1BAAAg");
	this.shape_7.setTransform(398.5,299.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_7).wait(2));

	// textes
	this.txtObjectif = new cjs.Text("Objectif: 5000 pts ", "36px 'Prompt Light'", "#FFFFFF");
	this.txtObjectif.name = "txtObjectif";
	this.txtObjectif.textAlign = "center";
	this.txtObjectif.lineHeight = 62;
	this.txtObjectif.parent = this;
	this.txtObjectif.setTransform(402.6,324.8);

	this.timeline.addTween(cjs.Tween.get(this.txtObjectif).wait(2));

	// jour2
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#1BF3E6").s().p("AkHD8IDdj7IArAAIAPALIAABTIDlAAIAPALIAACHIgPALgAjIDiIGzAAIAAhqIj0AAIAAheIgWAAgABvgGQAAgkgKgWQgLgWgQgMQgQgLgUgEQgTgEgTAAQgKAAgTAFQgSAEgTANQgSALgOAXQgNAUAAAjIiYAAQAAgYAFgZQAEgZANgdQANgcATgZQAVgbAcgSQAdgUAogMQAogMAzAAQA0AAApAMQAnAMAfAUQAdATAUAaQAUAbAKAaQAMAaAFAcQAFAeAAATgADtgfQgFglgNgeQgNgcgSgVQgRgUgWgPQgUgNgVgKQgxgUg7gBQg2AAgyATQgUAJgVANQgVAPgSAUQgTAXgOAcQgOAcgHAoIBhAAQAMgpAYgYQAYgXAXgJQAcgNAegBQAgABAcANQAXAKAWAWQAYAYAIApIBkAAIAAAAg");
	this.shape_8.setTransform(515.3,289.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#1BF3E6").s().p("ABuD8IjLjSIAAheIAQgRIFdAAQgCATgFAPQgGARgJAQQgKARgRAPQgSAQgaALQgaALglAEICcCYIAAAcgAhEAiIC/DBIBzAAIi2i0IA2AAQAqgDAYgOQAYgNAQgRQASgUAFgYIkzAAgAj5D8IgQgRIAAkfIAQgRIByAAIAQARIAAEfIgQARgAjvDjIBfAAIAAkPIhfAAgAkQhvIAAiMIGHAAQAgAAAdANQAdAOAUASQAVATAMAZQALAYgBAbgAj3iIIHmAAQAAgJgHgNQgHgMgRgRQgTgRgTgJQgTgKglgDIlpAAg");
	this.shape_9.setTransform(424.2,289.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#1BF3E6").s().p("AhQD8QgQAAgXgLQgYgMgSgSQgSgRgPgZQgOgZAAgZIAAlhIAQgRIBwAAIAQARIAAFRIAKAIIBtAAIAKgIIAAlRIAPgRIByAAIAPARIAAFhQAAAagNAYQgPAZgTARQgRARgXANQgYALgQAAgAi3BuQAAAPAIAVQAGASAQATQAPARAVANQAWANAeABICFAAQAdgBAXgNQAXgMANgSQAQgSAGgTQAHgVAAgPIAAlQIhfAAIAAFIQAAARgKAIQgLAJgKAAIhzAAQgKAAgMgJQgLgIAAgQIAAlJIheAAg");
	this.shape_10.setTransform(374.6,289.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#1BF3E6").s().p("AhjDoQgvgTgjgiQgigigVguQgUgvAAg0QAAgyAUgvQAUgtAjgjQAjgiAvgUQAugUA1AAQA0AAAxAUQAuAUAjAiQAjAjATAtQAVAtAAA0QAAA1gVAuQgUAugiAiQgjAiguATQgxAUg0AAQg0AAgvgUgAhYjQQgrASgfAfQggAfgSApQgSAqAAAtQAAAvASApQASApAgAfQAfAfArASQAqASAvAAQAwAAAqgSQAsgTAegeQAggeATgqQASgpAAgvQAAgtgSgqQgTgqgggeQgfgegrgTQgqgSgwAAQgvAAgqASgAgzCAQgZgLgTgSQgSgTgLgYQgLgYAAgcQAAgcALgYQALgZASgSQATgSAZgLQAZgLAcAAQAcAAAZALQAaALATASQASASALAZQALAZAAAbQAAAagLAaQgLAZgSASQgTASgaALQgaAKgbAAQgbAAgagKgAgphhQgUAJgQAQQgQAQgIASQgJAUAAAWQAAAXAJATQAIATAQAQQARAPATAIQAWAJAVAAQAXAAAUgJQAVgIAQgPQAPgPAJgUQAKgUAAgWQAAgVgKgVQgJgUgPgOQgPgPgWgKQgUgJgXAAQgVAAgWAJg");
	this.shape_11.setTransform(326.5,289.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#1BF3E6").s().p("AiSD8IgQgRIAAhpIAQgSICaAAIAKgJIAAlRIAQgRIBxAAIAQARIAAFhQAAAagOAYQgNAYgUASQgUATgWALQgWALgRAAgAiJDjICdAAQAdgBAWgOQAVgNAQgSQAOgSAIgSQAIgSAAgRIAAlQIheAAIAAFIQgBARgLAJQgLAJgJABIiVAAg");
	this.shape_12.setTransform(283,289.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#205874").s().p("AwkCMQg5AAgpgpQgpgpAAg6IAAAAQAAg5ApgpQApgpA5AAMAhIAAAQA6AAApApQApApAAA5IAAAAQAAA6gpApQgpApg6AAg");
	this.shape_13.setTransform(401,291);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#213158").s().p("AwpEYQhzAAhShSQhShSAAh0IAAAAQAAhzBShSQBShSBzAAMAhSAAAQBzAABTBSQBSBSAABzIAAAAQAAB0hSBSQhTBShzAAg");
	this.shape_14.setTransform(401.5,291);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(23,24,751,551);
p.frameBounds = [rect, rect];


(lib.btnSuivant = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{up:1,rl:2});

	// timeline functions:
	this.frame_1 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(1).call(this.frame_1).wait(2));

	// bouton
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AinjGIFPDDIlPDKg");
	this.shape.setTransform(38.7,34);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#5D0093").s().p("AlTFUIAAqnIKnAAIAAKng");
	this.shape_1.setTransform(34,34);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AinjGIFPDDIlPDKg");
	this.shape_2.setTransform(38.7,34);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#B6149B").s().p("AlTFUIAAqnIKnAAIAAKng");
	this.shape_3.setTransform(34,34);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_3},{t:this.shape}]},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,68,68);
p.frameBounds = [rect, rect, rect];


(lib.btnRejouer = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"up":1,"rl":2});

	// timeline functions:
	this.frame_1 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(1).call(this.frame_1).wait(2));

	// bouton
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ABKCoIiHiMIAAg+IAKgMIDpAAQgCAOgDAKQgDAJgHAMQgGAKgMALQgLALgTAHQgSAIgXACIBoBmIAAASgAgtAXIB/CAIBNAAIh5h3IAkAAQAbgDARgJQARgJAJgLQANgOADgOIjNAAgAilCoIgLgLIAAi/IALgMIBMAAIAKAMIAAC/IgKALgAifCXIA/AAIAAizIg/AAgAi1hJIAAheIEFAAQAVAAATAIQAUAKANAMQAOAMAIARQAHARAAASgAikhaIFEAAQAAgGgFgJQgFgJgLgKQgNgLgMgHQgNgGgZgCIjwAAg");
	this.shape.setTransform(257.3,29.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AiSCoIgKgHIAAjIIAKgIIEPAAQAAARgKAVQgKATgLAKQgMALgRAHQgRAJgZABIhRAAIAAAbIDNAAIAKAMIAABKIgKAHgAiLCXIEXAAIAAg7IjXAAIAAg8IBhAAQAZgCAPgJQAPgJAMgNQAKgOAEgPIjyAAgAiShJIgKgIIAAhPIAKgHIElAAIAKAHIAABPIgKAIgAiLhaIEXAAIAAg8IkXAAg");
	this.shape_1.setTransform(222.5,29.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("Ag1CoQgLAAgPgIQgOgHgOgMQgNgNgJgPQgKgRAAgRIAAjqIALgMIBLAAIAKAMIAADgIAHAFIBJAAIAGgFIAAjgIALgMIBLAAIAKAMIAADqQAAASgJAQQgIAPgOANQgLALgQAIQgPAIgMAAgAh6BJQABANAFAMQADALALANQAMANAMAHQAOAJAVAAIBYAAQAUAAAPgIQAPgJAKgMQAIgLAFgNQAFgNAAgMIAAjfIg/AAIAADaQAAALgHAGQgGAGgIAAIhMAAQgHAAgIgGQgHgGAAgKIAAjbIg/AAg");
	this.shape_2.setTransform(192,29.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AhCCbQgfgNgXgXQgYgYgNgdQgNgfAAgjQAAghANgfQAOgeAXgYQAXgWAfgOQAfgNAjAAQAkAAAfANQAgAOAWAWQAXAYAOAeQANAfAAAhQAAAjgNAfQgNAdgYAYQgWAWggAOQggANgjAAQgiAAgggNgAg6iKQgeANgUATQgVAVgMAcQgMAcAAAdQAAAdAMAeQANAcAUAUQAWAVAcAMQAcAMAfgBQAfABAdgMQAcgMAVgVQAVgTANgdQAMgeAAgdQAAgdgMgcQgMgcgWgVQgUgTgdgNQgdgMgfAAQgfAAgcAMgAgiBWQgQgIgNgMQgMgMgHgRQgIgQAAgTQAAgRAIgQQAHgRAMgMQANgNAQgHQASgHARAAQATAAARAHQAQAHANANQANALAHASQAIAQAAARQAAATgIAQQgHASgNALQgNAMgQAIQgRAGgTAAQgSAAgRgGgAgbhAQgNAGgLAKQgKALgGAMQgGANAAAOQAAAQAGANQAGAMAKALQAMAKAMAGQAPAFANAAQAPAAAOgFQANgGALgKQALgLAGgMQAGgNAAgQQAAgOgGgNQgGgMgLgLQgLgKgNgGQgOgGgPAAQgNAAgPAGg");
	this.shape_3.setTransform(159.9,29.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AhhCoIgLgLIAAhGIALgMIBmAAIAHgGIAAjgIALgMIBLAAIALAMIAADqQAAASgKAQQgIAPgOANQgOAMgOAHQgOAIgMAAgAhbCXIBpAAQATAAAOgJQAOgJAKgMQAKgMAFgMQAGgLAAgNIAAjfIg/AAIAADaQAAALgIAHQgHAFgGABIhjAAg");
	this.shape_4.setTransform(130.9,29.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AiSCoIgKgHIAAjIIAKgIIEPAAQAAATgKATQgJASgNALQgLALgRAHQgSAJgYABIhRAAIAAAbIDNAAIAKAMIAABKIgLAHgAiLCXIEXAAIAAg7IjXAAIAAg8IBgAAQAagCAPgJQAQgKAKgMQAMgPADgOIjyAAgAiShJIgKgIIAAhPIAKgHIElAAIAKAHIAABPIgKAIgAiLhaIEXAAIAAg8IkXAAg");
	this.shape_5.setTransform(103.4,29.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("ABKCoIiIiMIAAg+IALgMIDpAAQgCAMgDAMQgFALgFAKQgHAKgMALQgLAKgSAIQgTAIgXACIBpBmIAAASgAgtAXIB/CAIBNAAIh5h3IAkAAQAagDARgJQARgJAKgLQAMgNADgPIjMAAgAilCoIgLgLIAAi/IALgMIBLAAIALAMIAAC/IgLALgAifCXIA/AAIAAizIg/AAgAi1hJIAAheIEEAAQAVAAAUAIQAVAKAMAMQAPANAHAQQAHAPAAAUgAikhaIFDAAQAAgGgEgJQgHgKgJgJQgMgLgNgHQgNgGgZgCIjwAAg");
	this.shape_6.setTransform(68.6,29.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#5D0093").s().p("A5dETIAAolMAy7AAAIAAIlg");
	this.shape_7.setTransform(163,27.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("ABKCoIiHiMIAAg+IAKgMIDpAAQgCAOgDAKQgDAJgHAMQgGAKgMALQgLALgTAHQgSAIgXACIBoBmIAAASgAgtAXIB/CAIBNAAIh5h3IAkAAQAbgDARgJQARgJAJgLQANgOADgOIjNAAgAilCoIgLgLIAAi/IALgMIBMAAIAKAMIAAC/IgKALgAifCXIA/AAIAAizIg/AAgAi1hJIAAheIEFAAQAVAAATAIQAUAKANAMQAOAMAIARQAHARAAASgAikhaIFEAAQAAgGgFgJQgFgJgLgKQgNgLgMgHQgNgGgZgCIjwAAg");
	this.shape_8.setTransform(257.1,29.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AiSCoIgKgHIAAjIIAKgIIEPAAQAAARgKAVQgKATgLAKQgMALgRAHQgRAJgZABIhRAAIAAAbIDNAAIAKAMIAABKIgKAHgAiLCXIEXAAIAAg7IjXAAIAAg8IBhAAQAZgCAPgJQAPgJAMgNQAKgOAEgPIjyAAgAiShJIgKgIIAAhPIAKgHIElAAIAKAHIAABPIgKAIgAiLhaIEXAAIAAg8IkXAAg");
	this.shape_9.setTransform(222.3,29.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("Ag1CoQgLAAgPgIQgOgHgOgMQgNgNgJgPQgJgRgBgRIAAjqIALgMIBLAAIALAMIAADgIAGAFIBJAAIAGgFIAAjgIALgMIBLAAIALAMIAADqQAAASgJAQQgJAPgNANQgMALgQAIQgPAIgLAAgAh6BJQABANAFAMQAEALAKANQAMANANAHQAOAJAUAAIBYAAQAUAAAPgIQAPgJAKgMQAJgLAFgNQAEgNAAgMIAAjfIg/AAIAADaQAAALgHAGQgGAGgHAAIhNAAQgHAAgHgGQgIgGAAgKIAAjbIg/AAg");
	this.shape_10.setTransform(191.7,29.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AhCCbQgfgNgXgXQgYgYgNgdQgNgfAAgjQAAghANgfQAOgeAXgYQAXgWAfgOQAfgNAjAAQAkAAAfANQAgAOAWAWQAXAYAOAeQANAfAAAhQAAAjgNAfQgNAdgYAYQgWAWggAOQggANgjAAQgiAAgggNgAg6iKQgeANgUATQgVAVgMAcQgMAcAAAdQAAAdAMAeQANAcAUAUQAWAVAcAMQAcAMAfgBQAfABAdgMQAcgMAVgVQAVgTANgdQAMgeAAgdQAAgdgMgcQgMgcgWgVQgUgTgdgNQgdgMgfAAQgfAAgcAMgAgiBWQgQgIgNgMQgMgMgHgRQgIgQAAgTQAAgRAIgQQAHgRAMgMQANgNAQgHQASgHARAAQATAAARAHQAQAHANANQANALAHASQAIAQAAARQAAATgIAQQgHASgNALQgNAMgQAIQgRAGgTAAQgSAAgRgGgAgbhAQgNAGgLAKQgKALgGAMQgGANAAAOQAAAQAGANQAGAMAKALQAMAKAMAGQAPAFANAAQAPAAAOgFQANgGALgKQALgLAGgMQAGgNAAgQQAAgOgGgNQgGgMgLgLQgLgKgNgGQgOgGgPAAQgNAAgPAGg");
	this.shape_11.setTransform(159.7,29.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AhhCoIgLgLIAAhGIALgMIBmAAIAHgGIAAjgIALgMIBLAAIALAMIAADqQAAASgKAQQgIAPgOANQgOAMgOAHQgOAIgMAAgAhbCXIBpAAQATAAAOgJQAOgJAKgMQAKgMAFgMQAGgLAAgNIAAjfIg/AAIAADaQAAALgIAHQgHAFgGABIhjAAg");
	this.shape_12.setTransform(130.7,29.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AiSCoIgKgHIAAjIIAKgIIEPAAQAAATgKATQgJASgNALQgLALgRAHQgSAJgYABIhRAAIAAAbIDNAAIAKAMIAABKIgLAHgAiLCXIEXAAIAAg7IjXAAIAAg8IBgAAQAagCAPgJQAQgKAKgMQAMgPADgOIjyAAgAiShJIgKgIIAAhPIAKgHIElAAIAKAHIAABPIgKAIgAiLhaIEXAAIAAg8IkXAAg");
	this.shape_13.setTransform(103.2,29.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("ABKCoIiIiMIAAg+IALgMIDpAAQgCAMgDAMQgFALgFAKQgHAKgMALQgLAKgSAIQgTAIgXACIBpBmIAAASgAgtAXIB/CAIBNAAIh5h3IAkAAQAagDARgJQARgJAKgLQAMgNADgPIjMAAgAilCoIgLgLIAAi/IALgMIBLAAIALAMIAAC/IgLALgAifCXIA/AAIAAizIg/AAgAi1hJIAAheIEEAAQAVAAAUAIQAVAKAMAMQAPANAHAQQAHAPAAAUgAikhaIFDAAQAAgGgEgJQgHgKgJgJQgMgLgNgHQgNgGgZgCIjwAAg");
	this.shape_14.setTransform(68.4,29.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#B6149B").s().p("A5dETIAAolMAy7AAAIAAIlg");
	this.shape_15.setTransform(163,27.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6,p:{x:68.6}},{t:this.shape_5,p:{x:103.4}},{t:this.shape_4,p:{x:130.9}},{t:this.shape_3,p:{x:159.9}},{t:this.shape_2},{t:this.shape_1,p:{x:222.5}},{t:this.shape,p:{x:257.3}}]}).to({state:[{t:this.shape_15},{t:this.shape_6,p:{x:68.4}},{t:this.shape_5,p:{x:103.2}},{t:this.shape_4,p:{x:130.7}},{t:this.shape_3,p:{x:159.7}},{t:this.shape_10},{t:this.shape_1,p:{x:222.3}},{t:this.shape,p:{x:257.1}}]},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,326,55);
p.frameBounds = [rect, rect, rect];


(lib.btnPrecedent = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"up":1,"rl":2});

	// timeline functions:
	this.frame_1 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(1).call(this.frame_1).wait(2));

	// bouton
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AingDIFPjDIAAGNg");
	this.shape.setTransform(29.4,34);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#5D0093").s().p("AlTFUIAAqnIKnAAIAAKng");
	this.shape_1.setTransform(34,34);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AingDIFPjDIAAGNg");
	this.shape_2.setTransform(29.4,34);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#B6149B").s().p("AlTFUIAAqnIKnAAIAAKng");
	this.shape_3.setTransform(34,34);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_3},{t:this.shape}]},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,68.1,68.1);
p.frameBounds = [rect, rect, rect];


(lib.btnJouer = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"up":1,"rl":2});

	// timeline functions:
	this.frame_1 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(1).call(this.frame_1).wait(2));

	// bouton
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ABCCXIh5h+IAAg4IAJgKIDRAAQgBAMgDAJQgDAJgGAKQgFAKgMAJQgJAIgRAIQgQAHgVACIBdBbIAAARgAgpAUIBzB0IBFAAIhthsIAgAAQAagCAOgIQANgIALgKQAKgMADgOIi4AAgAiVCXIgKgKIAAisIAKgKIBEAAIAKAKIAACsIgKAKgAiPCIIA5AAIAAiiIg5AAgAiihCIAAhUIDpAAQAUAAARAHQARAJAMALQANALAHAPQAHAOgBARgAiThRIEiAAQAAgGgEgHQgEgIgLgKQgIgIgOgIQgMgGgVgBIjYAAg");
	this.shape.setTransform(170.6,26.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AiECXIgIgGIAAi1IAIgGID0AAQAAAQgJASQgIARgLAJQgLAKgPAHQgQAHgVABIhJAAIAAAYIC5AAIAIALIAABDIgJAGgAh9CIID7AAIAAg2IjCAAIAAg2IBXAAQAYgBANgIQANgIALgMQAKgOADgMIjaAAgAiEhCIgIgHIAAhHIAIgGIEJAAIAIAGIAABHIgIAHgAh9hRID7AAIAAg2Ij7AAg");
	this.shape_1.setTransform(139.3,26.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgvCXQgLAAgNgHQgPgHgKgKQgMgMgIgOQgIgNgBgRIAAjTIAKgKIBEAAIAJAKIAADKIAGAEIBBAAIAGgEIAAjKIAJgKIBEAAIAKAKIAADTQAAAPgIAPQgIANgMANQgMAKgNAHQgNAHgLAAgAhuBCQABALAEAKQAEALAKALQAKAMALAHQANAIASAAIBQAAQASgBANgHQAOgJAIgJQAJgLAEgLQAEgNAAgJIAAjJIg5AAIAADEQAAAKgGAFQgHAGgGAAIhFAAQgFAAgHgGQgHgFAAgJIAAjFIg5AAg");
	this.shape_2.setTransform(111.7,26.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("Ag8CLQgcgMgUgUQgVgUgMgcQgMgbAAggQAAgfAMgbQAMgbAVgVQAVgVAbgLQAdgMAfAAQAgAAAcAMQAbALAWAVQAVAVAMAbQAMAbAAAfQAAAggMAbQgMAcgVAUQgVAUgcAMQgcAMggAAQgfAAgdgMgAg1h8QgYAKgUATQgSATgMAYQgLAYAAAcQAAAcALAZQAMAZASASQAUATAYAKQAbALAaAAQAbAAAcgLQAZgKATgTQATgSALgZQALgZAAgcQAAgcgLgYQgLgYgTgTQgTgTgZgKQgagLgdAAQgcAAgZALgAgeBNQgRgIgKgKQgKgKgHgPQgHgPAAgRQAAgRAHgNQAHgQAKgKQAKgKARgIQAQgGAPAAQAQAAAQAGQAQAHALALQAMAMAFAOQAHAPAAAPQAAAQgHAQQgGAOgLALQgLALgQAHQgPAGgRAAQgQAAgPgGgAgYg6QgMAFgJAKQgKAJgFAMQgGAMAAAMQAAANAGANQAFALAKAJQAJAKAMAFQAMAFANAAQAOAAAMgFQALgFALgKQAJgJAGgLQAFgNAAgNQAAgMgFgMQgFgMgKgJQgLgKgLgFQgNgFgNAAQgMAAgNAFg");
	this.shape_3.setTransform(82.9,26.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AhXCXIgKgKIAAg/IAKgLIBbAAIAHgFIAAjKIAJgKIBFAAIAJAKIAADTQAAAQgIAOQgJAPgMALQgLAKgNAHQgPAHgJAAgAhRCIIBdAAQARAAANgJQAPgJAIgJQAJgMAEgKQAEgLABgKIAAjJIg5AAIAADEQAAAKgHAGQgHAFgFAAIhYAAg");
	this.shape_4.setTransform(56.8,26.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#5D0093").s().p("AyRD3IAAnuMAkjAAAIAAHug");
	this.shape_5.setTransform(117,24.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("ABCCXIh5h+IAAg4IAJgKIDRAAQgBAMgDAJQgDAJgGAKQgFAKgMAJQgJAIgRAIQgQAHgVACIBdBbIAAARgAgpAUIBzB0IBFAAIhthsIAgAAQAagCAOgIQANgIALgKQAKgMADgOIi4AAgAiVCXIgKgKIAAisIAKgKIBEAAIAKAKIAACsIgKAKgAiPCIIA5AAIAAiiIg5AAgAiihCIAAhUIDpAAQAUAAARAHQARAJAMALQANALAHAPQAHAOgBARgAiThRIEiAAQAAgGgEgHQgEgIgLgKQgIgIgOgIQgMgGgVgBIjYAAg");
	this.shape_6.setTransform(170.6,26.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AiECXIgIgGIAAi1IAIgGID0AAQAAAQgJASQgIARgLAJQgLAKgPAHQgQAHgVABIhJAAIAAAYIC5AAIAIALIAABDIgJAGgAh9CIID7AAIAAg2IjCAAIAAg2IBXAAQAYgBANgIQANgIALgMQAKgOADgMIjaAAgAiEhCIgIgHIAAhHIAIgGIEJAAIAIAGIAABHIgIAHgAh9hRID7AAIAAg2Ij7AAg");
	this.shape_7.setTransform(139.3,26.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgvCXQgLAAgNgHQgPgHgKgKQgMgMgIgOQgIgNgBgRIAAjTIAKgKIBEAAIAJAKIAADKIAGAEIBBAAIAGgEIAAjKIAJgKIBEAAIAKAKIAADTQAAAPgIAPQgIANgMANQgMAKgNAHQgNAHgLAAgAhuBCQABALAEAKQAEALAKALQAKAMALAHQANAIASAAIBQAAQASgBANgHQAOgJAIgJQAJgLAEgLQAEgNAAgJIAAjJIg5AAIAADEQAAAKgGAFQgHAGgGAAIhFAAQgFAAgHgGQgHgFAAgJIAAjFIg5AAg");
	this.shape_8.setTransform(111.7,26.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("Ag8CLQgcgMgUgUQgVgUgMgcQgMgbAAggQAAgfAMgbQAMgbAVgVQAVgVAbgLQAdgMAfAAQAgAAAcAMQAbALAWAVQAVAVAMAbQAMAbAAAfQAAAggMAbQgMAcgVAUQgVAUgcAMQgcAMggAAQgfAAgdgMgAg1h8QgYAKgUATQgSATgMAYQgLAYAAAcQAAAcALAZQAMAZASASQAUATAYAKQAbALAaAAQAbAAAcgLQAZgKATgTQATgSALgZQALgZAAgcQAAgcgLgYQgLgYgTgTQgTgTgZgKQgagLgdAAQgcAAgZALgAgeBNQgRgIgKgKQgKgKgHgPQgHgPAAgRQAAgRAHgNQAHgQAKgKQAKgKARgIQAQgGAPAAQAQAAAQAGQAQAHALALQAMAMAFAOQAHAPAAAPQAAAQgHAQQgGAOgLALQgLALgQAHQgPAGgRAAQgQAAgPgGgAgYg6QgMAFgJAKQgKAJgFAMQgGAMAAAMQAAANAGANQAFALAKAJQAJAKAMAFQAMAFANAAQAOAAAMgFQALgFALgKQAJgJAGgLQAFgNAAgNQAAgMgFgMQgFgMgKgJQgLgKgLgFQgNgFgNAAQgMAAgNAFg");
	this.shape_9.setTransform(82.9,26.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AhXCXIgKgKIAAg/IAKgLIBbAAIAHgFIAAjKIAJgKIBFAAIAJAKIAADTQAAAQgIAOQgJAPgMALQgLAKgNAHQgPAHgJAAgAhRCIIBdAAQARAAANgJQAPgJAIgJQAJgMAEgKQAEgLABgKIAAjJIg5AAIAADEQAAAKgHAGQgHAFgFAAIhYAAg");
	this.shape_10.setTransform(56.8,26.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#B6149B").s().p("AyRD3IAAnuMAkjAAAIAAHug");
	this.shape_11.setTransform(117,24.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_11},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,234,49.5);
p.frameBounds = [rect, rect, rect];


(lib.clipObstaclePoison = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#27847A").s().p("AhtBhQhygLgcgcQgTgUhBgVQgvgPAKgUQAMgYBEgDQAjgCAgADIAVgHQAZgLAMgUIAABAIAWgXQAagWAQAAQgMAgAEAdQADANAFAIIAHgGQASgTANgsIAtBFQAAgTATgsIANAYQAQAaAIAUQAIgIgDgfIgFgfIAtAsQACgKAGgPQAKgeAPgTQAWgbAcAAQgYAMAEAhQABARAHAOIAXgVQAegYAkgMQgQAYAHAWQADALAGAHIBTgtIgHAZQgFAbAMALQA7AOgKAXQgJAWg0AFIhvAWQhQAQh6AAQgzAAg5gFg");
	this.shape.setTransform(53.5,76.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF3EF1").s().p("AjoCuQgQgEgHgaQgHgZAFgdQAMhMA6AAQAkAAAgAZQAeAXALgDQAQgEAEgfIAGhcQABgXAPgTQAYgfA1gSQAogNAggBIADAAIAIAIQAVAUAjARQAjARAtALIgCACQgUASgkBdIgDAKIgBAAQgIgVgNgZQgZgygUgUQgZgZgagHQgbgIgYAOQgLAHgIAPQgLAXgCAnQgDAiAEAjQAEAqgbAiQgcAggnAAQgtAAgJgeQgGgTgDgFQgHgMgTgEQgggHgDA5IgDAmQgCAOgJAAIgDAAg");
	this.shape_1.setTransform(27.6,34.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#ED1DD5").s().p("Ah4A1QANgRAVgRQBEg1BvggQADANAjAcQggABgoAOQg2ARgXAeQgbgDgZAEQgZAFgUAMIgPAMg");
	this.shape_2.setTransform(25.8,19.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#B6149B").s().p("AgbgSQAbAVAcAPQgigRgVgTg");
	this.shape_3.setTransform(42.8,19.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#ED1DD5").s().p("AAcB8QAEgSABgfIAAg4QgBgoAEgYIAEgRIgNACQgEAAgHgBQgUgEglgTIgzgaQAHgPALgHQAYgOAbAIQAZAHAZAZQAUAUAZAyQANAaAIAUQgTA2gNAaQgVAngTANQAFgJACgJg");
	this.shape_4.setTransform(38.1,35.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#1E367E").s().p("AgHCJIgPgXQgTAsAAAUIgthHQgNAtgRAUQgCgPAPgnQAOgigGgMQgIgQgWgKIgVgGQAsgHANAHQAHhSgNgNQgIgIAFgLIAGgKIANANIAmguQAugyAogQIgQAaQgQAdgEAMQgBAGASgCQAWgCAGAFQAFADgFAUQgEAUAEABQATAEAygaIAYgNQgKAOgpAqIgnAoIAngNQgHATgTAMQgHAFAIAUQAGAPAQAdQgPATgKAeQgFAPgCALIgtgsIAFAeQADAggIAIQgIgUgPgbg");
	this.shape_5.setTransform(55.6,60.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#5D0093").s().p("AkOEiIgWgHQAugEAxghQA4glAQgvQgCAKgFAJQATgNAUgoQANgaAUg2IABAAIADgKQAkhcAUgSIABgCQgsgMgjgRQgdgQgbgVIgIgIIgDAAQgjgdgDgMQhwAghEA2QgVARgNARIgKAOQgRAMgJAOQgRhCBrhAQBJgsBKgSQgIggAmgXQATgLAVgFQgZAbAAASQAAAWARAHQAJAEA5AMQAnAIBHgPICRggQBEgMAuAYQAXAMAKAPIAJgBQANgFAQgUQgFAoAUAwQAVAyAcAJQgfANgsAnQgyArAEAaQADAZglBBQgpBHgCASIghgaQgVgQgQAEQgMADgNAKQgyAagSgEQgFgBAFgUQAEgUgEgEQgGgEgXACQgSABACgFQAEgMAQgdIAPgaQAxgUAngyQAngygYgOQgQgKigCgQipCpggAHQgRADgQAAQgOAAgOgDg");
	this.shape_6.setTransform(53.5,32.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#1BF3E6").ss(1,0,0,4).p("AATG5QgzAAg5gFQh3gMggggQgMgMgVgJQgMgFgagJQgagIgJgFQgQgIgFgMQgFgNAHgOQAOgdA9gGQAlgEAxAEQAegHAOgYIALgSIg6gKIBGgKIAHgLIAAAKIAXgDQAagEATABQADg2gGgNQgHgHgBgHQhTBNgcAGQgkAHgggGQgTgEgHgFIgvgZIA1gFQAzgFAvglQArghAMgiQAFgWgBg+IAAgPQgBgtAEgUIgHgBQgWgDgogVIgjgTQgHAWgCAfQgBAcADAbQAGA0gjAmQggAkgsAAQglAAgRgPQgMgKgGgWQgDgMgDgEQgEgEgLgDQgGgBgCABQgHAFgBApQgBAXgCAIQgDAOgJAHQgJAHgNgEQgXgGgKgfQgJgbAFgiQAGgqAXgZQAYgZAiAAQAbAAAYALQAOAHATAPQARANAEgBQAFgBACgRQABgKACggQABghACgVQABgOAFgMQgIAAgPACQgaAGgXARQgSAMgJANIgUAcIgIgiQgShHBihBQBDguBYgZQABgQAHgMQANgVAfgOQATgJANgCIA0gNIglAnQgIAIgGALQgHAKAAAFQAAALAHADQAHAEAmAHIASAEQAcAGAogGQAagEA7gOQBAgPAggFQA9gLAvARQAeALATAUQAIgEALgPIAkgsIgHA4QgFAjASAsQASAsAWAHIApAOIgoAQQgeAMgpAlQgrAnACARQADAUgOAgQgIATgYAoQgfA3gDAQIgDAaIgVgPQgIgEgKgKQgagVgKgBQgNARgbAcIAGgCIgKAeQgBAFgGAJQgIANgNAKQADALALAVQAVgQAaAAIBEAAIg9AeQgPAHADAZQAlgdAogNIAsgPIgaAnQgMASAEAPIBvg7IgSAqQgFALgCAMQgCAOADAHQA7APgCAgQgBASgVANQgVAMgiAEQgZACgsALQgyAMgnAFQhBAIhdAAgAC1iHQgZAOhpBnQARgKANgFQAegMAegeQAcgbAJgYQADgHAAgCgAiCDYIAAAyQAbgXAVAAIAOAAQgFgJgOgHQgLgFgJgCg");
	this.shape_7.setTransform(51.4,43.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AhUGyQh3gMggggQgMgLgVgKIgmgOQgagHgJgFQgQgJgFgLQgFgOAHgOQAOgcA9gHQAlgEAxAEQAegHAOgYIALgSIg6gKIBGgKIAHgLIAAAKIAXgDQAagEATABQADg2gGgMQgHgIgBgHQhTBOgcAGQgkAHgggHQgTgDgHgFIgvgZIA1gGQAzgFAvgkQArgiAMgiQAFgWgBg9IAAgQQgBgtAEgTIgHgBQgWgEgogVIgjgTQgHAWgCAfQgBAcADAbQAGA0gjAmQggAkgsAAQglAAgRgPQgMgJgGgXQgDgMgDgEQgEgEgLgDQgGgBgCABQgHAFgBApQgBAXgCAJQgDANgJAHQgJAHgNgDQgXgHgKgfQgJgbAFghQAGgrAXgZQAYgZAiAAQAbAAAYAMQAOAGATAPQARANAEgBQAFgBACgRIADgqIADg1QABgOAFgNIgXACQgaAHgXAQQgSANgJAMIgUAcIgIghQgShIBihBQBDgtBYgaQABgQAHgLQANgVAfgOQATgKANgCIA0gNIglAnQgIAJgGAKQgHAKAAAFQAAALAHAEQAHADAmAIIASADQAcAGAogGQAagEA7gOQBAgOAggGQA9gLAvARQAeALATAUQAIgEALgPIAkgsIgHA4QgFAjASAsQASAsAWAIIApANIgoAQQgeAMgpAlQgrAnACARQADAVgOAfQgIATgYAoQgfA3gDAQIgDAaIgVgPQgIgEgKgJQgagWgKgBQgNARgbAcIAGgCIgKAeQgBAFgGAJQgIAOgNAKQADAKALAVQAVgQAaAAIBEAAIg9AeQgPAHADAZQAlgdAogNIAsgPIgaAnQgMASAEAQIBvg8IgSAqQgFALgCANQgCAOADAGQA7APgCAgQgBASgVANQgVANgiADQgZADgsAKQgyAMgnAFQhBAJhdAAQgzAAg5gGgAh9EIQAbgXAVAAIAOAAQgFgJgOgHQgLgFgJgCIgXgDgAA4gTQARgLANgFQAegMAegeQAcgbAJgYIADgJQgZAOhpBog");
	this.shape_8.setTransform(50.9,44);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#0D0116").s().p("AlvBjQiYgpAAg6QAAg5CYgpQCYgpDXAAQDYAACXApQCZApAAA5QAAA6iZApQiYApjXAAQjXAAiYgpg");
	this.shape_9.setTransform(53.7,82.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.clipObstaclePoison, rect = new cjs.Rectangle(-1,-1,106.7,97.2), [rect]);


(lib.clipRoche2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// roche2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFA9FD").s().p("AgRASQgHgIAAgKQAAgKAHgHQAHgIAKAAQALAAAHAIQAIAHgBAKQABAKgIAIQgHAHgLAAQgKAAgHgHg");
	this.shape.setTransform(27.3,4.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#ED1DD5").s().p("AAlAdQgTgDgYgLQgYgKgPgLQgPgMACgGQADgHATADQAUADAXALQAYAKAPALQAPAMgCAGQgCAFgKAAIgKgBg");
	this.shape_1.setTransform(32.8,6.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#00071E").ss(1,0,0,4).p("ADQAAQAAAwg9AiQg9AhhWAAQhVAAg9ghQg9giAAgwQAAgvA9giQA9ghBVAAQBWAAA9AhQA9AiAAAvg");
	this.shape_2.setTransform(20.8,11.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#B6149B").s().p("AiSBSQg9gjAAgvQAAgvA9ghQA9giBVAAQBWAAA9AiQA9AhAAAvQAAAvg9AjQg9AhhWAAQhVAAg9ghg");
	this.shape_3.setTransform(20.8,11.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.clipRoche2, rect = new cjs.Rectangle(-1,-1,43.6,25), [rect]);


(lib.clipRoche1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// roche
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFA9FD").s().p("AgRASQgIgIAAgKQAAgKAIgHQAHgIAKAAQALAAAHAIQAHAHAAAKQAAAKgHAIQgHAHgLAAQgKAAgHgHg");
	this.shape.setTransform(27.3,4.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF3EF1").s().p("AAlAdQgTgDgYgLQgYgKgPgLQgPgMACgGQADgHATADQAUADAXAKQAYALAPALQAPAMgCAGQgCAFgKAAIgKgBg");
	this.shape_1.setTransform(32.8,6.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#00071E").ss(1,0,0,4).p("ADQAAQAAAwg9AiQg9AhhWAAQhVAAg9ghQg9giAAgwQAAgvA9giQA9ghBVAAQBWAAA9AhQA9AiAAAvg");
	this.shape_2.setTransform(20.8,11.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#ED1DD5").s().p("AiSBSQg9gjAAgvQAAgvA9ghQA9giBVAAQBWAAA9AiQA9AhAAAvQAAAvg9AjQg9AhhWAAQhVAAg9ghg");
	this.shape_3.setTransform(20.8,11.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.clipRoche1, rect = new cjs.Rectangle(-1,-1,43.6,25), [rect]);


(lib.clipPlante2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// plante2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,0,0,4).p("AG1i1QgxAUhPBWQhJBPhKBtQATi0AGjXQgxAvgzCZQgxCQgXCaQg0iUhkjSQhTiwhdirQgUBHAaCiQAaCYA3CqQhjhyhshwQAAA4A1BxQAxBqBMB0QBOB1BFBIQBNBPAngGQAKADAHAAQAGACAJgBQAHACAFAAQAVgBATgnQBGhKBsjRQBYirBPi6g");
	this.shape.setTransform(43.9,50.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#173842").s().p("AAnHsQgJACgGgDQgIABgJgDQgoAGhNhPQhFhIhOh1QhLh0gyhqQg1hxABg5QBrBxBkByQg4irgZiXQgbiiAUhHQBdCrBUCwQBkDRAzCVQAYiaAwiQQA0iZAwgvQgFDXgUC0QBKhtBKhPQBOhWAxgUQhOC6hZCrQhsDQhFBLQgUAngVABQgEAAgHgDg");
	this.shape_1.setTransform(44,50.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#1BF3E6").ss(2,0,0,4).p("AArIAQgEAAgHgCQgIABgIgCQgGAAgKgCQghAEg3gxQhqheh9jSQiAjXABhfIAAgNIAJAJQBUBXBrB5QgzihgXiOQgbigAVhIIADgLIAGAKQBaCmBSCrQBhDKA1CVQAZiVAuiIQAziWAwgvIAJgIIAAAMQgFC+gSC6QBEhiBDhIQBQhYAzgWIALgEIgFALQhLCzhVCmQhwDahJBOQgUApgYABgAAfH0IADAAQAEACAFAAQATgBASgkIAAgBQBHhMBtjTQBTihBMizQgvAahHBOQhHBNhIBpIgJgDQATiuAFjPQgvA3gwCWQgsCLgWCOIgKABQgziUhhjLQhSithcipQgOBIAZCVQAZCWA3CpIgJAEQhfhthmhrQAJBjB3DIQB4DJBqBdQA0AvAdgEIABgBIABABQAJACAGAAIABAAIABAAQAFACAHgBg");
	this.shape_2.setTransform(44.7,49.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AAvH3IgLgCQgHACgIgCQgGAAgLgCQggADg3gwQhrheh8jSQiAjXABhgIAAgMIAIAJQBUBXBsB5QgzihgYiOQgaigAUhIIADgMIAGALQBbClBRCsQBhDKA1CVQAZiVAviJQAziVAwgvIAIgJIAAANQgEC9gTC7QBEhhBDhJQBQhYAzgWIAMgEIgFALQhMCzhVCmQhwDZhIBPQgUAogZABgAAmHsQAEABAGAAQASAAASgkIABgBQBGhMBtjTQBUihBMizQgwAahHBOQhHBNhHBpIgKgDQATiuAGjPQgvA3gwCWQgtCKgWCPIgKAAQgziThhjMQhRishciqQgPBJAZCVQAZCWA3CoIgIAFQhfhthnhrQAJBiB4DIQB3DKBqBdQA1AvAcgEIABgBIABABQAKACAGAAIAAAAIABAAQAFACAIgBg");
	this.shape_3.setTransform(44.2,50.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#1BF3E6").ss(2,0,0,4).p("AG2ixQgxAUhOBWQhKBPhKBtQAUi0AFjXQgwAvg0CZQgwCQgYCaQgziUhkjSQhUiwhdirQgUBHAbCiQAZCYA4CqQhkhyhrhwQgBA4A1BxQAyBqBLB0QBOB1BFBIQBNBPAogGQAJADAIAAQAGACAJgBQAHACAEAAQAVgBAUgnQBFhKBsjRQBZirBOi6g");
	this.shape_4.setTransform(43.7,49.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#27847A").s().p("AAnHsQgJACgGgDQgIABgJgDQgoAGhNhPQhFhIhOh1QhLh0gyhqQg1hxABg5QBrBxBkByQg4irgZiXQgbiiAUhHQBdCrBUCwQBkDRAzCVQAYiaAwiQQA0iZAwgvQgFDXgUC0QBKhtBKhPQBOhWAxgUQhOC6hZCrQhsDQhFBLQgUAngVABQgEAAgHgDg");
	this.shape_5.setTransform(44,50.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.clipPlante2, rect = new cjs.Rectangle(-1.6,-2.7,92,104.5), [rect]);


(lib.clipPlante1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// plante
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,0,0,4).p("AG1i1QgxAUhPBWQhJBPhKBtQATi0AGjXQgxAvgzCZQgxCQgXCaQg0iUhkjSQhTiwhdirQgUBHAaCiQAaCYA3CqQhjhyhshwQAAA4A1BxQAxBqBMB0QBOB1BFBIQBNBPAngGQAKADAHAAQAGACAJgBQAHACAFAAQAVgBATgnQBGhKBsjRQBYirBPi6g");
	this.shape.setTransform(43.9,50.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#27847A").s().p("AAnHtQgJABgGgCQgIAAgJgDQgoAFhNhPQhFhHhOh2QhLhzgyhqQg1hxABg4QBrBwBkByQg4iqgZiYQgbijAUhHQBdCsBUCwQBkDSAzCUQAYiaAwiQQA0iaAwguQgFDXgUCzQBKhsBKhPQBOhWAxgUQhOC6hZCrQhsDQhFBLQgUAngVABQgEAAgHgCg");
	this.shape_1.setTransform(44,50.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#1BF3E6").ss(2,0,0,4).p("AArIAQgEAAgHgCQgIABgIgCQgGAAgKgCQghAEg3gxQhqheh9jSQiAjXABhfIAAgNIAJAJQBUBXBrB5QgzihgXiOQgbigAVhIIADgLIAGAKQBaCmBSCrQBhDKA1CVQAZiVAuiIQAziWAwgvIAJgIIAAAMQgFC+gSC6QBEhiBDhIQBQhYAzgWIALgEIgFALQhLCzhVCmQhwDahJBOQgUApgYABgAAfH0IADAAQAEACAFAAQATgBASgkIAAgBQBHhMBtjTQBTihBMizQgvAahHBOQhHBNhIBpIgJgDQATiuAFjPQgvA3gwCWQgsCLgWCOIgKABQgziUhhjLQhSithcipQgOBIAZCVQAZCWA3CpIgJAEQhfhthmhrQAJBjB3DIQB4DJBqBdQA0AvAdgEIABgBIABABQAJACAGAAIABAAIABAAQAFACAHgBg");
	this.shape_2.setTransform(44.7,49.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AAvH3IgLgCQgHACgIgDQgGABgLgCQggADg3gwQhrheh8jSQiAjXABhfIAAgNIAIAJQBUBXBsB5QgzihgYiOQgaigAUhIIAEgLIAFAKQBbClBRCrQBhDLA1CVQAZiVAviJQAziVAwgvIAIgIIAAAMQgEC+gTC6QBEhhBDhJQBQhZAzgVIAMgFIgFAMQhMCzhVCmQhwDahIBOQgUAogZABgAAmHrQAEACAGAAQASAAASgkIAAgBQBHhMBtjTQBUiiBMiyQgwAahHBOQhHBNhHBpIgKgDQATivAGjOQgvA3gwCWQgtCLgWCOIgKABQgziUhhjLQhRiuhcioQgPBIAZCVQAZCWA3CpIgIAEQhfhthnhsQAJBjB4DIQB3DKBqBdQA1AuAcgDIABgBIABABQAKACAFAAIACAAIAAAAQAFACAIgCg");
	this.shape_3.setTransform(44.2,50.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#1BF3E6").ss(2,0,0,4).p("AG2ixQgxAUhOBWQhKBPhKBtQAUi0AFjXQgwAvg0CZQgwCQgYCaQgziUhkjSQhUiwhdirQgUBHAbCiQAZCYA4CqQhkhyhrhwQgBA4A1BxQAyBqBLB0QBOB1BFBIQBNBPAogGQAJADAIAAQAGACAJgBQAHACAEAAQAVgBAUgnQBFhKBsjRQBZirBOi6g");
	this.shape_4.setTransform(43.7,49.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#27847A").s().p("AAnHtQgJABgGgCQgIAAgJgDQgoAFhNhPQhFhHhOh2QhLhzgyhqQg1hxABg4QBrBwBkByQg4iqgZiYQgbijAUhHQBdCsBUCwQBkDSAzCUQAYiaAwiQQA0iaAwguQgFDXgUCzQBKhsBKhPQBOhWAxgUQhOC6hZCrQhsDQhFBLQgUAngVABQgEAAgHgCg");
	this.shape_5.setTransform(44,50.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.clipPlante1, rect = new cjs.Rectangle(-1.6,-2.7,92,104.5), [rect]);


(lib.clipLianes2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// lianes2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#00071E").p("AMCg7QAih3ALiKIADhyIheADIgEBBQgHBPgPBOQgvD4hpCIQgFgXg4gQQg4gRgYASQAaAkAcAVQAeAXAWgDQhkBliIAAQjsAAi8jJQAWABAXAAQFjAAEDkSQCCiJA6iKIhyADQhBB6h2B6QjtDykMAAQgwAAg0gGQhqiGhOi8QgYg6gTg6IgOgtIhgAAIA5CWQBOCwBkCJQjrg/ivjOQg3hBgqhHIggg6IhgAAIAiA9QAvBLA6BFQgdADgkAYQgmAZgEAYQA4AJAmgKQArgLAAgfQBlBtB0BJQCRBZCjAcQBPBdBXA9QgzAPg4A2Qg7A5ACAsQBrgDBBghQBIglgUg7QCNBQCbAAQDAAACBh7QBnhjA6isQABAMAHAMQANAeBPgmQBQglAIgsQg5gKguAEQgyAFgWAWg");
	this.shape.setTransform(94.2,43.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#173842").s().p("Ai9FKQA4g2AzgPQhXg9hPhdQijgciRhZQh1hJhkhtQAAAfgrALQgmAKg4gJQADgYAmgZQAlgYAdgDQg7hFguhLIgig9IBgAAIAfA6QArBHA3BBQCvDODrA/QhliJhNiwIg6iWIBhAAIAOAtQASA6AZA6QBOC8BqCGQAzAGAxAAQELAADtjyQB3h6BBh6IBygDQg7CKiBCJQkDESljAAQgXAAgWgBQC8DJDrAAQCJAABkhlQgWADgfgXQgbgVgbgkQAZgSA4ARQA4AQAEAXQBqiIAvj4QAPhOAGhPIAFhBIBegDIgEByQgKCKgiB3QAVgWAygFQAugEA5AKQgHAshQAlQhQAmgNgeQgGgMgCgMQg5CshnBjQiBB7jBAAQibAAiMhQQAUA7hJAlQhAAhhsADQgBgsA7g5g");
	this.shape_1.setTransform(94.4,43.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#00FFFF").ss(3).p("AMFg7QAih3ALiKIADhyIheADIgEBBQgHBPgPBOQgvD4hpCIQgFgXg4gQQg4gRgYASQAaAkAcAVQAeAXAWgDQhkBliIAAQjsAAi8jJQAWABAXAAQFjAAEDkSQCCiJA6iKIhyADQhBB6h2B6QjtDykMAAQgwAAg0gGQhqiGhOi8QgYg6gTg6IgOgtIhgAAIA5CWQBOCwBkCJQjrg/ivjOQg3hBgqhHIggg6IhgAAIAiA9QAvBLA6BFQgdADgkAYQgmAZgEAYQA4AJAmgKQArgLAAgfQBlBtB0BJQCRBZCjAcQBPBdBXA9QgzAPg4A2Qg7A5ACAsQBrgDBBghQBHglgTg7QCNBQCbAAQDAAACBh7QBnhjA6isQABAMAHAMQANAeBPgmQBQglAIgsQg5gKguAEQgyAFgWAWg");
	this.shape_2.setTransform(93.9,43.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#1BF3E6").s().p("Ai9FKQA4g2AzgPQhXg9hPhdQijgciRhZQh1hJhkhtQAAAfgrALQgmAKg4gJQADgYAmgZQAlgYAdgDQg7hFguhLIgig9IBgAAIAfA6QArBHA3BBQCvDODrA/QhliJhNiwIg6iWIBhAAIAOAtQASA6AZA6QBOC8BqCGQAzAGAxAAQELAADtjyQB3h6BBh6IBygDQg7CKiBCJQkDESljAAQgXAAgWgBQC8DJDrAAQCJAABkhlQgWADgfgXQgbgVgbgkQAZgSA4ARQA4AQAEAXQBqiIAvj4QAPhOAGhPIAFhBIBegDIgEByQgKCKgiB3QAVgWAygFQAugEA5AKQgHAshQAlQhQAmgNgeQgGgMgCgMQg5CshnBjQiBB7jBAAQibAAiMhQQAUA7hJAlQhAAhhsADQgBgsA7g5g");
	this.shape_3.setTransform(94.4,43.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.clipLianes2, rect = new cjs.Rectangle(-2.5,-10.2,193,97.9), [rect]);


(lib.clipLianes1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// lianes
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#00071E").p("AMCg7QAih3ALiKIADhyIheADIgEBBQgHBPgPBOQgvD4hpCIQgFgXg4gQQg4gRgYASQAaAkAcAVQAeAXAWgDQhkBliIAAQjsAAi8jJQAWABAXAAQFjAAEDkSQCCiJA6iKIhyADQhBB6h2B6QjtDykMAAQgwAAg0gGQhqiGhOi8QgYg6gTg6IgOgtIhgAAIA5CWQBOCwBkCJQjrg/ivjOQg3hBgqhHIggg6IhgAAIAiA9QAvBLA6BFQgdADgkAYQgmAZgEAYQA4AJAmgKQArgLAAgfQBlBtB0BJQCRBZCjAcQBPBdBXA9QgzAPg4A2Qg7A5ACAsQBrgDBBghQBIglgUg7QCNBQCbAAQDAAACBh7QBnhjA6isQABAMAHAMQANAeBPgmQBQglAIgsQg5gKguAEQgyAFgWAWg");
	this.shape.setTransform(94.2,43.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#27847A").s().p("Ai9FKQA4g2AzgPQhXg9hPhdQijgciShZQh0hJhkhtQAAAfgrALQgmAKg4gJQADgYAngZQAjgYAegDQg7hFguhLIgig9IBgAAIAgA6QApBHA4BBQCvDODrA/QhliJhNiwIg6iWIBhAAIAOAtQASA6AZA6QBOC8BpCGQA0AGAxAAQELAADujyQB2h6BBh6IBygDQg6CKiCCJQkDESljAAQgXAAgWgBQC8DJDsAAQCIAABkhlQgXADgegXQgbgVgbgkQAYgSA5ARQA4AQAFAXQBpiIAvj4QAPhOAGhPIAFhBIBegDIgDByQgLCKgiB3QAWgWAygFQAtgEA5AKQgHAshQAlQhQAmgNgeQgGgMgCgMQg5CshnBjQiBB7jAAAQicAAiMhQQAUA7hJAlQhAAhhrADQgDgsA8g5g");
	this.shape_1.setTransform(94.4,43.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#00FFFF").ss(3).p("AMFg7QAih3ALiKIADhyIheADIgEBBQgHBPgPBOQgvD4hpCIQgFgXg4gQQg4gRgYASQAaAkAcAVQAeAXAWgDQhkBliIAAQjsAAi8jJQAWABAXAAQFjAAEDkSQCCiJA6iKIhyADQhBB6h2B6QjtDykMAAQgwAAg0gGQhqiGhOi8QgYg6gTg6IgOgtIhgAAIA5CWQBOCwBkCJQjrg/ivjOQg3hBgqhHIggg6IhgAAIAiA9QAvBLA6BFQgdADgkAYQgmAZgEAYQA4AJAmgKQArgLAAgfQBlBtB0BJQCRBZCjAcQBPBdBXA9QgzAPg4A2Qg7A5ACAsQBrgDBBghQBHglgTg7QCNBQCbAAQDAAACBh7QBnhjA6isQABAMAHAMQANAeBPgmQBQglAIgsQg5gKguAEQgyAFgWAWg");
	this.shape_2.setTransform(93.9,43.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#1BF3E6").s().p("Ai9FKQA4g2AzgPQhXg9hPhdQijgciShZQh0hJhkhtQAAAfgrALQgmAKg4gJQADgYAngZQAjgYAegDQg7hFguhLIgig9IBgAAIAgA6QApBHA4BBQCvDODrA/QhliJhNiwIg6iWIBhAAIAOAtQASA6AZA6QBOC8BpCGQA0AGAxAAQELAADujyQB2h6BBh6IBygDQg6CKiCCJQkDESljAAQgXAAgWgBQC8DJDsAAQCIAABkhlQgXADgegXQgbgVgbgkQAYgSA5ARQA4AQAFAXQBpiIAvj4QAPhOAGhPIAFhBIBegDIgDByQgLCKgiB3QAWgWAygFQAtgEA5AKQgHAshQAlQhQAmgNgeQgGgMgCgMQg5CshnBjQiBB7jAAAQicAAiMhQQAUA7hJAlQhAAhhrADQgDgsA8g5g");
	this.shape_3.setTransform(94.4,43.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.clipLianes1, rect = new cjs.Rectangle(-2.5,-10.2,193,97.9), [rect]);


(lib.ClipDecorFixe = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{decorFixe1:0,decorFixe2:1});

	// decorArrierePlan
	this.instance = new lib.decorFixe1();
	this.instance.parent = this;

	this.instance_1 = new lib.decorFixe2();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,800,233);
p.frameBounds = [rect, new cjs.Rectangle(0,0,800,232)];


(lib.ClipProjectile = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#00071E").p("Ag1gMQgJAJAAADQAAACAJAJQAIAHAtgPQAWgGAVgJg");
	this.shape.setTransform(6.8,1.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF3EF1").s().p("AgrALQgJgJAAgCQAAgDAJgJIBgAAQgVAJgXAGQgdAKgOAAQgGAAgDgCg");
	this.shape_1.setTransform(5.8,1.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#1BF3E6").p("Ag1ASQgJAAgEgEQgKgKAAgEQAAgFAKgLIACgBIB6AAIgWAJQhAAagZAAgAg8gHQgGAGAAABQAAAAAHAHQAHAHA8gVg");
	this.shape_2.setTransform(7.7,1.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#00071E").s().p("Ag4AOQgLgKABgEQgBgFALgLIABgBIB7AAIgXAJQg/AagZAAQgJAAgEgEgAg4AAIAHAHQAHAHA8gVIhFAAIgFAHg");
	this.shape_3.setTransform(6.8,1.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#1BF3E6").p("Ag1gMQgJAJAAADQAAACAJAJQAIAHAtgPQAWgGAVgJg");
	this.shape_4.setTransform(6.8,1.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FF3EF1").s().p("AgrALQgJgJAAgCQAAgDAJgJIBgAAQgVAJgXAGQgdAKgOAAQgGAAgDgCg");
	this.shape_5.setTransform(5.8,1.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipProjectile, rect = new cjs.Rectangle(-1,-1,16.8,5.7), [rect]);


(lib.clipPoint = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgYAZQgKgLAAgOQAAgOAKgKQALgKANAAQAOAAAKAKQALAKAAAOQAAAOgLALQgKAKgOAAQgNAAgLgKg");
	this.shape.setTransform(3.1,2.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.clipPoint, rect = new cjs.Rectangle(-0.4,-0.9,7,7), [rect]);


(lib.clipAvatarMort = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#00071E").p("Ag1gMQgJAJAAADQAAACAJAJQAIAHAtgPQAWgGAVgJg");
	this.shape.setTransform(13.3,33.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF3EF1").s().p("AgrALQgJgJAAgCQAAgDAJgJIBgAAQgVAJgXAGQgdAKgOAAQgHAAgCgCg");
	this.shape_1.setTransform(12.4,33.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#1BF3E6").p("Ag1ASQgJAAgEgEQgKgKAAgEQAAgFAKgLIACgBIB6AAIgWAJQhAAagZAAgAg8gHQgGAGAAABQAAAAAHAHQAHAHA8gVg");
	this.shape_2.setTransform(14.3,33.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#00071E").s().p("Ag4AOQgLgKAAgEQAAgFALgLIACgBIB5AAIgWAJQg/AagZAAQgJAAgEgEgAg4AAIAHAHQAHAHA8gVIhFAAIgFAHg");
	this.shape_3.setTransform(13.3,33.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#1BF3E6").p("Ag1gMQgJAJAAADQAAACAJAJQAIAHAtgPQAWgGAVgJg");
	this.shape_4.setTransform(13.3,33.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FF3EF1").s().p("AgrALQgJgJAAgCQAAgDAJgJIBgAAQgVAJgXAGQgdAKgOAAQgHAAgCgCg");
	this.shape_5.setTransform(12.4,33.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#B6149B").s().p("AgsATQABg7gCgLQgDgeAVgTQATgQAWABQATAAAIALQAGAKgBAWQAAARgQAMIgRAJIgBAlQABAtAKAeIgfgwIgMBJIgMgxIgKA+QgDghABhAg");
	this.shape_6.setTransform(4.6,41.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#6EFFF1").s().p("AgVCXQgVgLgChlQAChtgDgWQgDgeAVgSQATgQAWAAQATAAAIAMQAGAKgBAWQAAARgQAMIgRAIIgBAnQABArAKAfIAPAxQAHAqgVATQgLAJgNAAQgKAAgLgGg");
	this.shape_7.setTransform(4.6,45.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#B6149B").s().p("Ag3AIIALgHQANgGALgCIBLgPIhmAtg");
	this.shape_8.setTransform(54.7,26.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#B6149B").s().p("AhAgfIBaAZQATAFAUAPIgKASg");
	this.shape_9.setTransform(36.8,24.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#00071E").p("AAjgQQgIARgJAGQgPAMgpgI");
	this.shape_10.setTransform(55,30);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#00071E").p("AgqgZQAPAbAEAEQAUASAyAA");
	this.shape_11.setTransform(36.1,28.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#3C9096").s().p("AAAAFQgPgCABgEQAAgCAFgBQAEgBAGABQAPACgBAEQAAACgFABIgFAAIgFAAg");
	this.shape_12.setTransform(45.8,37);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#B6149B").s().p("AggAHIgWgWQAQgHAYADQAMABAIADQAeAAAMAGQAGADABADQgEAFgHAHQgPAMgXAAQgWAAgQgOg");
	this.shape_13.setTransform(44.9,40.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#220135").p("AhCgHICBAVQCLAQAuglQgjhogrguQg/hEhwAAQhtAAhBBVQgnAygRBHQgMAvAABVQAkAYCdBVg");
	this.shape_14.setTransform(36.4,23.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#5D0093").s().p("Aj3BzQAAhVAMgvQARhHAngyQBBhVBtAAQBxAAA+BEQAsAuAiBoQguAliKgQIiCgVIAMDlQidhVgkgYg");
	this.shape_15.setTransform(36.4,23);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#6EFFF1").p("AjyBsQAxAfCEBGIgMjiIAIACQABAAB8AVQCGAPAuggQgihmgrgtQg8g/htAAQhmAAg/BOQgpAygSBJQgMAvAABRgAgwDmIgJgFQiehVgkgYIgDgCIAAgDQAAhWAMgwQAUhMAqg1QBChRBsAAQBzAABABFQAsAvAkBqIABAEIgDACQgrAjh6gJQhGgFhMgRg");
	this.shape_16.setTransform(36.5,23.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#220135").s().p("Ag5DjQiehVgkgYIgCgCIAAgDQgBhWAMgwQAUhMAqg1QBChRBsAAQBzAABABFQAtAvAjBqIABAEIgDACQgqAjh6gJQhHgFhMgSIANDogAiriNQgoAygTBJQgMAvAABRQAxAfCEBGIgMjiIAJACIB9AVQCFAPAvggQgjhmgrgtQg8g/htAAQhmAAg/BOg");
	this.shape_17.setTransform(36.5,23.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#6EFFF1").p("AhCgHICBAVQCLAQAuglQgjhogrguQg/hEhwAAQhtAAhBBVQgnAygRBHQgMAvAABVQAkAYCdBVg");
	this.shape_18.setTransform(36.4,23.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#5D0093").s().p("Aj3BzQAAhVAMgvQARhHAngyQBBhVBtAAQBxAAA+BEQAsAuAiBoQguAliKgQIiCgVIAMDlQidhVgkgYg");
	this.shape_19.setTransform(36.4,23);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#ED1DD5").s().p("AgXAMIgMgvIBHBHg");
	this.shape_20.setTransform(32.8,32.7);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#ED1DD5").s().p("AgXAMIgMgvIBHBHg");
	this.shape_21.setTransform(32.8,37.5);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#6EFFF1").s().p("AgXB4IhzgeQgGiiAAgxQBfAYBjADQAhABASgDQAOgCAegLQAAAxgMAkQgOApgjArQgcAjgMAKQgWARgbAAIgSgCg");
	this.shape_22.setTransform(44.3,34.6);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#220135").p("AAfh0IABADQAAACAAACIAYDeIhsgYIAvg+QAqhHgFhB");
	this.shape_23.setTransform(55.6,34.1);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#5D0093").s().p("Ag1BXIAvg+QAphHgEhAIAYDdg");
	this.shape_24.setTransform(55.8,34.3);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#1BF3E6").p("ABCB2Ih/gcIAHgIQABAAAtg9QArhIgGhBIgBgCIAMgBIABACgAgmBTIBaAUIgQiZQgSBFg4BAg");
	this.shape_25.setTransform(55.3,34.3);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#220135").s().p("Ag/BbIAIgIIAug9QArhIgHhBIAAgCIALgBIABACIAZDrgAgoBTIBaAVIgQiaQgSBGg4A/g");
	this.shape_26.setTransform(55.5,34.3);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#1BF3E6").p("AAfh1IABAIIAYDdIhsgYIAvg+QAqhHgFhA");
	this.shape_27.setTransform(55.6,34.2);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#5D0093").s().p("Ag1BXIAvg+QAphHgEhAIAYDdg");
	this.shape_28.setTransform(55.8,34.3);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#B6149B").s().p("AAhA+QgTgEgDgHQgDgFAAgUQgGgGhNgmIAqACIgkgYIA8AMIhIgkIA2AEIA7AuQAgALAFAFQAUATgLAZQgIATgVAAQgHAAgJgDg");
	this.shape_29.setTransform(64,80.3);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#6EFFF1").s().p("AA7BPQgSgEgEgHQgCgFAAgUQgGgGg8geQg8gegGgGQgTgSAOgTQAOgUAbAJQAZAIAWAQQAIAFBAAyQAhALAEAGQAUATgKAZQgIASgWAAQgHAAgJgCg");
	this.shape_30.setTransform(61.3,78.6);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#6EFFF1").s().p("AiAAwQgOgUAOgXQARgZAsAEIB2gUQApgZAYANQAUAKAAAZQAAAUgQAMQgRAMgfgCIhkARQgwAIgaAAQgVAAgFgGg");
	this.shape_31.setTransform(15.3,56.2);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#B6149B").s().p("AAQCdQgugEgagSQgXgPAFgPQAMgSAGgMIAKhiQAJhVAdgWQAagbAdAAQAdAAAAAbQAAARgpBrQglBjAFAGIAYAWQAQAQAJAKQAJALgaAAIgTgBg");
	this.shape_32.setTransform(24.6,127.5);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#333333").s().p("AgFAJQgCgEAAgFQAAgEACgEQADgDACAAQADAAADADQACAEAAAEQAAAFgCAEQgDADgDAAQgCAAgDgDg");
	this.shape_33.setTransform(22.7,91.2);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#999999").s().p("AgHAAQAAgEACgDQACgEADAAQADAAACAEQADADAAAEQAAAMgIAAQgHAAAAgMg");
	this.shape_34.setTransform(23.9,95.6);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#999999").s().p("AgKARQgFgHAAgKQAAgJAFgHQAFgHAFAAQAHAAAEAHQAFAHAAAJQAAAKgFAHQgEAHgHAAQgGAAgEgHg");
	this.shape_35.setTransform(23.5,90.8);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#B6149B").s().p("AgsCGQgujxAigmQATgWAqANQAzAOAMBDQAMBBgaBQQgMApgPAcQgQAMgPAEQgIADgGAAQgVAAgFgag");
	this.shape_36.setTransform(29.6,100.6);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#00071E").s().p("AhrgMIASgLQAVgLAQAAQAKAAAVAGQAVAGATAAQAPAAApgKQAegIACAIQADALgGASQgFASgNAQQgrgSgYAAQghAAhLAYg");
	this.shape_37.setTransform(34.5,62.8);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#2C6A72").s().p("AhtApIAWgEQAXgKAHgdQAIgfgMgPIgOgJQAPgFAQgBQAGgHAHgcIBDANQgDAcAGAGQAMAMAlAMIASAlQAMAtgeAmQglgYgYAAQgPAAgyAPIgxAPQgJgcgNgeg");
	this.shape_38.setTransform(34.3,56.6);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#B6149B").s().p("AhpBYQgLgOgFgVIgDgRQAAgQAVgwQAVgwAAgaIAHAuQATAzA1AdIgdgmQgUgcAAgeQAOAVAXAOQAbASAIAIQgIgPgOgYIgOgWQAKAHAjASQAUAJAHAOIgYgwIAUAOQAVAPAHAIQgHgQgGghIgFgeQAGAMAjAuQAeArgKATQgSAiggAcQgeAZgdAKQghAMgZAAQgnAAgWgbg");
	this.shape_39.setTransform(35.6,84.7);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#6EFFF1").s().p("AhkD1QgLgOgGgUIgDgRQAAgRAVgwQAVgwAAgaQAAgfgYhBIgYg9QgDgGAAgKQAAgVAPgXQAIgNAbgHQAOgDAMgBQAMgMAMhJIBBASIgHAjQgGAkAHAIQAMAMAlAMIASAmQAMAtgeAmQgNAPgEASQgEAWAJARQAGAMAjAtQAdAsgKAUQgRAighAcQgeAZgdAJQggAMgaAAQgmAAgWgbg");
	this.shape_40.setTransform(35.2,69);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#6EFFF1").s().p("AApBuQgcgOhEhqQgPgXgFgQQgEgOAAgUQAAgSAPgIQAPgHASAJQAQAIAMAWQAIASAAAMQAAAHAgAqQAjAxAFAKQAJAbgNAQQgIAJgLAAQgGAAgHgDg");
	this.shape_41.setTransform(47.4,64.7);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#89127B").s().p("AAQCbQgUgXgXgjQgthIgJhAQgJhDAoggQAdgYAgADQATACAcB5QAcB0gDAsQgDAighACg");
	this.shape_42.setTransform(46.2,98.3);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#999999").s().p("AgEAJQgDgEAAgFQgBgEADgDQACgEADAAQAHAAABALQAAAMgHAAIgBAAQgCAAgCgDg");
	this.shape_43.setTransform(51.9,94.4);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#999999").s().p("AgFAUQgGgFgDgKQgDgJACgIQACgIAHgCQAGgCAGAFQAGAGADAJQADAJgCAIQgCAIgHACIgEABQgDAAgFgEg");
	this.shape_44.setTransform(51.2,89.6);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#89127B").s().p("AgsCVQgagLADgPQAJgUADgNIgGhiQgHhWAZgaQAWggAcgFQAcgFAFAbQADARgWBwQgUBoAHAFIA4AnQAQALgwAEIgYABQgfAAgVgJg");
	this.shape_45.setTransform(50,125.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.clipAvatarMort, rect = new cjs.Rectangle(0,-1,72.2,144.3), [rect]);


(lib.bas = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{fixe:0,marche:1});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_24 = function() {
		this.gotoAndPlay("marche");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(24).call(this.frame_24).wait(1));

	// jambe_droite
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#B6149B").s().p("AAQCdQgugEgagSQgXgPAFgPQAMgSAGgMIAKhiQAJhVAdgWQAagbAdAAQAdAAAAAbQAAARgpBrQglBjAFAGIAYAWQAQAQAJAKQAJALgaAAIgTgBg");
	this.shape.setTransform(25.1,32.6,1,1,-1.3,0,0,3.9,-11.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1).to({regX:0,regY:0,rotation:-33,x:38.3,y:42.1},0).wait(3).to({rotation:5.2,x:13.8,y:45.3},0).wait(3).to({regX:4.5,regY:-11.3,rotation:31.9,x:14.3,y:33.2},0).wait(3).to({regX:4.6,regY:-11.4,rotation:-3.6,x:38.4,y:28.7},0).wait(3).to({regX:0,regY:0,rotation:-33,x:38.3,y:42.1},0).wait(3).to({rotation:5.2,x:13.8,y:45.3},0).wait(3).to({regX:4.5,regY:-11.3,rotation:31.9,x:14.3,y:33.2},0).wait(3).to({regX:4.6,regY:-11.4,rotation:-3.6,x:38.4,y:28.7},0).wait(3));

	// cuisse_droite
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().p("AgFAJQgCgEAAgFQAAgEACgEQADgDACAAQADAAADADQACAEAAAEQAAAFgCAEQgDADgDAAQgCAAgDgDg");
	this.shape_1.setTransform(17,10.4,1,1,-4.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#999999").s().p("AgHAAQAAgEACgEQACgDADAAQAEAAABADQADAEAAAEQAAAMgIAAQgHAAAAgMg");
	this.shape_2.setTransform(18.5,14.7,1,1,-4.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#999999").s().p("AgKARQgFgHAAgKQAAgJAFgHQAFgHAFAAQAHAAAEAHQAFAHAAAJQAAAKgFAHQgEAHgHAAQgGAAgEgHg");
	this.shape_3.setTransform(17.7,10,1,1,-4.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#B6149B").s().p("AgsCGQgujxAigmQATgWAqANQAzAOAMBDQAMBBgaBQQgMApgPAcQgQAMgPAEQgIADgGAAQgVAAgFgag");
	this.shape_4.setTransform(24.2,28.1,1,1,-4.3,0,0,-1.2,11.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4,p:{rotation:-4.3,x:24.2,y:28.1,regX:-1.2,regY:11.2}},{t:this.shape_3,p:{rotation:-4.3,x:17.7,y:10}},{t:this.shape_2,p:{rotation:-4.3,x:18.5,y:14.7}},{t:this.shape_1,p:{rotation:-4.3,x:17,y:10.4}}]}).to({state:[{t:this.shape_4,p:{rotation:-28,x:33,y:26.8,regX:-1.2,regY:11.2}},{t:this.shape_3,p:{rotation:-28,x:18.8,y:10.6}},{t:this.shape_2,p:{rotation:-28,x:21.4,y:14.7}},{t:this.shape_1,p:{rotation:-28,x:18.3,y:11.4}}]},1).to({state:[{t:this.shape_4,p:{rotation:5.2,x:21.2,y:19,regX:0,regY:0}},{t:this.shape_3,p:{rotation:5.2,x:16.2,y:10.4}},{t:this.shape_2,p:{rotation:5.2,x:16.2,y:15.3}},{t:this.shape_1,p:{rotation:5.2,x:15.4,y:10.8}}]},3).to({state:[{t:this.shape_4,p:{rotation:16.9,x:19.3,y:18.4,regX:0,regY:0}},{t:this.shape_3,p:{rotation:16.9,x:15.1,y:9.8}},{t:this.shape_2,p:{rotation:16.9,x:14.1,y:14.5}},{t:this.shape_1,p:{rotation:16.9,x:14.2,y:10}}]},3).to({state:[{t:this.shape_4,p:{rotation:-36.3,x:30.4,y:16.1,regX:0,regY:0}},{t:this.shape_3,p:{rotation:-36.3,x:19.7,y:11.8}},{t:this.shape_2,p:{rotation:-36.3,x:22.9,y:15.4}},{t:this.shape_1,p:{rotation:-36.3,x:19.3,y:12.6}}]},3).to({state:[{t:this.shape_4,p:{rotation:-28,x:33,y:26.8,regX:-1.2,regY:11.2}},{t:this.shape_3,p:{rotation:-28,x:18.8,y:10.6}},{t:this.shape_2,p:{rotation:-28,x:21.4,y:14.7}},{t:this.shape_1,p:{rotation:-28,x:18.3,y:11.4}}]},3).to({state:[{t:this.shape_4,p:{rotation:5.2,x:21.2,y:19,regX:0,regY:0}},{t:this.shape_3,p:{rotation:5.2,x:16.2,y:10.4}},{t:this.shape_2,p:{rotation:5.2,x:16.2,y:15.3}},{t:this.shape_1,p:{rotation:5.2,x:15.4,y:10.8}}]},3).to({state:[{t:this.shape_4,p:{rotation:16.9,x:19.3,y:18.4,regX:0,regY:0}},{t:this.shape_3,p:{rotation:16.9,x:15.1,y:9.8}},{t:this.shape_2,p:{rotation:16.9,x:14.1,y:14.5}},{t:this.shape_1,p:{rotation:16.9,x:14.2,y:10}}]},3).to({state:[{t:this.shape_4,p:{rotation:-36.3,x:30.4,y:16.1,regX:0,regY:0}},{t:this.shape_3,p:{rotation:-36.3,x:19.7,y:11.8}},{t:this.shape_2,p:{rotation:-36.3,x:22.9,y:15.4}},{t:this.shape_1,p:{rotation:-36.3,x:19.3,y:12.6}}]},3).wait(3));

	// cuisse_gauche
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#89127B").s().p("AAQCbQgUgXgXgjQgthIgJhAQgJhDAoggQAdgYAgADQATACAcB5QAcB0gDAsQgDAighACg");
	this.shape_5.setTransform(40.1,16,1,1,-5.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#999999").s().p("AgEAJQgDgEAAgFQgBgEADgDQACgEADAAQAHAAABALQAAAMgHAAIgBAAQgCAAgCgDg");
	this.shape_6.setTransform(45.5,11.6,1,1,-5.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#999999").s().p("AgFAUQgGgFgDgKQgDgJACgIQACgIAHgCQAGgCAGAFQAGAGADAJQADAJgCAIQgCAIgHACIgEABQgDAAgFgEg");
	this.shape_7.setTransform(44.3,6.9,1,1,-5.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7,p:{rotation:-5.5,x:44.3,y:6.9}},{t:this.shape_6,p:{rotation:-5.5,x:45.5,y:11.6}},{t:this.shape_5,p:{rotation:-5.5,x:40.1,y:16}}]}).to({state:[{t:this.shape_7,p:{rotation:30,x:40.6,y:10.5}},{t:this.shape_6,p:{rotation:30,x:38.8,y:15}},{t:this.shape_5,p:{rotation:30,x:31.9,y:15.6}}]},1).to({state:[{t:this.shape_7,p:{rotation:-0.2,x:44.7,y:8.3}},{t:this.shape_6,p:{rotation:-0.2,x:45.5,y:13.1}},{t:this.shape_5,p:{rotation:-0.2,x:39.2,y:14.9}}]},3).to({state:[{t:this.shape_7,p:{rotation:3.5,x:44.4,y:8.5}},{t:this.shape_6,p:{rotation:3.5,x:44.8,y:13.3}},{t:this.shape_5,p:{rotation:3.5,x:38.4,y:15.4}}]},3).to({state:[{t:this.shape_7,p:{rotation:33.3,x:39,y:10.4}},{t:this.shape_6,p:{rotation:33.3,x:37,y:14.8}},{t:this.shape_5,p:{rotation:33.3,x:30.1,y:14.9}}]},3).to({state:[{t:this.shape_7,p:{rotation:30,x:40.6,y:10.5}},{t:this.shape_6,p:{rotation:30,x:38.8,y:15}},{t:this.shape_5,p:{rotation:30,x:31.9,y:15.6}}]},3).to({state:[{t:this.shape_7,p:{rotation:-0.2,x:44.7,y:8.3}},{t:this.shape_6,p:{rotation:-0.2,x:45.5,y:13.1}},{t:this.shape_5,p:{rotation:-0.2,x:39.2,y:14.9}}]},3).to({state:[{t:this.shape_7,p:{rotation:3.5,x:44.4,y:8.5}},{t:this.shape_6,p:{rotation:3.5,x:44.8,y:13.3}},{t:this.shape_5,p:{rotation:3.5,x:38.4,y:15.4}}]},3).to({state:[{t:this.shape_7,p:{rotation:33.3,x:39,y:10.4}},{t:this.shape_6,p:{rotation:33.3,x:37,y:14.8}},{t:this.shape_5,p:{rotation:33.3,x:30.1,y:14.9}}]},3).wait(3));

	// jambe_gauche
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#89127B").s().p("AgsCVQgagLADgPQAJgUADgNIgGhiQgHhWAZgaQAWggAcgFQAcgFAFAbQADARgWBwQgUBoAHAFIA4AnQAQALgwAEIgYABQgfAAgVgJg");
	this.shape_8.setTransform(46.4,31.5,1,1,-3,0,0,1,-11.3);

	this.timeline.addTween(cjs.Tween.get(this.shape_8).wait(1).to({rotation:32.5,x:28,y:31.9},0).wait(3).to({regX:1.1,regY:-11.4,rotation:23.8,x:43.7,y:30.8},0).wait(3).to({regX:1,regY:-11.3,rotation:-31.7,x:44.1,y:31.4},0).wait(3).to({rotation:29,x:26.4,y:31.7},0).wait(3).to({rotation:32.5,x:28,y:31.9},0).wait(3).to({regX:1.1,regY:-11.4,rotation:23.8,x:43.7,y:30.8},0).wait(3).to({regX:1,regY:-11.3,rotation:-31.7,x:44.1,y:31.4},0).wait(3).to({rotation:29,x:26.4,y:31.7},0).wait(3));

	// ombre_avatar
	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#0D0116").s().p("Ai+BGQhPgdAAgpQAAgpBPgdQBPgdBvAAQBwAABPAdQBPAdAAApQAAAphPAdQhPAehwAAQhvAAhPgeg");
	this.shape_9.setTransform(27,61.3);

	this.timeline.addTween(cjs.Tween.get(this.shape_9).wait(25));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0.1,54,71.2);
p.frameBounds = [rect, rect=new cjs.Rectangle(0,0.9,54,70.4), rect, rect, rect=new cjs.Rectangle(0,-1,54,72.3), rect, rect, rect=new cjs.Rectangle(-8,-0.6,70.9,71.9), rect, rect, rect=new cjs.Rectangle(0,0.5,54,70.8), rect, rect, rect=new cjs.Rectangle(0,0.9,54,70.4), rect, rect, rect=new cjs.Rectangle(0,-1,54,72.3), rect, rect, rect=new cjs.Rectangle(-8,-0.6,70.9,71.9), rect, rect, rect=new cjs.Rectangle(0,0.5,54,70.8), rect, rect];


(lib.clipTete = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF3EF1").s().p("AAUAWQgJgCgLgIQgMgJgIgIQgIgJAAgFQABgFAIACQAJADALAIQAMAJAIAIQAJAJgBAFQgBADgEAAIgEgBg");
	this.shape.setTransform(5,15.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF3EF1").s().p("AgcAVQAAgFAIgKQAIgIAMgJQAKgJAJgCQAJgDABAFQABAFgJAJQgIAJgMAJQgKAIgJADIgFABQgEAAgBgDg");
	this.shape_1.setTransform(23,15.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#00071E").p("AClAAQAABAgwAuQgxAthEAAQhDAAgxgtQgwguAAhAQAAhAAwgtQAxgtBDAAQBEAAAxAtQAwAtAABAg");
	this.shape_2.setTransform(17,16);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#1E367E").s().p("Ah0BuQgwguAAhAQAAhAAwgsQAxguBDAAQBEAAAwAuQAxAsAABAQAABAgxAuQgwAthEAAQhDAAgxgtg");
	this.shape_3.setTransform(17,16);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#1BF3E6").ss(2).p("AAACgQhGAAgxgvQgygvAAhCQAAhBAygvQAxgvBGAAQBGAAAyAvQAyAvAABBQAABCgyAvQgyAvhGAAgAAAiVQhCAAguAsQgvAsAAA9QAAA+AvAsQAuAsBCAAQBCAAAvgsQAvgsAAg+QAAg9gvgsQgvgshCAAg");
	this.shape_4.setTransform(17,16);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#00071E").s().p("Ah3BxQgygvAAhCQAAhCAyguQAygvBFAAQBGAAAyAvQAyAuAABCQAABCgyAvQgyAvhGAAQhFAAgygvgAhwhpQgvAsAAA9QAAA+AvAsQAuAsBCAAQBCAAAvgsQAvgsAAg+QAAg9gvgsQgvgshCAAQhCAAguAsg");
	this.shape_5.setTransform(17,16);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#1BF3E6").ss(2).p("AClAAQAABAgwAuQgxAthEAAQhDAAgxgtQgwguAAhAQAAhAAwgtQAxgtBDAAQBEAAAxAtQAwAtAABAg");
	this.shape_6.setTransform(17,16);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#1E367E").s().p("Ah0BuQgwguAAhAQAAhAAwgsQAxguBDAAQBEAAAwAuQAxAsAABAQAABAgxAuQgwAthEAAQhDAAgxgtg");
	this.shape_7.setTransform(17,16);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.clipTete, rect = new cjs.Rectangle(-2.9,-1,39.5,35.6), [rect]);


(lib.clipPatteAvantGauche = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#00071E").p("Ag7j5QgQASgOCYQgPCjgKAaQgLAagtArQgkAiAEAbQAFAgAiAMQARAGAQAAQgEgUAFgVQAKgqAsgHQAhAyAoAYQAsAbAhgVQgWgVgDgaQgDgYANgJQANAbA6ACQA9ACALgpQgjgRgUgdQgZgjAAgxQAAhegHhWQgKiEgXgRQgfgXglADQgnAEgjAkg");
	this.shape.setTransform(20.8,29.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#27847A").s().p("AijEcQgigMgFggQgEgbAkgiQAtgrALgaQAKgaAPijQAOiYAQgSQAjgkAngEQAlgDAfAXQAXARAKCEQAHBWAABeQAAAxAZAjQAUAdAjARQgLApg8gCQg7gCgNgbQgNAJADAYQADAaAWAVQghAVgsgbQgogYghgyQgsAHgKAqQgFAVAEAUQgQAAgRgGg");
	this.shape_1.setTransform(20.8,29.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#1BF3E6").ss(2).p("Ag/j8QAigkAngFQApgGAiAaQAaAUAKCTQAGBRAABVQAAAyAcAkQATAZAeAPIADABIgBAEQgJAlgwAFQgaADgbgHQgbgIgLgNQgEAEgBAJQgBAMAFAOQAHAQAOANIAFAFIgGADQgeATgogSQgsgTgpg9QgZAFgNARQgLAQgBAYQAAANACAJIABAGIgGAAQgRAAgSgHQgkgOgGghQgDgUANgTQAIgMAWgVQASgRAJgKQAOgRAHgRQAHgRAGgyQAEgcAGhFQAIhdAFggQAJg7AMgMIADADAAXkcQgqAAglAmQgKALgJA8QgEAhgIBXQgHBHgDAcQgGAxgIATQgHASgPASQgJAKgTATQgVATgHAKQgLARACAQQAEAYAXAMQAPAIATACQgEgmARgZQAQgXAggEIADAAIACACQAeAuAkAYQAoAbAfgPQgagcADgfQACgRALgHIAEgDIADAFQAGALAaAJQAbAIAagDQAmgEAJgaQhOgsAAhZQAAhsgIhbQgLhwgTgOQgZgTgfAAg");
	this.shape_2.setTransform(20.9,29.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#00071E").s().p("AilEgQgkgOgGghQgDgUANgTQAIgMAWgVQASgRAJgKQAOgRAHgRQAHgRAGgyQAEgcAGhFQAIhdAFggQAJg7AMgMIADADIgDgDQAigkAngFQApgGAiAaQAaAUAKCTQAGBRAABVQAAAyAcAkQATAZAeAPIADABIgBAEQgJAlgwAFQgaADgbgHQgbgIgLgNQgEAEgBAJQgBAMAFAOQAHAQAOANIAFAFIgGADQgeATgogSQgsgTgpg9QgZAFgNARQgLAQgBAYQAAANACAJIABAGIgGAAQgRAAgSgHgAiIEdQgEgmARgZQAQgXAggEIADAAIACACQAeAuAkAYQAoAbAfgPQgagcADgfQACgRALgHIAEgDIADAFQAGALAaAJQAbAIAagDQAmgEAJgaQhOgsAAhZQAAhsgIhbQgLhwgTgOQgZgTgfAAQgqAAglAmQgKALgJA8QgEAhgIBXIgKBjQgGAxgIATQgHASgPASQgJAKgTATQgVATgHAKQgLARACAQQAEAYAXAMQAPAIATACIAAAAg");
	this.shape_3.setTransform(20.8,29.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#1BF3E6").ss(2).p("Ag7j5QgRASgNCYQgPCjgLAaQgKAagtArQglAiAFAbQAFAgAiAMQAQAGAQAAQgEgUAFgVQAKgqAtgHQAhAyAnAYQAsAbAigVQgWgVgEgaQgDgYANgJQAOAbA6ACQA8ACALgpQgigRgUgdQgZgjAAgxQAAhegHhWQgLiEgWgRQgfgXgmADQgnAEgiAkg");
	this.shape_4.setTransform(20.9,29.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#27847A").s().p("AijEcQgigMgFggQgEgbAkgiQAtgrALgaQAKgaAPijQAOiYAQgSQAjgkAngEQAlgDAfAXQAXARAKCEQAHBWAABeQAAAxAZAjQAUAdAjARQgLApg8gCQg7gCgNgbQgNAJADAYQADAaAWAVQghAVgsgbQgogYghgyQgsAHgKAqQgFAVAEAUQgQAAgRgGg");
	this.shape_5.setTransform(20.8,29.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.clipPatteAvantGauche, rect = new cjs.Rectangle(-5.2,-4.6,48.5,69), [rect]);


(lib.clipPatteAvantDroite = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#00071E").p("AAikHQgTAOgsCSQgxCcgQAYQgPAXg1AhQgqAagCAbQgBAgAeATQAPAKAQADQgEgQAFgOQAJgeAuADQAUA0AjAaQAjAaAngOQgcgVgIgXQgHgVANgFQApARAuADQA2AEAygQQgigVgKgNQgRgUAKgsQARhWANhzQASiagTgVQgZgdgmgEQgogFgpAcg");
	this.shape.setTransform(21.2,29.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#27847A").s().p("AggEPQgigagVg0QgtgDgKAeQgFAOAEAQQgPgDgPgKQgfgTACggQABgbAqgaQA1ghAQgXQAQgYAwicQAsiSAUgOQApgcAoAFQAlAEAaAdQASAVgRCaQgNBzgSBWQgJAsAQAUQALANAhAVQgyAQg1gEQgugDgqgRQgNAFAHAVQAJAXAbAVQgNAFgNAAQgYAAgYgRg");
	this.shape_1.setTransform(20.8,29.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#1BF3E6").ss(2).p("AAIElQgfAAgdgZQgdgagSgsQgdgCgMAPQgIAJAAAPQAAANACAAIACAIIgIgBQgRgEgQgLQghgVACghQABgVAQgPQAKgKAbgQQAWgOAJgHQASgOAKgPQAQgYApiEQAbhYAMggQATg3AOgKQApgcApADQApADAcAhQAVAYgUCmQgOBzgQBLQgHAjAJARQAFALAXAQIAbAUIgJADQguAOgygCQgzgCgtgSQgDACgBAEQAAAKAIAPQAKAQATAOIAHAGIgJADQgNAFgOAAgAhnC8QAFAAADAAIADAAIABADQASAtAdAZQAhAcAigIQgRgPgIgQQgJgPACgMQACgLAJgEIACAAIABAAQAqARAvADQAuACAsgLIgMgIQgYgQgHgNQgLgVAJgnQAShZANh1QAQiTgRgTQgXgaghgFQgogGgpAcQgMAJgUA5QgMAggZBSQgUBDgKAcQgQAvgLARQgLAQgTAPQgJAHgYAPQgYAOgKAJQgOANgBARQgBAYATAQQAMALASAGQgBgZALgOQAOgQAfAAg");
	this.shape_2.setTransform(21.7,29.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#00071E").s().p("AguEMQgdgagSgsQgdgCgMAPQgIAJAAAPQAAANACAAIACAIIgIgBQgRgEgQgLQghgVACghQABgVAQgPQAKgKAbgQQAWgOAJgHQASgOAKgPQAQgYApiEQAbhYAMggQATg3AOgKQApgcApADQApADAcAhQAVAYgUCmQgOBzgQBLQgHAjAJARQAFALAXAQIAbAUIgJADQguAOgygCQgzgCgtgSQgDACgBAEQgBAKAJAPQAKAQATAOIAHAGIgJADQgNAFgOAAQgfAAgdgZgAhZC8IADAAIABADQASAtAdAZQAhAcAigIQgRgPgJgQQgIgPACgMQACgLAJgEIACAAIABAAQAqARAvADQAuACAsgLIgMgIQgYgQgHgNQgLgVAJgnQAShZANh1QAQiTgRgTQgXgaghgFQgogGgpAcQgMAJgVA5QgLAggZBSQgUBDgKAcQgQAvgLARQgLAQgTAPQgJAHgYAPQgYAOgKAJQgOANgBARQgBAYATAQQAMALASAGQgBgZALgOQAOgQAfAAIAIAAg");
	this.shape_3.setTransform(21.1,29.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#1BF3E6").ss(2).p("AAfkHQgTAOgsCSQgxCcgQAYQgPAXg1AhQgqAagCAbQgBAgAeATQAPAKAQADQgEgQAFgOQAJgeAuADQAUA0AjAaQAkAaAmgOQgcgVgIgXQgHgVANgFQApARAuADQA2AEAygQQgigVgKgNQgRgUAKgsQARhWANhzQASiagTgVQgZgdgmgEQgogFgpAcg");
	this.shape_4.setTransform(21.5,29.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#27847A").s().p("AggEPQgigagVg0QgtgDgKAeQgFAOAEAQQgPgDgPgKQgfgTACggQABgbAqgaQA1ghAQgXQAQgYAwicQAsiSAUgOQApgcAoAFQAlAEAaAdQASAVgRCaQgNBzgSBWQgJAsAQAUQALANAhAVQgyAQg1gEQgugDgqgRQgNAFAHAVQAJAXAbAVQgNAFgNAAQgYAAgYgRg");
	this.shape_5.setTransform(20.8,29.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.clipPatteAvantDroite, rect = new cjs.Rectangle(-6.1,-3.8,50.4,66.8), [rect]);


(lib.clipPatteArriereGauche = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#00071E").p("Ah3jNQgFAZASBwQAUCEABATQACAcgXA6QgSAuAQAXQASAaAbADQANACAKgEQgNgIgFgMQgKgaAmgYQAHAqAdACQAdACAYgkQgcgJADgUQABgMAOgTQAMAZAMAGQAUALAaggQgsgcgyjFQgchygGgSQgRg7gOgDQgkgIgTAPQgRAOgHAmg");
	this.shape.setTransform(12.6,27.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#1B544C").s().p("Ag+ELQgbgDgSgaQgQgXASguQAXg6gCgcQgBgTgUiEQgShwAFgZQAHgmARgOQATgPAkAIQAOADARA7IAiCEQAyDFAsAcQgaAggUgLQgMgGgMgZQgOATgBAMQgDAUAcAJQgYAkgdgCQgdgCgHgqQgmAYAKAaQAFAMANAIQgHADgJAAIgHgBg");
	this.shape_1.setTransform(12.5,27.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#1BF3E6").ss(2).p("Ah5jMIAFABQgFAZAYCVQAOBcABAUQACAUgGAXQgEANgKAYQgKAbgCAMQgDAUAJAOQAVAeAfgEQgNgMAAgPQAAgXAggVIAGgEIABAHQAHAjAWAFQAZAFAXggQgQgHgFgLQgFgQASgdIAGgJIAEAIQAIAOADAFQAJALAIABQANABARgTQgdgXgchRQgQgwgchtQgRhLgJgbQgPgygLgCQgfgGgQALQgTAMgGAnAg8ERQggAAgWggQgMgQAEgXQACgOALgcQAKgaADgKQAGgWgCgSQgBgVgOhbQgMhMgEgeQgGg1ADgSQAHgrAWgPQAUgNAkAHQAOADAOAqQAKAdAVBXQAbBtARAxQAdBTAcASIAFADIgEAEQgXAdgTgDQgSgCgOgbQgMATAEALQAEAKAQAFIAGACIgDAGQgNAUgRAJQgQAKgPgDQgbgGgJgjQgVARAAAPQAAAPARALIAJAFIgKAEQgHADgMAAg");
	this.shape_2.setTransform(12.8,27.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#00071E").s().p("AhwDxQgMgQAEgXQACgOALgcIANgkQAGgWgCgSQgBgVgOhbQgMhMgEgeQgGg1ADgSQAHgrAWgPQAUgNAkAHQAOADAOAqQAKAdAVBXQAbBtARAxQAdBTAcASIAFADIgEAEQgXAdgTgDQgSgCgOgbQgMATAEALQAEAKAQAFIAGACIgDAGQgNAUgRAJQgQAKgQgDQgagGgJgjQgVARAAAPQAAAPARALIAJAFIgKAEQgHADgMAAQggAAgWgggAhZj+QgTAMgGAnQgFAZAYCVQAOBcABAUQACAUgGAXQgEANgKAYQgKAbgCAMQgDAUAJAOQAVAeAfgEQgNgMAAgPQAAgXAggVIAGgEIABAHQAHAjAWAFQAZAFAXggQgQgHgFgLQgFgQASgdIAGgJIAEAIIALATQAJALAIABQANABARgTQgdgXgchRQgQgwgchtQgRhLgJgbQgPgygLgCQgLgDgJAAQgRAAgKAIgAhyjLIgFgBg");
	this.shape_3.setTransform(12.6,27.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#1BF3E6").ss(2).p("Ah4jNQgFAZASBwQAUCEABATQACAcgXA6QgSAuAQAXQASAaAbADQANACAKgEQgNgIgFgMQgKgaAmgYQAHAqAdACQAdACAYgkQgcgJADgUQABgMAOgTQAMAZAMAGQAUALAaggQgsgcgyjFQgchygGgSQgRg7gOgDQgkgIgTAPQgRAOgHAmg");
	this.shape_4.setTransform(12.7,27.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#1B544C").s().p("Ag+ELQgbgDgSgaQgQgXASguQAXg6gCgcQgBgTgUiEQgShwAFgZQAHgmARgOQATgPAkAIQAOADARA7IAiCEQAyDFAsAcQgaAggUgLQgMgGgMgZQgOATgBAMQgDAUAcAJQgYAkgdgCQgdgCgHgqQgmAYAKAaQAFAMANAIQgHADgJAAIgHgBg");
	this.shape_5.setTransform(12.5,27.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.clipPatteArriereGauche, rect = new cjs.Rectangle(-5.2,-5,31.7,64.9), [rect]);


(lib.clipPatteArriereDroite = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#00071E").p("AAhjTQgOAWgcBtQgjCAgHATQgJAagsAsQgjAjAFAbQAGAfAXAOQALAGALABQgJgMABgOQABgbAsgIQgKAqAaAOQAbAOAigYQgVgTALgSQAFgJAUgNQACAcAIAKQAOASAkgTQgdgrAijIQAUh0ACgTQAIg9gMgJQgegVgWAGQgWAGgWAgg");
	this.shape.setTransform(14.1,25.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#1B544C").s().p("AgeD2QgagOAKgqQgsAIgBAbQgBAOAJAMQgLgBgLgGQgXgOgGgfQgFgbAjgjQAsgsAJgaQAHgTAjiAQAchtAOgWQAWggAWgGQAWgGAeAVQAMAJgIA9IgWCHQgiDIAdArQgkATgOgSQgIgKgCgcQgUANgFAJQgLASAVATQgXAPgSAAQgKAAgKgFg");
	this.shape_1.setTransform(14.1,25.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#1BF3E6").ss(2).p("AgnC4IgCAIQgJAiAUAOQAKAHAOgBQAOgCAPgJQgLgMAAgNQABgLAKgLQAGgFANgJIAJgGIAAAJQACAPABAHQADAOAIAEQALAHAXgMQgRghAHhVQAEg0AUhtQANhJADggQAGgzgJgGQgagTgTAEQgWADgWAhQgJAOgQA0QgIAcgSBJQgZBagHATQgHATgOASQgJALgTATQgUAUgHAKQgLARAEAQQAGAlAeAJQgGgRAFgOQAKgVAlgGgAhJEAIgLAAQgLgBgNgHQgZgPgGghQgEgUAMgTQAIgMAVgWQASgRAJgKQANgRAHgSQAJgZAWhUQAliRAQgYQAYgkAagFQAXgFAeAVQAMAJgEAsQgCAfgPBYQgUBtgEA1QgHBYATAcIADAEIgFADQghAQgQgKQgPgIgDgfQgTAOgBAKQAAAKANAMIAFAEIgGAEQgTANgSACQgUACgNgJQgWgQAGgjQgbAGgGAOQgDAJAEAMQACAFADAFg");
	this.shape_2.setTransform(14.1,25.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#00071E").s().p("AhUEAQgLgBgNgHQgZgPgGghQgEgUAMgTQAIgMAVgWQASgRAJgKQANgRAHgSQAJgZAWhUQAliRAQgYQAYgkAagFQAXgFAeAVQAMAJgEAsQgCAfgPBYQgUBtgEA1QgHBYATAcIADAEIgFADQghAQgQgKQgPgIgDgfQgTAOgBAKQAAAKANAMIAFAEIgGAEQgTANgSACQgUACgNgJQgWgQAGgjQgbAGgGAOQgDAJAEAMIAFAKIAGAIgAgpDAQgJAiAUAOQAKAHAOgBQAOgCAPgJQgLgMAAgNQABgLAKgLIATgOIAJgGIAAAJIADAWQADAOAIAEQALAHAXgMQgRghAHhVQAEg0AUhtQANhJADggQAGgzgJgGQgagTgTAEQgWADgWAhQgJAOgQA0IgaBlQgZBagHATQgHATgOASQgJALgTATQgUAUgHAKQgLARAEAQQAGAlAeAJQgGgRAFgOQAKgVAlgGIAIgCg");
	this.shape_3.setTransform(14.1,25.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#1BF3E6").ss(2).p("AAhjTQgOAVgcBtQgjCBgHASQgJAagsAsQgjAkAFAbQAGAfAXANQALAHALAAQgJgMABgNQABgbAsgIQgKApAaAPQAbANAigYQgVgTALgRQAFgJAUgOQACAdAIAKQAOASAkgTQgdgrAijIQAUh0ACgTQAIg+gMgIQgegVgWAGQgWAGgWAgg");
	this.shape_4.setTransform(14.1,25.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#1B544C").s().p("AgeD2QgagOAKgqQgsAIgBAbQgBAOAJAMQgLgBgLgGQgXgOgGgfQgFgbAjgjQAsgsAJgaQAHgTAjiAQAchtAOgWQAWggAWgGQAWgGAeAVQAMAJgIA9IgWCHQgiDIAdArQgkATgOgSQgIgKgCgcQgUANgFAJQgLASAVATQgXAPgSAAQgKAAgKgFg");
	this.shape_5.setTransform(14.1,25.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.clipPatteArriereDroite, rect = new cjs.Rectangle(-5.6,-4.6,37.3,60.2), [rect]);


(lib.ClipGroup = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Ah3BqQgygsAAg+QAAg9AygsQAxgsBGAAQBGAAAyAsQAyAsAAA9QAAA+gyAsQgyAshGAAQhGAAgxgsg");
	mask.setTransform(19.4,19.9);

	// Calque 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF3EF1").s().p("AAHApQgZgUgDgXQgCgNgUgRQgMgKAQgGQAWgIAXAIQAbAJgJATQgGAOATASQARASgIAOQgFAJgJAAQgKAAgPgMg");
	this.shape.setTransform(8.2,5.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF3EF1").s().p("AAHApQgZgUgDgXQgCgNgUgRQgMgKAQgGQAWgIAXAIQAbAJgJATQgGAOATASQARASgIAOQgFAJgJAAQgKAAgPgMg");
	this.shape_1.setTransform(27.2,6.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF3EF1").s().p("AAEBaQglgBgVgZQgVgbAkgVQAYgPACgkQACgjAbgNQAngTAGAsQAGArgbAhQgPATAEAhQADAUgaAAIgCAAg");
	this.shape_2.setTransform(30.9,23.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF3EF1").s().p("AgHAxQgVgGAIgUQAFgOgOgQQgOgQAIgPQAKgUAVARQAUASABAXQABAMAQAOQAKAIgNAIQgNAIgOAAIgLgBg");
	this.shape_3.setTransform(20.6,20.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FF3EF1").s().p("Ag5AwQgcgRAbgcQAagbAggBQATAAAVgVQANgNAKATQAPAbgJAbQgJAegdgNQgUgJgYATQgPALgNAAQgIAAgIgEg");
	this.shape_4.setTransform(7.1,18.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FF3EF1").s().p("AAYAoQgfgJgMgUQgHgLgZgHQgPgEAMgMQAQgQAagCQAbgDAAAVQAAAPAYAJQAXAKgCAQQgCAPgRAAQgHAAgKgCg");
	this.shape_5.setTransform(21.4,11.8);

	var maskedShapeInstanceList = [this.shape,this.shape_1,this.shape_2,this.shape_3,this.shape_4,this.shape_5];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup, rect = new cjs.Rectangle(2.4,4.9,34,27.5), [rect]);


(lib.ClipGroup_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque_2 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("AhZBQQglgiAAguQAAguAlghQAlggA0AAQA1AAAlAgQAlAhAAAuQAAAuglAiQglAgg1ABQg0gBglggg");
	mask_1.setTransform(14.5,14.9);

	// Calque_3
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FF3EF1").s().p("AAGAfQgTgPgCgRQgBgKgPgMQgJgIALgEQAQgHASAGQAUAHgHAOQgEALAOANQANAOgHAKQgEAHgHAAQgHAAgKgJg");
	this.shape_6.setTransform(6.2,3.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FF3EF1").s().p("AAGAfQgTgPgCgRQgBgKgPgMQgJgIALgEQAQgHASAGQAUAHgHAOQgEALAOANQANAOgHAKQgEAHgHAAQgHAAgKgJg");
	this.shape_7.setTransform(20.4,4.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FF3EF1").s().p("AADBDQgcAAgPgTQgQgUAbgQQASgLACgbQABgaAUgKQAdgOAFAhQAFAggVAYQgLAOADAZQACAPgUAAIgBAAg");
	this.shape_8.setTransform(23.2,17.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FF3EF1").s().p("AgEAlQgQgFAFgPQAEgLgKgLQgLgMAGgLQAIgPAQANQAOANABARQABAJAMAKQAHAHgKAGQgJAGgLAAIgHgBg");
	this.shape_9.setTransform(15.5,15.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FF3EF1").s().p("AgrAkQgVgNAVgVQATgUAYAAQAOAAAQgQQAJgKAIAOQALAVgGAUQgHAWgWgKQgOgGgSAOQgLAIgKAAQgGAAgHgDg");
	this.shape_10.setTransform(5.4,13.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FF3EF1").s().p("AASAeQgXgGgJgQQgFgIgSgEQgMgEAJgJQAMgMAUgCQATgCAAAQQAAALATAHQARAIgCALQgCAMgNAAQgFAAgHgCg");
	this.shape_11.setTransform(16,8.8);

	var maskedShapeInstanceList = [this.shape_6,this.shape_7,this.shape_8,this.shape_9,this.shape_10,this.shape_11];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_1, rect = new cjs.Rectangle(1.8,3.7,25.5,20.6), [rect]);


(lib.ClipAfficheurVies = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"5unites":0,"4unites":1,"3unites":2,"2unites":3,"1unites":4,"0unites":5});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(6));

	// nb_vies
	this.clipNbVies = new lib.clipChiffres();
	this.clipNbVies.parent = this;
	this.clipNbVies.setTransform(17.3,17.1,1,1,0,0,0,17.3,16.9);

	this.timeline.addTween(cjs.Tween.get(this.clipNbVies).wait(6));

	// barre_energie
	this.text = new cjs.Text("", "50px 'TRN'", "#FFFFFF");
	this.text.lineHeight = 52;
	this.text.parent = this;
	this.text.setTransform(90.6,-17.9);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,0,0,4).p("AmNB+IMbAAIAAj7IsbAAgAGrCbItVAAIAAk2INVAAg");
	this.shape.setTransform(86.1,16.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AmqCcIAAk3INVAAIAAE3gAmNB+IMbAAIAAj7IsbAAg");
	this.shape_1.setTransform(86.1,16.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#1BF3E6").ss(2,0,0,4).p("AmKB8IMVAAIAAj3IsVAAgAGQCAIsfAAIAAj/IMfAAgAmoCZINRAAIAAkxItRAAgAGtCeItaAAIAAk7INaAAg");
	this.shape_2.setTransform(86.1,16.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AmtCeIAAk7INbAAIAAE7gAmoCZINRAAIAAkxItRAAgAmPCAIAAj/IMfAAIAAD/gAmKB8IMVAAIAAj3IsVAAg");
	this.shape_3.setTransform(86.1,16.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#1BF3E6").ss(2,0,0,4).p("AmNB+IMbAAIAAj7IsbAAgAGrCbItVAAIAAk2INVAAg");
	this.shape_4.setTransform(86.1,16.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AmqCcIAAk3INVAAIAAE3gAmNB+IMbAAIAAj7IsbAAg");
	this.shape_5.setTransform(86.1,16.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#F62DAF").s().p("Ag1BeIAAi7IBrAAIAAC7g");
	this.shape_6.setTransform(56.7,16.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#F62DAF").s().p("Ag2BeIAAi7IBsAAIAAC7g");
	this.shape_7.setTransform(71.6,16.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#F62DAF").s().p("Ag1BeIAAi7IBrAAIAAC7g");
	this.shape_8.setTransform(86.4,16.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#F62DAF").s().p("Ag1BeIAAi7IBrAAIAAC7g");
	this.shape_9.setTransform(101.2,16.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#F62DAF").s().p("Ag2BeIAAi7IBsAAIAAC7g");
	this.shape_10.setTransform(116,16.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#000000").ss(1,0,0,4).p("AGrCbItVAAIAAk2INVAAgAmNB+IMbAAIAAj7IsbAAg");
	this.shape_11.setTransform(85.6,15.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#1BF3E6").ss(2,0,0,4).p("AGtCeItaAAIAAk7INaAAgAmoCZINRAAIAAkxItRAAgAGQCAIsfAAIAAj/IMfAAgAmKB8IMVAAIAAj3IsVAAg");
	this.shape_12.setTransform(85.6,15.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#1BF3E6").ss(2,0,0,4).p("AGrCbItVAAIAAk2INVAAgAmNB+IMbAAIAAj7IsbAAg");
	this.shape_13.setTransform(85.6,15.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9,p:{x:101.2,y:16.6}},{t:this.shape_8,p:{x:86.4,y:16.6}},{t:this.shape_7,p:{x:71.6,y:16.6}},{t:this.shape_6,p:{x:56.7,y:16.6}},{t:this.shape_5,p:{x:86.1,y:16.3}},{t:this.shape_4,p:{x:86.1,y:16.3}},{t:this.shape_3,p:{x:86.1,y:16.3}},{t:this.shape_2,p:{x:86.1,y:16.3}},{t:this.shape_1,p:{x:86.1,y:16.3}},{t:this.shape,p:{x:86.1,y:16.3}},{t:this.text}]}).to({state:[{t:this.shape_9,p:{x:100.7,y:16.1}},{t:this.shape_8,p:{x:85.9,y:16.1}},{t:this.shape_7,p:{x:71.1,y:16.1}},{t:this.shape_6,p:{x:56.2,y:16.1}},{t:this.shape_5,p:{x:85.6,y:15.8}},{t:this.shape_13},{t:this.shape_3,p:{x:85.6,y:15.8}},{t:this.shape_12},{t:this.shape_1,p:{x:85.6,y:15.8}},{t:this.shape_11}]},1).to({state:[{t:this.shape_8,p:{x:85.9,y:16.1}},{t:this.shape_7,p:{x:71.1,y:16.1}},{t:this.shape_6,p:{x:56.2,y:16.1}},{t:this.shape_5,p:{x:85.6,y:15.8}},{t:this.shape_4,p:{x:85.6,y:15.8}},{t:this.shape_3,p:{x:85.6,y:15.8}},{t:this.shape_2,p:{x:85.6,y:15.8}},{t:this.shape_1,p:{x:85.6,y:15.8}},{t:this.shape,p:{x:85.6,y:15.8}}]},1).to({state:[{t:this.shape_7,p:{x:71.1,y:16.1}},{t:this.shape_6,p:{x:56.2,y:16.1}},{t:this.shape_5,p:{x:85.6,y:15.8}},{t:this.shape_13},{t:this.shape_3,p:{x:85.6,y:15.8}},{t:this.shape_12},{t:this.shape_1,p:{x:85.6,y:15.8}},{t:this.shape_11}]},1).to({state:[{t:this.shape_6,p:{x:56.2,y:16.1}},{t:this.shape_5,p:{x:85.6,y:15.8}},{t:this.shape_4,p:{x:85.6,y:15.8}},{t:this.shape_3,p:{x:85.6,y:15.8}},{t:this.shape_2,p:{x:85.6,y:15.8}},{t:this.shape_1,p:{x:85.6,y:15.8}},{t:this.shape,p:{x:85.6,y:15.8}}]},1).to({state:[{t:this.shape_5,p:{x:85.6,y:15.8}},{t:this.shape_13},{t:this.shape_3,p:{x:85.6,y:15.8}},{t:this.shape_12},{t:this.shape_1,p:{x:85.6,y:15.8}},{t:this.shape_11}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,-19.9,130.1,54);
p.frameBounds = [rect, rect=new cjs.Rectangle(0,-0.9,129.6,35), rect, rect, rect, rect];


(lib.ClipAfficheurPts = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// pts
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AijCoIgKgMIAAhEIAKgLICwAAQAXgBAWgVQAXgVAAgbIBdAAQAAAhgOAfQgOAegWAVQgYAXgbAKQgdANgbAAgAidCXICdAAQAjABAUgHQAUgGARgNQARgMANgPQANgOAHgPQAIgRADgJQADgLAAgJIg8AAQgDAWgaAYQgZAYglAAIiiAAgAitgHQAAgiANgeQAPgdAWgVQAYgXAagLQAcgMAdAAICzAAIALAMIAABGIgLAMIivAAQgYAAgWATQgWAVAAAagAg2iQQgVAGgQAMQgRAMgNAPQgNAQgHANQgJASgCAJQgEALAAAIIA8AAQAEgWAZgWQAZgXAmABIChAAIAAg9IidAAIgFAAQgfAAgSAHg");
	this.shape.setTransform(265.2,17.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgSCoIgLgMIAAjrQAAgRAJgQQAJgQAMgMQAMgMAPgIQAOgHANAAIB/AAIAABeIhrAAQgIAAAAAHIAADeIgLAMgAAfiOQgPAJgKANQgMANgCAMQgEANAAAJIAADgIA+AAIAAjaQAAgEACgEIAEgHQACgDAFgDQAEgCAEAAIBeAAIAAg9IhkAAQgUAAgOAJgAirhJIgKgMIAAhGIAKgMIBvAAIAKAMIAABGIgKAMgAikhaIBiAAIAAg9IhiAAg");
	this.shape_1.setTransform(229,17.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AiqCoIgLgMIAAi/IALgLIBMAAIAKALIAAC/IgKAMgAikCXIA/AAIAAi0Ig/AAgAg4AwIgKgMIAAhHIAKgLIDpAAQgCANgDAKQgEALgGALQgHALgLAJQgLAKgSAJQgSAIgZACgAgyAfIB3AAQAcgCAQgKQAQgJAKgKQANgOADgPIjNAAgAi1hJIAAheIEEAAQAXAAASAIQASAIAPAOQAOALAIASQAHAOAAAVgAikhaIFEAAQAAgGgFgJQgEgIgMgMQgMgLgNgGQgOgHgYgCIjwAAg");
	this.shape_2.setTransform(192.1,17.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// 4
	this.clipChiffre4 = new lib.clipChiffres();
	this.clipChiffre4.parent = this;
	this.clipChiffre4.setTransform(140,16.9,1,1,0,0,0,17.3,16.9);

	this.timeline.addTween(cjs.Tween.get(this.clipChiffre4).wait(1));

	// 3
	this.clipChiffre3 = new lib.clipChiffres();
	this.clipChiffre3.parent = this;
	this.clipChiffre3.setTransform(99.1,16.9,1,1,0,0,0,17.3,16.9);

	this.timeline.addTween(cjs.Tween.get(this.clipChiffre3).wait(1));

	// 2
	this.clipChiffre2 = new lib.clipChiffres();
	this.clipChiffre2.parent = this;
	this.clipChiffre2.setTransform(58.2,16.9,1,1,0,0,0,17.3,16.9);

	this.timeline.addTween(cjs.Tween.get(this.clipChiffre2).wait(1));

	// 1
	this.clipChiffre1 = new lib.clipChiffres();
	this.clipChiffre1.parent = this;
	this.clipChiffre1.setTransform(17.3,16.9,1,1,0,0,0,17.3,16.9);

	this.timeline.addTween(cjs.Tween.get(this.clipChiffre1).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipAfficheurPts, rect = new cjs.Rectangle(0,0,282.6,33.9), [rect]);


(lib.ClipPanneauIntro = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{histoire:0,instructions:1});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// instructions
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1BF3E6").s().p("Ah6B+IgIgJIAAgzIAIgIICEAAQARAAARgQQARgQAAgVIBGAAQAAAbgLAVQgKAWgRARQgRAQgVAJQgWAJgUAAgAh1BxIB1AAQAaABAPgFQAPgFANgJQANgJAJgLQALgMAEgKQAHgNACgHQACgJAAgGIgtAAQgDARgSASQgTARgdAAIh4AAgAiCgEQAAgaALgWQAKgWARgRQAQgQAWgJQAWgJAUAAICHAAIAIAJIAAA1IgIAIIiEAAQgRAAgRAPQgRAPAAAVgAgohsQgQAFgMAJQgMAIgLAMQgIALgHALQgFALgDAJQgCAHAAAIIAtAAQACgQATgSQATgQAcAAIB5AAIAAgtIh2AAIgEAAQgWAAgOAEg");
	this.shape.setTransform(326.5,69.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#1BF3E6").s().p("ABdB+IhchmIAAgmIAIgJIAxAAIAAhdIAIgJIA5AAIAHAJIAADpIgHAJgAAOATIBTBeIAVAAIAAjhIgvAAIAABmIg5AAgAh6B+IgIgJIAAjpIAIgJIAeAAIBbBmIAAAmIgIAJIgwAAIAABdIgIAJgAh1BxIAvAAIAAhmIA4AAIAAgdIhTheIgUAAg");
	this.shape_1.setTransform(299.7,69.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#1BF3E6").s().p("AgxB0QgYgJgRgSQgQgQgLgYQgLgXAAgaQAAgZALgXQALgYAQgQQARgRAYgKQAXgKAaAAQAaAAAYAKQAYAKARARQAQAQALAYQALAXAAAZQAAAagLAXQgLAYgQAQQgRASgYAJQgYAKgaAAQgZAAgYgKgAgshnQgVAJgQAPQgQARgIATQgKAVAAAWQAAAYAKAUQAIATAQARQAQAPAVAJQAWAJAWAAQAYAAAWgJQAVgJAQgPQAQgQAJgUQAJgUAAgYQAAgWgJgVQgJgUgQgQQgQgPgVgJQgWgJgYAAQgWAAgWAJgAgZBAQgNgGgJgIQgKgKgFgMQgFgNAAgNQAAgNAFgMQAFgNAKgJQAIgJAOgFQALgGAPAAQAPAAAMAGQANAFAJAJQAJAJAGANQAFAMAAANQAAANgFANQgGAMgJAKQgKAJgMAFQgOAFgNAAQgNAAgNgFgAgUgwQgKAFgIAHQgHAIgFAKQgEAKAAAKQAAAMAEAJQAFAKAHAHQAIAIAKAEQALAFAKAAQAMAAAJgFQAKgEAJgIQAIgIAEgJQAFgJAAgMQAAgKgFgKQgEgKgIgIQgJgHgKgFQgJgEgMAAQgKAAgLAEg");
	this.shape_2.setTransform(272.8,69.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#1BF3E6").s().p("AgdB+IgHgFIAAjvIAHgHIA7AAIAHAHIAADvIgHAFgAgXBxIAvAAIAAjhIgvAAg");
	this.shape_3.setTransform(255.6,69.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#1BF3E6").s().p("AgOB+IgIgJIAAivQAAgOAHgLQAIgOAIgIQAKgJAKgFQALgGAJAAIBgAAIAABGIhRAAQgGAAAAAGIAACmIgIAJgAAXhqQgJAFgKALQgIAMgDAHQgCAKAAAHIAACnIAuAAIAAijIABgGIAEgFIAFgFIAGgBIBHAAIAAgtIhMAAQgPAAgKAGgAiAg3IgIgIIAAg1IAIgJIBTAAIAIAJIAAA1IgIAIgAh7hDIBJAAIAAgtIhJAAg");
	this.shape_4.setTransform(237.9,69.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#1BF3E6").s().p("AAJB+QgPAAgagJQgZgKgQgRQgSgRgJgXQgLgWAAgbQAAgcALgWQAJgXASgRQAQgQAZgLQAagJAPAAIBfAAIAHAFIAABBIhjAAQgKAAgJAEQgHADgJAJQgHAIgEAKQgEAKAAAMQAAALAEAKQAEAKAHAJQAKAIAGADQAJAEAKAAIBjAAIAABBIgHAFgAgahpQgOAFgNAKQgKAHgJAMIgOAVQgLAYAAAbQAAAaALAYIAOAVQAJAMAKAHQANAKAOAFQARAHATAAIBZAAIAAgsIhXAAQgVgCgOgKQgOgMgHgOQgHgNAAgRQAAgSAHgNQAHgOAOgMQAOgKAVgCIBXAAIAAgsIhZAAQgTAAgRAHg");
	this.shape_5.setTransform(212.4,69.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#1BF3E6").s().p("AgnB+QgIAAgMgGQgKgFgLgJQgJgJgHgNQgHgMgBgNIAAivIAIgJIA5AAIAIAJIAACnIAEAEIA3AAIAFgEIAAinIAHgJIA5AAIAIAJIAACvQAAAOgHALQgGAMgKAKQgLAJgKAFQgLAGgJAAgAhbA3QAAAIAEAKQADAIAIAKQAHAJALAHQAMAGAOAAIBCAAQAOAAAMgGQAMgHAGgIQAHgJAEgKQADgJAAgJIAAinIgvAAIAACjQAAAIgFAFQgFAEgFAAIg6AAQgFAAgFgEQgGgFAAgIIAAijIgvAAg");
	this.shape_6.setTransform(190,69.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#1BF3E6").s().p("ADAB+IhmhpIAAguIAIgJICvAAQgBAHgDAKQgCAIgFAIQgGAJgIAHQgIAIgOAFQgMAGgTACIBOBMIAAAOgABmARIBgBgIA6AAIhbhaIAbAAQAVgBAMgHQAMgHAIgIQAJgKACgLIiaAAgAAMB+IgIgJIAAiOIAIgJIA5AAIAIAJIAACOIgIAJgAARBxIAvAAIAAiGIgvAAgAiWB+IgIgJIAAivQAAgNAHgMQAHgNAJgJQAMgKAJgEQALgGAJAAIEiAAQAPAAAQAGQANAGALAKQALAKAGAMQAFANAAANIlgAAQgGAAAAAGIAACmIgJAJgAhwhqQgKAGgKAKQgJAMgCAHQgDAJAAAIIAACnIAwAAIAAijIABgGQABgCADgDIAEgFIAGgBIFTAAQAAgGgDgFQgDgGgJgJQgKgJgJgEQgKgFgSgBIkZAAQgPAAgKAGgAkIg3IgIgIIAAg1IAIgJIBTAAIAIAJIAAA1IgIAIgAkEhDIBKAAIAAgtIhKAAg");
	this.shape_7.setTransform(151.5,69.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#1BF3E6").s().p("Ah6B+IgIgJIAAgzIAIgIICEAAQARAAARgQQARgQAAgVIBGAAQAAAbgLAVQgKAWgRARQgRAQgVAJQgWAJgUAAgAh1BxIB1AAQAaABAPgFQAPgFANgJQANgJAJgLQALgMAEgKQAHgNACgHQACgJAAgGIgtAAQgDARgSASQgTARgdAAIh4AAgAiCgEQAAgaALgWQAKgWARgRQAQgQAWgJQAWgJAUAAICHAAIAIAJIAAA1IgIAIIiEAAQgRAAgRAPQgRAPAAAVgAgohsQgQAFgMAJQgMAIgLAMQgIALgHALQgFALgDAJQgCAHAAAIIAtAAQACgQATgSQATgQAcAAIB5AAIAAgtIh2AAIgEAAQgWAAgOAEg");
	this.shape_8.setTransform(110.2,69.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#1BF3E6").s().p("ABdB+IhchmIAAgmIAIgJIAxAAIAAhdIAIgJIA5AAIAIAJIAADpIgIAJgAAPATIBSBeIAUAAIAAjhIguAAIAABmIg4AAgAh5B+IgIgJIAAjpIAIgJIAdAAIBbBmIAAAmIgIAJIgwAAIAABdIgIAJgAh1BxIAvAAIAAhmIA5AAIAAgdIhUheIgUAAg");
	this.shape_9.setTransform(83.4,69.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#1BF3E6").s().p("AgcB+IgHgFIAAjvIAHgHIA5AAIAIAHIAADvIgIAFgAgXBxIAvAAIAAjhIgvAAg");
	this.shape_10.setTransform(66,69.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#205874").s().p("A0iBfQgfAAgWgWQgWgWAAgfIAAgnQAAgfAWgWQAWgWAfAAMApFAAAQAfAAAWAWQAWAWAAAfIAAAnQAAAggWAVQgVAWggAAg");
	this.shape_11.setTransform(201,69.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#213158").s().p("Az7ClQhDAAgxgwQgwgxAAhEIAAAAQAAhEAwgvQAxgxBDAAMAn2AAAQBEAAAwAxQAxAvAABEIAAAAQAABEgxAxQgwAwhEAAg");
	this.shape_12.setTransform(201,69.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).wait(1));

	// btnPrecedent
	this.btnPrecedent = new lib.btnPrecedent();
	this.btnPrecedent.parent = this;
	this.btnPrecedent.setTransform(79.7,519.3,1,1,0,0,0,34,34);
	this.btnPrecedent._off = true;

	this.timeline.addTween(cjs.Tween.get(this.btnPrecedent).wait(1).to({_off:false},0).wait(1));

	// btnJouer
	this.btnJouer = new lib.btnJouer();
	this.btnJouer.parent = this;
	this.btnJouer.setTransform(406,528.7,1,1,0,0,0,117,24.8);
	this.btnJouer._off = true;

	this.timeline.addTween(cjs.Tween.get(this.btnJouer).wait(1).to({_off:false},0).wait(1));

	// instructions_1
	this.txtObstacles = new cjs.Text("Évitez les plantes empoisonnées et survivez à une autre journée sur Lazara!", "16px 'Prompt Light'", "#FFFFFF");
	this.txtObstacles.name = "txtObstacles";
	this.txtObstacles.lineHeight = 27;
	this.txtObstacles.lineWidth = 459;
	this.txtObstacles.parent = this;
	this.txtObstacles.setTransform(203.3,431.7);

	this.txtAntagonistes = new cjs.Text("Et la barre d’espacement pour lancer des pointes acérées aux ennemis sur son chemin. Chaque ennemi tué rapporte 100pts.", "16px 'Prompt Light'", "#FFFFFF");
	this.txtAntagonistes.name = "txtAntagonistes";
	this.txtAntagonistes.lineHeight = 27;
	this.txtAntagonistes.lineWidth = 505;
	this.txtAntagonistes.parent = this;
	this.txtAntagonistes.setTransform(97.3,291.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FEFFE9").s().p("A5TDIQgZAAgSgSQgRgSAAgYIAAkXQAAgZARgRQASgSAZAAMAynAAAQAZAAARASQASARAAAZIAAEXQAAAYgSASQgRASgZAAg");
	this.shape_13.setTransform(409,365);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FF3EF1").s().p("AAPARQgHgCgIgGQgJgGgGgGQgGgHAAgEQABgEAGACQAHACAIAGQAJAGAGAGQAGAHAAAEQAAABgBAAQAAABAAAAQgBAAAAAAQgBAAAAAAIgEAAg");
	this.shape_14.setTransform(612.7,348);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FF3EF1").s().p("AgVAQQAAgEAGgHQAGgGAJgHQAIgGAGgCQAHgDAAAEQABAEgGAHQgGAGgJAHQgIAGgHADIgDAAQgBAAgBAAQAAAAgBAAQAAgBAAAAQAAgBgBAAg");
	this.shape_15.setTransform(626.2,348);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#00071E").p("AB8AAQAAAwglAiQgkAigzAAQgyAAgkgiQglgiAAgwQAAgvAlgiQAkgiAyAAQAzAAAkAiQAlAiAAAvg");
	this.shape_16.setTransform(621.7,348.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#1E367E").s().p("AhWBSQglgiAAgwQAAgvAlgiQAkgiAyAAQAzAAAkAiQAlAiAAAvQAAAwglAiQgkAigzAAQgyAAgkgig");
	this.shape_17.setTransform(621.7,348.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#1BF3E6").ss(2).p("AAAB4Qg0AAglgjQgmgkAAgxQAAgwAmgjQAlgkA0AAQA1AAAlAkQAmAjAAAwQAAAxgmAkQglAjg1AAgAAAhwQgxAAgjAiQgjAhAAAtQAAAuAjAhQAjAiAxAAQAyAAAjgiQAjghAAguQAAgtgjghQgjgigyAAg");
	this.shape_18.setTransform(621.7,348.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#00071E").s().p("AhZBVQgmgjAAgyQAAgwAmgkQAlgjA0AAQA1AAAlAjQAlAkAAAwQAAAyglAjQglAjg1AAQg0AAglgjgAhThOQgkAgAAAuQAAAvAkAhQAiAgAxAAQAyAAAjggQAjghAAgvQAAgugjggQgjgigyAAQgxAAgiAig");
	this.shape_19.setTransform(621.7,348.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#1BF3E6").ss(2).p("AB8AAQAAAwglAiQgkAigzAAQgyAAgkgiQglgiAAgwQAAgvAlgiQAkgiAyAAQAzAAAkAiQAlAiAAAvg");
	this.shape_20.setTransform(621.7,348.5);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#1E367E").s().p("AhWBSQglgiAAgwQAAgvAlgiQAkgiAyAAQAzAAAkAiQAlAiAAAvQAAAwglAiQgkAigzAAQgyAAgkgig");
	this.shape_21.setTransform(621.7,348.5);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#00071E").p("AhZiZQgDATANBUQAPBhABAQQABAVgRArQgNAjALARQAOAUAUACQAKABAHgDQgKgGgDgJQgIgTAcgTQAGAgAVABQAWACASgbQgUgHACgPQABgIAJgPQAKATAIAEQAPAJAUgZQghgUgmiUQgjiPgNgDQgbgFgOALQgNALgFAcg");
	this.shape_22.setTransform(670.2,356);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#1B544C").s().p("AguDJQgUgCgOgUQgLgRANgjQARgrgBgVQgBgQgPhhQgNhUADgTQAFgcANgLQAOgLAbAFQANADAjCPQAmCUAhAUQgUAZgPgJQgIgEgKgTQgJAPgBAIQgCAPAUAHQgSAbgWgCQgVgBgGggQgcATAIATQADAJAKAGQgFACgHAAIgFAAg");
	this.shape_23.setTransform(670.1,356);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#1BF3E6").ss(2).p("AgtDMQgYAAgRgXQgIgNACgRQACgKAIgWQAOgjgBgVQgBgVgLg/QgRhxADgUQAGggAQgLQAPgKAbAFQAKADALAfQAHAVAQBCQAUBRANAlQAVA+AWAOIADACIgCADQgRAVgPgBQgNgCgLgUQgJAPADAHQADAIAMAEIAFABIgDAEQgJAPgNAHQgMAIgLgDQgUgEgHgaQgQAMAAAMQAAALANAIIAGAEIgHADQgGACgIAAgAhXiZQgEASASBxQAKA/ABAVQACAYgPAkQgIAUgBAJQgDAPAHAKQAQAXAYgDQgKgIgBgMQAAgRAYgQIAFgDIABAFQAEAbARADQATAEARgYQgMgFgDgJQgEgMANgVIAFgHIADAGQAKAWALABQAJABANgOQgWgRgUg9QgMgkgVhSQgMg1gIgXQgLgmgIgBQgXgFgNAIQgNAJgFAdgAhbiZIAEAA");
	this.shape_24.setTransform(670.4,356);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#00071E").s().p("AhUC1QgIgNACgRQACgKAIgWQAOgjgBgVQgBgVgLg/QgRhxADgUQAGggAQgLQAPgKAbAFQAKADALAfQAHAVAQBCQAUBRANAlQAVA+AWAOIADACIgCADQgRAVgPgBQgNgCgLgUQgJAPADAHQADAIAMAEIAFABIgDAEQgJAPgNAHQgMAIgMgDQgTgEgHgaQgQAMAAAMQAAALANAIIAGAEIgHADQgGACgIAAQgYAAgRgXgAhViZQgEASASBxQAKA/ABAVQACAYgPAkQgIAUgBAJQgDAPAHAKQAQAXAYgDQgKgIgBgMQAAgRAYgQIAFgDIABAFQAEAbARADQATAEARgYQgMgFgDgJQgEgMANgVIAFgHIADAGQAKAWALABQAJABANgOQgWgRgUg9QgMgkgVhSQgMg1gIgXQgLgmgIgBQgXgFgNAIQgNAJgFAdIgEAAg");
	this.shape_25.setTransform(670.2,356);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#1BF3E6").ss(2).p("AhbiZQgDATANBUQAPBhABAQQACAVgRArQgOAjAMARQANAUAUACQAKABAHgDQgJgGgEgJQgHgTAcgTQAFAgAWABQAWACARgbQgUgHACgPQABgIAKgPQAJATAJAEQAPAJATgZQghgUgliUQgjiPgOgDQgbgFgNALQgOALgFAcg");
	this.shape_26.setTransform(670.3,356);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#1B544C").s().p("AguDJQgUgCgOgUQgLgRANgjQARgrgBgVQgBgQgPhhQgNhUADgTQAFgcANgLQAOgLAbAFQANADAjCPQAmCUAhAUQgUAZgPgJQgIgEgKgTQgJAPgBAIQgCAPAUAHQgSAbgWgCQgVgBgGggQgcATAIATQADAJAKAGQgFACgHAAIgFAAg");
	this.shape_27.setTransform(670.1,356);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#00071E").p("Agsi6QgMANgLByQgLB6gIAUQgHATgiAgQgbAaADAUQAEAYAZAJQANAFAMAAQgDgPADgQQAIggAhgFQAZAmAeASQAgAUAZgQQgQgQgDgTQgCgTAKgGQAKAUArACQAuACAIgfQgagNgPgWQgTgaAAglQAAhFgFhCQgIhigRgNQgXgSgcADQgdADgaAbg");
	this.shape_28.setTransform(645.5,363.1);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#27847A").s().p("Ah5DVQgagJgEgYQgDgUAbgaQAiggAIgTQAIgUALh6QAKhyANgNQAZgbAegDQAbgDAYASQARANAIBiQAFBCAABFQAAAlASAaQAPAWAaANQgIAfgtgCQgsgCgKgUQgKAGADATQACATARAQQgZAQghgUQgdgSgZgmQgiAFgHAgQgEAQADAPQgMAAgMgFg");
	this.shape_29.setTransform(645.5,363.1);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#1BF3E6").ss(2).p("Agwi9QAagbAdgEQAfgEAaATQATAPAIBvQAEA6AABCQAAAmAUAaQAPATAWALIADABIgBADQgHAbgjAFQgUACgUgGQgVgGgIgKQgDAFAAAFQgCAXAUATIAEADIgFADQgWAOgegNQghgPgfgtQgSAEgKAMQgIAMgBASQAAAKABAHIABAEIgEAAQgNAAgOgFQgbgKgEgaQgCgPAJgOQAGgIARgQQAcgbAIgTQAIgVAJhmQAGhEAEgaQAGgsAJgJIADACAARjVQgfAAgcAdQgIAIgGAtQgDAZgGBBQgFA2gDAUQgFAlgFAOQgFAOgMANQgGAHgPAOQgPAPgGAHQgIAMACANQADASARAJQALAGAOABQgDgdANgSQANgRAXgDIACAAIABACQAXAiAbASQAeAUAXgLQgUgWADgWQABgNAJgFIADgDIACAEQAEAJAUAGQAUAGAUgCQAcgDAHgUQg7gfAAhEQAAhRgGhEQgIhUgOgLQgTgOgXAAg");
	this.shape_30.setTransform(645.6,363.1);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#00071E").s().p("AhhDdQgNAAgOgFQgbgKgEgaQgCgPAJgOQAGgIARgQQAcgbAIgTQAIgVAJhmQAGhEAEgaQAGgsAJgJIADACIgDgCQAagbAdgEQAfgEAaATQATAPAIBvQAEA6AABCQAAAmAUAaQAPATAWALIADABIgBADQgHAbgjAFQgUACgUgGQgVgGgIgKQgDAFAAAFQgCAXAUATIAEADIgFADQgWAOgegNQghgPgfgtQgSAEgKAMQgIAMgBASIABARIABAEgAhmDVQgDgdANgSQANgRAXgDIACAAIABACQAXAiAbASQAeAUAXgLQgUgWADgWQABgNAJgFIADgDIACAEQAEAJAUAGQAUAGAUgCQAcgDAHgUQg7gfAAhEQAAhRgGhEQgIhUgOgLQgTgOgXAAQgfAAgcAdQgIAIgGAtQgDAZgGBBIgIBKQgFAlgFAOQgFAOgMANIgVAVQgPAPgGAHQgIAMACANQADASARAJQALAGAOABIAAAAg");
	this.shape_31.setTransform(645.5,363.1);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#1BF3E6").ss(2).p("Agsi6QgNANgKByQgLB6gIAUQgIATgiAgQgbAaADAUQAEAYAaAJQAMAFAMAAQgDgPAEgQQAHggAigFQAZAmAdASQAhAUAZgQQgRgQgCgTQgDgTAKgGQAKAUAsACQAtACAIgfQgagNgPgWQgSgaAAglQAAhFgFhCQgIhigRgNQgYgSgbADQgeADgZAbg");
	this.shape_32.setTransform(645.6,363.1);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#27847A").s().p("Ah5DVQgagJgEgYQgDgUAbgaQAiggAIgTQAIgUALh6QAKhyANgNQAZgbAegDQAbgDAYASQARANAIBiQAFBCAABFQAAAlASAaQAPAWAaANQgIAfgtgCQgsgCgKgUQgKAGADATQACATARAQQgZAQghgUQgdgSgZgmQgiAFgHAgQgEAQADAPQgMAAgMgFg");
	this.shape_33.setTransform(645.5,363.1);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#00071E").p("ABcgGQgWgTgigOQhCgcg4AXQAgAaATAVQAYAaAAAQQAJgOAwgUQAYgLAWgGg");
	this.shape_34.setTransform(645.8,331.6);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#27847A").s().p("AglAJQgUgWgggZQA5gYBCAcQAhAPAXASQgXAHgYAKQgvAVgKANQAAgPgXgag");
	this.shape_35.setTransform(646.1,331.1);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#00071E").p("AB/AAQAAAvglAhQglAhg1AAQg0AAglghQglghAAgvQAAguAlggQAlgiA0AAQA1AAAlAiQAlAgAAAug");
	this.shape_36.setTransform(648.3,321.2);

	this.instance = new lib.ClipGroup_1();
	this.instance.parent = this;
	this.instance.setTransform(647.8,319.4,1,1,0,0,0,14,13.1);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#1BF3E6").s().p("AhZBQQglgiAAguQAAguAlghQAlggA0gBQA1ABAlAgQAlAhAAAuQAAAuglAiQglAgg1AAQg0AAglggg");
	this.shape_37.setTransform(648.3,321.2);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#00071E").p("AAxg5QghgKgfAHQhBAOAABUQA9gcAuALQAYAGALALQgHgMgFgSQgLgjAKgeg");
	this.shape_38.setTransform(631.7,323.4);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#27847A").s().p("AAlAiQgugLg9AcQAAhUBBgOQAfgHAgAKQgJAeAKAjQAFASAHAMQgLgLgXgGg");
	this.shape_39.setTransform(630.7,322.1);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#00071E").p("AhyAUIANgTQARgWAXgNQBIgrBiA9Qg9AbgYAWIgMARQgLgNgVgKQgrgVgzAOg");
	this.shape_40.setTransform(656.1,308.6);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#27847A").s().p("AgRAcQgrgUgzAOIANgUQARgVAXgOQBIgrBiA9Qg9AbgYAXIgMARQgLgNgVgLg");
	this.shape_41.setTransform(655.8,308.5);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#00071E").p("ABqgMQgUgTglgLQhHgVhQAqQAhAkAzAVQAYALATADIAWgcQAcgbAfgHg");
	this.shape_42.setTransform(633.9,312.1);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#27847A").s().p("AgUAkQgygVghgkQBPgqBIAVQAkALAUATQgeAHgcAbIgXAcQgSgDgZgLg");
	this.shape_43.setTransform(634,312.1);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("#00071E").p("AgKhEIARAFQAVAIAQANQAzAogYBDQgvgqgzgJIgrgBIAbgWQAbgdAGgeg");
	this.shape_44.setTransform(661.4,329.6);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#27847A").s().p("AgfAQIgrgBIAbgWQAbgdAGgeIARAFQAVAIAQANQAzAogYBDQgvgqgzgJg");
	this.shape_45.setTransform(661.8,329.4);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("#00071E").p("AhogyIAZgBQAdABAcAGQBXAVAhBFQhCAKg3gJIgrgKQAAgOgFgTQgJgjgYgTg");
	this.shape_46.setTransform(667.8,318.8);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#27847A").s().p("AgUAvIgrgKQAAgOgEgTQgKgjgXgTIAYgBQAeABAbAGQBXAVAhBFQgiAGggAAQgdAAgagFg");
	this.shape_47.setTransform(667.4,318.8);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f().s("#00071E").p("AkABUQgPg0AEg9QAKh7BigvQCFg/BxAhQCDAmAqCcQAmCPh7BPQgrAcg4APQgrAMgcAAQhBAAhJgfQhogsgThTg");
	this.shape_48.setTransform(643.3,339.7);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#5D0093").s().p("AiFDTQhogsgThTQgPg0AEg9QAKh7BigvQCFg/BxAhQCDAmAqCcQAmCPh7BPQgrAcg4APQgrAMgcAAQhBAAhJgfg");
	this.shape_49.setTransform(643.3,339.7);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f().s("#1BF3E6").ss(2).p("AhSg1QA9AzAJAdQAVgTBJgaQgdgVgigLQg3gTguAQgAgSAvIAAgMQAAgNgUgWQgTgXgjgcIgFgEIAGgCQA5gYBEAcQAiAOAYAUIAFAEIgGACQgcAJgdAMQgmASgHALg");
	this.shape_50.setTransform(646.1,332.6);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#00071E").s().p("AgSAuQAAgNgUgXQgTgWgjgcIgFgEIAGgCQA5gYBEAcQAiAOAYAUIAFAEIgGACQgcAIgdANQgmASgHALIgHAKgAhSgqQA+AyAIAeQAVgTBJgaQgdgVgigLQgdgKgbAAQgXAAgWAHg");
	this.shape_51.setTransform(646.1,331.5);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f().s("#1BF3E6").ss(2).p("ABegMQgWgSgigPQhCgcg4AYQAgAZATAXQAYAZAAAPQAJgNAwgVQAYgJAWgIg");
	this.shape_52.setTransform(645.6,332.2);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#27847A").s().p("AglAJQgUgWgggZQA5gYBCAcQAhAPAXASQgXAHgYAKQgvAVgKANQAAgPgXgag");
	this.shape_53.setTransform(646.1,331.1);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f().s("#1BF3E6").ss(2).p("AgGhPQghAAgUAQQgeAVgCA1QAtgSAmABQAZABAUALQgSgsAKgkQgTgFgQAAgABAAnIgUgTQgMgLgWgFQgtgKg6AaIgGADIAAgGQAAg8AjgaQAZgTAnACQATABAQAEIAEABIgCAEQgIAcAJAjQAFAQAHAMg");
	this.shape_54.setTransform(633.2,325.4);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#00071E").s().p("AA+AsQgMgLgWgFQgtgLg6AbIgGADIAAgGQAAg8AjgaQAZgTAmACQAUABAQAEIAEABIgCAEQgIAcAJAiQAFARAHAMIAOAYgAgpgnQgeAVgCA1QAtgTAlABQAaABAUAMQgSgsAKgkQgTgFgRAAQggAAgUAQg");
	this.shape_55.setTransform(631.4,323);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f().s("#1BF3E6").ss(2).p("AAnhGQgggKgfAHQhBAOAABUQA9gbAuAKQAXAGALALQgHgMgFgRQgKgkAJgeg");
	this.shape_56.setTransform(632.6,324.7);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#27847A").s().p("AAlAiQgugLg9AcQAAhUBBgOQAfgHAgAKQgJAeAKAjQAFASAHAMQgLgLgXgGg");
	this.shape_57.setTransform(630.7,322.1);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f().s("#1BF3E6").ss(2).p("AhIABQAyAAAjAgQAPgZBMgjQhJgrg7ARQgvANgdAsQAQgDAQAAgAASAyIgGgHQgMgNgUgKQgpgUgyAOIgIACIAEgIQAAgBAVgbQAcgeAkgLQBAgSBQAxIAGAEIgGADQg5AagZAVIgOAQg");
	this.shape_58.setTransform(655.9,309.6);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#00071E").s().p("AAMAzQgLgNgVgKQgpgUgyAOIgIACIAEgIIAVgcQAcgeAkgLQBAgSBQAxIAGAEIgGADQg5AagZAVIgNAQIAAAKgAANApQAPgZBMgjQhJgrg6ARQgvANgeAsQAQgDAQAAQAzAAAiAgg");
	this.shape_59.setTransform(655.9,308.8);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f().s("#1BF3E6").ss(2).p("Ah2ASIANgSQASgXAWgNQBIgrBjA9Qg9AbgZAWIgMARQgKgNgVgKQgrgVg0AOg");
	this.shape_60.setTransform(656.5,308.8);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#27847A").s().p("AgRAcQgrgUgzAOIANgUQARgVAXgOQBIgrBiA9Qg9AbgYAXIgMARQgLgNgVgLg");
	this.shape_61.setTransform(655.8,308.5);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f().s("#1BF3E6").ss(2).p("AAVA1IgCAAQgUgEgZgKQgzgWghgkIgDgEIAEgCQBSgsBIAXQAkALAWAUIAFAFIgHABQgdAHgbAagAhlgVQAdAfArATQAZALAWAFQAgguAqgNQgdgVglgHQg9gMhCAhg");
	this.shape_62.setTransform(634.4,312.2);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#00071E").s().p("AAWA1QgVgDgYgLQgzgVghglIgDgDIAEgDQBSgrBIAXQAlALAVAUIAFAEIgHACQgdAGgbAbIgXAdgAhigUQAdAeArAUQAZALAWAEQAgguAqgNQgcgVgmgHQgQgDgQAAQguAAgxAZg");
	this.shape_63.setTransform(634.1,312.1);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f().s("#1BF3E6").ss(2).p("ABrgMQgUgTgkgLQhIgWhPAqQAhAlAyAVQAZAKASADIAXgbQAcgcAegGg");
	this.shape_64.setTransform(633.7,312.2);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#27847A").s().p("AgUAkQgygVghgkQBPgqBIAVQAkALAUATQgeAHgcAbIgXAcQgSgDgZgLg");
	this.shape_65.setTransform(634,312.1);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f().s("#1BF3E6").ss(2).p("ABiBFIgEgEQgugpgxgJQgqgBgBAAIgUAEIARgLQABAAAZgWQAagcAFgdIABgEIAEABQABAAAgAMQAhAQAQAbQAUAjgRAxgAgbAFQA/AAA7AzQANgqgSgeQgUgkg1gPQgJAogoAgg");
	this.shape_66.setTransform(658.9,329.9);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#00071E").s().p("ABIBFQgtgpgygJIgqgBIgUAEIARgLIAagWQAbgcAFgdIAAgEIAEABIAgAMQAiAQAPAbQAUAjgRAwIgBAGgAg1AJIAFAAQA+gBA7AzQANgpgRgeQgUgkg1gPQgIAngpAhg");
	this.shape_67.setTransform(661.1,329.5);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f().s("#1BF3E6").ss(2).p("AgGhGIARAFQAVAIAQANQAzAogYBDQgvgqgzgJIgrgBIAbgWQAbgdAGgeg");
	this.shape_68.setTransform(661,329.8);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#27847A").s().p("AgfAQIgrgBIAbgWQAbgdAGgeIARAFQAVAIAQANQAzAogYBDQgvgqgzgJg");
	this.shape_69.setTransform(661.8,329.4);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f().s("#1BF3E6").ss(2).p("AgzAjQATAHAeADQAxAGA4gHQghhAhSgUQgkgIgjABQAdAeADA0gAApA3QgnAAgggGQgWgFgEgDIgDgBIAAgCQAAgPgEgRQgKgjgWgSIgHgGIAJgBQABAAAZAAQAeABAcAGQBYAWAhBGIACAFIgFAAQgkAFggAAg");
	this.shape_70.setTransform(666.7,318.7);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#00071E").s().p("AgjAxQgWgFgFgDIgCgBIAAgCQAAgPgFgRQgJgjgWgSIgIgGIAKgBIAZAAQAeABAcAGQBZAWAhBGIACAFIgFAAQglAFggAAQgmAAgggGgAhZgvQAeAeACA0QATAHAeADQAxAGA5gHQghhAhSgUQgfgHgeAAIgLAAg");
	this.shape_71.setTransform(667.2,318.7);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f().s("#1BF3E6").ss(2).p("AhsgyIAZgBQAdABAcAGQBXAVAhBFQhCAKg3gJIgrgKQAAgOgFgTQgJgjgYgTg");
	this.shape_72.setTransform(668.2,318.8);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#27847A").s().p("AgUAvIgrgKQAAgOgEgTQgKgjgXgTIAYgBQAeABAbAGQBXAVAhBFQgiAGggAAQgdAAgagFg");
	this.shape_73.setTransform(667.4,318.8);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f().s("#1BF3E6").ss(2).p("AAFD1QgXAAgigGQgtgJgngQQhogtgUhUQgPg4AFg+QAKh7BjgvQBMgkBKgFQBJgEA8AbQBoAxAlCIQAbBmg3BHQgpA2hTAfQg+AXgsAAgAAIjtQhQAAhWAoQhfAugKB5QgFA8APA1IAAAAQATBSBpArQBIAeA+AAQArAAA8gXQBRgeAog0QA1hFgahiQgkiFhmgvQgxgXg9AAg");
	this.shape_74.setTransform(643.4,339.7);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#00071E").s().p("Ag0DvQgtgJgngQQhogtgUhUQgPg4AFg+QAKh7BjgvQBMgkBKgFQBJgEA8AbQBoAxAlCIQAbBmg3BHQgpA2hTAfQg+AXgsAAQgXAAgigGgAiejFQhfAugKB5QgFA8APA1IAAAAQATBSBpArQBIAeA+AAQArAAA8gXQBRgeAog0QA1hFgahiQgkiFhmgvQgxgXg9AAQhQAAhWAog");
	this.shape_75.setTransform(643.4,339.7);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f().s("#1BF3E6").ss(2).p("AkABUQgPg0AEg9QAKh7BigvQCFg/BxAhQCDAmAqCcQAmCPh7BPQgrAcg4APQgrAMgcAAQhBAAhJgfQhogsgThTg");
	this.shape_76.setTransform(643.3,339.7);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#5D0093").s().p("AiFDTQhogsgThTQgPg0AEg9QAKh7BigvQCFg/BxAhQCDAmAqCcQAmCPh7BPQgrAcg4APQgrAMgcAAQhBAAhJgfg");
	this.shape_77.setTransform(643.3,339.7);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f().s("#00071E").p("AAZjFQgPALggBtQglB1gMASQgLARgoAZQggATgBAVQgBAYAXAOQALAHAMACQgDgLAEgLQAHgWAiACQAPAnAaATQAbAUAcgLQgVgQgGgQQgFgQAKgEQBHAcBIgWQgZgQgIgKQgMgPAHghQANhAAKhWQANhzgOgQQgUgWgbgDQgegEgfAVg");
	this.shape_78.setTransform(613.3,357.6);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#27847A").s().p("AgXDLQgagTgQgnQghgCgIAWQgEALADALQgLgCgMgHQgWgOABgYQABgVAggTQAngZAMgRQAMgSAkh1QAhhtAOgLQAfgVAeAEQAcADATAWQAOAQgNBzQgJBWgOBAQgHAhANAPQAHAKAaAQQhJAWhHgcQgJAEAFAQQAGAQAVAQQgKAEgKAAQgRAAgSgNg");
	this.shape_79.setTransform(612.9,357.6);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f().s("#1BF3E6").ss(2).p("AAEDcQgWAAgWgTQgVgTgOgiQgWAAgJAKQgGAHAAALQAAAKABAAIACAGIgGgBQgNgDgMgIQgYgPABgaQABgPAMgMQAIgHATgMQAigUALgRQAMgSAehjQAUhBAJgZQAPgpAKgIQAfgUAeACQAfACAVAYQAQASgPB9QgKBYgMA2QgGAaAHANQAEAIARAMIAUAPIgGACQgjALgmgBQgmgCgigNQgBABAAADQgBAIAFALQAIAMAOAKIAFAEIgGADQgLAEgKAAgAhPCNIAJAAIABACQANAiAWATQAYAVAagGQgbgZADgTQACgIAGgDIABAAIACAAQAfANAjACQAiACAhgJIgIgGQgTgMgFgKQgIgPAGgdQAOhBAKhaQAMhtgMgPQgSgUgZgDQgdgFgfAVQgPALglB8QgfBkgMATQgNATgiAUQgTALgGAHQgLAKgBANQgBAdAmANQgDgRAKgMQAKgMAXAAg");
	this.shape_80.setTransform(613.7,357.6);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#00071E").s().p("AgiDJQgVgTgOgiQgWAAgJAKQgGAHAAALQAAAKABAAIACAGIgGgBQgNgDgMgIQgYgPABgaQABgPAMgMQAIgHATgMQAigUALgRQAMgSAehjQAUhBAJgZQAPgpAKgIQAfgUAeACQAfACAVAYQAQASgPB9QgKBYgMA2QgGAaAHANQAEAIARAMIAUAPIgGACQgjALgmgBQgmgCgigNQgCABAAADQgBAIAGALQAIAMAOAKIAFAEIgGADQgLAEgKAAQgWAAgWgTgAhACNIABACQANAiAWATQAYAVAagGQgbgZADgTQACgIAGgDIABAAIACAAQAfANAjACQAiACAhgJIgIgGQgTgMgFgKQgIgPAGgdQAOhBAKhaQAMhtgMgPQgSgUgZgDQgdgFgfAVQgPALglB8QgfBkgMATQgNATgiAUQgTALgGAHQgLAKgBANQgBAdAmANQgDgRAKgMQAKgMAXAAg");
	this.shape_81.setTransform(613.1,357.6);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f().s("#1BF3E6").ss(2).p("AAVjFQgOALghBtQgkB1gMASQgMARgnAZQggATgBAVQgBAYAWAOQAMAHALACQgDgLAEgLQAIgWAhACQAQAnAaATQAbAUAcgLQgVgQgFgQQgGgQAJgEQBHAcBJgWQgagQgHgKQgNgPAHghQAOhAAJhWQANhzgOgQQgTgWgcgDQgegEgfAVg");
	this.shape_82.setTransform(613.6,357.6);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#27847A").s().p("AgXDLQgagTgQgnQghgCgIAWQgEALADALQgLgCgMgHQgWgOABgYQABgVAggTQAngZAMgRQAMgSAkh1QAhhtAOgLQAfgVAeAEQAcADATAWQAOAQgNBzQgJBWgOBAQgHAhANAPQAHAKAaAQQhJAWhHgcQgJAEAFAQQAGAQAVAQQgKAEgKAAQgRAAgSgNg");
	this.shape_83.setTransform(612.9,357.6);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f().s("#00071E").p("AAZieQgKAQgVBSQgaBfgFAPQgHATghAiQgbAaAEAUQAFAXARAKQAJAFAHABQgGgJAAgKQABgVAhgFQgHAfAUAKQATALAagSQgQgOAIgOQAEgGAPgLQACAWAFAHQALAOAbgPQgVggAZiWQAZiRgMgIQgWgQgRAFQgRAEgQAYg");
	this.shape_84.setTransform(629.3,352.4);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#1B544C").s().p("AgVC4QgUgKAHgfQghAFgBAVQAAAKAGAJQgHgBgJgFQgRgKgFgXQgEgUAbgaQAhgiAHgTQAFgPAahfQAVhSAKgQQAQgYARgEQARgFAWAQQAMAIgZCRQgZCWAVAgQgbAPgLgOQgFgHgCgWQgPALgEAGQgIAOAQAOQgRALgNAAQgIAAgHgEg");
	this.shape_85.setTransform(629.3,352.4);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f().s("#1BF3E6").ss(2).p("Ag3C/IgHAAQgJgBgKgFQgTgLgEgZQgDgPAJgOQAGgJAQgQQAcgbAHgUQAFgOAShDQAbhtANgSQASgcATgDQASgDAWAPQAJAHgDAhQgCAZgLBAQgPBUgDAlQgFBCAOAVIACADIgDACQgYANgNgIQgMgGgCgXQgOAJAAAJQgBAIAKAIIAEAEIgEACQgPAKgNACQgPABgKgHQgQgLAEgbQgUAEgEALQgDAHADAIQACAFACADgAgdCJIgCAGQgGAaAPAKQAPALAYgOQgIgLAAgJQABgNAVgNIAHgFIABAHQAAAYAKAGQAIAFARgJQgNgYAGhAQADgoAPhRQAJg5ADgVQAEgngGgEQgUgPgPADQgPADgRAZQgLARgcBsQgPA7gIAXQgIAVgdAcQgPAPgFAIQgIAMACANQAGAbAWAHQgGgMAFgLQAGgPAdgGg");
	this.shape_86.setTransform(629.3,352.4);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#00071E").s().p("Ag+C/QgJAAgKgFQgTgLgEgZQgDgPAJgPQAGgIAQgRQAcgbAHgTQAFgPAShDQAbhtANgSQASgbATgEQASgDAWAQQAJAGgDAhQgCAZgLBBQgPBTgDAmQgFBBAOAVIACAEIgDACQgYAMgNgHQgMgGgCgYQgOAKAAAIQgBAJAKAIIAEADIgEADQgPAKgNABQgPACgKgHQgQgLAEgcQgUAFgEALQgDAGADAJIAEAHIAEAHgAgfCQQgGAaAPAKQAPALAYgPQgIgKAAgJQABgNAVgOIAHgEIABAGQAAAZAKAFQAIAFARgIQgNgZAGhAQADgnAPhRIAMhPQAEgmgGgFQgUgOgPADQgPADgRAYQgLARgcBsQgPA8gIAWQgIAVgdAdQgPAOgFAIQgIANACAMQAGAcAWAGQgGgMAFgKQAGgQAdgFIAGgBg");
	this.shape_87.setTransform(629.3,352.4);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f().s("#1BF3E6").ss(2).p("AAZieQgKAQgVBRQgaBggFAOQgHAUghAhQgbAaAEAVQAFAXARAKQAJAFAHAAQgGgJAAgKQABgUAhgGQgHAfAUALQATAKAagSQgQgOAIgNQAEgHAPgKQACAVAFAIQALANAbgOQgVggAZiWQAZiSgMgIQgWgQgRAFQgRAFgQAYg");
	this.shape_88.setTransform(629.3,352.4);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#1B544C").s().p("AgVC4QgUgKAHgfQghAFgBAVQAAAKAGAJQgHgBgJgFQgRgKgFgXQgEgUAbgaQAhgiAHgTQAFgPAahfQAVhSAKgQQAQgYARgEQARgFAWAQQAMAIgZCRQgZCWAVAgQgbAPgLgOQgFgHgCgWQgPALgEAGQgIAOAQAOQgRALgNAAQgIAAgHgEg");
	this.shape_89.setTransform(629.3,352.4);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#0D0116").s().p("AkrBaQh8gmAAg0QAAg0B8glQB8glCvAAQCvAAB9AlQB7AlAAA0QAAA0h7AmQh9AlivAAQiuAAh9glg");
	this.shape_90.setTransform(639.4,376.3);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f().s("#00071E").p("AgtgKQgIAHAAADQAAABAIAIQAHAGAlgMQASgGARgHg");
	this.shape_91.setTransform(188.2,146.5);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#FF3EF1").s().p("AgjAJQgIgIAAgBQAAgDAIgHIBPAAIgkANQgYAIgLAAQgGAAgCgCg");
	this.shape_92.setTransform(187.2,146.5);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f().s("#1BF3E6").p("AgzgGIgFAGQAAAAAGAGQACADARgEQAQgEAUgHgAgtAPQgIAAgDgDQgJgIAAgEQAAgEAJgJIABgBIBlAAIgSAIQgzAVgWAAg");
	this.shape_93.setTransform(189,146.5);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#00071E").s().p("AguAMQgJgJAAgDQAAgEAJgJIABgBIBlAAIgSAIQgzAVgXAAQgHAAgDgDgAgvAAIAHAGQACACARgDQAPgEAUgHIg3AAg");
	this.shape_94.setTransform(188,146.5);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f().s("#1BF3E6").p("AgtgKQgIAHAAADQAAABAIAIQAHAGAlgMQASgGARgHg");
	this.shape_95.setTransform(188.2,146.5);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#FF3EF1").s().p("AgjAJQgIgIAAgBQAAgDAIgHIBPAAIgkANQgYAIgLAAQgGAAgCgCg");
	this.shape_96.setTransform(187.2,146.5);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#B6149B").s().p("AgkAQQAAgwgBgKQgDgZASgPQAPgOATABQAQAAAGAJQAFAIgBATQAAAOgNAKIgOAHIgBAfQABAlAIAZIgagoIgKA8IgKgoIgIAzQgCgaABg2g");
	this.shape_97.setTransform(180.8,153.4);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#6EFFF1").s().p("AgRB9QgSgJgBhUQABhagCgSQgDgZASgPQAPgOATABQAQAAAGAJQAFAIgBATQAAAOgNAKIgOAHIgBAgQABAkAIAZIANApQAFAjgRAPQgJAIgLAAQgHAAgKgFg");
	this.shape_98.setTransform(180.8,156.8);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#B6149B").s().p("AgtAHIAJgGQAKgEAJgCIA/gNIhWAlg");
	this.shape_99.setTransform(222.3,140.7);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#B6149B").s().p("Ag1gaIBKAWQAQADARANIgIAOg");
	this.shape_100.setTransform(207.5,139.2);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f().s("#00071E").p("AAcgNQgGANgHAGQgNAKgigH");
	this.shape_101.setTransform(222.6,143.7);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f().s("#00071E").p("AgigVQAMAXADADQARAOApAA");
	this.shape_102.setTransform(206.9,142.5);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f().s("#659474").p("AgLgGQgDAGABAEQACAGAFACQAFADAFgCQAFgBADgFQADgFgCgFQgBgGgGgCQgFgDgEACQgGABgCAFg");
	this.shape_103.setTransform(221.8,142.9);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#00071E").s().p("AgGAMQgEgCgDgGQgBgEADgGQADgFAFgBQAEgCAGADQAFACABAGQACAFgDAFQgDAFgFABIgEABQgCAAgEgCg");
	this.shape_104.setTransform(221.8,142.9);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f().s("#00071E").p("AglAAIARgNQAWgKAgAQQgGANgHAGQgNAKgigH");
	this.shape_105.setTransform(222,143.1);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#FFFFFF").s().p("AgYAPIgLgPIAQgNQAXgKAgAQQgHANgHAGQgHAGgPAAQgKAAgOgDg");
	this.shape_106.setTransform(221.9,143.1);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f().s("#659474").p("AAQgEQACAGgEAGQgDAGgGACQgGACgGgDQgGgDgCgHQgCgFADgHQADgFAHgDQAFgCAHAEQAFADADAGg");
	this.shape_107.setTransform(207.5,142);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#00071E").s().p("AgHAOQgGgDgCgGQgCgGADgFQADgGAHgDQAFgCAHADQAFADADAHQACAGgEAGQgDAGgGACIgFABQgDAAgEgDg");
	this.shape_108.setTransform(207.5,142);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f().s("#00071E").p("AArAGQgEgJgNgIQgZgRgoAKQAMAXADADQARAPApAA");
	this.shape_109.setTransform(207.4,142.2);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#FFFFFF").s().p("AgZAIQgDgDgNgXQApgKAZARQAMAIAFAJIgJARQgqAAgQgPg");
	this.shape_110.setTransform(207.5,142.2);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#3C9096").s().p("AAAAEQgMgBABgEQAAAAAAgBQAAAAABAAQAAgBABAAQABAAABAAIAHAAQANACgBACQAAADgGAAIgGAAg");
	this.shape_111.setTransform(215,149.4);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#B6149B").s().p("AgbAGIgRgSQAMgGAUACQAKACAHACQAZAAAKAFQAFADAAACQgCAEgHAFQgMAKgTAAQgSAAgOgLg");
	this.shape_112.setTransform(214.2,152.7);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f().s("#220135").p("Ag2gGIBrASQBzANAlgfQgchWgkgmQg0g4hdAAQhbAAg1BGQggApgPA7QgKAnAABGQAeAUCDBHg");
	this.shape_113.setTransform(207.2,138);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#5D0093").s().p("AjNBfQABhGAJgnQAPg7AggqQA1hFBbAAQBdAAA1A4QAjAmAcBWQglAehzgMIhrgSIAKC+QiDhHgegUg");
	this.shape_114.setTransform(207.2,137.9);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f().s("#6EFFF1").p("AgnC/IgIgEQiDhHgegUIgCgBIAAgDQAAhHAKgoQAPg/AkgrQA3hEBZAAQBfAAA2A5QAlAoAdBXIABADIgDACQgjAdhmgIQg3gEhCgOgAjIBZQAPAKCHBLIgKi8IAGACQABAABnARQBvANAmgbQgdhVgjgkQgyg1haAAQhUAAg1BBQghApgQA9QgJAlAABEg");
	this.shape_115.setTransform(207.2,138.2);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#220135").s().p("AgvC8QiDhGgegUIgCgCIAAgDQAAhHAKgnQAPg/AkgsQA3hDBZAAQBfAAA2A5QAlAnAdBYIABADIgCACQgkAdhlgIQg3gEhDgPIALDAgAiNh1QgiApgQA9QgJAmAABEQAQAKCGBKIgKi7IAHABIBnASQBvAMAmgbQgdhUgiglQgyg0hbAAQhUAAg0BAg");
	this.shape_116.setTransform(207.2,138);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f().s("#6EFFF1").p("Ag2gGIBrASQBzANAlgfQgchWgkgmQg0g4hdAAQhbAAg1BGQggApgPA7QgKAnAABGQAeAUCDBHg");
	this.shape_117.setTransform(207.2,138);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#5D0093").s().p("AjNBfQABhGAJgnQAPg7AggqQA1hFBbAAQBdAAA1A4QAjAmAcBWQglAehzgMIhrgSIAKC+QiDhHgegUg");
	this.shape_118.setTransform(207.2,137.9);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#ED1DD5").s().p("AgTAKIgKgnIA7A7g");
	this.shape_119.setTransform(204.2,145.9);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#ED1DD5").s().p("AgTAKIgKgnIA7A7g");
	this.shape_120.setTransform(204.2,149.9);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#6EFFF1").s().p("AgTBkIhfgZQgFiHAAgoQBNAUBUACQAbABAPgCQALgCAZgJQAAAogKAeQgLAigdAkQgYAegKAHQgTAOgXAAIgNgBg");
	this.shape_121.setTransform(213.7,147.4);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f().s("#220135").p("AAahgIABACQAAACAAACIATC3IhZgUIAngzQAjg6gEg2");
	this.shape_122.setTransform(223.1,147.1);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#5D0093").s().p("AgsBIIAngzQAjg6gFg2IAUC3g");
	this.shape_123.setTransform(223.2,147.2);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f().s("#1BF3E6").p("AA3BiIhpgXIAGgHQAAAAAmgyQAjg8gFg2IAAgBIAKgBIAAABgAgfBFIBKAQIgNh/QgOA5gvA2g");
	this.shape_124.setTransform(222.8,147.2);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#220135").s().p("Ag0BLIAGgGIAmgzQAjg7gFg2IAAgCIAKgBIAAACIAVDDgAggBFIBKARIgOh/QgOA4guA2g");
	this.shape_125.setTransform(223,147.2);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f().s("#1BF3E6").p("AAahhIABAGIATC3IhZgUIAngzQAjg6gEg2");
	this.shape_126.setTransform(223.1,147.2);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#5D0093").s().p("AgsBIIAngzQAjg6gFg2IAUC3g");
	this.shape_127.setTransform(223.2,147.2);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#B6149B").s().p("AAbA0QgPgEgDgGQgCgDAAgRQgGgGg/gfIAjACIgegUIAyAKIg8geIAtADIAwAnQAaAIAFAFQARAQgJAUQgHAQgSAAQgGAAgHgCg");
	this.shape_128.setTransform(230,185.3);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#6EFFF1").s().p("AAxBCQgPgEgDgGQgCgDAAgRQgFgFgxgZQgygZgFgFQgPgPALgQQAMgQAWAHQAUAHASANIA8AuQAaAIAFAGQARAQgJAUQgHAPgSAAQgGAAgHgBg");
	this.shape_129.setTransform(227.8,183.9);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#6EFFF1").s().p("AhpAnQgNgQAMgTQAOgUAlADIBigQQAhgVAVAKQAQAJAAAVQAAAQgOAKQgOAKgZgCIhTAOQgnAGgUAAQgTAAgEgFg");
	this.shape_130.setTransform(189.6,165.3);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#B6149B").s().p("AAOCDQgmgEgWgPQgTgNAEgMQAKgPAFgKIAJhRQAHhHAYgSQAVgWAYAAQAYAAAAAWQAAAPgiBYQgeBSAEAFIATASQAOANAHAJQAIAJgWAAIgPAAg");
	this.shape_131.setTransform(197.3,224.4);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#333333").s().p("AgGAAQAAgJAGAAQADAAACADQACADAAADQAAAEgCADQgCADgDAAQgGAAAAgKg");
	this.shape_132.setTransform(195.8,194.4);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#999999").s().p("AgGAAQAAgJAGAAQAHAAAAAJQAAAKgHAAQgGAAAAgKg");
	this.shape_133.setTransform(196.8,198);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#999999").s().p("AgJAOQgDgGAAgIQAAgIADgFQAFgGAEAAQAFAAAEAGQAFAFAAAIQAAAIgFAGQgEAGgFAAQgEAAgFgGg");
	this.shape_134.setTransform(196.5,194);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#B6149B").s().p("AglBvQgOhHgFg2QgIhXARgSQAQgTAjALQAqAMAKA3QAKA1gVBDQgLAigMAXQgNAJgNAFQgGABgFAAQgRAAgFgVg");
	this.shape_135.setTransform(201.5,202.1);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#00071E").s().p("AhYgJIAPgJQARgKANAAQAJAAASAFQAQAFAQAAQANAAAigJQAYgGACAGQACAKgEAOQgFAQgLANQgjgPgUAAQgbAAg+AUg");
	this.shape_136.setTransform(205.5,170.8);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#2C6A72").s().p("AhaAiIASgDQATgJAHgYQAGgZgKgNIgMgHQANgEANgBQAFgFAGgYIA3ALQgDAXAGAFQAKAKAeAKIAPAfQAKAlgZAfQgegTgUgBQgNAAgpANIgpAMQgHgVgLgbg");
	this.shape_137.setTransform(205.4,165.7);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#B6149B").s().p("AhWBJQgKgMgEgRIgDgOQAAgNASgoQARgoAAgVIAHAmQAPAqAsAYIgYgfQgQgYAAgYQALARATAMQAWAPAHAGQgGgMgMgUIgLgSQAIAFAcAPQARAJAGALIgUgoIAQALQASANAGAGQgGgNgFgbIgEgZQAFAKAdAlQAYAlgIAPQgOAdgbAXQgZAUgYAIQgbAKgVAAQggAAgSgWg");
	this.shape_138.setTransform(206.5,189);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#6EFFF1").s().p("AhTDLQgJgMgFgQIgCgPQAAgNARgpQASgnAAgWQAAgZgUg2IgUgzQgDgEAAgJQAAgRANgUQAHgKAWgFQAMgEAJgBQAKgKAKg8IA2APIgGAdQgFAfAGAFQAKALAeAKIAPAfQAKAmgZAfQgKANgDAPQgEARAHAOQAFAKAdAmQAZAkgJARQgOAcgbAXQgYAUgZAIQgaAKgWAAQggAAgSgWg");
	this.shape_139.setTransform(206.1,176);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#6EFFF1").s().p("AAiBbQgXgMg5hXQgMgTgEgOQgEgMAAgQQAAgPANgGQAMgGAPAHQAOAHAJASQAGAPAAALQAAAFAbAjQAdAoAFAJQAHAWgLANQgHAIgIAAQgFAAgGgDg");
	this.shape_140.setTransform(216.3,172.4);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#89127B").s().p("AANCAQgQgSgTgeQgmg7gHg1QgHg3AhgbQAYgUAaADQAQABAYBkQAXBggDAlQgDAcgaABg");
	this.shape_141.setTransform(215.3,200.2);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#999999").s().p("AgGABQAAgDACgEQACgDACAAQACAAACADQACADABADQAAAEgCADQgCADgCAAQgGAAgBgJg");
	this.shape_142.setTransform(220,197);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#999999").s().p("AgEARQgFgFgDgIQgCgHACgGQACgIAFgBQAFgCAFAEQAFAFADAIQACAHgCAGQgCAHgFACIgDABQgDAAgEgDg");
	this.shape_143.setTransform(219.4,193);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#89127B").s().p("AglB8QgVgJACgNQAIgQADgLIgGhRQgFhHAVgWQASgbAWgEQAYgEAEAXQACAOgSBdQgRBWAHAEIAuAgQAOAJgpAEIgTAAQgaAAgSgHg");
	this.shape_144.setTransform(218.4,222.9);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#0D0116").s().p("AidA6QhCgYAAgiQAAghBCgZQBBgYBcAAQBcAABCAYQBCAZAAAhQAAAihCAYQhCAZhcAAQhcAAhBgZg");
	this.shape_145.setTransform(206.3,237.7);

	this.txtMouvements = new cjs.Text("Utilisez les flèches ou les touches WASD du clavier pour faire se déplacer Andromeda", "16px 'Prompt Light'", "#FFFFFF");
	this.txtMouvements.name = "txtMouvements";
	this.txtMouvements.lineHeight = 27;
	this.txtMouvements.lineWidth = 359;
	this.txtMouvements.parent = this;
	this.txtMouvements.setTransform(254.7,203);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#27847A").s().p("AhSBKQhWgJgWgVQgPgPgxgQQgkgMAIgOQAJgTA0gCQAagBAZACIAQgFQASgJAJgPIAAAxIARgRQAUgRAMAAQgJAYAEAWQACAKADAGIAGgFQANgNAKgjIAiA1QAAgPAPghIAKASQAMATAGAQQAKgKgKgrIAiAhQABgHAEgMQAIgXAMgOQARgVAVAAQgSAJACAaQACANAEALIASgRQAXgSAcgJQgMASAEARQADAJAFAFIA/giIgGATQgDAUAJAIQAsALgHARQgIARgnAEIhUARQg9AMhcAAQgnAAgrgEg");
	this.shape_146.setTransform(154.3,464.7);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#FF3EF1").s().p("AiwCEQgMgDgGgUQgFgSAEgXQAJg5AsAAQAbAAAZATQAWARAJgCQANgDACgYIAFhFQAAgSAMgPQASgXAogOQAegKAZgBIACAAIAGAHQAPAOAcAOQAbANAiAIIgCACQgPAOgbBFIgDAIQgahAgZgYQgSgTgUgFQgVgGgSALQgJAFgFALQgJASgBAdQgDAaADAaQADAhgUAZQgVAZgeAAQgiAAgHgXQgIgagTgEQgYgGgCAsQgCAogJAAIgCgBg");
	this.shape_147.setTransform(134.7,433.3);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#ED1DD5").s().p("AhBAOQAzgoBUgYQADAKAbAWQgZAAgeALQgpAMgRAXQgWgCgSADQgTAEgPAKIgMAIg");
	this.shape_148.setTransform(133.3,422);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#B6149B").s().p("AgVgNQAVAPAWAMQgcgOgPgNg");
	this.shape_149.setTransform(146.3,422.1);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#ED1DD5").s().p("AAVBeQAEgNAAgYIgBgqQABgiACgOIAEgNIgKABIgJgBQgQgEgagNIgogUQAGgLAIgGQASgLAVAGQATAGATATQAYAYAaBAQgPApgKATQgPAegPAKQAEgHABgHg");
	this.shape_150.setTransform(142.7,434.2);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#1E367E").s().p("AgFBoIgLgSQgPAiAAAPIgig2QgKAjgNAOQgBgLALgdQALgagFgJQgGgMgRgIIgQgFQAigFAKAFQAFg+gKgKQgGgGADgIIAGgIIAJAKIAdgjQAjgmAegMIgMAUQgMAWgCAJQgCAEAOgBQARgCAEAEQAEADgEAPQgDAPADABQAOADAmgTIATgLQgIALgeAgIgeAeIAdgKQgFAOgOAKQgGADAHAQQADAKANAXQgMAOgIAXQgEAMgBAIIgigiQAKAsgKAKQgGgQgLgUg");
	this.shape_151.setTransform(155.9,452.7);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#5D0093").s().p("AjNDdIgRgGQAjgDAmgZQAqgcAMgkQgBAHgEAHQAPgKAPgeQAJgTAQgpIADgIQAbhFAPgPIABgBQghgJgbgNQgVgMgWgQIgGgGIgCAAQgbgWgCgKQhVAZgzApIgiAkQgMAKgIAKQgMgyBQgxQA3ghA5gOQgGgYAdgRQAPgJAPgDIgJAMQgKANAAAJQAAAQAOAGQAGADArAJQAeAGA2gMIBugYQAzgJAkATQARAJAIALIAHgBQAKgEAMgPQgEAeAPAlQAQAmAVAHQgYAJghAeQgmAhADATQADATgdAxQgeA2gCAOIgZgUQgRgMgMADQgIACgKAJQgmATgOgDQgEgBAEgPQADgPgDgDQgFgEgRACQgOABACgEQADgJAMgWIALgUQAlgPAdgmQAeglgSgLQgMgHh5B5QiACAgZAFQgNACgNAAQgKAAgKgBg");
	this.shape_152.setTransform(154.4,431.3);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f().s("#1BF3E6").ss(1,0,0,4).p("AAOFQQgnAAgrgFQhbgJgYgYQgOgNgogNQgTgGgIgEQgMgGgDgJQgFgKAGgLQALgWAugFQAdgDAkADQAXgEALgTIAIgOIgsgHIA2gIIAFgIIAAAHIARgCQATgDAPABQACgqgEgJQgFgGgBgFQg+A7gXAEQgbAGgYgFQgTgGgBgBIgjgTIAngEQAngEAkgcQAhgZAJgaQAEgQgBgvIAAgLQgBghADgRIgFAAQgSgEgdgPIgSgKIgEgBIgBgBIgEgCQgKAgAFAyQAEAngaAdQgZAbghAAQgcAAgNgLQgJgIgEgRQgDgJgCgDQgDgDgJgCQgFAAgBABQgEACgCAgQgBARgBAHQgCALgHAEQgHAGgJgDQgSgFgIgXQgHgVAEgaQAEgfASgTQASgTAaAAQAVAAASAIQAKAGAPALQAMAKAEgBQAEgBABgNQABgGACgaIACgoQAAgJAFgMQgKAAgIACQgUAFgRAMQgOAKgGAJIgQAWIgGgaQgOg2BLgyQAygiBDgUQABgLAGgJQAJgQAXgLQANgGAMgDIAogJIgcAdQgQARAAAJQAAAIAFADQAFADAdAFIAOADQAVAEAegEQAVgDAsgLQAqgJAfgGQAvgIAjAMQAXAJAOAPQAGgDAJgLIAbgiIgGArQgDAbAOAhQANAiARAFIAfAKIgfANQgWAJggAcQghAdACANQADAQgLAYQgGAOgSAfQgYAqgCAMIgDATIgQgLQgEgDgJgIQgSgQgJgBQgKAMgVAWIAFgBIgIAXQgEAPgRANQACAIAJAQQAQgMATAAIA0AAIguAXQgMAFADATQAZgVAhgLIAhgLIgTAdQgJAOADAMIBUgtIgOAgQgJAXAFAKQAsALgBAZQgBANgQAKQgQAKgaACQgWACgeAIQgnAKgcADQgyAHhGAAgACIhmQgTAKhPBPQALgHALgFQAXgJAXgWQAVgVAHgSQACgEAAgDgAhjClIAAAlQAUgRAQAAIALAAQgEgHgLgFQgIgEgHgBg");
	this.shape_153.setTransform(152.8,440.2);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#000000").s().p("AhAFJQhbgJgYgYQgNgNgogNQgUgGgHgEQgMgGgEgJQgEgKAFgLQALgWAvgFQAcgDAkADQAXgEALgTIAJgOIgsgHIA1gIIAFgIIAAAHIASgCQASgDAQABQACgqgFgJQgEgGgCgFQg+A7gWAEQgbAGgZgFIgUgHIgjgTIAogEQAngEAkgcQAggZAJgaQAEgQgBgvIAAgLQgBghADgRIgFAAQgRgEgegPIgSgKIgDgBIgCgBIgEgCQgKAgAFAyQAFAngbAdQgYAbgiAAQgbAAgNgLQgJgIgFgRQgCgJgCgDQgEgDgIgCIgGABQgFADgBAfQgBARgCAHQgCALgGAEQgIAGgJgDQgRgFgIgXQgHgVADgZQAFggASgTQASgTAZAAQAVAAASAIQALAGAOALQANAKADgBQAEgBACgNIACggIACgoQABgJAEgMQgKAAgHACQgUAFgSAMQgNAKgHAJIgPAWIgHgaQgNg2BKgyQAzgiBDgUQABgLAFgJQAKgQAXgLQANgGAMgDIAngJIgcAdQgQARAAAJQAAAIAFADQAGADAcAFIAPADQAUAEAegEQAVgDAsgLIBKgPQAugIAjAMQAXAJAOAPQAGgDAJgLIAbgiIgFArQgEAbAOAhQAOAiAQAFIAgAKIgfANQgXAJgfAcQghAdACANQACAQgKAYQgHAOgSAfQgYAqgBAMIgDATIgQgLIgOgLQgSgQgIgBIgfAiIAEgBIgHAXQgEAPgRANQACAIAIAQQARgMATAAIAzAAIguAXQgMAFADATQAZgVAhgLIAigLIgUAdQgJAOADAMIBUgtIgOAgQgJAXAFAKQAtALgCAZQAAANgQAKQgQAKgaACQgXACgeAIQgnAKgcADQgyAHhGAAQgnAAgrgFgAhfDIQAVgRAQAAIAKAAQgEgHgLgFQgHgEgIgBIgRgDgAAqgPQAMgHALgFQAWgJAXgWQAWgVAHgSQACgEAAgDQgTAKhQBPg");
	this.shape_154.setTransform(152.4,440.4);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#0D0116").s().p("AkXBLQhzgfAAgsQAAgrBzggQB0geCjAAQCkAABzAeQB0AgAAArQAAAsh0AfQhzAgikgBQiiABh1ggg");
	this.shape_155.setTransform(154.5,469.4);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#FFFFFF").s().p("AgaBUQgGAAgHgEQgHgCgHgIQgGgGgFgHQgEgIgBgJIAAh1IAFgGIAmAAIAGAGIAABvIACADIAkAAIAEgDIAAhvIAFgGIAlAAIAGAGIAAB1QAAAIgFAJQgFAIgGAFQgHAHgGADQgHAEgHAAgAg9AlQAAAEADAIIAHAMQAGAGAHAEQAHAFAKAAIAsAAQAJAAAIgFQAHgDAFgHQAGgFACgHIABgMIAAhwIgfAAIAABtQAAAHgEABQgDADgEABIglAAQgDgBgFgDQgDgBAAgHIAAhtIggAAg");
	this.shape_156.setTransform(429.9,177.3);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#FFFFFF").s().p("AghBNQgRgGgKgMQgLgLgHgPQgHgOAAgTQAAgRAHgOQAHgQALgLQAMgLAPgHQARgHAQAAQARAAAQAHQAQAHAMALQALALAHAQQAHAQAAAPQAAASgHAPQgHAPgLALQgLAMgRAGQgPAHgSAAQgSAAgPgHgAgdhEQgOAFgKALQgKAKgHAOQgGAOAAAOQAAAQAGAOQAHAOAKAJQAKALAOAGQAPAGAOAAQAQAAAOgGQAPgGAKgLQALgJAGgOQAGgOAAgQQAAgOgGgOQgGgOgLgKQgKgLgPgFQgOgHgQAAQgOAAgPAHgAgQArQgJgEgGgGQgGgGgEgIQgDgIAAgJQAAgJADgIQAEgJAGgGQAGgFAJgEQAHgEAJABQALgBAHAEQAJAEAGAFQAHAHADAIQAEAJAAAIQAAAIgEAJQgDAHgHAHQgGAGgJAEQgJAEgJAAQgHAAgJgEgAgNgfQgFACgHAGQgFAFgDAGQgDAHAAAHQAAAHADAGQACAGAGAGQAFAFAHADQAHADAHAAQAHAAAHgDQAIgDAEgFQAFgFADgHQADgGAAgHQAAgHgDgHQgDgGgFgFQgGgGgGgCQgHgDgHAAQgHAAgHADg");
	this.shape_157.setTransform(413.9,177.3);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#4D4D4D").s().p("AAUArIgUhHIgTBHIgMAAIgXhVIANAAIAQBFIAUhFIALAAIAUBFIAQhFIANAAIgXBVg");
	this.shape_158.setTransform(524.8,133);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#4D4D4D").s().p("AgiArIAAhVIAiAAQARAAAKAMQAIAMAAARQAAANgFALQgJAUgVAAgAgWAhIAUAAIAJgBQAGgCAEgHQAEgFABgJIABgJQAAgOgGgJQgGgJgNAAIgUAAg");
	this.shape_159.setTransform(569.8,179);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#4D4D4D").s().p("AgYAlQgJgIABgOIALAAQAAAHADAFQAFAIAOAAQAGAAAFgBQAKgEAAgJQAAgHgEgDQgEgDgKgDIgKgCQgLgDgFgCQgIgFAAgLQAAgMAIgHQAIgHAOAAQANAAAJAGQAJAHAAAOIgLAAQgBgHgDgEQgFgGgLAAQgKAAgEAEQgFAEAAAGQAAAGAGADQADACALADIALADQAJACAEACQAIAGAAAMQAAAOgKAGQgKAGgNAAQgPAAgJgIg");
	this.shape_160.setTransform(524.7,179);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#4D4D4D").s().p("AAaArIgJgaIghAAIgJAaIgMAAIAghVIAMAAIAfBVgAANAHIgNglIgNAlIAaAAg");
	this.shape_161.setTransform(480.1,179);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#FEFFE9").s().p("AiLDIQgZAAgRgSQgSgRAAgZIAAkXQAAgZASgSQARgRAZAAIEXAAQAZAAARARQASASAAAZIAAEXQAAAZgSARQgRASgZAAg");
	this.shape_162.setTransform(525,133);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#FEFFE9").s().p("AiLDIQgZAAgRgSQgSgRAAgZIAAkXQAAgZASgSQARgRAZAAIEXAAQAZAAARARQASASAAAZIAAEXQAAAZgSARQgRASgZAAg");
	this.shape_163.setTransform(570,178);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#FEFFE9").s().p("AiLDIQgZAAgRgSQgSgRAAgZIAAkXQAAgZASgSQARgRAZAAIEXAAQAZAAARARQASASAAAZIAAEXQAAAZgSARQgRASgZAAg");
	this.shape_164.setTransform(525,178);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#FEFFE9").s().p("AiLDIQgZAAgRgSQgSgRAAgZIAAkXQAAgZASgSQARgRAZAAIEXAAQAZAAARARQASASAAAZIAAEXQAAAZgSARQgRASgZAAg");
	this.shape_165.setTransform(480,178);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#4D4D4D").s().p("AgnAAIBPgnIAABPg");
	this.shape_166.setTransform(273,178.5);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#4D4D4D").s().p("AgngnIBPAnIhPAog");
	this.shape_167.setTransform(365,178.5);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#4D4D4D").s().p("AgngnIBPAAIgoBPg");
	this.shape_168.setTransform(319,180);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#4D4D4D").s().p("AgnAoIAnhPIAoBPg");
	this.shape_169.setTransform(319,133);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#FEFFE9").s().p("AiLDIQgZAAgRgSQgSgRAAgZIAAkXQAAgZASgSQARgRAZAAIEXAAQAYAAASARQASASAAAZIAAEXQAAAZgSARQgSASgYAAg");
	this.shape_170.setTransform(319,133);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#FEFFE9").s().p("AiLDIQgZAAgRgSQgSgRAAgZIAAkXQAAgZASgSQARgRAZAAIEXAAQAYAAASARQASASAAAZIAAEXQAAAZgSARQgSASgYAAg");
	this.shape_171.setTransform(364,178);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#FEFFE9").s().p("AiLDIQgZAAgRgSQgSgRAAgZIAAkXQAAgZASgSQARgRAZAAIEXAAQAYAAASARQASASAAAZIAAEXQAAAZgSARQgSASgYAAg");
	this.shape_172.setTransform(319,178);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#FEFFE9").s().p("AiLDIQgZAAgRgSQgSgRAAgZIAAkXQAAgZASgSQARgRAZAAIEXAAQAYAAASARQASASAAAZIAAEXQAAAZgSARQgSASgYAAg");
	this.shape_173.setTransform(274,178);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.txtMouvements},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.instance},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.txtAntagonistes},{t:this.txtObstacles}]},1).wait(1));

	// fond
	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("#1BF3E6").s().p("Eg6qArDMAAAhWFMB1VAAAMAAABWFgEg6gAq5MB1BAAAMAAAhVxMh1BAAAg");
	this.shape_174.setTransform(398.5,299.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_174).wait(2));

	// textes
	this.txtHistoire = new cjs.Text("Andromeda est une jeune extraterrestre orpheline qui a été abandonnée sur une planète hostile et sans pitié, Lazara. Élevée dans la peur et dans la survie constante, elle est devenue une redoutable guerrière. Elle doit chaque jour traverser la sombre forêt qui recouvre Lazara, éviter ses pièges empoisonnés et se débarrasser des prédateurs assoiffés de sang sur son chemin. \n\nSaura-t-elle retrouver qui elle est et d'où elle vient?", "18px 'Prompt Light'", "#FFFFFF");
	this.txtHistoire.name = "txtHistoire";
	this.txtHistoire.lineHeight = 41;
	this.txtHistoire.lineWidth = 587;
	this.txtHistoire.parent = this;
	this.txtHistoire.setTransform(105,219.7);

	this.timeline.addTween(cjs.Tween.get(this.txtHistoire).to({_off:true},1).wait(1));

	// andromeda
	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#1BF3E6").s().p("AAwEvQgvgZgSgnQgTgpACgfID5AAIBBCdIiGAAIgIABQgwAAgqgWgAAeD3QAPATAbANQAaANAvAAIBZAAIgnhdIjDAAQAPAfAPARgAkYFEID0qIIBUAAICjHhIisAAIgbhOIgTAAIhaD1gAjsEkIB2AAIBaj2IA8AAIAdBOIBrAAIiOmfIgpAAg");
	this.shape_175.setTransform(659.1,142);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("#1BF3E6").s().p("AkIFFIgSgPIAAiiID+AAQAdAAAYgMQAZgNAQgUQASgTAJgbQAKgZAAgdQAAgcgKgZQgJgcgSgTQgRgVgYgMQgYgMgdgBIhCAAIAAC+Ii8AAIAAllIASgNID2AAQBGAAA4AfQA6AiAnAvQApAxASA0QATAzAAA7QAABMgbA3QgbA3grAsQgsAtg2AYQg2Aag2AAgAj6EkIDiAAQAzgCAngSQAngQAegWQAfgZATgZQATgZAOgbQAfg8AChIQABhJgdg4Qgeg3gpgkQgqglgtgRQgtgRghAAIjtAAIAAExIB8AAIAAi7IBsAAQAkACAcARQAcASAUAaQAUAbAJAfQAIAfAAAWQABAtgPAkQgHAPgLAPQgKAPgQAOQgRAOgWAJQgUAJgeAEIjqAAg");
	this.shape_176.setTransform(600.8,142);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#1BF3E6").s().p("AkbFFIgTgPIAAmEIATgOIINAAQAAAjgUAnQgTAkgWAVQgVAVgjAOQghAQgvADIieAAIAAA0IGNAAIATAWIAACPIgUAPgAkNEkIIbAAIAAhzImgAAIAAh1IC7AAQAygDAdgRQAegQAVgbQAWgcAGgcInUAAgAkbiOIgTgPIAAiZIATgNII3AAIATANIAACZIgTAPgAkNivIIbAAIAAh0IobAAg");
	this.shape_177.setTransform(540.4,142);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("#1BF3E6").s().p("ACqFFIgVgXIAAj5Ih8AAIgVgXIAAhaIDskHIBMAAIATAWIAAJbIgTAXgAAlgwIAABFICRAAIAAEPIB6AAIAApHIg1AAgAk6FFIgUgXIAApbIAUgWIBLAAIDrEHIAABaIgUAXIh8AAIAAD5IgVAXgAkuEkIB6AAIAAkPICQAAIAAhFIjVjzIg1AAg");
	this.shape_178.setTransform(474.6,142);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("#1BF3E6").s().p("AiBErQg9gagrgrQgsgrgag8Qgbg6AAhFQAAhDAbg6QAag7AsgsQAqgqA+gbQA8gaBFAAQBGAAA7AaQA+AaArArQAsAsAbA7QAaA8AABBQAABDgaA8QgbA8gsArQgsAsg9AZQg8AZhFABQhEgBg9gZgAhykMQg3AXgoAoQgpAogXA1QgXA1AAA7QAAA9AXA0QAXA1ApApQApAnA2AXQA2AXA9AAQA+AAA2gXQA3gXApgnQApgoAYg2QAXg1AAg8QAAg6gXg2QgYg2gpgnQgpgog3gXQg2gXg+AAQg9AAg2AXgAhCCkQgigNgXgXQgXgXgOggQgOghgBgkQABghAOghQAOggAXgXQAYgYAhgOQAhgOAjABQAlgBAgAOQAhAOAYAYQAYAYAOAfQAOAfABAjQgBAlgOAgQgOAfgYAYQgXAXgiANQghAOgkAAQgjAAghgOgAg0h8QgbALgTATQgUAUgNAZQgLAaAAAbQAAAdALAaQANAaAUATQASATAcAMQAZAKAeABQAdgBAagKQAbgMATgTQAVgTAMgaQAMgZgBgeQABgcgMgZQgMgZgVgUQgUgTgagLQgZgMgeAAQgeAAgZAMg");
	this.shape_179.setTransform(406.1,142);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("#1BF3E6").s().p("ACOFFIkGkPIAAh5IAUgWIHDAAQgDAagHASQgGAUgNAWQgNAVgWAVQgWATgjAQQgiAOgvAFIDKDEIAAAkgAhYAsID3D4ICUAAIjrjoIBGAAQA1gDAggSQAggSATgWQAYgaAGgeImMAAgAlBFFIgUgXIAAlxIAUgWICTAAIAUAWIAAFxIgUAXgAk1EkIB7AAIAAldIh7AAgAleiOIAAi1IH3AAQArgBAjASQAmAQAaAYQAcAaAOAeQAPAggBAkgAk+ivIJyAAQAAgMgJgQQgJgRgWgUQgWgWgbgNQgbgNgtgDInRAAg");
	this.shape_180.setTransform(336.1,142);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("#1BF3E6").s().p("AkIFFIgSgPIAAiiID+AAQAcAAAZgMQAZgNAQgUQASgTAJgbQAJgaAAgcQAAgbgJgaQgKgcgRgTQgRgVgYgMQgZgMgcgBIhCAAIAAC+Ii8AAIAAllIASgNID2AAQBGAAA4AfQA5AhAoAwQApAwASA1QATA1AAA5QAABNgbA2QgbA3gsAsQgqAtg3AYQg3Aag1AAgAj6EkIDhAAQA0gCAngSQAogQAdgWQAfgZASgZQAUgZANgbQAfg7ADhJQABhJgeg4Qgcg1gqgmQgqglgugRQgsgRghAAIjtAAIAAExIB7AAIAAi7IBtAAQAkACAcARQAbASAVAaQATAbAJAfQAJAeAAAXQABAsgQAlQgHARgKANQgKAPgRAOQgQAOgWAJQgUAJgeAEIjqAAg");
	this.shape_181.setTransform(270.8,142);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f("#1BF3E6").s().p("ADwFFIjrkHIAAhkIAUgWIB8AAIAAjxIAVgWICRAAIAVAWIAAJbIgVAXgAAlAxIDVDzIA1AAIAApHIh5AAIAAEIIiRAAgAk6FFIgVgXIAApbIAVgWIBLAAIDrEHIAABjIgUAXIh8AAIAADwIgVAXgAkuEkIB5AAIAAkHICRAAIAAhNIjVjzIg1AAg");
	this.shape_182.setTransform(207,142);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("#1BF3E6").s().p("AAwEvQgvgZgRgnQgTgpACgfID4AAIBCCdIiHAAIgIABQgwAAgqgWgAAeD3QAPATAbANQAZANAxAAIBZAAIgphdIjBAAQAOAfAPARgAkYFEID0qIIBUAAICjHhIisAAIgbhOIgSAAIhaD1gAjsEkIB2AAIBaj2IA8AAIAdBOIBqAAIiNmfIgpAAg");
	this.shape_183.setTransform(143.6,142);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f("#205874").s().p("EgsHADbQhbhbAAiAIAAAAQAAh/BbhbQBahbCBAAMBRZAAAQCAAABbBbQBbBbAAB/IAAAAQAACAhbBbQhbBbiAAAMhRZAAAIgCAAQh/AAhahbg");
	this.shape_184.setTransform(398.5,144);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("#213158").s().p("EgoOAHWQiUAAhqhqQhqhqAAiUIAAjbQAAiUBqhqQBqhqCUAAMBQdAAAQCUAABqBqQBqBqAACUIAADbQAACUhqBqQhqBqiUAAg");
	this.shape_185.setTransform(398.5,143);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175}]}).to({state:[]},1).wait(1));

	// bouton
	this.btnSuivant = new lib.btnSuivant();
	this.btnSuivant.parent = this;
	this.btnSuivant.setTransform(717,517,1,1,0,0,0,34,34);

	this.timeline.addTween(cjs.Tween.get(this.btnSuivant).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(23,24,751,551);
p.frameBounds = [rect, rect];


(lib.ClipPanneauFin = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{reussi:1,echec:2});

	// timeline functions:
	this.frame_1 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(1).call(this.frame_1).wait(2));

	// textes
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgLA4QgDgCAAgEQAAgDADgCQACgCADAAQADAAADACQABACAAADQAAAEgBACQgDACgDAAQgDAAgCgCgAgMAZIAAgDIABgJIADgHIAFgGIAHgGQAJgHAEgEQAEgFAAgHQAAgEgCgDQgCgEgDgCQgGgFgLAAQgQAAgNAHIAAgMQAOgFAPAAIAKAAIAIADQAFACADACIAFAGQAFAGAAAJQAAAIgFAHIgFAGIgIAHQgHADgDAEQgDADgCADIAAAKIAAADg");
	this.shape.setTransform(489.1,319.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgWAnIAAhNIALAAIAAAQQAFgIAIgDQAJgFANAAIAAAKQgOABgJAEQgIAFgDAJIAAAwg");
	this.shape_1.setTransform(482.2,321.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgOAmQgIgDgGgFQgGgFgDgIQgDgHAAgKQAAgIADgIQADgHAFgGQAFgFAIgDQAHgDAJAAIAMABIAKAEIAIAGQAEAEACAEQAFAJAAALIAAAGIhFAAQAAANAJAGQAFAEAGABQAGACAHAAIAPgBQAHgCAGgCIAAAKQgFACgIABIgQACQgKAAgIgDgAAdgDQAAgNgIgHQgHgHgOAAQgGAAgGACQgFACgEADQgHAIAAAMIA5AAIAAAAg");
	this.shape_2.setTransform(473.9,321.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgiA1IAAgKIAFABIAFABQAGAAADgDQADgDAEgHIADgKIgihLIAOAAIAaA9IAag9IAMAAIgjBWQgEALgGAFIgGAEIgJABQgHAAgGgBg");
	this.shape_3.setTransform(464.6,323.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgRAnQgGgCgEgDQgIgHAAgMQAAgNAIgGQAEgDAGgCQAFgCAIAAQAHAAAHACQAHACAGADIAAgGQAAgFgBgEIgEgGQgGgFgMAAQgOAAgLAFIAAgKIAMgEIANgBQASAAAJAIQAEAEADAGQACAGAAAHIAAAvIgMAAIAAgKQgFAHgHADQgIADgJAAQgHAAgFgCgAgSACQgCACgBADIgBAIQAAAQAUAAQAIAAAHgEQAHgDADgHIAAgMQgGgEgGgBQgGgBgHAAQgLAAgFADg");
	this.shape_4.setTransform(455.3,321.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgPAmQgJgCgFgDIAAgKQAGADAIADQAIACAHAAQAJAAAFgDQAEgDAAgFQAAgFgCgCQgCgDgEgCIgNgEIgPgEQgFgDgDgEQgDgFAAgGQAAgLAIgFQAJgGANAAIAOABQAGACAFACIAAALQgFgDgGgBQgHgCgHAAQgIAAgFADQgFACAAAHQAAAEACACQABACAFACIAOAFQAOADAGAFQADADABADQABAEAAAFQAAAFgCADQgBAEgEADQgIAGgPAAQgHAAgIgDg");
	this.shape_5.setTransform(447.1,321.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgPAmQgJgCgFgDIAAgKQAGADAIADQAIACAHAAQAJAAAFgDQAEgDAAgFQAAgFgCgCQgCgDgEgCIgNgEIgPgEQgFgDgDgEQgDgFAAgGQAAgLAIgFQAJgGANAAIAOABQAGACAFACIAAALQgFgDgGgBQgHgCgHAAQgIAAgFADQgFACAAAHQAAAEACACQABACAFACIAOAFQAOADAGAFQADADABADQABAEAAAFQAAAFgCADQgBAEgEADQgIAGgPAAQgHAAgIgDg");
	this.shape_6.setTransform(439.4,321.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgOAmQgIgDgGgFQgGgFgDgIQgDgHAAgKQAAgIADgIQADgHAFgGQAFgFAIgDQAHgDAJAAIAMABIAKAEIAIAGQAEAEACAEQAFAJAAALIAAAGIhFAAQAAANAJAGQAFAEAGABQAGACAHAAIAPgBQAHgCAGgCIAAAKQgFACgIABIgQACQgKAAgIgDgAAdgDQAAgNgIgHQgHgHgOAAQgGAAgGACQgFACgEADQgHAIAAAMIA5AAIAAAAg");
	this.shape_7.setTransform(430.8,321.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgOA3QgIgDgGgFQgGgFgDgIQgDgHAAgKQAAgJADgIQADgGAFgGQAFgFAIgDQAHgDAJAAIAMABIAKAEIAIAGQAEAEACAEQAFAIAAALIAAAHIhFAAQAAANAJAGQAFAEAGABQAGACAHAAIAPgBQAHgCAGgCIAAAKQgFACgIABIgQACQgKAAgIgDgAAdANQAAgNgIgGQgHgHgOAAQgGAAgGACQgFACgEADQgHAHAAAMIA5AAIAAAAgAgFgdIAKgcIANAAIgNAcg");
	this.shape_8.setTransform(421.1,320);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgXAnIAAhNIANAAIAAAQQAEgIAIgDQAIgFANAAIAAAKQgOABgIAEQgIAFgDAJIAAAwg");
	this.shape_9.setTransform(413.4,321.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgPAmQgJgCgFgDIAAgKQAGADAIADQAIACAHAAQAJAAAFgDQAEgDAAgFQAAgFgCgCQgCgDgEgCIgNgEIgPgEQgFgDgDgEQgDgFAAgGQAAgLAIgFQAJgGANAAIAOABQAGACAFACIAAALQgFgDgGgBQgHgCgHAAQgIAAgFADQgFACAAAHQAAAEACACQABACAFACIAOAFQAOADAGAFQADADABADQABAEAAAFQAAAFgCADQgBAEgEADQgIAGgPAAQgHAAgIgDg");
	this.shape_10.setTransform(400.1,321.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgcAfQgDgEgCgFQgDgGAAgHIAAgwIANAAIAAAxQgBAKAGAFQAFAFAKAAQAJAAAGgEIAHgFIAFgHIAAg1IANAAIAABMIgNAAIAAgLQgFAHgHADQgHAEgJAAQgPAAgJgJg");
	this.shape_11.setTransform(391.5,321.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgKAnQgGgBgFgCQgKgFgFgJQgDgFgBgFQgCgGAAgGQAAgLAGgJQAFgKAKgFQAKgFALAAQAMAAAKAFQAKAFAFAKQADAEACAGIABAKQgBAMgFAKQgFAJgKAFQgFACgFABQgFACgHAAQgFAAgFgCgAgVgWQgEAFgCAFQgCAGAAAGQAAAHACAGQACAFAEAEQAJAJAMAAQAOAAAIgJQAJgIAAgOQAAgNgJgJQgIgIgOAAQgMAAgJAIg");
	this.shape_12.setTransform(381.8,321.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgFAnIgghNIAOAAIAXA+IAYg+IAOAAIggBNg");
	this.shape_13.setTransform(372.2,321.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgYAFIAAgJIAxAAIAAAJg");
	this.shape_14.setTransform(364.4,320.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgfAnIAAgJIAug6IgtAAIAAgKIA8AAIAAAJIguA6IAwAAIAAAKg");
	this.shape_15.setTransform(357.1,321.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgOAmQgIgDgGgFQgGgFgDgIQgDgHAAgKQAAgIADgIQADgHAFgGQAFgFAIgDQAHgDAJAAIAMABIAKAEIAIAGQAEAEACAEQAFAJAAALIAAAGIhFAAQAAANAJAGQAFAEAGABQAGACAHAAIAPgBQAHgCAGgCIAAAKQgFACgIABIgQACQgKAAgIgDgAAdgDQAAgNgIgHQgHgHgOAAQgGAAgGACQgFACgEADQgHAIAAAMIA5AAIAAAAg");
	this.shape_16.setTransform(348.3,321.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgFA7IAAh1IALAAIAAB1g");
	this.shape_17.setTransform(341.7,319.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgcAfQgDgEgCgFQgDgGAAgHIAAgwIANAAIAAAxQgBAKAGAFQAFAFAKAAQAJAAAGgEIAHgFIAFgHIAAg1IANAAIAABMIgNAAIAAgLQgFAHgHADQgHAEgJAAQgPAAgJgJg");
	this.shape_18.setTransform(335.3,321.8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgKAnQgGgBgFgCQgKgFgFgJQgDgFgBgFQgCgGAAgGQAAgLAGgJQAFgKAKgFQAKgFALAAQAMAAAKAFQAKAFAFAKQADAEACAGIABAKQgBAMgFAKQgFAJgKAFQgFACgFABQgFACgHAAQgFAAgFgCgAgVgWQgEAFgCAFQgCAGAAAGQAAAHACAGQACAFAEAEQAJAJAMAAQAOAAAIgJQAJgIAAgOQAAgNgJgJQgIgIgOAAQgMAAgJAIg");
	this.shape_19.setTransform(325.5,321.7);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgFA4IgshvIAMAAIAlBdIAmhdIAMAAIgsBvg");
	this.shape_20.setTransform(314.7,319.9);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgEAFQgCgCAAgDQAAgCACgCQACgCACAAQADAAACACQACACAAACQAAADgCACQgCACgDAAQgCAAgCgCg");
	this.shape_21.setTransform(679.3,292.6);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgOA3QgIgDgGgFQgGgFgDgIQgDgHAAgKQAAgJADgIQADgGAFgGQAFgFAIgDQAHgDAJAAIAMABIAKAEIAIAGIAGAIQAFAIAAALIAAAHIhFAAQAAANAJAGQAFAEAGABQAGACAHAAIAPgBQAHgCAGgCIAAAKQgFACgIABIgQACQgKAAgIgDgAAdANQAAgNgIgGQgHgHgOAAQgGAAgGACQgFACgEADQgHAHAAAMIA5AAIAAAAgAgFgdIAKgcIANAAIgNAcg");
	this.shape_22.setTransform(672.9,287.8);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AABAyIgGgFQgGgHAAgMIAAgrIgMAAIAAgKIAMAAIAAgXIALAAIAAAXIATAAIAAAKIgTAAIAAAsQAAAIADADQAEADAIAAQAEAAAFgCIAAALQgFABgJAAQgFAAgEgBg");
	this.shape_23.setTransform(665.2,288.4);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AAYAoIAAgwQAAgKgEgFQgFgGgLAAQgHAAgIAEQgGAEgGAIIAAA1IgMAAIAAhNIAMAAIAAAMQAFgHAIgEQAGgCAKgBQAQAAAHAIQAEAFACAFQACAFAAAGIAAAyg");
	this.shape_24.setTransform(657.6,289.4);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgLAnQgGgBgEgCQgJgFgGgJQgDgFgBgFQgBgGgBgGQABgLAFgJQAGgKAJgFQAJgFAMAAQAMAAAKAFQAKAFAFAKQADAEABAGIABAKQABAMgGAKQgFAJgKAFQgFACgFABQgFACgHAAQgFAAgGgCgAgVgWQgEAFgCAFQgCAGAAAGQAAAHACAGQACAFAEAEQAIAJANAAQAOAAAIgJQAIgIAAgOQAAgNgIgJQgIgIgOAAQgNAAgIAIg");
	this.shape_25.setTransform(647.8,289.5);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgFA7IAAh1IALAAIAAB1g");
	this.shape_26.setTransform(641,287.4);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgKAnQgGgBgFgCQgKgFgFgJQgDgFgBgFQgCgGAAgGQAAgLAGgJQAFgKAKgFQAKgFALAAQAMAAAKAFQAKAFAFAKQADAEACAGIABAKQgBAMgFAKQgFAJgKAFQgFACgFABQgFACgHAAQgFAAgFgCgAgVgWQgEAFgCAFQgCAGAAAGQAAAHACAGQACAFAEAEQAJAJAMAAQAOAAAIgJQAJgIAAgOQAAgNgJgJQgIgIgOAAQgMAAgJAIg");
	this.shape_27.setTransform(634.2,289.5);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgFAnIgghNIAOAAIAXA9IAYg9IAOAAIggBNg");
	this.shape_28.setTransform(624.6,289.5);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgOAmQgIgDgGgFQgGgFgDgIQgDgHAAgKQAAgIADgIQADgHAFgGQAFgFAIgDQAHgDAJAAIAMABIAKAEIAIAGQAEAEACAEQAFAJAAALIAAAGIhFAAQAAANAJAGQAFAEAGABQAGACAHAAIAPgBQAHgCAGgCIAAAKQgFACgIABIgQACQgKAAgIgDgAAdgDQAAgNgIgHQgHgHgOAAQgGAAgGACQgFACgEADQgHAIAAAMIA5AAIAAAAg");
	this.shape_29.setTransform(609.2,289.5);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgXAnIAAhNIANAAIAAAQQAEgIAIgDQAIgFANAAIAAAKQgOAAgIAFQgIAFgDAJIAAAwg");
	this.shape_30.setTransform(601.5,289.5);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AABAyIgGgFQgGgHAAgMIAAgrIgMAAIAAgKIAMAAIAAgXIALAAIAAAXIATAAIAAAKIgTAAIAAAsQAAAIAEADQADADAIAAQAEAAAFgCIAAALQgFABgJAAQgFAAgEgBg");
	this.shape_31.setTransform(595.2,288.4);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AgKAnQgHgBgEgCQgJgFgGgJQgDgFgBgFQgCgGAAgGQAAgLAGgJQAGgKAJgFQAKgFALAAQAMAAAKAFQAKAFAFAKQADAEACAGIABAKQAAAMgGAKQgFAJgKAFQgEACgGABQgGACgGAAQgFAAgFgCgAgVgWQgEAFgCAFQgCAGAAAGQAAAHACAGQACAFAEAEQAIAJANAAQAOAAAIgJQAJgIgBgOQABgNgJgJQgIgIgOAAQgNAAgIAIg");
	this.shape_32.setTransform(587.2,289.5);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AgFAnIgghNIAOAAIAXA9IAYg9IANAAIgfBNg");
	this.shape_33.setTransform(577.6,289.5);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AgOAmQgIgDgGgFQgGgFgDgIQgDgHAAgKQAAgIADgIQADgHAFgGQAFgFAIgDQAHgDAJAAIAMABIAKAEIAIAGQAEAEACAEQAFAJAAALIAAAGIhFAAQAAANAJAGQAFAEAGABQAGACAHAAIAPgBQAHgCAGgCIAAAKQgFACgIABIgQACQgKAAgIgDgAAdgDQAAgNgIgHQgHgHgOAAQgGAAgGACQgFACgEADQgHAIAAAMIA5AAIAAAAg");
	this.shape_34.setTransform(562.2,289.5);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AgMA7IgKgEQgKgFgFgJQgFgJAAgMQAAgMAFgJIAHgIIAIgGQAJgFALAAQAKAAAIADQAJAEAGAIIAAg2IAMAAIAAB1IgMAAIAAgOQgGAIgJAEIgJADIgJABQgGAAgEgBgAgIgKIgGADIgHAFIgFAFIgDAIIAAAJQAAAJADAHIAFAGIAHAFIAGACIAIABIAKgBQAFgBAEgDQAIgGAEgKIAAgTQgEgKgIgFQgIgGgLAAIgIABg");
	this.shape_35.setTransform(552,287.5);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AAZAoIAAgwQAAgKgGgFQgEgGgLAAQgIAAgGAEQgIAEgFAIIAAA1IgNAAIAAhNIAMAAIAAAMQAGgHAIgEQAGgCALgBQAPAAAHAIQAEAFACAFQABAFAAAGIAAAyg");
	this.shape_36.setTransform(536.1,289.4);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AgLAnQgFgBgFgCQgJgFgGgJQgDgFgBgFQgBgGAAgGQgBgLAGgJQAGgKAJgFQAKgFALAAQAMAAAKAFQAKAFAFAKQADAEACAGIAAAKQAAAMgFAKQgFAJgKAFQgFACgFABQgFACgHAAQgFAAgGgCgAgVgWQgEAFgCAFQgCAGAAAGQAAAHACAGQACAFAEAEQAJAJAMAAQAOAAAIgJQAJgIAAgOQAAgNgJgJQgIgIgOAAQgMAAgJAIg");
	this.shape_37.setTransform(526.3,289.5);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AgPAmQgJgCgFgDIAAgKQAGADAIADQAIACAHAAQAJAAAFgDQAEgDAAgFQAAgFgCgCQgCgDgEgCIgNgEIgPgEQgFgDgDgEQgDgFAAgGQAAgLAIgFQAJgGANAAIAOABQAGACAFACIAAALQgFgDgGgBQgHgCgHAAQgIAAgFADQgFACAAAHQAAAEACACQABACAFACIAOAFQAOADAGAFQADADABADQABAEAAAFQAAAFgCADQgBAEgEADQgIAGgPAAQgHAAgIgDg");
	this.shape_38.setTransform(517.4,289.5);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AgFA3IAAhNIALAAIAABNgAgEgoQgDgCAAgDQAAgEADgCQACgDACABQADgBADADQACACAAAEQAAADgCACQgDACgDAAQgCAAgCgCg");
	this.shape_39.setTransform(511.7,287.9);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AgRAnQgGgCgEgDQgIgHAAgMQAAgNAIgGQAEgDAGgCQAFgCAIAAQAHAAAHACQAHACAGADIAAgGQAAgFgBgEIgEgGQgGgFgMAAQgOAAgLAFIAAgKIAMgEIANgBQASAAAJAIQAEAEADAGQACAGAAAHIAAAvIgMAAIAAgKQgFAHgHADQgIADgJAAQgHAAgFgCgAgSACQgCACgBADIgBAIQAAAQAUAAQAIAAAHgEQAHgDADgHIAAgMQgGgEgGgBQgGgBgHAAQgLAAgFADg");
	this.shape_40.setTransform(505.3,289.5);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AgXAnIAAhNIANAAIAAAQQAEgIAIgDQAIgFAOAAIAAAKQgPAAgIAFQgIAFgDAJIAAAwg");
	this.shape_41.setTransform(498.1,289.5);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AgcAfQgEgEgBgFQgCgGAAgHIAAgwIAMAAIAAAxQAAAKAFAFQAFAFAKAAQAJAAAGgEIAHgFIAFgHIAAg1IANAAIAABMIgNAAIAAgLQgFAHgHADQgHAEgJAAQgPAAgJgJg");
	this.shape_42.setTransform(483.9,289.6);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AgOAmQgIgDgGgFQgGgFgDgIQgDgHAAgKQAAgIADgIQADgHAFgGQAFgFAIgDQAHgDAJAAIAMABIAKAEIAIAGQAEAEACAEQAFAJAAALIAAAGIhFAAQAAANAJAGQAFAEAGABQAGACAHAAIAPgBQAHgCAGgCIAAAKQgFACgIABIgQACQgKAAgIgDgAAdgDQAAgNgIgHQgHgHgOAAQgGAAgGACQgFACgEADQgHAIAAAMIA5AAIAAAAg");
	this.shape_43.setTransform(474.3,289.5);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("AABAyIgGgFQgGgHAAgMIAAgrIgMAAIAAgKIAMAAIAAgXIALAAIAAAXIATAAIAAAKIgTAAIAAAsQAAAIAEADQADADAIAAQAEAAAFgCIAAALQgFABgJAAQgFAAgEgBg");
	this.shape_44.setTransform(460.5,288.4);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AAYAoIAAgwQAAgKgEgFQgFgGgLAAQgHAAgIAEQgGAEgGAIIAAA1IgMAAIAAhNIALAAIAAAMQAGgHAJgEQAFgCAKgBQAQAAAHAIQAEAFACAFQABAFABAGIAAAyg");
	this.shape_45.setTransform(452.9,289.4);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("AgKAnQgHgBgEgCQgJgFgGgJQgDgFgBgFQgBgGgBgGQABgLAFgJQAGgKAJgFQAKgFALAAQAMAAAKAFQAKAFAFAKQADAEABAGIACAKQAAAMgGAKQgFAJgKAFQgFACgFABQgGACgGAAQgFAAgFgCgAgVgWQgEAFgCAFQgCAGAAAGQAAAHACAGQACAFAEAEQAJAJAMAAQAOAAAIgJQAIgIAAgOQAAgNgIgJQgIgIgOAAQgMAAgJAIg");
	this.shape_46.setTransform(443.1,289.5);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFFFF").s().p("AgXAnIAAhNIAMAAIAAAQQAGgIAHgDQAIgFANAAIAAAKQgNAAgJAFQgHAFgEAJIAAAwg");
	this.shape_47.setTransform(435.3,289.5);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFFFFF").s().p("AgcAfQgDgEgCgFQgCgGgBgHIAAgwIANAAIAAAxQgBAKAGAFQAFAFAKAAQAJAAAGgEIAHgFIAFgHIAAg1IANAAIAABMIgNAAIAAgLQgFAHgHADQgHAEgIAAQgQAAgJgJg");
	this.shape_48.setTransform(427.1,289.6);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFFFFF").s().p("AgRAnQgGgCgEgDQgIgHAAgMQAAgNAIgGQAEgDAGgCQAFgCAIAAQAHAAAHACQAHACAGADIAAgGQAAgFgBgEIgEgGQgGgFgMAAQgOAAgLAFIAAgKIAMgEIANgBQASAAAJAIQAEAEADAGQACAGAAAHIAAAvIgMAAIAAgKQgFAHgHADQgIADgJAAQgHAAgFgCgAgSACQgCACgBADIgBAIQAAAQAUAAQAIAAAHgEQAHgDADgHIAAgMQgGgEgGgBQgGgBgHAAQgLAAgFADg");
	this.shape_49.setTransform(417.8,289.5);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FFFFFF").s().p("AgPAmQgJgCgFgDIAAgKQAGADAIADQAIACAHAAQAJAAAFgDQAEgDAAgFQAAgFgCgCQgCgDgEgCIgNgEIgPgEQgFgDgDgEQgDgFAAgGQAAgLAIgFQAJgGANAAIAOABQAGACAFACIAAALQgFgDgGgBQgHgCgHAAQgIAAgFADQgFACAAAHQAAAEACACQABACAFACIAOAFQAOADAGAFQADADABADQABAEAAAFQAAAFgCADQgBAEgEADQgIAGgPAAQgHAAgIgDg");
	this.shape_50.setTransform(403.5,289.5);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFFFFF").s().p("AgWAnIAAhNIALAAIAAAQQAGgIAHgDQAJgFAMAAIAAAKQgNAAgJAFQgIAFgDAJIAAAwg");
	this.shape_51.setTransform(396.9,289.5);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FFFFFF").s().p("AgcAfQgDgEgCgFQgDgGAAgHIAAgwIANAAIAAAxQgBAKAGAFQAFAFALAAQAIAAAGgEIAGgFIAGgHIAAg1IAMAAIAABMIgMAAIAAgLQgFAHgHADQgHAEgIAAQgQAAgJgJg");
	this.shape_52.setTransform(388.7,289.6);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FFFFFF").s().p("AgOAmQgIgDgGgFQgGgFgDgIQgDgHAAgKQAAgIADgIQADgHAFgGQAFgFAIgDQAHgDAJAAIAMABIAKAEIAIAGQAEAEACAEQAFAJAAALIAAAGIhFAAQAAANAJAGQAFAEAGABQAGACAHAAIAPgBQAHgCAGgCIAAAKQgFACgIABIgQACQgKAAgIgDgAAdgDQAAgNgIgHQgHgHgOAAQgGAAgGACQgFACgEADQgHAIAAAMIA5AAIAAAAg");
	this.shape_53.setTransform(379.2,289.5);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FFFFFF").s().p("AABAyIgGgFQgGgHAAgMIAAgrIgMAAIAAgKIAMAAIAAgXIALAAIAAAXIATAAIAAAKIgTAAIAAAsQAAAIAEADQADADAIAAQAEAAAFgCIAAALQgFABgJAAQgFAAgEgBg");
	this.shape_54.setTransform(371.4,288.4);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FFFFFF").s().p("AgRAnQgGgCgEgDQgIgHAAgMQAAgNAIgGQAEgDAGgCQAFgCAIAAQAHAAAHACQAHACAGADIAAgGQAAgFgBgEIgEgGQgGgFgMAAQgOAAgLAFIAAgKIAMgEIANgBQASAAAJAIQAEAEADAGQACAGAAAHIAAAvIgMAAIAAgKQgFAHgHADQgIADgJAAQgHAAgFgCgAgSACQgCACgBADIgBAIQAAAQAUAAQAIAAAHgEQAHgDADgHIAAgMQgGgEgGgBQgGgBgHAAQgLAAgFADg");
	this.shape_55.setTransform(363.9,289.5);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FFFFFF").s().p("AgMA7IgLgEQgIgFgFgJQgGgJAAgMQAAgMAFgJIAHgIIAHgGQAKgFALAAQAKAAAJADQAJAEAEAIIAAg2IANAAIAAB1IgMAAIAAgOQgHAIgHAEIgJADIgKABQgFAAgFgBgAgIgKIgHADIgGAFIgFAFIgCAIIgBAJQAAAJADAHIAFAGIAGAFIAHACIAIABIAKgBQAFgBAEgDQAIgGADgKIAAgTQgDgKgIgFQgIgGgLAAIgIABg");
	this.shape_56.setTransform(354.2,287.5);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FFFFFF").s().p("AgOA3QgIgDgGgFQgGgFgDgIQgDgHAAgKQAAgJADgIQADgGAFgGQAFgFAIgDQAHgDAJAAIAMABIAKAEIAIAGQAEAEACAEQAFAIAAALIAAAHIhFAAQAAANAJAGQAFAEAGABQAGACAHAAIAPgBQAHgCAGgCIAAAKQgFACgIABIgQACQgKAAgIgDgAAdANQAAgNgIgGQgHgHgOAAQgGAAgGACQgFACgEADQgHAHAAAMIA5AAIAAAAgAgFgdIAKgcIANAAIgNAcg");
	this.shape_57.setTransform(344.3,287.8);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#FFFFFF").s().p("AgWAnIAAhNIALAAIAAAQQAGgIAHgDQAJgFAMAAIAAAKQgNAAgJAFQgIAFgDAJIAAAwg");
	this.shape_58.setTransform(336.6,289.5);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#FFFFFF").s().p("AgqA5IAAhvIAMAAIAAANQALgPAWAAQALAAAKAFQAIAFAFAKQAGAIAAANIgBALQgBAEgDAFQgGAKgIAEQgKAFgLABQgJgBgKgEQgIgDgFgIIAAAwgAgJgtQgFABgEADQgEADgDAEQgDAEgBAFIAAATQABAFADADQADAEAEADQAEADAFABIAJACQAJAAAHgEIAGgFQADgCABgEQAEgGAAgJQAAgJgEgIQgBgDgDgDIgGgFQgHgDgJAAIgJABg");
	this.shape_59.setTransform(328.1,291.1);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#FFFFFF").s().p("AgPAmQgJgCgFgDIAAgKQAGADAIADQAIACAHAAQAJAAAFgDQAEgDAAgFQAAgFgCgCQgCgDgEgCIgNgEIgPgEQgFgDgDgEQgDgFAAgGQAAgLAIgFQAJgGANAAIAOABQAGACAFACIAAALQgFgDgGgBQgHgCgHAAQgIAAgFADQgFACAAAHQAAAEACACQABACAFACIAOAFQAOADAGAFQADADABADQABAEAAAFQAAAFgCADQgBAEgEADQgIAGgPAAQgHAAgIgDg");
	this.shape_60.setTransform(312.8,289.5);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#FFFFFF").s().p("AgOAmQgIgDgGgFQgGgFgDgIQgDgHAAgKQAAgIADgIQADgHAFgGQAFgFAIgDQAHgDAJAAIAMABIAKAEIAIAGQAEAEACAEQAFAJAAALIAAAGIhFAAQAAANAJAGQAFAEAGABQAGACAHAAIAPgBQAHgCAGgCIAAAKQgFACgIABIgQACQgKAAgIgDgAAdgDQAAgNgIgHQgHgHgOAAQgGAAgGACQgFACgEADQgHAIAAAMIA5AAIAAAAg");
	this.shape_61.setTransform(304.2,289.5);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#FFFFFF").s().p("AgPAmQgJgCgFgDIAAgKQAGADAIADQAIACAHAAQAJAAAFgDQAEgDAAgFQAAgFgCgCQgCgDgEgCIgNgEIgPgEQgFgDgDgEQgDgFAAgGQAAgLAIgFQAJgGANAAIAOABQAGACAFACIAAALQgFgDgGgBQgHgCgHAAQgIAAgFADQgFACAAAHQAAAEACACQABACAFACIAOAFQAOADAGAFQADADABADQABAEAAAFQAAAFgCADQgBAEgEADQgIAGgPAAQgHAAgIgDg");
	this.shape_62.setTransform(295.5,289.5);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#FFFFFF").s().p("AABAyIgGgFQgGgHAAgMIAAgrIgMAAIAAgKIAMAAIAAgXIALAAIAAAXIAUAAIAAAKIgUAAIAAAsQAAAIADADQADADAJAAQAEAAAFgCIAAALQgGABgHAAQgGAAgEgBg");
	this.shape_63.setTransform(282.7,288.4);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#FFFFFF").s().p("AgOAmQgIgDgGgFQgGgFgDgIQgDgHAAgKQAAgIADgIQADgHAFgGQAFgFAIgDQAHgDAJAAIAMABIAKAEIAIAGQAEAEACAEQAFAJAAALIAAAGIhFAAQAAANAJAGQAFAEAGABQAGACAHAAIAPgBQAHgCAGgCIAAAKQgFACgIABIgQACQgKAAgIgDgAAdgDQAAgNgIgHQgHgHgOAAQgGAAgGACQgFACgEADQgHAIAAAMIA5AAIAAAAg");
	this.shape_64.setTransform(275,289.5);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#FFFFFF").s().p("AgRAnQgGgCgEgDQgIgHAAgMQAAgNAIgGQAEgDAGgCQAFgCAIAAQAHAAAHACQAHACAGADIAAgGQAAgFgBgEIgEgGQgGgFgMAAQgOAAgLAFIAAgKIAMgEIANgBQASAAAJAIQAEAEADAGQACAGAAAHIAAAvIgMAAIAAgKQgFAHgHADQgIADgJAAQgHAAgFgCgAgSACQgCACgBADIgBAIQAAAQAUAAQAIAAAHgEQAHgDADgHIAAgMQgGgEgGgBQgGgBgHAAQgLAAgFADg");
	this.shape_65.setTransform(259.5,289.5);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#FFFFFF").s().p("AgXAnIAAhNIANAAIAAAQQAEgIAIgDQAIgFANAAIAAAKQgOAAgIAFQgIAFgDAJIAAAwg");
	this.shape_66.setTransform(252.3,289.5);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#FFFFFF").s().p("AgRAnQgGgCgEgDQgIgHAAgMQAAgNAIgGQAEgDAGgCQAFgCAIAAQAHAAAHACQAHACAGADIAAgGQAAgFgBgEIgEgGQgGgFgMAAQgOAAgLAFIAAgKIAMgEIANgBQASAAAJAIQAEAEADAGQACAGAAAHIAAAvIgMAAIAAgKQgFAHgHADQgIADgJAAQgHAAgFgCgAgSACQgCACgBADIgBAIQAAAQAUAAQAIAAAHgEQAHgDADgHIAAgMQgGgEgGgBQgGgBgHAAQgLAAgFADg");
	this.shape_67.setTransform(244.3,289.5);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#FFFFFF").s().p("AgfAnIAAgJIAug6IgtAAIAAgKIA8AAIAAAJIguA6IAwAAIAAAKg");
	this.shape_68.setTransform(235.9,289.5);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#FFFFFF").s().p("AgRAnQgGgCgEgDQgIgHAAgMQAAgNAIgGQAEgDAGgCQAFgCAIAAQAHAAAHACQAHACAGADIAAgGQAAgFgBgEIgEgGQgGgFgMAAQgOAAgLAFIAAgKIAMgEIANgBQASAAAJAIQAEAEADAGQACAGAAAHIAAAvIgMAAIAAgKQgFAHgHADQgIADgJAAQgHAAgFgCgAgSACQgCACgBADIgBAIQAAAQAUAAQAIAAAHgEQAHgDADgHIAAgMQgGgEgGgBQgGgBgHAAQgLAAgFADg");
	this.shape_69.setTransform(227.4,289.5);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#FFFFFF").s().p("AgjA4IAAhvIAMAAIAABkIA7AAIAAALg");
	this.shape_70.setTransform(219,287.7);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#FFFFFF").s().p("AgEAFQgCgCAAgDQAAgCACgCQACgCACAAQADAAACACQACACAAACQAAADgCACQgCACgDAAQgCAAgCgCg");
	this.shape_71.setTransform(206.8,292.6);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#FFFFFF").s().p("AgEAFQgCgCAAgDQAAgCACgCQACgCACAAQADAAACACQACACAAACQAAADgCACQgCACgDAAQgCAAgCgCg");
	this.shape_72.setTransform(203.8,292.6);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#FFFFFF").s().p("AgEAFQgCgCAAgDQAAgCACgCQACgCACAAQADAAACACQACACAAACQAAADgCACQgCACgDAAQgCAAgCgCg");
	this.shape_73.setTransform(200.8,292.6);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#FFFFFF").s().p("AgOAmQgIgDgGgFQgGgFgDgIQgDgHAAgKQAAgIADgIQADgHAFgGQAFgFAIgDQAHgDAJAAIAMABIAKAEIAIAGQAEAEACAEQAFAJAAALIAAAGIhFAAQAAANAJAGQAFAEAGABQAGACAHAAIAPgBQAHgCAGgCIAAAKQgFACgIABIgQACQgKAAgIgDgAAdgDQAAgNgIgHQgHgHgOAAQgGAAgGACQgFACgEADQgHAIAAAMIA5AAIAAAAg");
	this.shape_74.setTransform(194.4,289.5);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#FFFFFF").s().p("AgOA4IgNgDIAAgKQAHACAHABQAGACAHAAQAIAAAGgCQAFgCAEgDQAIgHAAgPIAAgLQgGAIgIADQgIAEgKABQgMgBgJgFQgKgEgFgKQgCgEgBgFQgCgGAAgFQAAgNAFgIQAFgKAKgFIAKgEIAKgBQALAAAIAEQAIADAGAIIAAgNIAMAAIAABJQAAAUgLAJQgFAFgIADQgIADgLAAQgHAAgHgCgAgIguIgHACIgGAGIgFAFIgCAIIgBAJQAAAJADAHIAFAFIAGAFIAHACIAIACQALAAAIgGQAIgGAEgJIAAgTQgCgFgDgEQgDgEgEgDQgEgDgFgBQgFgBgFAAIgIABg");
	this.shape_75.setTransform(184.2,291.2);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#FFFFFF").s().p("AgRAnQgGgCgEgDQgIgHAAgMQAAgNAIgGQAEgDAGgCQAFgCAIAAQAHAAAHACQAHACAGADIAAgGQAAgFgBgEIgEgGQgGgFgMAAQgOAAgLAFIAAgKIAMgEIANgBQASAAAJAIQAEAEADAGQACAGAAAHIAAAvIgMAAIAAgKQgFAHgHADQgIADgJAAQgHAAgFgCgAgSACQgCACgBADIgBAIQAAAQAUAAQAIAAAHgEQAHgDADgHIAAgMQgGgEgGgBQgGgBgHAAQgLAAgFADg");
	this.shape_76.setTransform(174.5,289.5);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#FFFFFF").s().p("AAuAoIAAgyIgBgJIgCgFQgEgFgKAAQgOAAgJANIABAHIAAAxIgLAAIAAgxIgBgJQgBgEgCgCQgBgDgEgBQgDgBgFAAQgNAAgLAQIAAA1IgMAAIAAhNIAMAAIAAANQALgOAQgBIAJABIAGACQAEAEADAHQAFgHAIgEQAHgDAIAAQAOAAAGAIQAGAGAAAOIAAAzg");
	this.shape_77.setTransform(163.3,289.4);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#FFFFFF").s().p("AAuAoIAAgyIgBgJIgCgFQgEgFgKAAQgOAAgJANIABAHIAAAxIgLAAIAAgxIgBgJQgBgEgCgCQgBgDgEgBQgDgBgFAAQgNAAgLAQIAAA1IgMAAIAAhNIAMAAIAAANQALgOAQgBIAJABIAGACQAEAEADAHQAFgHAIgEQAHgDAIAAQAOAAAGAIQAGAGAAAOIAAAzg");
	this.shape_78.setTransform(149.5,289.4);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#FFFFFF").s().p("AgLAnQgFgBgFgCQgJgFgGgJQgDgFgBgFQgBgGAAgGQgBgLAGgJQAGgKAJgFQAKgFALAAQANAAAJAFQAKAFAFAKQADAEACAGIABAKQgBAMgFAKQgFAJgKAFQgEACgGABQgGACgGAAQgFAAgGgCgAgVgWQgEAFgCAFQgCAGAAAGQAAAHACAGQACAFAEAEQAJAJAMAAQAOAAAIgJQAJgIAAgOQAAgNgJgJQgIgIgOAAQgMAAgJAIg");
	this.shape_79.setTransform(137.5,289.5);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#FFFFFF").s().p("AguA4IAAhvIAjAAQAJAAAHACQAIACAHADQAGADAFAFQAFAFADAGQAEAHACAGQABAIABAIQAAAOgFAKQgDALgIAHQgJAHgKADQgMAEgNAAgAghAtIATAAQAMAAAJgCQAJgDAGgGQAMgLAAgXQAAgKgDgJQgCgIgHgGQgLgLgWAAIgWAAg");
	this.shape_80.setTransform(127,287.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},2).wait(1));

	// echec
	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#1BF3E6").s().p("AgvA4IgOgLIAAhaIAOgKIBfAAIAOAKIAABaIgOALgAgkAfIBJAAIAAg9IhJAAg");
	this.shape_81.setTransform(531.2,215.9);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#1BF3E6").s().p("AgvA4IgOgLIAAhaIAOgKIBfAAIAOAKIAABaIgOALgAgkAfIBJAAIAAg9IhJAAg");
	this.shape_82.setTransform(517.3,215.9);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#1BF3E6").s().p("AgvA4IgOgLIAAhaIAOgKIBfAAIAOAKIAABaIgOALgAgkAfIBJAAIAAg9IhJAAg");
	this.shape_83.setTransform(503.4,215.9);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#1BF3E6").s().p("AARD8QghAAgxgTQgxgTgigiQghghgVgvQgUgvAAgzQAAg2AUgvQAVgvAhghQAigiAxgTQAxgTAhAAIC/AAIAPALIAACBIjHAAQgWAAgQAHQgRAIgOAQQgPAPgJAVQgIAUAAAaQAAAXAIAUQAJAUAPAQQAPAQAQAIQAQAHAWAAIDHAAIAACBIgPALgAg1jTQgfANgXASQgYATgOATQgQAUgLAUQgYAwAAA4QAAA2AYAvQALAUAQAUQAOATAYATQAXASAfANQAgAMAqADICwAAIAAhZIisAAQgsgFgbgUQgbgUgQgeQgNgcAAghQAAgkANgcQAQgeAbgUQAbgUAsgFICsAAIAAhZIiwAAQgqADggAMg");
	this.shape_84.setTransform(473.4,196.3);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#1BF3E6").s().p("AjcD8IgOgLIAAktIAOgLIGYAAQAAAagQAfQgOAdgSAQQgSAQgZALQgbAMgjACIh7AAIAAAoIE1AAIAOASIAABvIgPALgAjRDjIGjAAIAAhZIlDAAIAAhbICRAAQAmgDAXgNQAXgNARgUQARgWAEgWIlrAAgAjchvIgOgKIAAh3IAOgLIG5AAIAOALIAAB3IgOAKgAjRiIIGjAAIAAhaImjAAg");
	this.shape_85.setTransform(426.2,196.3);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#1BF3E6").s().p("ABXD8IgOgLIAAisIiRAAIAACsIgPALIh1AAIgPgLIAAk4IEkAAIAAipIAOgLIB2AAIAOALIAAHhIgOALgABjAsIAAC3IBfAAIAAnFIhfAAIAAC0IklAAIAAERIBhAAIAAi3gAjbhvQAAgUACgQQACgTAEgPQAFgRALgRQALgPASgKQATgLAaAAIAxAAIAACCIgPAKgAiQjjQgMAFgHAGQgJAIgGAIIgJASQgHAXAAAXIBhAAIAAhhQgjABgMAFg");
	this.shape_86.setTransform(379.2,196.3);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#1BF3E6").s().p("AARD8QgiAAgwgTQgxgTgigiQghghgVgvQgUguAAg0QAAg3AUguQAVgvAhghQAigiAxgTQAwgTAiAAIC/AAIAPALIAACBIjHAAQgXAAgPAHQgQAIgPAQQgQAQgIAUQgIAUAAAaQAAAXAIAUQAHATARARQAPAQAQAIQAPAHAXAAIDHAAIAACBIgPALgAg1jTQgeAMgYATQgXARgQAVQgPAUgMAUQgXAwAAA4QAAA1AXAwQAMAUAPAUQAQAVAXARQAYATAeAMQAgAMAqADICwAAIAAhZIisAAQgsgFgcgUQgZgTgRgfQgNgdAAggQAAgjANgdQARgfAZgTQAcgUAsgFICsAAIAAhZIiwAAQgqADggAMg");
	this.shape_87.setTransform(333.5,196.3);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#1BF3E6").s().p("AjbD8IgPgLIAAktIAPgLIGWAAQAAAbgOAeQgPAcgSARQgSAQgZALQgbAMgjACIh7AAIAAAoIE0AAIAPASIAABvIgPALgAjRDjIGjAAIAAhZIlDAAIAAhbICRAAQAmgDAYgNQAXgOAQgTQAQgVAGgXIlsAAgAjbhvIgPgKIAAh3IAPgLIG3AAIAPALIAAB3IgPAKgAjRiIIGjAAIAAhaImjAAg");
	this.shape_88.setTransform(286.2,196.3);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#205874").s().p("A16CMQg6AAgpgpQgqgpAAg6IAAAAQAAg5AqgpQApgpA6AAMAr2AAAQA5AAAqApQAoApAAA5IAAAAQAAA6goApQgqApg5AAg");
	this.shape_89.setTransform(400.4,197.5);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#213158").s().p("A2pEYQh0AAhShSQhThSABh0IAAAAQAAhzBShSQBShSB0AAMAtTAAAQB0AABSBSQBSBSAABzIAAAAQAAB0hSBSQhSBSh0AAg");
	this.shape_90.setTransform(401,197.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81}]},2).wait(1));

	// score
	this.txtScoreFinal = new cjs.Text("Score final: 3000 pts ", "36px 'Prompt Light'", "#FFFFFF");
	this.txtScoreFinal.name = "txtScoreFinal";
	this.txtScoreFinal.textAlign = "center";
	this.txtScoreFinal.lineHeight = 62;
	this.txtScoreFinal.parent = this;
	this.txtScoreFinal.setTransform(399.5,352.7);

	this.timeline.addTween(cjs.Tween.get(this.txtScoreFinal).wait(3));

	// textes
	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#FFFFFF").s().p("AgMA3QgDgCAAgEQAAgEADgDQACgDAEAAQAEAAACADQADADAAAEQAAAEgDACQgCADgEAAQgEAAgCgDgAgNAYIAAgDIABgJIACgIQAEgFAHgGIALgHIAEgGQACgEAAgEQAAgEgCgDQgBgCgCgDQgHgEgJAAQgIAAgIACQgHABgHAEIAAgOQAGgDAIgCIAQgBQAHAAAIABQAGACAGAEQAKAIAAAOQAAAIgEAGQgEAGgKAHIgKAGIgDAHIgCAJIAAADg");
	this.shape_91.setTransform(516.4,318.4);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#FFFFFF").s().p("AgHA3IAAhMIAPAAIAABMgAgGgmQgDgDAAgEQAAgEADgDQADgCADAAQAEAAADACQADADAAAEQAAAEgDADQgDACgEAAQgDAAgDgCg");
	this.shape_92.setTransform(510.3,318.5);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#FFFFFF").s().p("AgWAkQgKgFgFgJQgGgKAAgMQAAgLAGgKIAGgIIAJgGQAKgFAMAAIAMABIALAEQAFADAEADQAEAEACAEQAGAKAAALQAAAMgGAKQgFAJgKAFQgFACgGABQgFACgHAAQgMAAgKgFgAgKgZQgFACgEAEQgDADgCAFQgCAGAAAFQAAAMAHAIQAEAEAFACQAFACAFAAQANAAAHgIQAEgEACgFQABgFAAgGQAAgFgBgGQgCgFgEgDQgHgIgNAAQgFAAgFACg");
	this.shape_93.setTransform(503.2,320.2);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#FFFFFF").s().p("AgHA7IAAh1IAPAAIAAB1g");
	this.shape_94.setTransform(496.4,318.1);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#FFFFFF").s().p("AgrA5IAAhvIAPAAIAAALQAMgNAUAAIALABIAKAEQAIAFAGAJQADAFAAAFQACAGAAAFQAAAHgCAFQAAAEgDAFQgGAJgIAFQgFADgFABQgFABgGABQgMgBgFgDQgJgDgFgGIAAAtgAgRgmQgGAFgEAJIAAARQADAIAHAGQAIAEAJAAQAIABAGgEQAHgEADgEQAEgHgBgJQABgHgEgHQgDgGgHgEQgGgDgIAAQgJAAgIAFg");
	this.shape_95.setTransform(489.4,321.8);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#FFFFFF").s().p("AAYAnIgYgdIgXAdIgSAAIAhgnIgegmIASAAIAUAaIAVgaIASAAIgeAmIAhAng");
	this.shape_96.setTransform(479,320.2);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#FFFFFF").s().p("AgOAmQgIgDgGgFQgHgFgDgIQgCgHAAgKQAAgIACgIQADgHAFgGQAGgFAHgDQAJgDAIAAQAOAAAJAFQAJAFAFAJIAEAKIAAAKIAAAHIhCAAQABALAJAFQAEADAFACIAMABIAPgCQAHgBAGgCIAAANIgNADQgJACgIAAQgJAAgJgDgAAagEQAAgLgHgGQgDgDgFgCIgLgBQgLAAgHAGQgHAHAAAKIAzAAIAAAAg");
	this.shape_97.setTransform(469.3,320.2);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#FFFFFF").s().p("AgGAsQgDgDgCgFQgCgEAAgHIAAgoIgLAAIAAgMIALAAIAAgXIAQAAIAAAXIASAAIAAAMIgSAAIAAAnQAAAIACADQADADAIAAQAFAAAEgCIAAANQgGACgIAAQgLAAgGgHg");
	this.shape_98.setTransform(455.5,319.1);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#FFFFFF").s().p("AgOAmQgIgDgGgFQgGgFgDgIQgEgHAAgKQAAgIAEgIQACgHAGgGQAFgFAHgDQAJgDAIAAQANAAAKAFQAJAFAFAJIADAKIACAKIAAAHIhDAAQABALAIAFQAEADAGACIAMABIAPgCQAHgBAGgCIAAANIgOADQgIACgIAAQgKAAgIgDgAAbgEQgBgLgHgGQgDgDgFgCIgLgBQgLAAgHAGQgGAHgBAKIA0AAIAAAAg");
	this.shape_99.setTransform(447.7,320.2);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#FFFFFF").s().p("AgPAkQgFgDgDgDIgHgIQgGgJAAgNQAAgMAGgJQAFgJAKgFIALgEIALgBQAJAAAHACQAHABAGAEIAAANQgLgHgQAAQgGAAgFACQgFACgEADQgIAHAAANQAAAHACAFQACAFAEAEQAEADAFACQAEACAHAAQAQAAAMgIIAAANQgGAEgHACQgHACgKAAQgMAAgKgFg");
	this.shape_100.setTransform(438.5,320.2);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#FFFFFF").s().p("AgOAmQgIgDgGgFQgHgFgDgIQgCgHAAgKQAAgIACgIQADgHAFgGQAGgFAHgDQAJgDAIAAQAOAAAJAFQAJAFAFAJIAEAKIAAAKIAAAHIhCAAQABALAJAFQAEADAFACIAMABIAPgCQAHgBAGgCIAAANIgNADQgJACgIAAQgJAAgJgDgAAagEQAAgLgHgGQgDgDgFgCIgLgBQgLAAgHAGQgHAHAAAKIAzAAIAAAAg");
	this.shape_101.setTransform(423.4,320.2);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#FFFFFF").s().p("AgYAnIAAhNIAQAAIAAAOIAGgGQACgDAEgBQAJgEAMAAIAAAOIgMAAIgJADQgIAFgEAIIAAAvg");
	this.shape_102.setTransform(415.7,320.2);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#FFFFFF").s().p("AgHA3IAAhMIAPAAIAABMgAgGgmQgCgDAAgEQAAgEACgDQADgCADAAQAEAAADACQACADABAEQgBAEgCADQgDACgEAAQgDAAgDgCg");
	this.shape_103.setTransform(410.2,318.5);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#FFFFFF").s().p("AgSAnQgFgCgFgDQgIgIAAgMQAAgNAIgFQAEgEAGgCQAGgBAHAAQAHAAAHABQAGACAGADIAAgEIgBgIQgCgDgDgDQgFgEgLAAIgOABIgMAEIAAgNQAFgCAIgCIAOgBQATAAAJAIQAJAJAAAPIAAAuIgPAAIAAgIQgFAFgHADQgHADgIAAQgHAAgGgCgAgPADIgEAFIgBAGQAAAOATAAQAGAAAHgDQAGgDADgFIAAgLQgLgGgLAAQgKAAgEADg");
	this.shape_104.setTransform(403.5,320.2);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#FFFFFF").s().p("AgNA7IAAg/IgMAAIAAgNIAMAAIAAgOQAAgHACgFQACgFADgDQAHgIANABQAGAAAGABIAAAOQgFgCgEgBQgIAAgDAFQgEADAAAIIAAANIATAAIAAANIgTAAIAAA/g");
	this.shape_105.setTransform(396.4,318.1);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#FFFFFF").s().p("AgOAmQgIgDgGgFQgHgFgDgIQgCgHAAgKQAAgIACgIQADgHAGgGQAFgFAHgDQAJgDAIAAQAOAAAJAFQAJAFAFAJIAEAKIABAKIAAAHIhDAAQABALAIAFQAFADAFACIAMABIAPgCQAIgBAFgCIAAANIgNADQgIACgJAAQgKAAgIgDgAAagEQAAgLgHgGQgDgDgFgCIgLgBQgLAAgHAGQgHAHAAAKIAzAAIAAAAg");
	this.shape_106.setTransform(388.6,320.2);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#FFFFFF").s().p("AgYAnIAAhNIAQAAIAAAOIAGgGQACgDAEgBQAJgEAMAAIAAAOIgMAAIgJADQgIAFgEAIIAAAvg");
	this.shape_107.setTransform(380.9,320.2);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#FFFFFF").s().p("AgQAnQgJgCgGgEIAAgNQAHADAIADQAIACAIAAQAIAAADgCQAFgCAAgFQAAgDgDgDQgBgCgEgCIgNgEQgJgCgFgDQgGgCgDgEQgDgFAAgHQAAgFADgEQACgEAEgDQAFgDAFgCIAMgBIAQACQAHABAFADIAAANIgMgEIgOgCQgHAAgFACQgEACgBAFQAAAEACACIAGAEIANADQAOAEAHAFIADAGQACAEAAAFQAAAKgIAGQgEADgHABQgFACgIAAQgHAAgJgCg");
	this.shape_108.setTransform(367.6,320.2);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#FFFFFF").s().p("AgdAfQgEgEgCgFQgCgGAAgHIAAgwIAQAAIAAAvQAAATASAAQAQAAAJgPIAAgzIAQAAIAABMIgQAAIAAgLQgFAHgHADQgIAEgIAAQgPAAgIgJg");
	this.shape_109.setTransform(358.9,320.3);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#FFFFFF").s().p("AgWAkQgKgFgFgJQgGgKAAgMQAAgLAGgKIAGgIIAJgGQAKgFAMAAIAMABIALAEQAFADAEADQAEAEACAEQAGAKAAALQAAAMgGAKQgFAJgKAFQgFACgGABQgFACgHAAQgMAAgKgFgAgKgZQgFACgEAEQgDADgCAFQgCAGAAAFQAAAMAHAIQAEAEAFACQAFACAFAAQANAAAHgIQAEgEACgFQABgFAAgGQAAgFgBgGQgCgFgEgDQgHgIgNAAQgFAAgFACg");
	this.shape_110.setTransform(349,320.2);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#FFFFFF").s().p("AgGAnIghhNIASAAIAVA3IAXg3IARAAIghBNg");
	this.shape_111.setTransform(339.3,320.2);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#FFFFFF").s().p("AgZAGIAAgLIAyAAIAAALg");
	this.shape_112.setTransform(331.4,319.3);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#FFFFFF").s().p("AggAnIAAgLIArg1IgqAAIAAgNIA+AAIAAAMIgqA0IAsAAIAAANg");
	this.shape_113.setTransform(324.1,320.2);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#FFFFFF").s().p("AgOAmQgIgDgGgFQgGgFgDgIQgEgHAAgKQAAgIAEgIQACgHAFgGQAGgFAIgDQAHgDAKAAQAMAAAKAFQAJAFAFAJIADAKIABAKIAAAHIhCAAQABALAIAFQAEADAGACIAMABIAPgCQAHgBAGgCIAAANIgOADQgHACgJAAQgKAAgIgDgAAbgEQgBgLgHgGQgDgDgFgCIgLgBQgLAAgHAGQgHAHAAAKIA0AAIAAAAg");
	this.shape_114.setTransform(315.3,320.2);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#FFFFFF").s().p("AgYAnIAAhNIAQAAIAAAOIAGgGQACgDAEgBQAJgEAMAAIAAAOIgMAAIgJADQgIAFgEAIIAAAvg");
	this.shape_115.setTransform(307.6,320.2);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#FFFFFF").s().p("AgdAfQgEgEgCgFQgCgGAAgHIAAgwIAQAAIAAAvQABATARAAQAQAAAJgPIAAgzIAQAAIAABMIgPAAIAAgLQgGAHgHADQgIAEgHAAQgQAAgIgJg");
	this.shape_116.setTransform(299.3,320.3);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#FFFFFF").s().p("AgSAnQgFgCgFgDQgIgIAAgMQAAgNAIgFQAEgEAGgCQAGgBAHAAQAHAAAHABQAGACAGADIAAgEIgBgIQgCgDgDgDQgFgEgLAAIgOABIgMAEIAAgNQAFgCAIgCIAOgBQATAAAJAIQAJAJAAAPIAAAuIgPAAIAAgIQgFAFgHADQgHADgIAAQgHAAgGgCgAgPADIgEAFIgBAGQAAAOATAAQAGAAAHgDQAGgDADgFIAAgLQgLgGgLAAQgKAAgEADg");
	this.shape_117.setTransform(289.8,320.2);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#FFFFFF").s().p("AgVA4QgKgBgGgDIAAgPQAQAHASAAQAYAAAAgQQAAgGgDgEQgDgDgFgDIgQgHQgIgDgFgDIgKgHQgDgEgCgFQgCgFAAgGQAAgIAFgHQAFgHAJgEIAJgDIAKAAIAQABQAHABAHAEIAAAOQgOgHgOAAQgKAAgGAFQgDACgCADQgBADAAADQAAAGACADQADAEAFADIAOAHQAMAEAGADQAHAFADAGQAEAGAAAJQAAAOgLAIQgFAEgHACQgIACgJAAQgKAAgJgCg");
	this.shape_118.setTransform(280.9,318.4);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#FFFFFF").s().p("AgEAGQgDgDAAgDQAAgCADgCQACgCACAAQADAAACACQADACAAACQAAADgDADQgCABgDAAQgCAAgCgBg");
	this.shape_119.setTransform(613,291.1);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#FFFFFF").s().p("AgSAnQgFgCgFgDQgIgIAAgMQAAgNAIgFQAEgEAGgCQAGgBAHAAQAHAAAHABQAGACAGADIAAgEIgBgIQgCgDgDgDQgFgEgLAAIgOABIgMAEIAAgNQAFgCAIgCIAOgBQATAAAJAIQAJAJAAAPIAAAuIgPAAIAAgIQgFAFgHADQgHADgIAAQgHAAgGgCgAgPADIgEAFIgBAGQAAAOATAAQAGAAAHgDQAGgDADgFIAAgLQgLgGgLAAQgKAAgEADg");
	this.shape_120.setTransform(606.9,288);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#FFFFFF").s().p("AgYAmIAAhLIAQAAIAAANIAGgFQACgEAEgBQAJgEAMABIAAAMIgMABIgJAEQgIAEgEAIIAAAug");
	this.shape_121.setTransform(599.6,288);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#FFFFFF").s().p("AgSAnQgFgCgFgDQgIgIAAgMQAAgNAIgFQAEgEAGgCQAGgBAHAAQAHAAAHABQAGACAGADIAAgEIgBgIQgCgDgDgDQgFgEgLAAIgOABIgMAEIAAgNQAFgCAIgCIAOgBQATAAAJAIQAJAJAAAPIAAAuIgPAAIAAgIQgFAFgHADQgHADgIAAQgHAAgGgCgAgPADIgEAFIgBAGQAAAOATAAQAGAAAHgDQAGgDADgFIAAgLQgLgGgLAAQgKAAgEADg");
	this.shape_122.setTransform(591.4,288);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#FFFFFF").s().p("AggAmIAAgKIArg1IgqAAIAAgMIA+AAIAAALIgqA0IAsAAIAAAMg");
	this.shape_123.setTransform(583,288);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#FFFFFF").s().p("AgSAnQgFgCgFgDQgIgIAAgMQAAgNAIgFQAEgEAGgCQAGgBAHAAQAHAAAHABQAGACAGADIAAgEIgBgIQgCgDgDgDQgFgEgLAAIgOABIgMAEIAAgNQAFgCAIgCIAOgBQATAAAJAIQAJAJAAAPIAAAuIgPAAIAAgIQgFAFgHADQgHADgIAAQgHAAgGgCgAgPADIgEAFIgBAGQAAAOATAAQAGAAAHgDQAGgDADgFIAAgLQgLgGgLAAQgKAAgEADg");
	this.shape_124.setTransform(574.4,288);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#FFFFFF").s().p("AgjA4IAAhvIAQAAIAABhIA4AAIAAAOg");
	this.shape_125.setTransform(566,286.2);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#FFFFFF").s().p("AgYAmIAAhLIAQAAIAAANIAGgFQACgEAEgBQAJgEAMABIAAAMIgMABIgJAEQgIAEgEAIIAAAug");
	this.shape_126.setTransform(552.5,288);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#FFFFFF").s().p("AgdAfQgEgEgCgFQgCgGAAgHIAAgwIAQAAIAAAvQAAATASAAQAQAAAJgPIAAgzIAQAAIAABMIgQAAIAAgLQgFAHgHADQgIAEgHAAQgQAAgIgJg");
	this.shape_127.setTransform(544.2,288.1);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#FFFFFF").s().p("AgQAnQgJgCgGgEIAAgNQAHADAIADQAIACAIAAQAHAAAFgCQADgCAAgFQAAgDgCgDQgBgCgFgCIgLgEQgKgCgGgDQgFgCgDgEQgDgFAAgHQAAgFACgEQACgEAFgDQAFgDAFgCIANgBIAOACQAIABAFADIAAANIgMgEQgHgCgHAAQgHAAgFACQgFACABAFQAAAEABACIAHAEIAMADQAPAEAFAFIAFAGQABAEAAAFQAAAKgIAGQgEADgHABQgFACgIAAQgIAAgIgCg");
	this.shape_128.setTransform(535.5,288);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#FFFFFF").s().p("AgYAmIAAhLIAQAAIAAANIAGgFQACgEAEgBQAJgEAMABIAAAMIgMABIgJAEQgIAEgEAIIAAAug");
	this.shape_129.setTransform(522.9,288);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#FFFFFF").s().p("AgdAfQgEgEgCgFQgCgGAAgHIAAgwIARAAIAAAvQgBATATAAQAPAAAJgPIAAgzIAQAAIAABMIgPAAIAAgLQgGAHgIADQgHAEgIAAQgPAAgIgJg");
	this.shape_130.setTransform(514.5,288.1);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#FFFFFF").s().p("AgWAkQgKgFgFgJQgGgKAAgMQAAgLAGgKIAGgIIAJgGQAKgFAMAAIAMABIALAEQAFADAEADQAEAEACAEQAGAKAAALQAAAMgGAKQgFAJgKAFQgFACgGABQgFACgHAAQgMAAgKgFgAgKgZQgFACgEAEQgDADgCAFQgCAGAAAFQAAAMAHAIQAEAEAFACQAFACAFAAQANAAAHgIQAEgEACgFQABgFAAgGQAAgFgBgGQgCgFgEgDQgHgIgNAAQgFAAgFACg");
	this.shape_131.setTransform(504.7,288);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#FFFFFF").s().p("AgTBIIAAgNQAEACAFAAQAHAAADgEQADgDAAgIIAAhVIAQAAIAABWQAAAHgCAFQgCAFgDADIgJAFQgEACgGAAQgHAAgFgCgAAEg5QgDgDAAgDQAAgFADgCQADgDAEAAQAEAAADADQACACAAAFQAAADgCADQgDADgEAAQgEAAgDgDg");
	this.shape_132.setTransform(496.5,288.1);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#FFFFFF").s().p("AgOA3QgIgDgGgFQgHgFgDgIQgCgHAAgKQAAgJACgIQADgGAGgGQAFgFAHgDQAJgDAIAAQAOAAAJAFQAJAFAFAJIAEAJIABAKIAAAIIhDAAQABALAIAFQAFADAFACIAMABIAPgCQAIgBAFgCIAAANIgNADQgIACgJAAQgKAAgIgDgAAaAMQAAgLgHgFQgDgDgFgCIgLgBQgLAAgHAGQgHAGAAAKIAzAAIAAAAgAgIgdIALgcIAQAAIgNAcg");
	this.shape_133.setTransform(490.8,286.3);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#FFFFFF").s().p("AgQAnQgJgCgFgEIAAgNQAGADAIADQAIACAIAAQAIAAADgCQAFgCAAgFQAAgDgCgDQgCgCgEgCIgNgEQgJgCgFgDQgGgCgDgEQgDgFAAgHQAAgFADgEQACgEAEgDQAEgDAGgCIAMgBIAQACQAGABAFADIAAANIgLgEQgHgCgHAAQgHAAgFACQgFACAAAFQAAAEADACIAFAEIANADQAPAEAFAFIAEAGQACAEAAAFQAAAKgIAGQgEADgGABQgHACgHAAQgIAAgIgCg");
	this.shape_134.setTransform(482,288);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#FFFFFF").s().p("AgOAmQgIgDgGgFQgHgFgDgIQgCgHAAgKQAAgIACgIQADgHAGgGQAFgFAHgDQAJgDAIAAQAOAAAJAFQAJAFAFAJIAEAKIABAKIAAAHIhDAAQABALAIAFQAFADAFACIAMABIAPgCQAIgBAFgCIAAANIgNADQgIACgJAAQgKAAgIgDgAAagEQAAgLgHgGQgDgDgFgCIgLgBQgLAAgHAGQgHAHAAAKIAzAAIAAAAg");
	this.shape_135.setTransform(467.4,288);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#FFFFFF").s().p("AgYAmIAAhLIAQAAIAAANIAGgFQACgEAEgBQAJgEAMABIAAAMIgMABIgJAEQgIAEgEAIIAAAug");
	this.shape_136.setTransform(459.7,288);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#FFFFFF").s().p("AgGAsQgEgDgBgFQgCgEAAgHIAAgoIgLAAIAAgMIALAAIAAgXIAQAAIAAAXIATAAIAAAMIgTAAIAAAnQAAAIACADQAEADAHAAQAFAAAEgCIAAANQgGACgIAAQgLAAgGgHg");
	this.shape_137.setTransform(453.2,286.9);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#FFFFFF").s().p("AgdAfQgEgEgCgFQgCgGAAgHIAAgwIAQAAIAAAvQAAATASAAQAQAAAJgPIAAgzIAQAAIAABMIgQAAIAAgLQgFAHgHADQgIAEgIAAQgPAAgIgJg");
	this.shape_138.setTransform(445.4,288.1);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#FFFFFF").s().p("AgSAnQgFgCgFgDQgIgIAAgMQAAgNAIgFQAEgEAGgCQAGgBAHAAQAHAAAHABQAGACAGADIAAgEIgBgIQgCgDgDgDQgFgEgLAAIgOABIgMAEIAAgNQAFgCAIgCIAOgBQATAAAJAIQAJAJAAAPIAAAuIgPAAIAAgIQgFAFgHADQgHADgIAAQgHAAgGgCgAgPADIgEAFIgBAGQAAAOATAAQAGAAAHgDQAGgDADgFIAAgLQgLgGgLAAQgKAAgEADg");
	this.shape_139.setTransform(435.9,288);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#FFFFFF").s().p("AAVAnIAAguQAAgJgDgFQgFgEgJAAQgHgBgHAEQgDACgCADIgGAGIAAAyIgQAAIAAhLIAPAAIAAALIAHgGQADgDAEgBQAIgDAHgBQAIABAGACQAGACADADQAIAJAAAOIAAAvg");
	this.shape_140.setTransform(420.9,287.9);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#FFFFFF").s().p("AgdAfQgEgEgCgFQgCgGAAgHIAAgwIAQAAIAAAvQAAATASAAQAQAAAJgPIAAgzIAQAAIAABMIgQAAIAAgLQgFAHgHADQgIAEgIAAQgPAAgIgJg");
	this.shape_141.setTransform(411.2,288.1);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#FFFFFF").s().p("AgSA4QgFgCgFgDQgIgIAAgMQAAgNAIgGQAEgEAGgCQAGgBAHAAQAHAAAHABQAGACAGADIAAgEIgBgHQgCgDgDgDQgFgEgLAAIgOABIgMAEIAAgNQAFgCAIgCIAOgBQATAAAJAIQAJAJAAAOIAAAvIgPAAIAAgIQgFAFgHADQgHADgIAAQgHAAgGgCgAgPAUIgEAFIgBAGQAAAOATAAQAGAAAHgDQAGgDADgFIAAgLQgLgGgLAAQgKAAgEADgAgDgdIgNgcIAQAAIALAcg");
	this.shape_142.setTransform(395.8,286.3);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#FFFFFF").s().p("AgdAfQgEgEgCgFQgCgGAAgHIAAgwIARAAIAAAvQgBATATAAQAPAAAJgPIAAgzIAQAAIAABMIgQAAIAAgLQgFAHgHADQgIAEgIAAQgPAAgIgJg");
	this.shape_143.setTransform(380.7,288.1);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#FFFFFF").s().p("AgPAkQgFgDgDgDIgHgIQgGgJAAgNQAAgMAGgJQAFgJAKgFIALgEIALgBQAJAAAHACQAHABAGAEIAAANQgLgHgQAAQgGAAgFACQgFACgEADQgIAHAAANQAAAHACAFQACAFAEAEQAEADAFACQAEACAHAAQAQAAAMgIIAAANQgGAEgHACQgHACgKAAQgMAAgKgFg");
	this.shape_144.setTransform(371.5,288);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#FFFFFF").s().p("AgOA3QgIgDgGgFQgGgFgDgIQgDgHgBgKQABgJADgIQACgGAGgGQAFgFAHgDQAIgDAJAAQANAAAKAFQAJAFAFAJIAEAJIABAKIAAAIIhDAAQABALAIAFQAEADAGACIAMABIAPgCQAHgBAGgCIAAANIgOADQgHACgJAAQgJAAgJgDgAAaAMQAAgLgHgFQgDgDgFgCIgLgBQgLAAgHAGQgGAGgBAKIAzAAIAAAAgAgIgdIAKgcIARAAIgMAcg");
	this.shape_145.setTransform(362.3,286.3);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#FFFFFF").s().p("AgGAmIghhLIASAAIAVA2IAXg2IARAAIghBLg");
	this.shape_146.setTransform(352.8,288);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#FFFFFF").s().p("AgYAmIAAhLIAQAAIAAANIAGgFQACgEAEgBQAJgEAMABIAAAMIgMABIgJAEQgIAEgEAIIAAAug");
	this.shape_147.setTransform(345.3,288);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#FFFFFF").s().p("AgdAfQgEgEgCgFQgCgGAAgHIAAgwIAQAAIAAAvQAAATASAAQAQAAAJgPIAAgzIAQAAIAABMIgQAAIAAgLQgFAHgHADQgIAEgIAAQgPAAgIgJg");
	this.shape_148.setTransform(336.9,288.1);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#FFFFFF").s().p("AgQAnQgJgCgGgEIAAgNIAPAGQAIACAIAAQAIAAADgCQAEgCAAgFQAAgDgCgDQgBgCgEgCIgNgEQgJgCgGgDQgFgCgDgEQgDgFAAgHQAAgFACgEQADgEAEgDQAEgDAGgCIANgBIAOACQAHABAGADIAAANIgMgEQgHgCgHAAQgIAAgEACQgEACgBAFQAAAEACACIAHAEIAMADQAOAEAHAFIADAGQACAEAAAFQAAAKgIAGQgEADgHABQgFACgIAAQgHAAgJgCg");
	this.shape_149.setTransform(328.3,288);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#FFFFFF").s().p("AggAmIAAgKIArg1IgqAAIAAgMIA+AAIAAALIgqA0IAsAAIAAAMg");
	this.shape_150.setTransform(314.5,288);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#FFFFFF").s().p("AgOAmQgIgDgGgFQgGgFgEgIQgDgHABgKQgBgIADgIQADgHAFgGQAGgFAIgDQAHgDAKAAQANAAAJAFQAJAFAFAJIADAKIABAKIAAAHIhCAAQABALAJAFQAEADAFACIAMABIAPgCQAHgBAGgCIAAANIgNADQgJACgIAAQgJAAgJgDgAAbgEQgBgLgHgGQgDgDgFgCIgLgBQgLAAgHAGQgGAHgBAKIA0AAIAAAAg");
	this.shape_151.setTransform(305.7,288);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#FFFFFF").s().p("AgGAmIghhLIASAAIAVA2IAXg2IARAAIghBLg");
	this.shape_152.setTransform(296.1,288);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#FFFFFF").s().p("AgSAnQgFgCgFgDQgIgIAAgMQAAgNAIgFQAEgEAGgCQAGgBAHAAQAHAAAHABQAGACAGADIAAgEIgBgIQgCgDgDgDQgFgEgLAAIgOABIgMAEIAAgNQAFgCAIgCIAOgBQATAAAJAIQAJAJAAAPIAAAuIgPAAIAAgIQgFAFgHADQgHADgIAAQgHAAgGgCgAgPADIgEAFIgBAGQAAAOATAAQAGAAAHgDQAGgDADgFIAAgLQgLgGgLAAQgKAAgEADg");
	this.shape_153.setTransform(286.8,288);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#FFFFFF").s().p("AgQAnQgJgCgGgEIAAgNIAPAGQAIACAIAAQAIAAADgCQAEgCABgFQgBgDgCgDQgBgCgEgCIgNgEQgJgCgFgDQgGgCgDgEQgDgFAAgHQAAgFADgEQABgEAFgDQAEgDAGgCIANgBIAPACQAHABAFADIAAANIgMgEQgHgCgHAAQgIAAgEACQgEACgBAFQAAAEACACIAGAEIANADQAOAEAHAFIADAGQACAEAAAFQAAAKgIAGQgEADgHABQgFACgIAAQgHAAgJgCg");
	this.shape_154.setTransform(272.6,288);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#FFFFFF").s().p("AgdAfQgEgEgCgFQgCgGAAgHIAAgwIAQAAIAAAvQABATARAAQAQAAAJgPIAAgzIAQAAIAABMIgQAAIAAgLQgFAHgHADQgIAEgHAAQgQAAgIgJg");
	this.shape_155.setTransform(263.8,288.1);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#FFFFFF").s().p("AgWAkQgKgFgFgJQgGgKAAgMQAAgLAGgKIAGgIIAJgGQAKgFAMAAIAMABIALAEQAFADAEADQAEAEACAEQAGAKAAALQAAAMgGAKQgFAJgKAFQgFACgGABQgFACgHAAQgMAAgKgFgAgKgZQgFACgEAEQgDADgCAFQgCAGAAAFQAAAMAHAIQAEAEAFACQAFACAFAAQANAAAHgIQAEgEACgFQABgFAAgGQAAgFgBgGQgCgFgEgDQgHgIgNAAQgFAAgFACg");
	this.shape_156.setTransform(254,288);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#FFFFFF").s().p("AgHA4IgthvIASAAIAiBYIAkhYIARAAIgtBvg");
	this.shape_157.setTransform(243,286.2);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#FFFFFF").s().p("AgGA2QgDgCAAgEQAAgEADgDQADgDADAAQAEAAADADQADADAAAEQAAAEgDACQgDADgEAAQgDAAgDgDgAgHAXIAAhPIAPAAIAABPg");
	this.shape_158.setTransform(229.5,286.3);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#FFFFFF").s().p("AgWAkQgKgFgFgJQgGgKAAgMQAAgLAGgKIAGgIIAJgGQAKgFAMAAIAMABIALAEQAFADAEADQAEAEACAEQAGAKAAALQAAAMgGAKQgFAJgKAFQgFACgGABQgFACgHAAQgMAAgKgFgAgKgZQgFACgEAEQgDADgCAFQgCAGAAAFQAAAMAHAIQAEAEAFACQAFACAFAAQANAAAHgIQAEgEACgFQABgFAAgGQAAgFgBgGQgCgFgEgDQgHgIgNAAQgFAAgFACg");
	this.shape_159.setTransform(222.7,288);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#FFFFFF").s().p("AgGAmIghhLIASAAIAVA2IAXg2IARAAIghBLg");
	this.shape_160.setTransform(213,288);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#FFFFFF").s().p("AgSAnQgFgCgFgDQgIgIAAgMQAAgNAIgFQAEgEAGgCQAGgBAHAAQAHAAAHABQAGACAGADIAAgEIgBgIQgCgDgDgDQgFgEgLAAIgOABIgMAEIAAgNQAFgCAIgCIAOgBQATAAAJAIQAJAJAAAPIAAAuIgPAAIAAgIQgFAFgHADQgHADgIAAQgHAAgGgCgAgPADIgEAFIgBAGQAAAOATAAQAGAAAHgDQAGgDADgFIAAgLQgLgGgLAAQgKAAgEADg");
	this.shape_161.setTransform(203.6,288);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#FFFFFF").s().p("AgYAmIAAhLIAQAAIAAANIAGgFQACgEAEgBQAJgEAMABIAAAMIgMABIgJAEQgIAEgEAIIAAAug");
	this.shape_162.setTransform(196.4,288);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#FFFFFF").s().p("AgqA4IAAhvIAzAAQAOAAAIAIQAJAHgBAPQAAAIgDAHQgFAGgFADQAIACAEAGQAFAHAAAKIgBAJIgDAIQgFAHgGAEQgIAEgJAAgAgaAqIAiAAIAHgBIAGgCQADgCACgEIABgJIgBgJQgCgDgDgCQgEgEgLgBIggAAgAgagHIAgAAQAIAAAFgEIADgFIABgIQAAgJgEgFQgCgCgEAAIgIgBIgfAAg");
	this.shape_163.setTransform(187.9,286.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91}]}).to({state:[]},2).wait(1));

	// reussi
	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#1BF3E6").s().p("Ag6D8IgOgLIAAh3IAOgLIB1AAIAOALIAAB3IgOALgAgvDjIBfAAIAAhbIhfAAgAg6BWIgOgLIAAk7IAOgLIB1AAIAOALIAAE7IgOALgAgvA8IBfAAIAAkeIhfAAg");
	this.shape_164.setTransform(552.7,194.8);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#1BF3E6").s().p("Ag6D8IgOgLIAAneIAOgOIB1AAIAOAOIAAHeIgOALgAgvDjIBfAAIAAnFIhfAAg");
	this.shape_165.setTransform(500.7,194.8);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#1BF3E6").s().p("Aj0D8IgQgRIAAhnIAQgRIEIAAQAiAAAiggQAiggAAgoICLAAQAAAzgUAtQgVAsgiAgQghAggqATQgrASgqAAgAjrDjIDsAAQAzABAfgKQAggKAXgSQAZgRAUgXQAUgZAKgUQAMgXAFgQQAFgQAAgOIhaAAQgGAjglAiQglAjg6AAIjyAAgAkEgKQAAgzAVgtQAVgsAhggQAhggArgTQArgSApAAIEPAAIAPARIAABqIgPARIkIAAQgjAAgiAfQgiAeAAAogAhRjZQgfAKgZASQgaASgTAWQgRAVgNAYQgMAXgFAQQgFATAAALIBaAAQAGghAmgiQAlgiA5AAIDyAAIAAhaIjsAAIgFAAQgvAAgdAJg");
	this.shape_166.setTransform(465.8,194.8);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#1BF3E6").s().p("Aj1D8IgPgRIAAhnIAPgRIEIAAQAjAAAiggQAiggAAgoICLAAQAAA0gVAsQgTArgjAhQghAggqATQgsASgpAAgAjrDjIDsAAQAyABAfgKQAfgKAZgSQAZgRAUgXQATgXALgWQAMgXAFgQQAFgQAAgOIhaAAQgGAiglAjQglAjg6AAIjyAAgAkEgKQAAgzAUgtQAVgrAighQAhggAqgTQAsgSApAAIEPAAIAPARIAABqIgPARIkIAAQgjAAgiAfQgiAeAAAogAhRjZQgfAKgZASQgZARgUAXQgRAVgNAYQgMAXgFAQQgFAQAAAOIBaAAQAGghAlgiQAlgiA6AAIDyAAIAAhaIjsAAIgFAAQgwAAgcAJg");
	this.shape_167.setTransform(412.1,194.8);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#1BF3E6").s().p("AhQD8QgRAAgWgLQgYgMgSgSQgSgRgPgZQgNgXgBgbIAAlhIAPgRIBxAAIAQARIAAFRIAKAIIBtAAIAKgIIAAlRIAQgRIBwAAIAQARIAAFhQAAAagNAYQgPAZgTARQgSASgXAMQgWALgRAAgAi4BuQABAPAHAVQAIASAPATQAPAQAVAOQAWANAeABICEAAQAfgBAWgNQAVgLAPgTQAPgSAHgTQAHgVgBgPIAAlQIheAAIAAFIQAAARgKAIQgLAJgKAAIhzAAQgLAAgLgJQgLgIAAgQIAAlJIhfAAg");
	this.shape_168.setTransform(363.6,194.8);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#1BF3E6").s().p("AjcD8IgOgLIAAktIAOgLIGYAAQgBAbgPAeQgOAcgRARQgUAQgYALQgbAMgjACIh7AAIAAAoIE0AAIAPASIAABvIgPALgAjRDjIGjAAIAAhZIlDAAIAAhbICRAAQAngDAWgNQAYgOAQgTQAQgVAFgXIlrAAgAjchvIgOgKIAAh3IAOgLIG4AAIAPALIAAB3IgPAKgAjRiIIGjAAIAAhaImjAAg");
	this.shape_169.setTransform(317.7,194.8);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#1BF3E6").s().p("ABuD8IjLjSIAAheIAQgRIFdAAQgCATgFAPQgGARgJAQQgKARgRAPQgRAPgbAMQgaALglAEICcCYIAAAcgAhEAiIC/DBIBzAAIi2i0IA2AAQAqgDAYgOQAZgOAPgQQASgUAFgYIkzAAgAj5D8IgQgRIAAkfIAQgRIByAAIAQARIAAEfIgQARgAjvDjIBfAAIAAkPIhfAAgAkQhvIAAiMIGHAAQAgAAAdANQAdAOAUASQAVATAMAZQALAYgBAbgAj3iIIHmAAQAAgJgHgNQgHgMgRgRQgRgQgVgKQgTgKglgDIlpAAg");
	this.shape_170.setTransform(265.5,194.8);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#205874").s().p("A17CMQg5AAgqgpQgogpAAg6IAAAAQAAg5AogpQAqgpA5AAMAr3AAAQA5AAApApQAqApAAA5IAAAAQAAA6gqApQgpApg5AAg");
	this.shape_171.setTransform(397.9,196);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#213158").s().p("A2pEYQh0AAhShSQhShSAAh0IAAAAQAAhzBShSQBShSB0AAMAtTAAAQBzAABTBSQBSBSAABzIAAAAQAAB0hSBSQhTBShzAAg");
	this.shape_172.setTransform(398.5,196);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164}]}).to({state:[]},2).wait(1));

	// btnRejouer2
	this.btnRejouer = new lib.btnRejouer();
	this.btnRejouer.parent = this;
	this.btnRejouer.setTransform(398.5,465,1,1,0,0,0,163,27.5);

	this.timeline.addTween(cjs.Tween.get(this.btnRejouer).wait(3));

	// fond
	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#1BF3E6").s().p("Eg6qArDMAAAhWFMB1VAAAMAAABWFgEg6gAq5MB1BAAAMAAAhVxMh1BAAAg");
	this.shape_173.setTransform(398.5,299.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_173).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(23,24,751,551);
p.frameBounds = [rect, rect, rect];


(lib.ClipObstacle = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{normal:0,poison:1});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(15));

	// obstacle
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF3EF1").s().p("AhtBhQhygLgcgcQgTgUhBgVQgvgPAKgUQAMgYBEgDQAjgCAgADIAVgHQAZgLAMgUIAABAIAWgXQAagWAQAAQgMAgAEAdQADANAFAIIAHgGQASgTANgsIAtBFQAAgTATgsIANAYQAQAaAIAUQAIgIgDgfIgFgfIAtAsQACgKAGgPQAKgeAPgTQAWgbAcAAQgYAMAEAhQABARAHAOIAXgVQAegYAkgMQgQAYAHAWQADALAGAHIBTgtIgHAZQgFAbAMALQA7AOgKAXQgJAWg0AFIhvAWQhQAQh6AAQgzAAg5gFg");
	this.shape.setTransform(-0.5,-4.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF3EF1").s().p("AjoCuQgQgEgHgaQgHgZAFgdQAMhMA6AAQAkAAAgAZQAeAXALgDQAQgEAEgfIAGhcQABgXAPgTQAYgfA1gSQAogNAggBIADAAIAIAIQAVAUAjARQAjARAtALIgCACQgUASgkBdIgDAKIgBAAQgIgVgNgZQgZgygUgUQgZgZgagHQgbgIgYAOQgLAHgIAPQgLAXgCAnQgDAiAEAjQAEAqgbAiQgcAggnAAQgtAAgJgeQgGgTgDgFQgHgMgTgEQgggHgDA5IgDAmQgCAOgJAAIgDAAg");
	this.shape_1.setTransform(-26.4,-46.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF3EF1").s().p("Ah4A1QANgRAVgRQBEg1BvggQADAMAjAdQggABgoAOQg2ARgXAeQgbgDgZAEQgZAFgUAMIgPAMg");
	this.shape_2.setTransform(-28.2,-61.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF3EF1").s().p("AgbgSQAbAVAcAPQgigQgVgUg");
	this.shape_3.setTransform(-11.2,-61.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FF3EF1").s().p("AAcB8QAFgSAAgfIgBg4QAAgoAEgYIAEgRIgMACQgFAAgHgBQgUgEglgTIg0gaQAJgPAKgHQAYgOAbAIQAZAHAaAZQATAUAaAyQAMAaAIAUQgTA2gNAaQgVAngTANQAFgJACgJg");
	this.shape_4.setTransform(-15.9,-45.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FF3EF1").s().p("AgHCJIgPgXQgTAsAAAUIgthHQgNAtgRATQgCgOAPgnQAOgigGgMQgIgQgWgKIgVgGQAsgGANAGQAHhSgNgNQgIgIAFgLIAGgKIANANIAmguQAugyAogQIgQAbQgQAcgEAMQgBAFASgBQAWgCAGAFQAFADgFAUQgEAUAEABQATAFAygbIAYgNQgKAOgpAqIgnAoIAngNQgHASgTANQgHAFAIAUQAGAPAQAdQgPATgKAeQgFAPgCALIgtgsIAFAeQADAggIAIQgIgUgPgbg");
	this.shape_5.setTransform(1.6,-20.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FF3EF1").s().p("AkOEiIgWgHQAugEAxghQA4glAQgvQgCAKgFAJQATgNAUgoQANgaAUg2IABAAIADgKQAkhcAUgSIABgCQgsgMgjgRQgdgQgbgVIgIgIIgDAAQgjgdgDgMQhwAghEA2QgVARgNARIgKAOQgRAMgJAOQgRhCBrhAQBJgsBKgSQgIggAmgXQATgLAVgFQgGAHgGAJQgNASAAALQAAAWARAHQAJAEA5AMQAnAIBHgPICRggQBEgMAuAYQAXAMAKAPIAJgBQANgFAQgUQgFAoAUAwQAVAyAcAJQgfANgsAnQgyArAEAaQADAZglBBQgpBHgCASIghgaQgVgQgQAEQgMADgNAKQgyAagSgEQgFgBAFgUQAEgUgEgEQgGgEgXACQgSABACgFQAEgMAQgdIAPgaQAxgUAngyQAngygYgOQgQgKigCgQipCpggAHQgRADgQAAQgOAAgOgDg");
	this.shape_6.setTransform(-0.5,-48.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FF3EF1").s().p("AhUGyQh3gMggggQgMgMgVgJIgmgOQgagIgJgFQgQgIgFgLQgFgOAHgOQAOgcA9gHQAlgEAxAEQAegHAOgYIALgSIg6gKIBGgKIAHgLIAAAKIAXgDQAagEATABQADg2gGgNQgHgHgBgHQhTBNgcAHQgkAHgggHQgTgEgHgEIgvgaIA1gFQAzgEAvglQArgiAMgiQAFgWgBg9IAAgQQgBgtAEgTIgHgBQgWgEgogVIgjgTQgOAsAHBAQAGA0gjAmQggAkgsAAQglAAgRgOQgMgKgGgXQgDgMgDgEQgEgEgLgDQgGgBgCABQgHAFgBApQgBAXgCAIQgDAOgJAHQgJAHgNgDQgXgHgKgeQgJgcAFghQAGgqAXgaQAYgZAiAAQAbAAAYAMQAOAGATAPQARAOAEgCQAFgBACgRIADgqIADg1QABgOAFgNIgXACQgaAGgXARQgSAMgJANIgUAdIgIgiQgShHBihCQBDgtBYgaQABgPAHgMQANgWAfgNQATgKANgCIA0gNIglAnQgIAIgGALQgHAKAAAFQAAALAHAEQAHADAmAHIASAEQAcAGAogGQAagEA7gOQBAgPAggFQA9gLAvARQAeALATAUQAIgEALgPIAkgsIgHA5QgFAiASAsQASAsAWAHIApAOIgoAQQgeANgpAkQgrAnACARQADAVgOAfQgIATgYAoQgfA4gDAPIgDAaIgVgOQgIgFgKgJQgagWgKgBQgNARgbAcIAGgCIgKAeQgBAFgGAJQgIAOgNAKQADAKALAVQAVgQAaAAIBEAAIg9AeQgPAIADAYQAlgdAogNIAsgPIgaAnQgMASAEAPIBvg6IgSApQgFALgCANQgCANADAHQA7APgCAgQgBASgVANQgVANgiADQgZADgsAKQgyAMgnAFQhBAJhdAAQgzgBg5gFgAh9EIQAbgXAVAAIAOAAQgFgJgOgHQgLgFgJgCIgXgDgAA4gTQARgLANgFQAegMAegeQAcgbAJgYIADgJQgZAOhpBog");
	this.shape_7.setTransform(-3.1,-37);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FF3EF1").s().p("AhUGyQh3gMggggQgMgMgVgJIgmgOQgagIgJgFQgQgIgFgLQgFgOAHgOQAOgcA9gHQAlgEAxAEQAegHAOgYIALgSIg6gKIBGgKIAHgLIAAAKIAXgDQAagEATABQADg2gGgNQgHgHgBgHQhTBNgcAHQgkAHgggHQgTgEgHgEIgvgaIA1gFQAzgEAvglQArgiAMgiQAFgWgBg9IAAgQQgBgtAEgTIgHgBQgWgEgogVIgjgTQgOAsAHBAQAGA0gjAmQggAkgsAAQglAAgRgOQgMgKgGgXQgDgMgDgEQgEgEgLgDQgGgBgCABQgHAFgBApQgBAXgCAIQgDAOgJAHQgJAHgNgDQgXgHgKgeQgJgcAFghQAGgqAXgaQAYgZAiAAQAbAAAYAMQAOAGATAPQARAOAEgCQAFgBACgRIADgqIADg1QABgOAFgNIgXACQgaAGgXARQgSAMgJANIgUAdIgIgiQgShHBihCQBDgtBYgaQABgPAHgMQANgWAfgNQATgKANgCIA0gNIglAnQgIAIgGALQgHAKAAAFQAAALAHAEQAHADAmAHIASAEQAcAGAogGQAagEA7gOQBAgPAggFQA9gLAvARQAeALATAUQAIgEALgPIAkgsIgHA5QgFAiASAsQASAsAWAHIApAOIgoAQQgeANgpAkQgrAnACARQADAVgOAfQgIATgYAoQgfA4gDAPIgDAaIgVgOQgIgFgKgJQgagWgKgBQgNARgbAcIAGgCIgKAeQgBAFgGAJQgIAOgNAKQADAKALAVQAVgQAaAAIBEAAIg9AeQgPAIADAYQAlgdAogNIAsgPIgaAnQgMASAEAPIBvg6IgSApQgFALgCANQgCANADAHQA7APgCAgQgBASgVANQgVANgiADQgZADgsAKQgyAMgnAFQhBAJhdAAQgzgBg5gFgAh9EIQAbgXAVAAIAOAAQgFgJgOgHQgLgFgJgCIgXgDgAA4gTQARgLANgFQAegMAegeQAcgbAJgYIADgJQgZAOhpBog");
	this.shape_8.setTransform(-3.1,-37);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[]},1).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[]},1).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[]},2).wait(8));

	// obstacle
	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#27847A").s().p("AhtBhQhygLgcgcQgTgUhBgVQgvgPAKgUQAMgYBEgDQAjgCAgADIAVgHQAZgLAMgUIAABAIAWgXQAagWAQAAQgMAgAEAdQADANAFAIIAHgGQASgTANgsIAtBFQAAgTATgsIANAYQAQAaAIAUQAIgIgDgfIgFgfIAtAsQACgKAGgPQAKgeAPgTQAWgbAcAAQgYAMAEAhQABARAHAOIAXgVQAegYAkgMQgQAYAHAWQADALAGAHIBTgtIgHAZQgFAbAMALQA7AOgKAXQgJAWg0AFIhvAWQhQAQh6AAQgzAAg5gFg");
	this.shape_9.setTransform(-0.5,-4.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FF3EF1").s().p("AjoCuQgQgEgHgaQgHgZAFgdQAMhMA6AAQAkAAAgAZQAeAXALgDQAQgEAEgfIAGhcQABgXAPgTQAYgfA1gSQAogNAggBIADAAIAIAIQAVAUAjARQAjARAtALIgCACQgUASgkBdIgDAKIgBAAQgIgVgNgZQgZgygUgUQgZgZgagHQgbgIgYAOQgLAHgIAPQgLAXgCAnQgDAiAEAjQAEAqgbAiQgcAggnAAQgtAAgJgeQgGgTgDgFQgHgMgTgEQgggHgDA5IgDAmQgCAOgJAAIgDAAg");
	this.shape_10.setTransform(-26.4,-46.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#ED1DD5").s().p("Ah4A1QANgRAVgRQBEg1BvggQADANAjAcQggABgoAOQg2ARgXAeQgbgDgZAEQgZAFgUAMIgPAMg");
	this.shape_11.setTransform(-28.2,-61.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#B6149B").s().p("AgbgSQAbAVAcAPQgigRgVgTg");
	this.shape_12.setTransform(-11.2,-61.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#ED1DD5").s().p("AAcB8QAEgSABgfIAAg4QgBgoAEgYIAEgRIgNACQgEAAgHgBQgUgEglgTIgzgaQAHgPALgHQAYgOAbAIQAZAHAZAZQAUAUAZAyQANAaAIAUQgTA2gNAaQgVAngTANQAFgJACgJg");
	this.shape_13.setTransform(-15.9,-45.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#1E367E").s().p("AgHCJIgPgXQgTAsAAAUIgthHQgNAtgRAUQgCgPAPgnQAOgigGgMQgIgQgWgKIgVgGQAsgHANAHQAHhSgNgNQgIgIAFgLIAGgKIANANIAmguQAugyAogQIgQAaQgQAdgEAMQgBAGASgCQAWgCAGAFQAFADgFAUQgEAUAEABQATAEAygaIAYgNQgKAOgpAqIgnAoIAngNQgHATgTAMQgHAFAIAUQAGAPAQAdQgPATgKAeQgFAPgCALIgtgsIAFAeQADAggIAIQgIgUgPgbg");
	this.shape_14.setTransform(1.6,-20.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#5D0093").s().p("AkOEiIgWgHQAugEAxghQA4glAQgvQgCAKgFAJQATgNAUgoQANgaAUg2IABAAIADgKQAkhcAUgSIABgCQgsgMgjgRQgdgQgbgVIgIgIIgDAAQgjgdgDgMQhwAghEA2QgVARgNARIgKAOQgRAMgJAOQgRhCBrhAQBJgsBKgSQgIggAmgXQATgLAVgFQgZAbAAASQAAAWARAHQAJAEA5AMQAnAIBHgPICRggQBEgMAuAYQAXAMAKAPIAJgBQANgFAQgUQgFAoAUAwQAVAyAcAJQgfANgsAnQgyArAEAaQADAZglBBQgpBHgCASIghgaQgVgQgQAEQgMADgNAKQgyAagSgEQgFgBAFgUQAEgUgEgEQgGgEgXACQgSABACgFQAEgMAQgdIAPgaQAxgUAngyQAngygYgOQgQgKigCgQipCpggAHQgRADgQAAQgOAAgOgDg");
	this.shape_15.setTransform(-0.5,-48.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#1BF3E6").ss(1,0,0,4).p("AATG5QgzAAg5gFQh3gMggggQgMgMgVgJQgMgFgagJQgagIgJgFQgQgIgFgMQgFgNAHgOQAOgdA9gGQAlgEAxAEQAegHAOgYIALgSIg6gKIBGgKIAHgLIAAAKIAXgDQAagEATABQADg2gGgNQgHgHgBgHQhTBNgcAGQgkAHgggGQgTgEgHgFIgvgZIA1gFQAzgFAvglQArghAMgiQAFgWgBg+IAAgPQgBgtAEgUIgHgBQgWgDgogVIgjgTQgHAWgCAfQgBAcADAbQAGA0gjAmQggAkgsAAQglAAgRgPQgMgKgGgWQgDgMgDgEQgEgEgLgDQgGgBgCABQgHAFgBApQgBAXgCAIQgDAOgJAHQgJAHgNgEQgXgGgKgfQgJgbAFgiQAGgqAXgZQAYgZAiAAQAbAAAYALQAOAHATAPQARANAEgBQAFgBACgRQABgKACggQABghACgVQABgOAFgMQgIAAgPACQgaAGgXARQgSAMgJANIgUAcIgIgiQgShHBihBQBDguBYgZQABgQAHgMQANgVAfgOQATgJANgCIA0gNIglAnQgIAIgGALQgHAKAAAFQAAALAHADQAHAEAmAHIASAEQAcAGAogGQAagEA7gOQBAgPAggFQA9gLAvARQAeALATAUQAIgEALgPIAkgsIgHA4QgFAjASAsQASAsAWAHIApAOIgoAQQgeAMgpAlQgrAnACARQADAUgOAgQgIATgYAoQgfA3gDAQIgDAaIgVgPQgIgEgKgKQgagVgKgBQgNARgbAcIAGgCIgKAeQgBAFgGAJQgIANgNAKQADALALAVQAVgQAaAAIBEAAIg9AeQgPAHADAZQAlgdAogNIAsgPIgaAnQgMASAEAPIBvg7IgSAqQgFALgCAMQgCAOADAHQA7APgCAgQgBASgVANQgVAMgiAEQgZACgsALQgyAMgnAFQhBAIhdAAgAC1iHQgZAOhpBnQARgKANgFQAegMAegeQAcgbAJgYQADgHAAgCgAiCDYIAAAyQAbgXAVAAIAOAAQgFgJgOgHQgLgFgJgCg");
	this.shape_16.setTransform(-2.6,-37.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AhUGyQh3gMggggQgMgLgVgKIgmgOQgagHgJgFQgQgJgFgLQgFgOAHgOQAOgcA9gHQAlgEAxAEQAegHAOgYIALgSIg6gKIBGgKIAHgLIAAAKIAXgDQAagEATABQADg2gGgMQgHgIgBgHQhTBOgcAGQgkAHgggHQgTgDgHgFIgvgZIA1gGQAzgFAvgkQArgiAMgiQAFgWgBg9IAAgQQgBgtAEgTIgHgBQgWgEgogVIgjgTQgHAWgCAfQgBAcADAbQAGA0gjAmQggAkgsAAQglAAgRgPQgMgJgGgXQgDgMgDgEQgEgEgLgDQgGgBgCABQgHAFgBApQgBAXgCAJQgDANgJAHQgJAHgNgDQgXgHgKgfQgJgbAFghQAGgrAXgZQAYgZAiAAQAbAAAYAMQAOAGATAPQARANAEgBQAFgBACgRIADgqIADg1QABgOAFgNIgXACQgaAHgXAQQgSANgJAMIgUAcIgIghQgShIBihBQBDgtBYgaQABgQAHgLQANgVAfgOQATgKANgCIA0gNIglAnQgIAJgGAKQgHAKAAAFQAAALAHAEQAHADAmAIIASADQAcAGAogGQAagEA7gOQBAgOAggGQA9gLAvARQAeALATAUQAIgEALgPIAkgsIgHA4QgFAjASAsQASAsAWAIIApANIgoAQQgeAMgpAlQgrAnACARQADAVgOAfQgIATgYAoQgfA3gDAQIgDAaIgVgPQgIgEgKgJQgagWgKgBQgNARgbAcIAGgCIgKAeQgBAFgGAJQgIAOgNAKQADAKALAVQAVgQAaAAIBEAAIg9AeQgPAHADAZQAlgdAogNIAsgPIgaAnQgMASAEAQIBvg8IgSAqQgFALgCANQgCAOADAGQA7APgCAgQgBASgVANQgVANgiADQgZADgsAKQgyAMgnAFQhBAJhdAAQgzAAg5gGgAh9EIQAbgXAVAAIAOAAQgFgJgOgHQgLgFgJgCIgXgDgAA4gTQARgLANgFQAegMAegeQAcgbAJgYIADgJQgZAOhpBog");
	this.shape_17.setTransform(-3.1,-37);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#0D0116").s().p("AlvBjQiYgpAAg6QAAg5CYgpQCYgpDXAAQDYAACXApQCZApAAA5QAAA6iZApQiYApjXAAQjXAAiYgpg");
	this.shape_18.setTransform(-0.3,1.2);

	this.instance = new lib.clipObstaclePoison();
	this.instance.parent = this;
	this.instance.setTransform(-1.4,-33.4,1,1,0,0,0,52.6,47.6);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9}]}).to({state:[{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9}]},1).to({state:[{t:this.instance}]},6).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(7).to({_off:false},0).wait(1).to({alpha:0.857},0).wait(1).to({alpha:0.714},0).wait(1).to({alpha:0.571},0).wait(1).to({alpha:0.429},0).wait(1).to({alpha:0.286},0).wait(1).to({alpha:0.143},0).wait(1).to({alpha:0},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-55,-82,106.7,97.2);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-54.5,-81.9,106.2,97.1), rect=new cjs.Rectangle(-55,-82,106.7,97.2), rect, rect, rect, rect, rect, rect];


(lib.ClipDecorDefilant = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{decor1:0,decor2:1});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// decor
	this.instance = new lib.clipRoche1();
	this.instance.parent = this;
	this.instance.setTransform(-70.9,236.3,0.543,0.461,0,0,0,20.7,11.5);

	this.instance_1 = new lib.clipRoche1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-51.6,233.5,0.647,0.647,0,0,0,20.8,11.5);

	this.instance_2 = new lib.clipRoche1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-209.1,233.1,0.375,0.609,0,0,0,20.8,11.5);

	this.instance_3 = new lib.clipRoche1();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-230,239,0.518,0.906,0,0,0,20.9,11.6);

	this.instance_4 = new lib.clipRoche1();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-261.6,240,1,1,0,0,0,20.8,11.5);

	this.instance_5 = new lib.clipRoche1();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-442.5,238.5,0.661,0.87,0,0,0,20.8,11.5);

	this.instance_6 = new lib.clipRoche1();
	this.instance_6.parent = this;
	this.instance_6.setTransform(-479.6,239.6,0.397,0.565,0,0,0,20.8,11.6);

	this.instance_7 = new lib.clipRoche1();
	this.instance_7.parent = this;
	this.instance_7.setTransform(-653.5,240,1,1,0,0,0,20.8,11.5);

	this.instance_8 = new lib.clipRoche1();
	this.instance_8.parent = this;
	this.instance_8.setTransform(-683.1,236.7,0.522,0.522,0,0,0,20.8,11.5);

	this.instance_9 = new lib.clipPlante1();
	this.instance_9.parent = this;
	this.instance_9.setTransform(-62.5,193.4,0.856,0.859,0,0,180,44.4,49.5);

	this.instance_10 = new lib.clipPlante1();
	this.instance_10.parent = this;
	this.instance_10.setTransform(-239.9,181.1,1.293,1.202,0,0,0,44.4,49.5);

	this.instance_11 = new lib.clipPlante1();
	this.instance_11.parent = this;
	this.instance_11.setTransform(-456.5,198.6,0.903,0.757,0,0,180,44.4,49.5);

	this.instance_12 = new lib.clipPlante1();
	this.instance_12.parent = this;
	this.instance_12.setTransform(-666.4,186.1,1,1,0,0,0,44.4,49.5);

	this.instance_13 = new lib.clipLianes1();
	this.instance_13.parent = this;
	this.instance_13.setTransform(-444.9,32.1,1.234,0.831,0,0,0,94,38.6);

	this.instance_14 = new lib.clipLianes1();
	this.instance_14.parent = this;
	this.instance_14.setTransform(-124,42.7,1.311,1.105,0,0,180,94,38.6);

	this.instance_15 = new lib.clipLianes1();
	this.instance_15.parent = this;
	this.instance_15.setTransform(-660.9,38.7,1,1,0,0,0,94,38.7);

	this.instance_16 = new lib.clipLianes2();
	this.instance_16.parent = this;
	this.instance_16.setTransform(-122.1,38.8,1.282,1,0,0,180,94,38.8);

	this.instance_17 = new lib.clipLianes2();
	this.instance_17.parent = this;
	this.instance_17.setTransform(-404.1,38.7,1.341,1,0,0,0,94,38.7);

	this.instance_18 = new lib.clipLianes2();
	this.instance_18.parent = this;
	this.instance_18.setTransform(-643.1,38.7,1,1,0,0,0,94,38.7);

	this.instance_19 = new lib.clipRoche2();
	this.instance_19.parent = this;
	this.instance_19.setTransform(-49.8,236.7,1,1,0,0,0,20.8,11.5);

	this.instance_20 = new lib.clipRoche2();
	this.instance_20.parent = this;
	this.instance_20.setTransform(-217.9,240.5,0.639,1,0,0,0,20.7,11.5);

	this.instance_21 = new lib.clipRoche2();
	this.instance_21.parent = this;
	this.instance_21.setTransform(-198.9,238.6,0.423,0.565,0,0,0,20.7,11.6);

	this.instance_22 = new lib.clipRoche2();
	this.instance_22.parent = this;
	this.instance_22.setTransform(-255.3,240.5,1,1,0,0,0,20.8,11.5);

	this.instance_23 = new lib.clipRoche2();
	this.instance_23.parent = this;
	this.instance_23.setTransform(-474.5,239.5,0.615,0.478,0,0,0,20.7,11.5);

	this.instance_24 = new lib.clipRoche2();
	this.instance_24.parent = this;
	this.instance_24.setTransform(-443.2,243,0.735,1,0,0,0,20.8,11.5);

	this.instance_25 = new lib.clipRoche2();
	this.instance_25.parent = this;
	this.instance_25.setTransform(-626.2,241.2,0.374,0.615,0,0,0,20.7,11.6);

	this.instance_26 = new lib.clipRoche2();
	this.instance_26.parent = this;
	this.instance_26.setTransform(-651.9,240.5,1,1,0,0,0,20.8,11.5);

	this.instance_27 = new lib.clipPlante2();
	this.instance_27.parent = this;
	this.instance_27.setTransform(-60.8,192.5,0.925,0.858,0,0,180,44.4,49.5);

	this.instance_28 = new lib.clipPlante2();
	this.instance_28.parent = this;
	this.instance_28.setTransform(-234.6,174.8,1.283,1.283,0,0,0,44.4,49.5);

	this.instance_29 = new lib.clipPlante2();
	this.instance_29.parent = this;
	this.instance_29.setTransform(-427.7,199.6,1.061,0.798,0,0,180,44.4,49.5);

	this.instance_30 = new lib.clipPlante2();
	this.instance_30.parent = this;
	this.instance_30.setTransform(-607.6,189.3,1,1,0,0,0,44.4,49.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).to({state:[{t:this.instance_30},{t:this.instance_29},{t:this.instance_28},{t:this.instance_27},{t:this.instance_26},{t:this.instance_25},{t:this.instance_24},{t:this.instance_23},{t:this.instance_22},{t:this.instance_21},{t:this.instance_20},{t:this.instance_19},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-757.5,-11.2,760.1,263.2);
p.frameBounds = [rect, new cjs.Rectangle(-739.7,-10.2,741.3,265.2)];


(lib.haut = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"fixe":0,"marche":1,lance:25});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_24 = function() {
		this.gotoAndPlay("marche");
	}
	this.frame_29 = function() {
		this.dispatchEvent("lancer");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(24).call(this.frame_24).wait(5).call(this.frame_29).wait(2));

	// projectile
	this.instance = new lib.ClipProjectile();
	this.instance.parent = this;
	this.instance.setTransform(13.9,33.3,1,1,0,0,0,7.6,1.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:7.7,regY:1.9,rotation:-10.2,x:10.4,y:35.7},0).wait(3).to({regX:7.6,regY:1.8,rotation:0,x:13.9,y:35},0).wait(3).to({regX:7.7,regY:1.9,rotation:15,x:20,y:31},0).wait(3).to({regX:7.6,regY:1.8,rotation:0,x:13.9,y:35.3},0).wait(3).to({regX:7.7,regY:1.9,rotation:-10.2,x:10.4,y:35.7},0).wait(3).to({regX:7.6,regY:1.8,rotation:0,x:13.9,y:35},0).wait(3).to({regX:7.7,regY:1.9,rotation:15,x:20,y:31},0).wait(3).to({regX:7.6,regY:1.8,rotation:0,x:13.9,y:35.3},0).wait(3).to({regX:7.7,regY:1.9,rotation:-10.2,x:10.4,y:35.7},0).wait(1).to({regY:1.8,rotation:15.5,x:20.1,y:31.2},0).wait(1).to({regX:7.8,regY:1.9,rotation:-25.5,x:11.1,y:12.6},0).wait(1).to({rotation:7.5,x:57.1,y:20.1},0).to({_off:true},1).wait(1).to({_off:false,regX:7.7,rotation:-10.2,x:10.4,y:35.7},0).wait(1));

	// avant_bras_droit
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#B6149B").s().p("AgsATQABg7gCgLQgDgeAVgTQATgQAWABQATAAAIALQAGAKgBAWQAAARgQAMIgRAJIgBAlQABAtAKAeIgfgwIgMBJIgMgxIgKA+QgDghABhAg");
	this.shape.setTransform(4.6,41.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#6EFFF1").s().p("AgVCXQgVgLgChlQAChtgDgWQgDgeAVgSQATgQAWAAQATAAAIAMQAGAKgBAWQAAARgQAMIgRAIIgBAnQABArAKAfIAPAxQAHAqgVATQgLAJgNAAQgKAAgLgGg");
	this.shape_1.setTransform(4.6,45.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1,p:{rotation:0,x:4.6,y:45.8}},{t:this.shape,p:{rotation:0,x:4.6,y:41.8}}]}).to({state:[{t:this.shape_1,p:{rotation:-10.2,x:3.4,y:49.7}},{t:this.shape,p:{rotation:-10.2,x:2.6,y:45.6}}]},1).to({state:[{t:this.shape_1,p:{rotation:0,x:4.6,y:47.6}},{t:this.shape,p:{rotation:0,x:4.6,y:43.5}}]},3).to({state:[{t:this.shape_1,p:{rotation:15,x:7.7,y:40.6}},{t:this.shape,p:{rotation:15,x:8.8,y:36.6}}]},3).to({state:[{t:this.shape_1,p:{rotation:0,x:4.6,y:47.8}},{t:this.shape,p:{rotation:0,x:4.6,y:43.8}}]},3).to({state:[{t:this.shape_1,p:{rotation:-10.2,x:3.4,y:49.7}},{t:this.shape,p:{rotation:-10.2,x:2.6,y:45.6}}]},3).to({state:[{t:this.shape_1,p:{rotation:0,x:4.6,y:47.6}},{t:this.shape,p:{rotation:0,x:4.6,y:43.5}}]},3).to({state:[{t:this.shape_1,p:{rotation:15,x:7.7,y:40.6}},{t:this.shape,p:{rotation:15,x:8.8,y:36.6}}]},3).to({state:[{t:this.shape_1,p:{rotation:0,x:4.6,y:47.8}},{t:this.shape,p:{rotation:0,x:4.6,y:43.8}}]},3).to({state:[{t:this.shape_1,p:{rotation:-10.2,x:3.4,y:49.7}},{t:this.shape,p:{rotation:-10.2,x:2.6,y:45.6}}]},3).to({state:[{t:this.shape_1,p:{rotation:15.5,x:7.8,y:40.9}},{t:this.shape,p:{rotation:15.5,x:8.9,y:36.9}}]},1).to({state:[{t:this.shape_1,p:{rotation:-25.5,x:8.2,y:27.9}},{t:this.shape,p:{rotation:-25.5,x:6.5,y:24.2}}]},1).to({state:[{t:this.shape_1,p:{rotation:37.5,x:40.7,y:28.1}},{t:this.shape,p:{rotation:37.5,x:43.2,y:24.8}}]},1).to({state:[{t:this.shape_1,p:{rotation:37.5,x:40.7,y:28.1}},{t:this.shape,p:{rotation:37.5,x:43.2,y:24.8}}]},1).to({state:[{t:this.shape_1,p:{rotation:-10.2,x:3.4,y:49.7}},{t:this.shape,p:{rotation:-10.2,x:2.6,y:45.6}}]},1).wait(1));

	// bras_droit
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#6EFFF1").s().p("AiAAwQgOgUAOgXQARgZAsAEIB2gUQApgZAYANQAUAKAAAZQAAAUgQAMQgRAMgfgCIhkARQgwAIgaAAQgVAAgFgGg");
	this.shape_2.setTransform(15.3,56.2);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1).to({rotation:-10.2,x:15.7,y:57.9},0).wait(3).to({rotation:0,x:15.3},0).wait(3).to({rotation:15,y:53.3},0).wait(3).to({rotation:0,y:58.2},0).wait(3).to({rotation:-10.2,x:15.7,y:57.9},0).wait(3).to({rotation:0,x:15.3},0).wait(3).to({rotation:15,y:53.3},0).wait(3).to({rotation:0,y:58.2},0).wait(3).to({rotation:-10.2,x:15.7,y:57.9},0).wait(1).to({rotation:15.5,x:15.3,y:53.7},0).wait(1).to({rotation:64.5,x:19,y:46.9},0).wait(1).to({rotation:127.5,x:28.6,y:46.4},0).wait(2).to({rotation:-10.2,x:15.7,y:57.9},0).wait(1));

	// yeux_fermes
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#B6149B").s().p("Ag3AIIALgHQANgGAKgCIBNgPIhoAtg");
	this.shape_3.setTransform(54.7,26.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#B6149B").s().p("AhAgfIBaAZQATAFAUAPIgKASg");
	this.shape_4.setTransform(36.8,24.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#00071E").p("AAjgQQgIARgJAGQgPAMgpgI");
	this.shape_5.setTransform(55,30);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#00071E").p("AgqgZQAPAbAEAEQAUASAyAA");
	this.shape_6.setTransform(36.1,28.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6,p:{y:28.6}},{t:this.shape_5,p:{y:30}},{t:this.shape_4,p:{y:24.7}},{t:this.shape_3,p:{y:26.5}}]}).to({state:[{t:this.shape_6,p:{y:28.6}},{t:this.shape_5,p:{y:30}},{t:this.shape_4,p:{y:24.7}},{t:this.shape_3,p:{y:26.5}}]},1).to({state:[{t:this.shape_6,p:{y:30.4}},{t:this.shape_5,p:{y:31.8}},{t:this.shape_4,p:{y:26.4}},{t:this.shape_3,p:{y:28.2}}]},3).to({state:[{t:this.shape_6,p:{y:28.4}},{t:this.shape_5,p:{y:29.8}},{t:this.shape_4,p:{y:24.4}},{t:this.shape_3,p:{y:26.2}}]},3).to({state:[{t:this.shape_6,p:{y:30.6}},{t:this.shape_5,p:{y:32}},{t:this.shape_4,p:{y:26.7}},{t:this.shape_3,p:{y:28.5}}]},3).to({state:[{t:this.shape_6,p:{y:28.6}},{t:this.shape_5,p:{y:30}},{t:this.shape_4,p:{y:24.7}},{t:this.shape_3,p:{y:26.5}}]},3).to({state:[{t:this.shape_6,p:{y:30.4}},{t:this.shape_5,p:{y:31.8}},{t:this.shape_4,p:{y:26.4}},{t:this.shape_3,p:{y:28.2}}]},3).to({state:[{t:this.shape_6,p:{y:28.4}},{t:this.shape_5,p:{y:29.8}},{t:this.shape_4,p:{y:24.4}},{t:this.shape_3,p:{y:26.2}}]},3).to({state:[{t:this.shape_6,p:{y:30.6}},{t:this.shape_5,p:{y:32}},{t:this.shape_4,p:{y:26.7}},{t:this.shape_3,p:{y:28.5}}]},3).to({state:[{t:this.shape_6,p:{y:28.6}},{t:this.shape_5,p:{y:30}},{t:this.shape_4,p:{y:24.7}},{t:this.shape_3,p:{y:26.5}}]},3).wait(6));

	// yeux_ouverts
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#659474").p("AgOgHQgDAGACAGQACAHAGADQAGADAGgCQAGgCAEgGQADgGgCgGQgCgGgGgEQgGgDgGACQgGACgEAGg");
	this.shape_7.setTransform(54.1,29.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#00071E").s().p("AgHAPQgGgDgCgHQgCgGADgGQAEgGAGgCQAGgCAGADQAGAEACAGQACAGgDAGQgEAGgGACIgFABQgDAAgEgCg");
	this.shape_8.setTransform(54.1,29.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#00071E").p("AgsgBIAUgPQAbgMAnATQgIARgJAGQgPAMgpgI");
	this.shape_9.setTransform(54.3,29.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgdASIgOgTIAUgPQAbgMAoATQgIARgJAGQgJAHgSAAQgMAAgRgDg");
	this.shape_10.setTransform(54.2,29.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#659474").p("AATgFQADAHgEAHQgEAIgIACQgHADgHgEQgIgEgCgIQgCgHADgHQAEgIAIgCQAHgCAHADQAIAEACAIg");
	this.shape_11.setTransform(36.8,28);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#00071E").s().p("AgIASQgIgEgCgIQgCgHADgHQAEgIAIgCQAHgCAHADQAIAEACAIQADAHgEAHQgEAIgIACIgGABQgEAAgEgCg");
	this.shape_12.setTransform(36.8,28);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#00071E").p("AAzAHQgFgLgPgKQgegUgxAMQAPAcAEAEQAUARAyAA");
	this.shape_13.setTransform(36.7,28.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgeAKQgFgEgOgcQAxgMAeAUQAPAKAFALIgKAUQgzAAgTgRg");
	this.shape_14.setTransform(36.9,28.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14,p:{y:28.3}},{t:this.shape_13,p:{y:28.3}},{t:this.shape_12,p:{y:28}},{t:this.shape_11,p:{y:28}},{t:this.shape_10,p:{y:29.3}},{t:this.shape_9,p:{y:29.3}},{t:this.shape_8,p:{y:29.1}},{t:this.shape_7,p:{y:29.1}}]}).to({state:[{t:this.shape_14,p:{y:28.3}},{t:this.shape_13,p:{y:28.3}},{t:this.shape_12,p:{y:28}},{t:this.shape_11,p:{y:28}},{t:this.shape_10,p:{y:29.3}},{t:this.shape_9,p:{y:29.3}},{t:this.shape_8,p:{y:29.1}},{t:this.shape_7,p:{y:29.1}}]},1).to({state:[{t:this.shape_14,p:{y:30}},{t:this.shape_13,p:{y:30}},{t:this.shape_12,p:{y:29.7}},{t:this.shape_11,p:{y:29.7}},{t:this.shape_10,p:{y:31.1}},{t:this.shape_9,p:{y:31.1}},{t:this.shape_8,p:{y:30.9}},{t:this.shape_7,p:{y:30.9}}]},3).to({state:[{t:this.shape_14,p:{y:27.8}},{t:this.shape_13,p:{y:27.8}},{t:this.shape_12,p:{y:27.5}},{t:this.shape_11,p:{y:27.5}},{t:this.shape_10,p:{y:28.8}},{t:this.shape_9,p:{y:28.8}},{t:this.shape_8,p:{y:28.6}},{t:this.shape_7,p:{y:28.6}}]},3).to({state:[{t:this.shape_14,p:{y:30.3}},{t:this.shape_13,p:{y:30.3}},{t:this.shape_12,p:{y:30}},{t:this.shape_11,p:{y:30}},{t:this.shape_10,p:{y:31.3}},{t:this.shape_9,p:{y:31.3}},{t:this.shape_8,p:{y:31.1}},{t:this.shape_7,p:{y:31.1}}]},3).to({state:[{t:this.shape_14,p:{y:28.3}},{t:this.shape_13,p:{y:28.3}},{t:this.shape_12,p:{y:28}},{t:this.shape_11,p:{y:28}},{t:this.shape_10,p:{y:29.3}},{t:this.shape_9,p:{y:29.3}},{t:this.shape_8,p:{y:29.1}},{t:this.shape_7,p:{y:29.1}}]},3).to({state:[{t:this.shape_14,p:{y:30}},{t:this.shape_13,p:{y:30}},{t:this.shape_12,p:{y:29.7}},{t:this.shape_11,p:{y:29.7}},{t:this.shape_10,p:{y:31.1}},{t:this.shape_9,p:{y:31.1}},{t:this.shape_8,p:{y:30.9}},{t:this.shape_7,p:{y:30.9}}]},3).to({state:[]},3).to({state:[{t:this.shape_14,p:{y:30.3}},{t:this.shape_13,p:{y:30.3}},{t:this.shape_12,p:{y:30}},{t:this.shape_11,p:{y:30}},{t:this.shape_10,p:{y:31.3}},{t:this.shape_9,p:{y:31.3}},{t:this.shape_8,p:{y:31.1}},{t:this.shape_7,p:{y:31.1}}]},3).to({state:[{t:this.shape_14,p:{y:28.3}},{t:this.shape_13,p:{y:28.3}},{t:this.shape_12,p:{y:28}},{t:this.shape_11,p:{y:28}},{t:this.shape_10,p:{y:29.3}},{t:this.shape_9,p:{y:29.3}},{t:this.shape_8,p:{y:29.1}},{t:this.shape_7,p:{y:29.1}}]},3).wait(6));

	// tete
	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#3C9096").s().p("AAAAFQgPgCABgEQAAgCAFgBQAEgBAGABQAPACgBAEQAAACgFABIgFAAIgFAAg");
	this.shape_15.setTransform(45.8,37);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#B6149B").s().p("AggAHIgWgWQAQgHAYADQAMABAIADQAeAAAMAGQAGADABADQgEAFgHAHQgPAMgXAAQgWAAgQgOg");
	this.shape_16.setTransform(44.9,40.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#220135").p("AhCgHICBAVQCLAQAuglQgjhogrguQg/hEhwAAQhtAAhBBVQgnAygRBHQgMAvAABVQAkAYCdBVg");
	this.shape_17.setTransform(36.4,23.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#5D0093").s().p("Aj3BzQAAhVAMgvQARhHAngyQBBhVBtAAQBwAABABEQAqAuAjBoQguAliKgQIiCgVIANDlQiehVgkgYg");
	this.shape_18.setTransform(36.4,23);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#6EFFF1").p("AjyBsQAxAfCEBGIgMjiIAIACQABAAB8AVQCGAPAuggQgihmgrgtQg8g/htAAQhmAAg/BOQgpAygSBJQgMAvAABRgAgwDmIgJgFQiehVgkgYIgDgCIAAgDQAAhWAMgwQAUhMAqg1QBChRBsAAQBzAABABFQAsAvAkBqIABAEIgDACQgrAjh6gJQhGgFhMgRg");
	this.shape_19.setTransform(36.5,23.4);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#220135").s().p("Ag5DjQiehVgkgYIgCgCIAAgDQgBhWAMgwQAUhMAqg1QBDhRBsAAQByAABBBFQArAvAkBqIABAEIgDACQgrAjh5gJQhHgFhMgSIANDogAiriNQgpAygRBJQgNAvAABRQAxAfCEBGIgMjiIAIACIB+AVQCGAPAuggQgjhmgrgtQg8g/hsAAQhnAAg/BOg");
	this.shape_20.setTransform(36.5,23.2);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#6EFFF1").p("AhCgHICBAVQCLAQAuglQgjhogrguQg/hEhwAAQhtAAhBBVQgnAygRBHQgMAvAABVQAkAYCdBVg");
	this.shape_21.setTransform(36.4,23.2);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#5D0093").s().p("Aj3BzQAAhVAMgvQARhHAngyQBBhVBtAAQBwAABABEQAqAuAjBoQguAliKgQIiCgVIANDlQiehVgkgYg");
	this.shape_22.setTransform(36.4,23);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#ED1DD5").s().p("AgXAMIgMgvIBHBHg");
	this.shape_23.setTransform(32.8,32.7);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#ED1DD5").s().p("AgXAMIgMgvIBHBHg");
	this.shape_24.setTransform(32.8,37.5);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#6EFFF1").s().p("AgXB4IhzgeQgGiiAAgxQBeAYBlADQAgABASgDQAOgCAegLQAAAxgMAkQgOApgjArQgcAjgMAKQgWARgbAAIgSgCg");
	this.shape_25.setTransform(44.3,34.6);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#220135").p("AAfh0IABADQAAACAAACIAYDeIhsgYIAvg+QAqhHgFhB");
	this.shape_26.setTransform(55.6,34.1);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#5D0093").s().p("Ag1BXIAug+QAqhHgEhAIAYDdg");
	this.shape_27.setTransform(55.8,34.3);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#1BF3E6").p("ABCB2Ih/gcIAHgIQABAAAtg9QArhIgGhBIgBgCIAMgBIABACgAgmBTIBaAUIgQiZQgSBFg4BAg");
	this.shape_28.setTransform(55.3,34.3);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#220135").s().p("Ag/BbIAIgIIAug9QArhIgHhBIAAgCIALgBIABACIAZDrgAgoBUIBaAUIgQiZQgRBFg5BAg");
	this.shape_29.setTransform(55.5,34.3);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#1BF3E6").p("AAfh1IABAIIAYDdIhsgYIAvg+QAqhHgFhA");
	this.shape_30.setTransform(55.6,34.2);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#5D0093").s().p("Ag1BXIAug+QAqhHgEhAIAYDdg");
	this.shape_31.setTransform(55.8,34.3);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#6EFFF1").p("AgwDmIgJgFQiehVgkgYIgDgCIAAgDQAAhWAMgwQAUhMAqg1QBChRBsAAQBzAABABFQAsAvAkBqIABAEIgDACQgrAjh6gJQhGgFhMgRgAjyBsQAxAfCEBGIgMjiIAIACQABAAB8AVQCGAPAuggQgihmgrgtQg8g/htAAQhmAAg/BOQgpAygSBJQgMAvAABRg");
	this.shape_32.setTransform(36.5,23.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_31,p:{y:34.3}},{t:this.shape_30,p:{y:34.2}},{t:this.shape_29,p:{y:34.3}},{t:this.shape_28,p:{y:34.3}},{t:this.shape_27,p:{y:34.3}},{t:this.shape_26,p:{y:34.1}},{t:this.shape_25,p:{y:34.6}},{t:this.shape_24,p:{y:37.5}},{t:this.shape_23,p:{y:32.7}},{t:this.shape_22,p:{y:23}},{t:this.shape_21,p:{y:23.2}},{t:this.shape_20,p:{y:23.2}},{t:this.shape_19,p:{y:23.4}},{t:this.shape_18,p:{y:23}},{t:this.shape_17,p:{y:23.2}},{t:this.shape_16,p:{y:40.9}},{t:this.shape_15,p:{y:37}}]}).to({state:[{t:this.shape_31,p:{y:34.3}},{t:this.shape_30,p:{y:34.2}},{t:this.shape_29,p:{y:34.3}},{t:this.shape_28,p:{y:34.3}},{t:this.shape_27,p:{y:34.3}},{t:this.shape_26,p:{y:34.1}},{t:this.shape_25,p:{y:34.6}},{t:this.shape_24,p:{y:37.5}},{t:this.shape_23,p:{y:32.7}},{t:this.shape_22,p:{y:23}},{t:this.shape_21,p:{y:23.2}},{t:this.shape_20,p:{y:23.2}},{t:this.shape_32,p:{y:23.4}},{t:this.shape_18,p:{y:23}},{t:this.shape_17,p:{y:23.2}},{t:this.shape_16,p:{y:40.9}},{t:this.shape_15,p:{y:37}}]},1).to({state:[{t:this.shape_31,p:{y:36}},{t:this.shape_30,p:{y:35.9}},{t:this.shape_29,p:{y:36}},{t:this.shape_28,p:{y:36.1}},{t:this.shape_27,p:{y:36}},{t:this.shape_26,p:{y:35.9}},{t:this.shape_25,p:{y:36.3}},{t:this.shape_24,p:{y:39.3}},{t:this.shape_23,p:{y:34.4}},{t:this.shape_22,p:{y:24.8}},{t:this.shape_21,p:{y:25}},{t:this.shape_20,p:{y:25}},{t:this.shape_32,p:{y:25.2}},{t:this.shape_18,p:{y:24.8}},{t:this.shape_17,p:{y:25}},{t:this.shape_16,p:{y:42.7}},{t:this.shape_15,p:{y:38.7}}]},3).to({state:[{t:this.shape_31,p:{y:34}},{t:this.shape_30,p:{y:33.9}},{t:this.shape_29,p:{y:34}},{t:this.shape_28,p:{y:34.1}},{t:this.shape_27,p:{y:34}},{t:this.shape_26,p:{y:33.9}},{t:this.shape_25,p:{y:34.3}},{t:this.shape_24,p:{y:37.3}},{t:this.shape_23,p:{y:32.4}},{t:this.shape_22,p:{y:22.8}},{t:this.shape_21,p:{y:23}},{t:this.shape_20,p:{y:23}},{t:this.shape_19,p:{y:23.2}},{t:this.shape_18,p:{y:22.8}},{t:this.shape_17,p:{y:23}},{t:this.shape_16,p:{y:40.7}},{t:this.shape_15,p:{y:36.7}}]},3).to({state:[{t:this.shape_31,p:{y:36.3}},{t:this.shape_30,p:{y:36.2}},{t:this.shape_29,p:{y:36.3}},{t:this.shape_28,p:{y:36.3}},{t:this.shape_27,p:{y:36.3}},{t:this.shape_26,p:{y:36.1}},{t:this.shape_25,p:{y:36.6}},{t:this.shape_24,p:{y:39.5}},{t:this.shape_23,p:{y:34.7}},{t:this.shape_22,p:{y:25}},{t:this.shape_21,p:{y:25.2}},{t:this.shape_20,p:{y:25.2}},{t:this.shape_32,p:{y:25.4}},{t:this.shape_18,p:{y:25}},{t:this.shape_17,p:{y:25.2}},{t:this.shape_16,p:{y:42.9}},{t:this.shape_15,p:{y:39}}]},3).to({state:[{t:this.shape_31,p:{y:34.3}},{t:this.shape_30,p:{y:34.2}},{t:this.shape_29,p:{y:34.3}},{t:this.shape_28,p:{y:34.3}},{t:this.shape_27,p:{y:34.3}},{t:this.shape_26,p:{y:34.1}},{t:this.shape_25,p:{y:34.6}},{t:this.shape_24,p:{y:37.5}},{t:this.shape_23,p:{y:32.7}},{t:this.shape_22,p:{y:23}},{t:this.shape_21,p:{y:23.2}},{t:this.shape_20,p:{y:23.2}},{t:this.shape_19,p:{y:23.4}},{t:this.shape_18,p:{y:23}},{t:this.shape_17,p:{y:23.2}},{t:this.shape_16,p:{y:40.9}},{t:this.shape_15,p:{y:37}}]},3).to({state:[{t:this.shape_31,p:{y:36}},{t:this.shape_30,p:{y:35.9}},{t:this.shape_29,p:{y:36}},{t:this.shape_28,p:{y:36.1}},{t:this.shape_27,p:{y:36}},{t:this.shape_26,p:{y:35.9}},{t:this.shape_25,p:{y:36.3}},{t:this.shape_24,p:{y:39.3}},{t:this.shape_23,p:{y:34.4}},{t:this.shape_22,p:{y:24.8}},{t:this.shape_21,p:{y:25}},{t:this.shape_20,p:{y:25}},{t:this.shape_19,p:{y:25.2}},{t:this.shape_18,p:{y:24.8}},{t:this.shape_17,p:{y:25}},{t:this.shape_16,p:{y:42.7}},{t:this.shape_15,p:{y:38.7}}]},3).to({state:[{t:this.shape_31,p:{y:34}},{t:this.shape_30,p:{y:33.9}},{t:this.shape_29,p:{y:34}},{t:this.shape_28,p:{y:34.1}},{t:this.shape_27,p:{y:34}},{t:this.shape_26,p:{y:33.9}},{t:this.shape_25,p:{y:34.3}},{t:this.shape_24,p:{y:37.3}},{t:this.shape_23,p:{y:32.4}},{t:this.shape_22,p:{y:22.8}},{t:this.shape_21,p:{y:23}},{t:this.shape_20,p:{y:23}},{t:this.shape_32,p:{y:23.2}},{t:this.shape_18,p:{y:22.8}},{t:this.shape_17,p:{y:23}},{t:this.shape_16,p:{y:40.7}},{t:this.shape_15,p:{y:36.7}}]},3).to({state:[{t:this.shape_31,p:{y:36.3}},{t:this.shape_30,p:{y:36.2}},{t:this.shape_29,p:{y:36.3}},{t:this.shape_28,p:{y:36.3}},{t:this.shape_27,p:{y:36.3}},{t:this.shape_26,p:{y:36.1}},{t:this.shape_25,p:{y:36.6}},{t:this.shape_24,p:{y:39.5}},{t:this.shape_23,p:{y:34.7}},{t:this.shape_22,p:{y:25}},{t:this.shape_21,p:{y:25.2}},{t:this.shape_20,p:{y:25.2}},{t:this.shape_19,p:{y:25.4}},{t:this.shape_18,p:{y:25}},{t:this.shape_17,p:{y:25.2}},{t:this.shape_16,p:{y:42.9}},{t:this.shape_15,p:{y:39}}]},3).to({state:[{t:this.shape_31,p:{y:34.3}},{t:this.shape_30,p:{y:34.2}},{t:this.shape_29,p:{y:34.3}},{t:this.shape_28,p:{y:34.3}},{t:this.shape_27,p:{y:34.3}},{t:this.shape_26,p:{y:34.1}},{t:this.shape_25,p:{y:34.6}},{t:this.shape_24,p:{y:37.5}},{t:this.shape_23,p:{y:32.7}},{t:this.shape_22,p:{y:23}},{t:this.shape_21,p:{y:23.2}},{t:this.shape_20,p:{y:23.2}},{t:this.shape_19,p:{y:23.4}},{t:this.shape_18,p:{y:23}},{t:this.shape_17,p:{y:23.2}},{t:this.shape_16,p:{y:40.9}},{t:this.shape_15,p:{y:37}}]},3).wait(6));

	// avant_bras_gauche
	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#B6149B").s().p("AAhA+QgTgEgDgHQgDgFAAgUQgGgGhNgmIAqACIgkgYIA8AMIhIgkIA2AEIA7AuQAgALAFAFQAUATgLAZQgIATgVAAQgHAAgJgDg");
	this.shape_33.setTransform(64,80.3);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#6EFFF1").s().p("AA7BPQgSgEgEgHQgCgFAAgUQgGgGg8geQg8gegGgGQgTgSAOgTQAOgUAbAJQAZAIAWAQQAIAFBAAyQAhALAEAGQAUATgKAZQgIASgWAAQgHAAgJgCg");
	this.shape_34.setTransform(61.3,78.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_34,p:{rotation:0,x:61.3,y:78.6}},{t:this.shape_33,p:{rotation:0,x:64,y:80.3}}]}).to({state:[{t:this.shape_34,p:{rotation:-8.2,x:64.2,y:76.1}},{t:this.shape_33,p:{rotation:-8.2,x:67,y:77.4}}]},1).to({state:[{t:this.shape_34,p:{rotation:0,x:61.3,y:80.4}},{t:this.shape_33,p:{rotation:0,x:64,y:82.1}}]},3).to({state:[{t:this.shape_34,p:{rotation:15,x:55.4,y:81.9}},{t:this.shape_33,p:{rotation:15,x:57.5,y:84.2}}]},3).to({state:[{t:this.shape_34,p:{rotation:0,x:61.3,y:80.6}},{t:this.shape_33,p:{rotation:0,x:64,y:82.3}}]},3).to({state:[{t:this.shape_34,p:{rotation:-8.2,x:64.2,y:76.1}},{t:this.shape_33,p:{rotation:-8.2,x:67,y:77.4}}]},3).to({state:[{t:this.shape_34,p:{rotation:0,x:61.3,y:80.4}},{t:this.shape_33,p:{rotation:0,x:64,y:82.1}}]},3).to({state:[{t:this.shape_34,p:{rotation:15,x:55.4,y:81.9}},{t:this.shape_33,p:{rotation:15,x:57.5,y:84.2}}]},3).to({state:[{t:this.shape_34,p:{rotation:0,x:61.3,y:80.6}},{t:this.shape_33,p:{rotation:0,x:64,y:82.3}}]},3).to({state:[{t:this.shape_34,p:{rotation:-8.2,x:64.2,y:76.1}},{t:this.shape_33,p:{rotation:-8.2,x:67,y:77.4}}]},3).wait(6));

	// corps
	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#00071E").s().p("AhrgMIASgLQAVgLAQAAQAKAAAVAGQAVAGATAAQAPAAApgKQAegIACAIQADALgGASQgFASgNAQQgrgSgYAAQghAAhLAYg");
	this.shape_35.setTransform(34.5,62.8);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#2C6A72").s().p("AhtApIAWgEQAXgKAHgdQAIgfgMgPIgOgJQAPgFAQgBQAGgHAHgcIBDANQgDAcAGAGQAMAMAlAMIASAlQAMAtgeAmQglgYgYAAQgPAAgyAPIgxAPQgJgcgNgeg");
	this.shape_36.setTransform(34.3,56.6);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#B6149B").s().p("AhpBYQgLgOgFgVIgDgRQAAgQAVgwQAVgwAAgaIAHAuQATAzA1AdIgdgmQgUgcAAgeQAOAVAXAOQAbASAIAIQgIgPgOgYIgOgWQAKAHAjASQAUAJAHAOIgYgwIAUAOQAVAPAHAIQgHgQgGghIgFgeQAGAMAjAuQAeArgKATQgSAiggAcQgeAZgdAKQghAMgZAAQgnAAgWgbg");
	this.shape_37.setTransform(35.6,84.7);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#6EFFF1").s().p("AhkD1QgLgOgGgUIgDgRQAAgRAVgwQAVgwAAgaQAAgfgYhBIgYg9QgDgGAAgKQAAgVAPgXQAIgNAbgHQAOgDAMgBQAMgMAMhJIBBASIgHAjQgGAkAHAIQAMAMAlAMIASAmQAMAtgeAmQgNAPgEASQgEAWAJARQAGAMAjAtQAdAsgKAUQgRAighAcQgeAZgdAJQggAMgaAAQgmAAgWgbg");
	this.shape_38.setTransform(35.2,69);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_38,p:{y:69}},{t:this.shape_37,p:{y:84.7}},{t:this.shape_36,p:{y:56.6}},{t:this.shape_35,p:{y:62.8}}]}).to({state:[{t:this.shape_38,p:{y:69}},{t:this.shape_37,p:{y:84.7}},{t:this.shape_36,p:{y:56.6}},{t:this.shape_35,p:{y:62.8}}]},1).to({state:[{t:this.shape_38,p:{y:70.7}},{t:this.shape_37,p:{y:86.5}},{t:this.shape_36,p:{y:58.4}},{t:this.shape_35,p:{y:64.6}}]},3).to({state:[{t:this.shape_38,p:{y:68.7}},{t:this.shape_37,p:{y:84.5}},{t:this.shape_36,p:{y:56.4}},{t:this.shape_35,p:{y:62.6}}]},3).to({state:[{t:this.shape_38,p:{y:71}},{t:this.shape_37,p:{y:86.7}},{t:this.shape_36,p:{y:58.6}},{t:this.shape_35,p:{y:64.8}}]},3).to({state:[{t:this.shape_38,p:{y:69}},{t:this.shape_37,p:{y:84.7}},{t:this.shape_36,p:{y:56.6}},{t:this.shape_35,p:{y:62.8}}]},3).to({state:[{t:this.shape_38,p:{y:70.7}},{t:this.shape_37,p:{y:86.5}},{t:this.shape_36,p:{y:58.4}},{t:this.shape_35,p:{y:64.6}}]},3).to({state:[{t:this.shape_38,p:{y:68.7}},{t:this.shape_37,p:{y:84.5}},{t:this.shape_36,p:{y:56.4}},{t:this.shape_35,p:{y:62.6}}]},3).to({state:[{t:this.shape_38,p:{y:71}},{t:this.shape_37,p:{y:86.7}},{t:this.shape_36,p:{y:58.6}},{t:this.shape_35,p:{y:64.8}}]},3).to({state:[{t:this.shape_38,p:{y:69}},{t:this.shape_37,p:{y:84.7}},{t:this.shape_36,p:{y:56.6}},{t:this.shape_35,p:{y:62.8}}]},3).wait(6));

	// bras_gauche
	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#6EFFF1").s().p("AApBuQgcgOhEhqQgPgXgFgQQgEgOAAgUQAAgSAPgIQAPgHASAJQAQAIAMAWQAIASAAAMQAAAHAgAqQAjAxAFAKQAJAbgNAQQgIAJgLAAQgGAAgHgDg");
	this.shape_39.setTransform(47.4,64.7);

	this.timeline.addTween(cjs.Tween.get(this.shape_39).wait(1).to({rotation:-8.2,x:48.5,y:64.3},0).wait(3).to({rotation:0,x:47.4,y:66.4},0).wait(3).to({rotation:15,x:45.6,y:64.8},0).wait(3).to({rotation:0,x:47.4,y:66.7},0).wait(3).to({rotation:-8.2,x:48.5,y:64.3},0).wait(3).to({rotation:0,x:47.4,y:66.4},0).wait(3).to({rotation:15,x:45.6,y:64.8},0).wait(3).to({rotation:0,x:47.4,y:66.7},0).wait(3).to({rotation:-8.2,x:48.5,y:64.3},0).wait(6));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,-1,72.2,97.2);
p.frameBounds = [rect, rect=new cjs.Rectangle(-3.1,-1,78.7,97.2), rect, rect, rect=new cjs.Rectangle(0,0.8,72.2,97.2), rect, rect, rect=new cjs.Rectangle(0.9,-1.2,63.9,97.2), rect, rect, rect=new cjs.Rectangle(0,1,72.2,97.2), rect, rect, rect=new cjs.Rectangle(-3.1,-1,78.7,97.2), rect, rect, rect=new cjs.Rectangle(0,0.8,72.2,97.2), rect, rect, rect=new cjs.Rectangle(0.9,-1.2,63.9,97.2), rect, rect, rect=new cjs.Rectangle(0,1,72.2,97.2), rect, rect, new cjs.Rectangle(-3.1,-1,78.7,97.2), new cjs.Rectangle(0.9,-1,74.7,97.2), new cjs.Rectangle(-0.8,-1,76.4,97.2), rect=new cjs.Rectangle(10,-1,65.6,97.2), rect, new cjs.Rectangle(-3.1,-1,78.7,97.2)];


(lib.ClipAvatar = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"normal":0,blesse:1,meurt:46});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_59 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(59).call(this.frame_59).wait(1));

	// pointsContact
	this.p3 = new lib.clipPoint();
	this.p3.parent = this;
	this.p3.setTransform(12.7,-30.9,1,1,0,0,0,3.1,2.6);
	this.p3.visible = false;

	this.p0 = new lib.clipPoint();
	this.p0.parent = this;
	this.p0.setTransform(-3.9,-140.2,1,1,0,0,0,3.1,2.6);
	this.p0.visible = false;

	this.p1 = new lib.clipPoint();
	this.p1.parent = this;
	this.p1.setTransform(19.7,-100.2,1,1,0,0,0,3.1,2.6);
	this.p1.visible = false;

	this.p2 = new lib.clipPoint();
	this.p2.parent = this;
	this.p2.setTransform(28.7,-62.2,1,1,0,0,0,3.1,2.6);
	this.p2.visible = false;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.p2},{t:this.p1},{t:this.p0},{t:this.p3}]}).wait(60));

	// touchee
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF3EF1").s().p("AhiLLQgvgEgagSQgXgPAFgPQAMgSAGgMIAKhjQAJhVAdgWIAMgLQgZiIABhHIgEgFQgCgEAAgFIAAgBIAAgDQAAgPAJgHQACgLADgFQACgMAVgvQARgpAAgYIAAgBQAAgcgSgzIgTg0IgBgBIgJgVIgBAAIhlARQhaAPgKgNQgQgJgFhDIAAgCIgBiRIgBgDIAAgLIAAgCIAAgFQgEgeAWgTQASgQAYABQAVAAAGAOIAXAAQAChDAJgmQAUhNAqg0QBChSBsAAQBzAABABFQAsAvAkBqIABAEIgDADQgIAGgMAGIAAACIAGgBIgGACIAXDaIh0gaQgkAngwgJIgkgJIgEAaIAAACIgBAFIAAABIAAAGIAAABIAAAGIABADIABAEIAAABIACADQAKAKAbAKQAMgCAMAGQAQAIALAWQAJASAAAMQAAAHAgArQAkAxAFAKQAbAIAhAZIAPALIACACIArAiQAgALAFAFQAUAUgLAYQgLAZgigIQgTgFgDgHQgDgEAAgVIgDgCIAAgBIgFgDIgPgIIgBgBIgUgKIAAAAIgogUQgsgWgFgFQgZgNg5hWIgCADQgNAPgEATQgEAWAJAQQACAEAbAlQAZAiAGATQAJAJANAnIAEgCQAGgCAHAFQAGAGADAJQADAKgCAIQgCAIgHACQgCABgDgBIAEANIABAAQAIAAABALQAAAJgFADQALAvAGAqQAHAsgCATQgBALgEAHQABAUgVBvQgTBjAHAFIA4AnQAQALgwAEQgxAEgcgMQgagLADgQQAJgUADgNIgGhiQgHhWAZgbQAEgGAGgGQgbghgUglQgfg4gHgzIgOAGQAFA8gXBKQgMAlgNAYIgBABQgCATgpBqQgkBfAGAGIAYAWQAQAQAJAKQAIAMgZAAIgTgCgAkMlsQgDAOgPAKIgOAHIgBAmQABAtAJAeIAQAxIB3gUQAjgVAXAGIAKgDIABAAIAMgDIACAAIACAAIACgBIACAAIABAAIAEAAIAEgHIAEgMIABAAIADgMIABgDIACgGIgGgDQiehWgkgYIgCgBQgKADgJAAgAgtkKIADgKIgDgBg");
	this.shape.setTransform(-1.5,-69.4);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1).to({_off:false},0).to({_off:true},1).wait(8).to({_off:false},0).to({_off:true},3).wait(7).to({_off:false},0).to({_off:true},3).wait(7).to({_off:false},0).to({_off:true},3).wait(8).to({_off:false},0).to({_off:true},5).wait(14));

	// avatar_mort
	this.instance = new lib.clipAvatarMort();
	this.instance.parent = this;
	this.instance.setTransform(-1.4,2.2,1,1,0,0,0,36.1,143.3);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(46).to({_off:false},0).wait(1).to({regY:71.4,rotation:-6.9,x:-10.1,y:-69.1},0).wait(1).to({rotation:-13.8,x:-18.6,y:-67.6},0).wait(1).to({rotation:-20.8,x:-26.9,y:-65},0).wait(1).to({rotation:-27.7,x:-34.8,y:-61.5},0).wait(1).to({rotation:-34.6,x:-42.3,y:-57},0).wait(1).to({rotation:-41.5,x:-49.1,y:-51.6},0).wait(1).to({rotation:-48.5,x:-55.2,y:-45.4},0).wait(1).to({rotation:-55.4,x:-60.6,y:-38.6},0).wait(1).to({rotation:-62.3,x:-65.1,y:-31.2},0).wait(1).to({rotation:-69.2,x:-68.7,y:-23.3},0).wait(1).to({rotation:-76.2,x:-71.3,y:-15},0).wait(1).to({rotation:-83.1,x:-72.8,y:-6.5},0).wait(1).to({rotation:-90,x:-73.4,y:2.2},0).wait(1));

	// avatar_touchee
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#00071E").p("Ag1gMQgJAJAAADQAAACAJAJQAIAHAtgPQAWgGAVgJg");
	this.shape_1.setTransform(-24.2,-107.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF3EF1").s().p("AgrALQgJgJAAgCQAAgDAJgJIBgAAQgVAJgXAGQgdAKgOAAQgHAAgCgCg");
	this.shape_2.setTransform(-25.2,-107.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#1BF3E6").p("Ag8gHQgGAGAAABQAAAAAHAHQAHAHA8gVgAg1ASQgJAAgEgEQgKgKAAgEQAAgFAKgLIACgBIB6AAIgWAJQhAAagZAAg");
	this.shape_3.setTransform(-23.3,-107.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#00071E").s().p("Ag4AOQgLgKAAgEQAAgFALgLIACgBIB5AAIgWAJQg/AagZAAQgJAAgEgEgAg4AAIAHAHQAHAHA8gVIhFAAIgFAHg");
	this.shape_4.setTransform(-24.2,-107.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#1BF3E6").p("Ag1gMQgJAJAAADQAAACAJAJQAIAHAtgPQAWgGAVgJg");
	this.shape_5.setTransform(-24.2,-107.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FF3EF1").s().p("AgrALQgJgJAAgCQAAgDAJgJIBgAAQgVAJgXAGQgdAKgOAAQgHAAgCgCg");
	this.shape_6.setTransform(-25.2,-107.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#B6149B").s().p("AgsATQABg7gCgLQgDgeAVgTQATgQAWABQATAAAIALQAGAKgBAWQAAARgQAMIgRAJIgBAlQABAtAKAeIgfgwIgMBJIgMgxIgKA+QgDghABhAg");
	this.shape_7.setTransform(-32.9,-99.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#6EFFF1").s().p("AgVCXQgVgLgChlQAChtgDgWQgDgeAVgSQATgQAWAAQATAAAIAMQAGAKgBAWQAAARgQAMIgRAIIgBAnQABArAKAfIAPAxQAHAqgVATQgLAJgNAAQgKAAgLgGg");
	this.shape_8.setTransform(-32.9,-95.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#B6149B").s().p("Ag3AIIALgHQANgGALgCIBLgPIhmAtg");
	this.shape_9.setTransform(17.1,-114.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#B6149B").s().p("AhAgfIBaAZQATAFAUAPIgKASg");
	this.shape_10.setTransform(-0.7,-116.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#00071E").p("AAjgQQgIARgJAGQgPAMgpgI");
	this.shape_11.setTransform(17.5,-111.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#00071E").p("AgqgZQAPAbAEAEQAUASAyAA");
	this.shape_12.setTransform(-1.4,-112.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#659474").p("AgOgHQgDAGACAGQACAHAGADQAGADAGgCQAGgCAEgGQADgGgCgGQgCgGgGgEQgGgDgGACQgGACgEAGg");
	this.shape_13.setTransform(16.5,-112);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#00071E").s().p("AgHAPQgGgDgCgHQgCgGADgGQAEgGAGgCQAGgCAGADQAGAEACAGQACAGgDAGQgEAGgGACIgFABQgDAAgEgCg");
	this.shape_14.setTransform(16.5,-112);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#00071E").p("AgsgBIAUgPQAbgMAnATQgIARgJAGQgPAMgpgI");
	this.shape_15.setTransform(16.8,-111.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgeASIgMgTIATgPQAbgMAoATQgIARgJAGQgJAHgSAAQgMAAgSgDg");
	this.shape_16.setTransform(16.6,-111.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#659474").p("AATgFQADAHgEAHQgEAIgIACQgHADgHgEQgIgEgCgIQgCgHADgHQAEgIAIgCQAHgCAHADQAIAEACAIg");
	this.shape_17.setTransform(-0.7,-113.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#00071E").s().p("AgIASQgIgEgCgIQgCgHADgHQAEgIAIgCQAHgCAHADQAIAEACAIQADAHgEAHQgEAIgIACIgGABQgEAAgEgCg");
	this.shape_18.setTransform(-0.7,-113.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#00071E").p("AAzAHQgFgLgPgKQgegUgxAMQAPAcAEAEQAUARAyAA");
	this.shape_19.setTransform(-0.8,-112.8);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgeAKQgFgEgOgcQAxgMAeAUQAPAKAFALIgKAUQgzAAgTgRg");
	this.shape_20.setTransform(-0.7,-112.8);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#3C9096").s().p("AAAAFQgPgCABgEQAAgCAFgBQAEgBAGABQAPACgBAEQAAACgFABIgFAAIgFAAg");
	this.shape_21.setTransform(8.3,-104.1);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#B6149B").s().p("AggAHIgWgWQAQgHAYADQAMABAIADQAeAAAMAGQAGADABADQgEAFgHAHQgPAMgXAAQgWAAgQgOg");
	this.shape_22.setTransform(7.3,-100.2);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#220135").p("AhCgHICBAVQCLAQAuglQgjhogrguQg/hEhwAAQhtAAhBBVQgnAygRBHQgMAvAABVQAkAYCdBVg");
	this.shape_23.setTransform(-1.1,-117.9);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#5D0093").s().p("Aj3BzQAAhVAMgvQARhHAngyQBBhVBtAAQBxAAA+BEQAsAuAiBoQguAliKgQIiCgVIAMDlQidhVgkgYg");
	this.shape_24.setTransform(-1.1,-118.1);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#6EFFF1").p("AjyBsQAxAfCEBGIgMjiIAIACQABAAB8AVQCGAPAuggQgihmgrgtQg8g/htAAQhmAAg/BOQgpAygSBJQgMAvAABRgAgwDmIgJgFQiehVgkgYIgDgCIAAgDQAAhWAMgwQAUhMAqg1QBChRBsAAQBzAABABFQAsAvAkBqIABAEIgDACQgrAjh6gJQhGgFhMgRg");
	this.shape_25.setTransform(-1.1,-117.7);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#220135").s().p("Ag5DjQiehVgkgYIgCgCIAAgDQgBhWAMgwQAUhMAqg1QBChRBsAAQBzAABABFQAtAvAjBqIABAEIgDACQgqAjh6gJQhHgFhMgSIANDogAiriNQgoAygTBJQgMAvAABRQAxAfCEBGIgMjiIAJACIB9AVQCFAPAvggQgjhmgrgtQg8g/htAAQhmAAg/BOg");
	this.shape_26.setTransform(-1.1,-117.9);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#6EFFF1").p("AhCgHICBAVQCLAQAuglQgjhogrguQg/hEhwAAQhtAAhBBVQgnAygRBHQgMAvAABVQAkAYCdBVg");
	this.shape_27.setTransform(-1.1,-117.9);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#5D0093").s().p("Aj3BzQAAhVAMgvQARhHAngyQBBhVBtAAQBxAAA+BEQAsAuAiBoQguAliKgQIiCgVIAMDlQidhVgkgYg");
	this.shape_28.setTransform(-1.1,-118.1);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#ED1DD5").s().p("AgXAMIgMgvIBHBHg");
	this.shape_29.setTransform(-4.8,-108.4);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#ED1DD5").s().p("AgXAMIgMgvIBHBHg");
	this.shape_30.setTransform(-4.8,-103.6);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#6EFFF1").s().p("AgXB4IhzgeQgGiiAAgxQBfAYBjADQAhABASgDQAOgCAegLQAAAxgMAkQgOApgjArQgcAjgMAKQgWARgbAAIgSgCg");
	this.shape_31.setTransform(6.7,-106.5);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#220135").p("AAghtIAYDeIhsgYIAvg+QAqhHgFhBgAAfh0IABADQAAACAAAC");
	this.shape_32.setTransform(18.1,-107);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#5D0093").s().p("Ag1BXIAvg+QAphHgEhAIAYDdg");
	this.shape_33.setTransform(18.2,-106.8);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#1BF3E6").p("ABCB2Ih/gcIAHgIQABAAAtg9QArhIgGhBIgBgCIAMgBIABACgAgmBTIBaAUIgQiZQgSBFg4BAg");
	this.shape_34.setTransform(17.8,-106.8);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#220135").s().p("Ag/BbIAIgIIAug9QArhIgHhBIAAgCIALgBIABACIAZDrgAgoBTIBaAVIgQiaQgSBGg4A/g");
	this.shape_35.setTransform(18,-106.8);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#1BF3E6").p("AAghtIAYDdIhsgYIAvg+QAqhHgFhAgAAfh1IABAI");
	this.shape_36.setTransform(18.1,-106.9);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#5D0093").s().p("Ag1BXIAvg+QAphHgEhAIAYDdg");
	this.shape_37.setTransform(18.2,-106.8);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#B6149B").s().p("AAhA+QgTgEgDgHQgDgFAAgUQgGgGhNgmIAqACIgkgYIA8AMIhIgkIA2AEIA7AuQAgALAFAFQAUATgLAZQgIATgVAAQgHAAgJgDg");
	this.shape_38.setTransform(26.4,-60.8);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#6EFFF1").s().p("AA7BPQgSgEgEgHQgCgFAAgUQgGgGg8geQg8gegGgGQgTgSAOgTQAOgUAbAJQAZAIAWAQQAIAFBAAyQAhALAEAGQAUATgKAZQgIASgWAAQgHAAgJgCg");
	this.shape_39.setTransform(23.8,-62.5);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#6EFFF1").s().p("AiAAwQgOgUAOgXQARgZAsAEIB2gUQApgZAYANQAUAKAAAZQAAAUgQAMQgRAMgfgCIhkARQgwAIgaAAQgVAAgFgGg");
	this.shape_40.setTransform(-22.3,-84.9);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#B6149B").s().p("AAQCdQgugEgagSQgXgPAFgPQAMgSAGgMIAKhiQAJhVAdgWQAagbAdAAQAdAAAAAbQAAARgpBrQglBjAFAGIAYAWQAQAQAJAKQAJALgaAAIgTgBg");
	this.shape_41.setTransform(-13,-13.6);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#333333").s().p("AgFAJQgCgEAAgFQAAgEACgEQADgDACAAQADAAADADQACAEAAAEQAAAFgCAEQgDADgDAAQgCAAgDgDg");
	this.shape_42.setTransform(-14.9,-49.9);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#999999").s().p("AgHAAQAAgEACgDQACgEADAAQADAAACAEQADADAAAEQAAAMgIAAQgHAAAAgMg");
	this.shape_43.setTransform(-13.6,-45.5);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#999999").s().p("AgKARQgFgHAAgKQAAgJAFgHQAFgHAFAAQAHAAAEAHQAFAHAAAJQAAAKgFAHQgEAHgHAAQgGAAgEgHg");
	this.shape_44.setTransform(-14.1,-50.3);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#B6149B").s().p("AgsCGQgujxAigmQATgWAqANQAzAOAMBDQAMBBgaBQQgMApgPAcQgQAMgPAEQgIADgGAAQgVAAgFgag");
	this.shape_45.setTransform(-8,-40.5);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#00071E").s().p("AhrgMIASgLQAVgLAQAAQAKAAAVAGQAVAGATAAQAPAAApgKQAegIACAIQADALgGASQgFASgNAQQgrgSgYAAQghAAhLAYg");
	this.shape_46.setTransform(-3.1,-78.3);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#2C6A72").s().p("AhtApIAWgEQAXgKAHgdQAIgfgMgPIgOgJQAPgFAQgBQAGgHAHgcIBDANQgDAcAGAGQAMAMAlAMIASAlQAMAtgeAmQglgYgYAAQgPAAgyAPIgxAPQgJgcgNgeg");
	this.shape_47.setTransform(-3.3,-84.5);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#B6149B").s().p("AhpBYQgLgOgFgVIgDgRQAAgQAVgwQAVgwAAgaIAHAuQATAzA1AdIgdgmQgUgcAAgeQAOAVAXAOQAbASAIAIQgIgPgOgYIgOgWQAKAHAjASQAUAJAHAOIgYgwIAUAOQAVAPAHAIQgHgQgGghIgFgeQAGAMAjAuQAeArgKATQgSAiggAcQgeAZgdAKQghAMgZAAQgnAAgWgbg");
	this.shape_48.setTransform(-1.9,-56.4);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#6EFFF1").s().p("AhkD1QgLgOgGgUIgDgRQAAgRAVgwQAVgwAAgaQAAgfgYhBIgYg9QgDgGAAgKQAAgVAPgXQAIgNAbgHQAOgDAMgBQAMgMAMhJIBBASIgHAjQgGAkAHAIQAMAMAlAMIASAmQAMAtgeAmQgNAPgEASQgEAWAJARQAGAMAjAtQAdAsgKAUQgRAighAcQgeAZgdAJQggAMgaAAQgmAAgWgbg");
	this.shape_49.setTransform(-2.4,-72.1);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#6EFFF1").s().p("AApBuQgcgOhEhqQgPgXgFgQQgEgOAAgUQAAgSAPgIQAPgHASAJQAQAIAMAWQAIASAAAMQAAAHAgAqQAjAxAFAKQAJAbgNAQQgIAJgLAAQgGAAgHgDg");
	this.shape_50.setTransform(9.9,-76.4);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#89127B").s().p("AAQCbQgUgXgXgjQgthIgJhAQgJhDAoggQAdgYAgADQATACAcB5QAcB0gDAsQgDAighACg");
	this.shape_51.setTransform(8.7,-42.8);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#999999").s().p("AgEAJQgDgEAAgFQgBgEADgDQACgEADAAQAHAAABALQAAAMgHAAIgBAAQgCAAgCgDg");
	this.shape_52.setTransform(14.4,-46.7);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#999999").s().p("AgFAUQgGgFgDgKQgDgJACgIQACgIAHgCQAGgCAGAFQAGAGADAJQADAJgCAIQgCAIgHACIgEABQgDAAgFgEg");
	this.shape_53.setTransform(13.6,-51.5);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#89127B").s().p("AgsCVQgagLADgPQAJgUADgNIgGhiQgHhWAZgaQAWggAcgFQAcgFAFAbQADARgWBwQgUBoAHAFIA4AnQAQALgwAEIgYABQgfAAgVgJg");
	this.shape_54.setTransform(12.4,-15.5);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#0D0116").s().p("Ai+BHQhPgeAAgpQAAgpBPgdQBPgdBvAAQBwAABPAdQBPAeAAAoQAAAphPAeQhPAdhwAAQhvAAhPgdg");
	this.shape_55.setTransform(-2.2,2.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]},1).to({state:[]},45).wait(14));

	// haut
	this.haut = new lib.haut();
	this.haut.parent = this;
	this.haut.setTransform(-3.9,-95.8,1,1,0,0,0,36.1,47.9);

	this.timeline.addTween(cjs.Tween.get(this.haut).to({_off:true},1).wait(59));

	// bas
	this.bas = new lib.bas();
	this.bas.parent = this;
	this.bas.setTransform(-6.9,-23.2,1,1,0,0,0,27,35.6);

	this.timeline.addTween(cjs.Tween.get(this.bas).to({_off:true},1).wait(59));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-40,-144.2,72.2,156.7);
p.frameBounds = [rect, rect=new cjs.Rectangle(-37.5,-143.7,72.2,156.2), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-37.5,-143.7,72.2,146), new cjs.Rectangle(-50,-143.7,82.2,147.1), new cjs.Rectangle(-62.2,-143.7,94.4,148.6), new cjs.Rectangle(-73.6,-143.7,105.8,150.2), new cjs.Rectangle(-83.7,-143.7,115.9,152), new cjs.Rectangle(-93.6,-143.7,125.8,153.9), new cjs.Rectangle(-105.1,-143.7,137.3,155.8), new cjs.Rectangle(-115.3,-143.7,147.5,157.6), new cjs.Rectangle(-124.5,-143.7,156.7,159.3), new cjs.Rectangle(-132.2,-143.7,164.4,160.9), new cjs.Rectangle(-137.9,-143.7,170.1,162.3), new cjs.Rectangle(-142.3,-143.7,174.5,163.4), new cjs.Rectangle(-144.9,-143.7,177.1,170.9), new cjs.Rectangle(-145.8,-143.7,178,182)];


(lib.clipCorps = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#00071E").p("AB6gIQgegZgtgSQhZgmhLAfQArAiAaAdQAfAjAAAVQANgSBAgcQAggOAegJg");
	this.shape.setTransform(39.8,38.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#27847A").s().p("AgyALQgagdgrgiQBLgfBZAmQAtASAeAZQgeAJghAOQhAAcgMASQAAgVgfgjg");
	this.shape_1.setTransform(40,37.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#00071E").p("ACqAAQAAA+gyAsQgyAshGAAQhGAAgxgsQgygsAAg+QAAg9AygsQAxgsBGAAQBGAAAyAsQAyAsAAA9g");
	this.shape_2.setTransform(43,24.3);

	this.instance = new lib.ClipGroup();
	this.instance.parent = this;
	this.instance.setTransform(42.2,21.8,1,1,0,0,0,18.5,17.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#1BF3E6").s().p("Ah3BqQgygsAAg+QAAg9AygsQAxgsBGAAQBGAAAyAsQAyAsAAA9QAAA+gyAsQgyAshGAAQhGAAgxgsg");
	this.shape_3.setTransform(43,24.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#00071E").p("ABFhHQgrgNgqAJQhXATAABvQBSglA9APQAfAHAPAPQgJgQgHgYQgNgvAMgng");
	this.shape_4.setTransform(20.4,26.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#27847A").s().p("AAxAtQg+gPhRAlQAAhvBWgTQAqgJAsANQgNAnAOAvQAHAYAJAQQgPgPgfgHg");
	this.shape_5.setTransform(19.5,25.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#00071E").p("AiYAbIARgaQAYgdAegRQBhg6CDBRQhRAlghAeIgQAWQgPgRgcgOQg5gbhFASg");
	this.shape_6.setTransform(53.3,7.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#27847A").s().p("AgXAmQg5gchFATIARgaQAYgdAegSQBhg5CDBRQhRAkghAeIgQAXQgPgSgcgNg");
	this.shape_7.setTransform(53,7.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#00071E").p("ACMgQQgbgagwgOQhfgdhrA4QAsAxBEAcQAhAOAZAEIAdgkQAmglAogJg");
	this.shape_8.setTransform(23.8,12.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#27847A").s().p("AgaAxQhEgcgsgxQBqg4BgAcQAwAPAbAZQgoAJgmAlIgeAlQgZgEgggOg");
	this.shape_9.setTransform(23.9,12.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#00071E").p("AgOhbIAXAIQAdALAVAQQBDA2gfBaQg/g4hFgMQgWgEgUABIgPABIAjgeQAlgmAIgpg");
	this.shape_10.setTransform(60.5,35.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#27847A").s().p("AgqAWQgWgFgUABIgPACIAjgeQAlgmAIgpIAXAHQAdAMAVAQQBDA2gfBaQg/g4hFgMg");
	this.shape_11.setTransform(61,35.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#00071E").p("AiKhDIAhgBQAnABAlAJQB1AcArBcQhXANhKgLIg6gOQAAgTgGgZQgMgwgggZg");
	this.shape_12.setTransform(68.9,21);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#27847A").s().p("AgbBAIg5gOQAAgTgGgZQgNgwgfgZIAggBQAoABAlAJQB1AcArBcQgvAHgrAAQglAAgjgFg");
	this.shape_13.setTransform(68.5,21);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#00071E").p("AlXBxQgUhGAHhSQAMilCDg+QCxhUCXAsQCvAyA4DSQA0C/ilBpQg6AlhLAUQg5AQglAAQhYAAhhgpQiKg7gahug");
	this.shape_14.setTransform(36.4,49);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#5D0093").s().p("AizEaQiKg7gahuQgUhGAHhSQAMilCDg+QCxhUCXAsQCvAyA4DSQA0C/ilBpQg6AlhLAUQg5AQglAAQhYAAhhgpg");
	this.shape_15.setTransform(36.4,49);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#1BF3E6").ss(2).p("AgYBCIAAgRQAAgSgageQgagegvglIgGgFIAIgEQBLgfBbAlQAuATAgAaIAHAGIgJADQgmANglAPQgzAXgKAQgAhuhEQBSBDAMAnQAdgcBgggQgngcgsgPQhJgag/AXg");
	this.shape_16.setTransform(40,39.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#00071E").s().p("AgYA9QAAgSgageQgagegvglIgGgFIAIgEQBLgfBcAlQAtATAgAaIAHAGIgJADQgmAMglAQQgzAXgKAQIgJAOgAhug4QBTBCALAoQAegcBfggQgngcgsgPQgmgOgkAAQggAAgeALg");
	this.shape_17.setTransform(40,38.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#1BF3E6").ss(2).p("AB9gNQgegZgtgTQhZglhLAfQAqAiAbAdQAfAjAAAVQAMgTBAgbQAhgNAegKg");
	this.shape_18.setTransform(39.5,38.7);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#27847A").s().p("AgyALQgagdgrgiQBLgfBZAmQAtASAeAZQgeAJghAOQhAAcgMASQAAgVgfgjg");
	this.shape_19.setTransform(40,37.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#1BF3E6").ss(2).p("AgBhiQgsAAgcAVQgoAegCBGQA8gZAyACQAiAAAbAPQgYg5ANgyQgZgGgVAAgABbA8IgagaQgPgOgfgHQg7gNhOAjIgHADIAAgHQAAhSAugiQAhgZAzACQAaABAWAHIAFABIgCAFQgMAmANAuQAHAWAJAQg");
	this.shape_20.setTransform(22.1,29.2);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#00071E").s().p("ABSA7QgPgPgegHQg7gOhPAlIgHADIAAgIQAAhRAvgjQAhgYAzACQAaABAVAGIAFACIgBAFQgMAlANAtQAGAYAJAQIATAggAg3g1QgoAegDBGQA8gaAyACQAjACAaAPQgYg5AOgyQgagGgWAAQgrAAgbAUg");
	this.shape_21.setTransform(20.4,26.7);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#1BF3E6").ss(2).p("AA8hTQgrgNgqAJQhWATAABvQBRglA+APQAfAHAPAPQgJgQgHgYQgOgvAMgng");
	this.shape_22.setTransform(21.2,27.9);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#27847A").s().p("AAxAtQg+gPhRAlQAAhvBWgTQAqgJAsANQgNAnAOAvQAHAYAJAQQgPgPgfgHg");
	this.shape_23.setTransform(19.5,25.5);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#1BF3E6").ss(2).p("AAXBFIgIgLQgPgRgbgNQg4gahCASIgLADIAFgKQAFgNAXgaQAlgoAxgOQBVgYBrBCIAIAFIgIAEQhMAigiAdQgRAVgBAAgAhhADQAoAAAjARQAWALARAPQASghBngwQhjg5hNAWQg+ARgoA8QAXgEAUAAg");
	this.shape_24.setTransform(53.1,8.7);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#00071E").s().p("AAQBDQgQgRgagNQg4gahDASIgKADIAFgKQAFgOAXgZQAlgoAwgOQBWgYBrBCIAIAFIgIAEQhNAighAdIgSAVIAAAOgAgVAdQAWALARAPQASghBmgwQhig5hOAWQg9ARgpA8QAYgEAUAAQAnAAAkARg");
	this.shape_25.setTransform(53.1,7.8);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#1BF3E6").ss(2).p("AibAaIARgaQAYgdAegSQBhg5CDBRQhRAkghAeIgQAXQgOgSgdgNQg5gchFATg");
	this.shape_26.setTransform(53.6,7.7);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#27847A").s().p("AgXAmQg5gchFATIARgaQAYgdAegSQBhg5CDBRQhRAkghAeIgQAXQgPgSgcgNg");
	this.shape_27.setTransform(53,7.4);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#1BF3E6").ss(2).p("AiFgcQAmAqA6AaQAjAPAcAFQAOgUASgSQAhgeAigLQgngcgxgKQhSgPhYAsgAAfBHIgEAAQgbgFgigOQhDgcgsgyIgEgEIAFgDQBsg6BiAeQAxAPAcAaIAHAHIgJACQgnAIglAkQgcAjgBABg");
	this.shape_28.setTransform(24.2,12.2);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#00071E").s().p("AAdBHQgbgEgigOQhCgdgtgxIgEgFIAFgDQBsg5BiAdQAxAPAcAbIAHAGIgJACQgnAIglAkIgdAkIgBADgAiDgbQAnApA5AaQAjAQAcAFQAOgVATgSQAggeAigKQgngdgxgJQgVgEgVAAQg/AAhBAhg");
	this.shape_29.setTransform(24,12.2);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#1BF3E6").ss(2).p("ACOgQQgbgagwgOQhggdhqA4QAsAxBDAcQAhAOAZAEIAegkQAlglApgJg");
	this.shape_30.setTransform(23.6,12.2);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#27847A").s().p("AgaAxQhEgcgsgxQBqg4BgAcQAwAPAbAZQgoAJgmAlIgeAlQgZgEgggOg");
	this.shape_31.setTransform(23.9,12.2);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#1BF3E6").ss(2).p("AB6BeIgFgFQg9g3hDgMQgVgEgUABQgOABgBABIgbAFIAXgOQAAAAAjgeQAjglAGgnIABgFIAFABQACAAAqAPQAtAXAUAkQAbAugWBBgAgtAJQBUAABPBEQARg4gXgoQgRgegjgUQgWgMgYgGQgMA0g1Asg");
	this.shape_32.setTransform(58,35.7);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#00071E").s().p("ABhBcQg9g3hDgMQgVgEgUABQgOABgBABIgbAFIAXgOIAjgeQAjglAHgnIABgFIAFABIArAPQAtAXAUAkQAbAugWBBIgDAHgAhHAMIAGAAQBUAABPBEQARg4gXgoQgRgegjgUQgWgMgXgGQgMA0g2Asg");
	this.shape_33.setTransform(60,35.4);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#1BF3E6").ss(2).p("AgJhdIAYAIQAcALAVAQQBEA2ggBaQg+g4hFgMQgWgEgUABIgQABIAkgeQAlgmAHgpg");
	this.shape_34.setTransform(60,35.6);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#27847A").s().p("AgqAWQgWgFgUABIgPACIAjgeQAlgmAIgpIAXAHQAdAMAVAQQBDA2gfBaQg/g4hFgMg");
	this.shape_35.setTransform(61,35.3);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#1BF3E6").ss(2).p("AA1BKQg0AAgqgJQgigKgCAAIgDgBIAAgEQAAgTgGgYQgNgugdgYIgKgIIANgBQAAAAAigBQAoACAlAJQB2AcAtBeIACAGIgGABQgwAHgsAAgAhGAvQAaAJAnAEQBCAIBLgKQgshWhtgZQgvgLgxABQAYAYALAnQAHAYABAXg");
	this.shape_36.setTransform(67.6,21);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#00071E").s().p("AgvBBIgkgKIgDgBIAAgEQAAgTgGgYQgNgugegYIgJgIIAMgBIAigBQApACAlAJQB2AcAsBeIADAGIgGABQgwAHgsAAQgzAAgrgJgAh3g/QAYAYALAnQAGAYABAXQAaAJAoAEQBCAIBLgKQgshWhugZQgpgKgqAAIgMAAg");
	this.shape_37.setTransform(68.2,21);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#1BF3E6").ss(2).p("AiNhDIAggBQAoABAlAJQB0AcAsBcQhYANhKgLIg5gOQAAgTgGgZQgNgwgfgZg");
	this.shape_38.setTransform(69.2,21);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#27847A").s().p("AgbBAIg5gOQAAgTgGgZQgNgwgfgZIAggBQAoABAlAJQB1AcArBcQgvAHgrAAQglAAgjgFg");
	this.shape_39.setTransform(68.5,21);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#1BF3E6").ss(2).p("AAKk8QhsAAhxA2Qh/A8gNCiQgHBQAUBHQAaBtCLA6QBhAnBSAAQA6AABQgeQBsgoA2hGQBHhcgkiDQgvixiIg/QhCgehSAAgAAGFHQgeAAgugIQg7gMg0gWQhFgdgqgrQgrgsgNg4QgUhLAHhSQAOilCEg/QBkgvBjgGQBigGBQAkQCNBBAwC2QAlCHhKBgQg4BIhuApQhTAfg7AAg");
	this.shape_40.setTransform(36.4,49);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#00071E").s().p("AhGE/Qg7gMg0gWQhFgdgqgrQgrgsgNg4QgUhLAHhSQAOilCEg/QBkgvBjgGQBigGBQAkQCNBBAwC2QAlCHhKBgQg4BIhuApQhTAfg7AAQgeAAgugIgAjTkGQh/A8gNCiQgHBQAUBHQAaBtCLA6QBhAnBSAAQA6AABQgeQBsgoA2hGQBHhcgkiDQgvixiIg/QhCgehSAAQhsAAhxA2g");
	this.shape_41.setTransform(36.4,49);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#1BF3E6").ss(2).p("AlXBxQgUhGAHhSQAMilCDg+QCxhUCXAsQCvAyA4DSQA0C/ilBpQg6AlhLAUQg5AQglAAQhYAAhhgpQiKg7gahug");
	this.shape_42.setTransform(36.4,49);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#5D0093").s().p("AizEaQiKg7gahuQgUhGAHhSQAMilCDg+QCxhUCXAsQCvAyA4DSQA0C/ilBpQg6AlhLAUQg5AQglAAQhYAAhhgpg");
	this.shape_43.setTransform(36.4,49);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.instance},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.clipCorps, rect = new cjs.Rectangle(-1.1,-2,85.1,85.2), [rect]);


(lib.clipAntagonisteMort = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque 1
	this.instance = new lib.clipTete();
	this.instance.parent = this;
	this.instance.setTransform(58.5,61.6,1,1,0,0,0,16.9,16.8);

	this.instance_1 = new lib.clipPatteAvantGauche();
	this.instance_1.parent = this;
	this.instance_1.setTransform(94.5,60,1,1,-83.5,0,0,23.9,7);

	this.instance_2 = new lib.clipPatteArriereGauche();
	this.instance_2.parent = this;
	this.instance_2.setTransform(119.7,53.4,1,1,-67.3,0,0,5.7,7.5);

	this.instance_3 = new lib.clipCorps();
	this.instance_3.parent = this;
	this.instance_3.setTransform(92.6,40.6,1,1,0,0,0,41.5,40.6);

	this.instance_4 = new lib.clipPatteAvantDroite();
	this.instance_4.parent = this;
	this.instance_4.setTransform(55.5,60.7,1,1,69,0,0,33.6,12.1);

	this.instance_5 = new lib.clipPatteArriereDroite();
	this.instance_5.parent = this;
	this.instance_5.setTransform(78.9,23.7,1,1,-30,0,0,21,4.5);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0D0116").s().p("AmPB4QilgyAAhGQAAhFClgyQCmgyDpAAQDqAAClAyQCmAyAABFQAABGimAyQilAyjqAAQjpAAimgyg");
	this.shape.setTransform(85.4,76.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.clipAntagonisteMort, rect = new cjs.Rectangle(-5.9,-2,181.8,97.5), [rect]);


(lib.ClipAntagoniste = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"marche":0,"meurt":16});

	// timeline functions:
	this.frame_15 = function() {
		this.gotoAndPlay("marche");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(15).call(this.frame_15).wait(18));

	// tete
	this.instance = new lib.clipTete();
	this.instance.parent = this;
	this.instance.setTransform(-25,-39.9,1,1,0,0,0,16.9,16.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4).to({x:-25.3,y:-36.9},0).wait(4).to({x:-25.1,y:-39.9},0).wait(4).to({y:-34.9},0).wait(4).to({y:-39.9},0).wait(7).to({x:-25.4,y:-18.9},0).to({_off:true},1).wait(9));

	// patte_avant_gauche
	this.instance_1 = new lib.clipPatteAvantGauche();
	this.instance_1.parent = this;
	this.instance_1.setTransform(9.9,-43.8,1,1,-23.5,0,0,23.9,7);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(4).to({regX:24.1,rotation:12.7,x:5,y:-47.2},0).wait(4).to({rotation:-17.3,x:9.9,y:-43.8},0).wait(4).to({rotation:6.2,y:-47.3},0).wait(4).to({regX:23.9,rotation:-23.5,y:-43.8},0).wait(7).to({rotation:-83.5,x:10.6,y:-20.4},0).to({_off:true},1).wait(9));

	// patte_arriere_gauche
	this.instance_2 = new lib.clipPatteArriereGauche();
	this.instance_2.parent = this;
	this.instance_2.setTransform(32.8,-50.5,1,1,7.7,0,0,5.7,7.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(4).to({rotation:-22.3,x:27.7,y:-54},0).wait(4).to({regX:5.8,rotation:7.7,x:32.8,y:-50.4},0).wait(4).to({rotation:-7.3,y:-54},0).wait(4).to({regX:5.7,rotation:7.7,x:32.7,y:-50.5},0).wait(7).to({rotation:-67.3,x:35.8,y:-27.1},0).to({_off:true},1).wait(9));

	// corps
	this.instance_3 = new lib.clipCorps();
	this.instance_3.parent = this;
	this.instance_3.setTransform(9.1,-60.9,1,1,0,0,0,41.5,40.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(4).to({x:8.8,y:-57.9},0).wait(4).to({x:9,y:-60.9},0).wait(4).to({y:-55.9},0).wait(4).to({y:-60.9},0).wait(7).to({x:8.7,y:-39.8},0).to({_off:true},1).wait(9));

	// patte_avant_droite
	this.instance_4 = new lib.clipPatteAvantDroite();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-23.9,-45.8,1,1,15,0,0,33.6,12.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(4).to({regX:33.5,rotation:-30,x:-28.9,y:-49.2},0).wait(4).to({rotation:6.7,x:-23.9,y:-45.7},0).wait(4).to({rotation:-23.2,x:-23.8,y:-49.1},0).wait(4).to({regX:33.6,rotation:15,x:-23.9,y:-45.8},0).wait(7).to({rotation:69,x:-28.4,y:-19.8},0).to({_off:true},1).wait(9));

	// patte_arriere_droite
	this.instance_5 = new lib.clipPatteArriereDroite();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-7.9,-56.7,1,1,-30,0,0,21,4.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(4).to({regX:21.1,rotation:15,x:-12.8,y:-60.2},0).wait(4).to({regY:4.6,rotation:-30,x:-7.9,y:-56.7},0).wait(4).to({regX:21.2,regY:4.7,rotation:21.7,x:-7.7,y:-60},0).wait(4).to({regX:21,regY:4.5,rotation:-30,x:-8,y:-56.7},0).wait(7).to({x:-5},0).to({_off:true},1).wait(9));

	// ombre_antagoniste
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0D0116").s().p("AmPB4QilgyAAhGQAAhFClgyQCmgyDpAAQDqAAClAyQCmAyAABFQAABGimAyQilAyjqAAQjpAAimgyg");
	this.shape.setTransform(-1.4,-3.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(4).to({x:-6.5,y:-7.2},0).wait(4).to({x:-1.5,y:-3.7},0).wait(4).to({y:-7.2},0).wait(4).to({y:-3.7},0).wait(7).to({x:1.5},0).to({_off:true},1).wait(9));

	// position_mort
	this.instance_6 = new lib.clipAntagonisteMort();
	this.instance_6.parent = this;
	this.instance_6.setTransform(1,-33.7,1,1,0,0,0,84.9,46.7);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(24).to({_off:false},0).wait(1).to({regX:85.4,regY:46.4,x:1.5,y:-34,alpha:0.875},0).wait(1).to({alpha:0.75},0).wait(1).to({alpha:0.625},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.375},0).wait(1).to({alpha:0.25},0).wait(1).to({alpha:0.125},0).wait(1).to({alpha:0},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75.3,-103.5,130.4,124);
p.frameBounds = [rect, rect, rect, rect, rect=new cjs.Rectangle(-71.1,-100.5,137.5,114.9), rect, rect, rect, rect=new cjs.Rectangle(-69.1,-103.5,124.2,123.2), rect, rect, rect, rect=new cjs.Rectangle(-66.5,-98.5,126.1,111.4), rect, rect, rect, rect=new cjs.Rectangle(-75.3,-103.5,130.4,124), rect, rect, rect, rect, rect, rect, rect=new cjs.Rectangle(-89.8,-82.4,181.8,97.5), rect, rect=new cjs.Rectangle(-83.6,-82.4,169.2,95.7), rect, rect, rect, rect, rect, rect, rect];


// stage content:
(lib.index = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = null;
p.frameBounds = [rect];
// library properties:
lib.properties = {
	width: 800,
	height: 600,
	fps: 24,
	color: "#220135",
	opacity: 1.00,
	manifest: [
		{src:"images/index_atlas_.png?1525888401755", id:"index_atlas_"},
		{src:"sounds/SonAntagonisteMort.mp3?1525888402041", id:"SonAntagonisteMort"},
		{src:"sounds/SonAvatarBlesse.mp3?1525888402041", id:"SonAvatarBlesse"},
		{src:"sounds/SonAvatarMort.mp3?1525888402041", id:"SonAvatarMort"},
		{src:"sounds/SonTrameSonore.mp3?1525888402041", id:"SonTrameSonore"},
		{src:"sounds/SonPerte.mp3?1525888402041", id:"SonPerte"},
		{src:"sounds/SonPoison.mp3?1525888402041", id:"SonPoison"},
		{src:"sounds/SonProjectileContact.mp3?1525888402041", id:"SonProjectileContact"},
		{src:"sounds/SonProjectileLance.mp3?1525888402041", id:"SonProjectileLance"},
		{src:"sounds/SonReussite.mp3?1525888402041", id:"SonReussite"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;