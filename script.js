
 //  Text Animation Start

 function TxtType(el, toRotate, period) {
     this.toRotate = toRotate;
     this.el = el;
     this.loopNum = 0;
     this.period = parseInt(period, 10) || 2000;
     this.txt = '';
     this.tick();
     this.isDeleting = false;
 }

 TxtType.prototype.tick = function () {
     var i = this.loopNum % this.toRotate.length;
     var fullTxt = this.toRotate[i];

     if (this.isDeleting) {
         this.txt = fullTxt.substring(0, this.txt.length - 1);
     } else {
         this.txt = fullTxt.substring(0, this.txt.length + 1);
     }
     this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>';

     var that = this;
     var delta = 200 - Math.random() * 100;

     if (this.isDeleting) {
         delta /= 2;
     }

     if (!this.isDeleting && this.txt === fullTxt) {
         delta = this.period;
         this.isDeleting = true;
     } else if (this.isDeleting && this.txt === '') {
         this.isDeleting = false;
         this.loopNum++;
         delta = 500;
     }

     setTimeout(function () {
         that.tick();
     }, delta);
 };

 function initTypewriter() {
     var elements = document.getElementsByClassName('typewrite');
     for (var i = 0; i < elements.length; i++) {
         var toRotate = elements[i].getAttribute('data-type');
         var period = elements[i].getAttribute('data-period');
         if (toRotate) {
             new TxtType(elements[i], JSON.parse(toRotate), period);
         }
     }
 }


 function injectCSS() {
     var css = document.createElement("style");
     css.type = "text/css";
     css.innerHTML = ".typewrite > .wrap { border-right: 0.15em solid #000}";
     document.body.appendChild(css);
 }

 window.onload = function () {
     initTypewriter();
     injectCSS();
 };
 //  Text Animation End

 // About typewriting code start
 var aText = new Array(
     "I'm a self-taught Fullstack developer from Nigeria.",
     "I love the creativity involved in web development and it comes from the satisfaction of taking a concept and turning it into a fully functional website that looks great and works seamlessly."
 );
 var iSpeed = 30; // time delay of print out
 var iIndex = 0; // start printing array at this posision
 var iArrLength = aText[0].length; // the length of the text array
 var iScrollAt = 20; // start scrolling up at this many lines

 var iTextPos = 0; // initialise text position
 var sContents = ''; // initialise contents variable
 var iRow; // initialise current row

 function typewriter() {
     sContents = ' ';
     iRow = Math.max(0, iIndex - iScrollAt);
     var destination = document.getElementById("typedtext");

     while (iRow < iIndex) {
         sContents += aText[iRow++] + '<br />';
     }
     destination.innerHTML = sContents + aText[iIndex].substring(0, iTextPos) ;
     if (iTextPos++ == iArrLength) {
         iTextPos = 0;
         iIndex++;
         if (iIndex != aText.length) {
             iArrLength = aText[iIndex].length;
             setTimeout("typewriter()", 500);
         }
     } else {
         setTimeout("typewriter()", iSpeed);
     }
 }


 typewriter();

 // About typewriting code end

 