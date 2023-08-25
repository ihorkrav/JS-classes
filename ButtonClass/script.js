class Button{
    width;
    height;
    text;
    ShowButton(){
        document.write(`<button style="width:${this.width} ; height:${this.height} ; ">${this.text}</button>`)
    }
}
 
class BootstrapButton extends Button{
    color;
    ShowButton(){
        document.write(`<button style="width:${this.width} ; height:${this.height} ; background-color:${this.color} ;">${this.text}</button>`)
    }
}

window.onload = function(){
    document.getElementById("create_button").onclick = event => {
    let button = new Button;
    button.width = document.getElementById("width").value;
    button.height = document.getElementById("height").value;
    button.text = document.getElementById("text").value;
    button.ShowButton();
}

document.getElementById("create_with_color").onclick = event => {
    let button = new BootstrapButton;
    button.width = document.getElementById("width").value;
    button.height = document.getElementById("height").value;
    button.text = document.getElementById("text").value;
    button.color = document.getElementById("color").value;
    button.ShowButton();
}
}