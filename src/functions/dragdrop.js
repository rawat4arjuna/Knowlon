export const allowDrop = (ev) => {
    ev.preventDefault();
  };
  
  export const drag = (ev) => {
//  ev.target.setAttribute("style","pointerEvents: 'auto'")

//     console.log('-0-0-',ev.target.getAttribute('id'))
    ev.dataTransfer.setData("text", ev.target.id);
  };
  
  export const drop = (ev) => {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
   let clone = document.getElementById(data).cloneNode(true);
   clone.id ="yuyu"
   //clone.addEventListener("click",getData())
console.log("-0-0-",clone)
    ev.target.appendChild(clone);
  };
  
  export const getProps =(ev) =>{
      ev.preventDefault();
  }
export  const getData = (e) =>{
    if(e.target.id === e.target.tagName.toLowerCase())
    {
        console.log("fail")
    }else
    {
        console.log("popopo",e.target.id,e.target.tagName.toLowerCase())
    }

  }