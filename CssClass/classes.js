class CssClass{
    name
    property_name = []
    value = []
    constructor(name){
        this.name=name;
    }
    AddProperty(prop, val){
        this.property_name.push(prop);
        this.value.push(val);
    }
    DeleteProperty(name){
        let index=this.property_name.indexOf(name);
        // this.property_name=this.property_name.filter(function(property){return property!==name;});
        this.property_name.splice(index, 1);
        this.value.splice(index, 1);
        
    }
    StringToShow(){
        let show=[];
        let str="";
        for(let i=0;i<this.property_name.length;i++){
            show.push(`${this.property_name[i]}: ${this.value[i]}; `);
        }
        for(let i=0;i<show.length;i++){
            str+=show[i];
        }
        return str;
    }
    ShowCss()
    {
       alert(`.${this.name} {${this.StringToShow()}}`)
    }

}
let element=new CssClass()

window.onload = function(){
    document.getElementById("assign_name").onclick = event => {
        element = new CssClass(document.getElementById("element_name").value);
    }
    document.getElementById("add_prop").onclick = event => {
        let name = document.getElementById("property_name").value;
        let value = document.getElementById("property_value").value;
        element.AddProperty(name,value);
    }
    document.getElementById("delete_prop").onclick = event => {
        let name = document.getElementById("delete_name").value;
       
        element.DeleteProperty(name);
    }
    document.getElementById("show_elem").onclick = event => {
        element.ShowCss();
    }
}