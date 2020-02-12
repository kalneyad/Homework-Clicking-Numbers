var colors=["green","red","blue"];

function box(color) {
  var that = this;
  this.counter = 0;
  this.element = document.createElement("div");
  this.element.style.height = "100px";
  this.element.style.width = "200px";
  this.element.style.display = "flex";
  this.element.style.alignItems = "center";
  this.element.style.justifyContent = "center";
  this.element.style.textAlign = "center";
  this.element.style.fontSize = "18px";
  this.element.style.borderRadius = "10px";
  this.element.style.backgroundColor=color;
  this.element.addEventListener("click", function(){that.increment();})
  this.element.innerHTML = this.counter;
  document.body.appendChild(this.element);
}

box.prototype.increment = function(){
  this.counter = this.counter+1;
  this.element.innerHTML = this.counter;
}

for (var i = 0; i < colors.length; i++) {
  var box1=new box(colors[i]);
}