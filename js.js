const myNewMenu=document.querySelector(".header__new__menu");
const myNewMenu2=document.querySelector(".header__new__menu2");

const myopenarrow=document.querySelector(".arrow1o");
const myclosearrow=document.querySelector(".arrow1c");
const myopenarrow2=document.querySelector(".arrow2o");
const myclosearrow2=document.querySelector(".arrow2c")
const myLink=document.querySelector(".l1");
const myLink2=document.querySelector(".l2");


let count_link=0;
myLink2.addEventListener("click",()=>{
    if(count_link==0){
        myNewMenu.classList.add("show");
        myopenarrow.classList.add("hide");
        myclosearrow.classList.add("show");
        count_link++;
    }
    else{
        count_link=0;
        myNewMenu.classList.remove("show");
        myopenarrow.classList.remove("hide");
        myclosearrow.classList.remove("show");
    }
});

let count_link2=0;
myLink.addEventListener("click",()=>{
if(count_link2==0){
    myNewMenu2.classList.add("show");
    myopenarrow2.classList.add("hide");
    myclosearrow2.classList.add("show");
    count_link2++;
    
}
else{
    count_link2=0;
    myNewMenu2.classList.remove("show");
    myclosearrow2.classList.remove("show");
    myopenarrow2.classList.remove("hide");
}
});


// for menu in mobile


const myopenbtn=document.querySelector(".menu__open__btn");
const myclosebtn=document.querySelector(".menu__close__btn");
const menuMobile=document.querySelector(".header__menu__mobile__wrraper");
const arrowmobileopen1=document.querySelector(".mobilearrowopen1");
const arrowmobilclose1=document.querySelector(".mobilearrowclose1");
const arrowmobileopen2=document.querySelector(".mobilearrowopen2");
const arrowmobilclose2=document.querySelector(".mobilearrowclose2"); 


myopenbtn.addEventListener("click",()=>{
menuMobile.classList.add("come_left");
myopenbtn.classList.add("hide-btn");
myclosebtn.classList.add("show-btn");
});
myclosebtn.addEventListener("click",()=>{
    menuMobile.classList.remove("come_left");
    myopenbtn.classList.remove("hide-btn");
    myclosebtn.classList.remove("show-btn");
    });



// menumobile

const little_menu1=document.querySelector(".little__menu1");
const little_menu2=document.querySelector(".little__menu2");

const mymobilemenu1=document.querySelector(".ll1");
const mymobilemenu2=document.querySelector(".ll2");

let count_little_menu1=0;
mymobilemenu1.addEventListener("click",()=>{
    if(count_little_menu1==0){
        count_little_menu1++;
        little_menu1.classList.add("show-btn");
        arrowmobileopen1.classList.add("hide-btn");
        arrowmobilclose1.classList.add("show-btn");
    }
    else{
        count_little_menu1=0;
        little_menu1.classList.remove("show-btn");
        arrowmobilclose1.classList.remove("show-btn");
        arrowmobileopen1.classList.remove("hide-btn");
    }
});
let count_little_menu2=0;
mymobilemenu2.addEventListener("click",()=>{
    if(count_little_menu2==0){
        count_little_menu2++;
        little_menu2.classList.add("show-btn");
        arrowmobileopen2.classList.add("hide-btn");
        arrowmobilclose2.classList.add("show-btn");
    }else{
        count_little_menu2=0;
        little_menu2.classList.remove("show-btn");
        arrowmobileopen2.classList.remove("hide-btn");
        arrowmobilclose2.classList.remove("show-btn");
    }
});