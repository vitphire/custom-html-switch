// create the CustomSwitch class
class CustomSwitch extends HTMLLabelElement {
    constructor() {
        super();
    }
    //what happens when a switch is loaded in
    connectedCallback() {
        //make it have the class "switch"
        this.classList.add("switch");

        //create checkbox and add it
        var chckbox = document.createElement("input");
        chckbox.type="checkbox";
        if (this.getAttribute("checked")=="") {
            chckbox.checked=true;
            this.removeAttribute("checked");
        }
        this.appendChild(chckbox);
        //make the switch checked if the checkbox is
        this.checked=this.getElementsByTagName("input")[0].checked
        chckbox.addEventListener("input", chckboxClicked)
        function chckboxClicked() {
            this.parentElement.checked = this.checked;
        }

        //create the inner and outer parts and add them
        var outer = document.createElement("div");
        outer.classList.add("outer");
        var inner = document.createElement("div");
        inner.classList.add("inner");
        outer.appendChild(inner);
        this.appendChild(outer);
    }
}

//add the class to the elements
customElements.define('custom-switch', CustomSwitch, {extends:'label'});
