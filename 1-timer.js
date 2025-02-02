import"./assets/modulepreload-polyfill-B5Qt9EMX.js";/* empty css                      */import{f as y,i as C}from"./assets/vendor-BbbuE1sJ.js";const l=document.querySelector("#datetime-picker"),t=document.querySelector("[data-start]"),u=document.querySelector("[data-days]"),f=document.querySelector("[data-hours]"),m=document.querySelector("[data-minutes]"),p=document.querySelector("[data-seconds]");let n,h;t.disabled=!0;const w={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(e){n=e[0],console.log(n),n<new Date?(C.error({title:"Error",message:"Please choose a date in the future",position:"topRight",titleColor:"#fff",messageColor:"#fff",color:"#ef4040",icon:null}),t.disabled=!0):t.disabled=!1}};y("#datetime-picker",w);t.addEventListener("click",function(){this.disabled=!0,l.disabled=!0,h=setInterval(function(){let e=new Date().getTime(),r=n-e;if(r<0){clearInterval(h),u.textContent="00",f.textContent="00",m.textContent="00",p.textContent="00",t.disabled=!0,l.disabled=!1;return}let{days:s,hours:d,minutes:c,seconds:a}=k(r);u.textContent=o(s),f.textContent=o(d),m.textContent=o(c),p.textContent=o(a)},1e3)});function k(e){const a=Math.floor(e/864e5),x=Math.floor(e%864e5/36e5),b=Math.floor(e%864e5%36e5/6e4),g=Math.floor(e%864e5%36e5%6e4/1e3);return{days:a,hours:x,minutes:b,seconds:g}}function o(e){return String(e).padStart(2,"0")}const i=document.createElement("style");i.type="text/css";const E=`
body {
  font-weight: 400;
  font-size: 16px;
  line-height: 1.5;
  letter-spacing: 0.04em;
  color: #2e2f42;
}
#datetime-picker {
  border-radius: 4px;
  width: 280px;
  height: 40px;
  padding-left: 16px;
  margin-bottom: 32px;
  outline: none;
  transition: border-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
}
#datetime-picker:focus {
  border-color: #6c8cff;
}
[data-start] {
  border-radius: 8px;
  padding: 8px 16px;
  width: 75px;
  height: 40px;
  background: #4e75ff;
  border: none;
  font-weight: 500;
  color: #fff;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
}
[data-start]:hover {
    background: #6c8cff;
}
[data-start]:disabled {
    background: #cfcfcf;
    color: #989898;
}
.timer {
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: row;
  gap: 24px;
  width: 346px;
}
.field {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  gap: 0px;
}
.value {
  font-size: 40px;
  line-height: 1.2;
}
.label {
  text-transform: uppercase;
}`;i.appendChild(document.createTextNode(E));document.head.appendChild(i);
//# sourceMappingURL=1-timer.js.map
