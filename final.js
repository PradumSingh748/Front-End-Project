var ctrh , ctrw;
if(window.innerWidth>500){
  ctrh = 1.5;
  ctrw = .7;
}
else{
  ctrh = 1.2;
  ctrw = 2.2;
}








function init(){
    gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});


// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();
}
init();
function fsanimation(){
    var h1=document.querySelector("#card h1");
        
    var clutter="";
    var j=0;
    for(var i=0;i<=Math.floor(h1.textContent.length/2);i++){
        clutter += `<span data-delay="${i}">${h1.textContent.charAt(j)}</span>`
        j++;
        console.log(i);
    }
    for(var i=Math.floor(h1.textContent.length/2)-1;i>=0;i--){
        clutter += `<span data-delay="${i}">${h1.textContent.charAt(j)}</span>`
        j++;     
        console.log(i);
    }
    console.log("hellllllllllllllo plasticbionic")
    document.querySelector("#card h1").innerHTML = clutter;
    document.querySelectorAll("span").forEach(function(elem){
        console.log(elem.textContent),
        gsap.to(elem,{
            y:0,
            duration:2,
            ease:Expo.easeInOut,
            delay:elem.dataset.delay*.1
        })
    })
    

    var tl=gsap.timeline();
    




    tl.to("#cube",{
        // delay:1,
        opacity:1,
        height:`${35*ctrh}%`,
        // height:"50%",
        width:`${30*ctrw}%`,
        // width:"20%",
        ease:Expo.easeInOut,
    })
    tl.to("#cube #one",{
        opacity:1,
        ease:Expo.easeInOut,
        duration:2

    })
    
    tl.to("#cube",{
        // delay:2,
        opacity:1,
        width:`${50*ctrw}%`,
        // width:"40%",
        // height:"40%",
        height:`${25*ctrh}%`,
        duration:1
    })
    tl.to("#cube #two",{
        delay:-1.5,
        opacity:1,
        ease:Expo.easeInOut,
        duration:1
        
    })
    tl.to("#cube",{
        delay:.2,
        width:"20%",
        width:`${30*ctrw}%`,
        height:"50%",
        height:`${35*ctrh}%`,
        duration:1
    })
    tl.to("#cube #three",{
        delay:-1,
        opacity:1,
        ease:Expo.easeInOut,
        duration:1,
    })
    tl.to("#cube",{
        height:"100%",
        width:"100%"
    })
    tl.to("#cube #four",{
        opacity:1,
        delay:-.5 
    })
    tl.to("#card h1",{
        opacity:0,
        delay:-1,
        y:"-100%"
    })
    tl.to("#fs",{
        // opacity:.5,
        // height:0,
        display:"none",
        onComplete:function(){
            animateAllHeadings();
        }
    })
    gsap.to("#line",{
        delay:.5,
        width:"100%",
        duration:5,
        ease:Expo.easeInOut,
       
    })
  

}
fsanimation();



function navAnimation(){
    document.querySelector("#nav").addEventListener("mouseenter",function(){
        gsap.to(".cover",{
            stagger:.005,
            ease:Expo.easeInOut,
            duration:.5,
            height:"100%"
        })
        gsap.to(".cover h1",{
            stagger:.1,
            ease:Expo.easeInOut,
            duration:.5,
            opacity:1
        })
    })
    document.querySelector("#nav").addEventListener("mouseleave",function(){
        gsap.to(".cover",{
            stagger:.01,
            ease:Expo.easeInOut,
            height:"3%"
        })
        gsap.to(".cover h1",{
            stagger:.01,
            ease:Expo.easeInOut,
            opacity:0
        })
    })
    
    document.querySelectorAll(".text")
    .forEach(function(text){
        text.addEventListener("mouseenter",function(dets){
          console.log("Mouse entered")
          console.log("firsy is")
          console.log(dets.target.children[0])
          console.log("and 1st")
          console.log(dets.target.children[1])
          console.log(dets.target.children[1])
          gsap.to(dets.target.children[1],{
            width: "100%",
            ease: Expo.easeOut,
            duration: 0.5
          })
        })
    
        text.addEventListener("mouseleave",function(dets){
          console.log("Mouse left")
          gsap.to(dets.target.children[1],{
            width: "0%",
            left: "100%",
            ease: Expo.easeOut,
            duration: 0.5,
            onComplete: function(){
              dets.target.children[1].style.left="0%"
            }
          })
        })
    })
    
}
navAnimation();




// first make span tag for ever letter of the h1 by making two loops 
//one loop runs from 0 to half of the string
//second loop runs from half-1 till 0 


//plasticbionic 13/2 = 6

  

function animateAllHeadings(){
    document.querySelectorAll(".text h1").forEach(function(harp){
        var clutter = "";
        harp.textContent.split("").forEach(function(char){
          clutter+=`<span>${char}</span>`
        })
        harp.innerHTML = clutter;
      })
      

    document.querySelectorAll(".text h1").forEach(function(elem){
        console.log(elem.textContent)
        
        gsap.to(elem.children,{
            scrollTrigger:{
               scroller:"#main",
               trigger:elem,
                start:"top 80%",
                // markers:true
            },
            y:0,
            ease:Power3.easeInOut,
            duration:0.6,
            stagger:.07
        })
    })
}
animateAllHeadings();