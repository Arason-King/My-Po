function showDiv(e){
    let ele = e.childNodes[1];
    $(ele).slideDown("slow");
}
function hideDiv(e){
    let ele = e.childNodes[1];
    $(ele).slideUp("slow");
}
changeProject(1);
function changeProject(number,e){

    $(e).addClass("cd1").siblings().removeClass("cd1");
    
    if(number==2){
       let aarr = ["https://workdrive.zoho.com/file/osy1oa14dbd657b814f16acabc9d52a3dc822", "https://workdrive.zoho.com/file/0nd9kbb91db3ca85d402aabd397c82422dd42", "https://workdrive.zoho.com/file/0nd9kad665e43bc6c4955be191b4354a5b0fa", "https://workdrive.zoho.com/file/fybok1291d7e517a24aa3a9d9023a750041eb"]
       let imgArr = ["seleniumweb.png"];
       let text = ["Instagram", "Facebook", "WIX", "Rediff mail"];
       let srcarr = ["insta.png", "fb.png", "wix.png", "rediff.png"];
     for(let i=0; i<aarr.length; i++){
        document.getElementById("anchor"+i).setAttribute("href", aarr[i]);
        document.getElementById("proImg"+i).setAttribute("src", imgArr[0]);
        document.getElementById("name"+i).innerText = text[i];
        document.getElementById("hover"+i).setAttribute("src", srcarr[i]);
     }
    }

    if(number==5){
        let aarr = ["https://myproject1-home.arasonyt.repl.co/", "https://mygame.arasonyt.repl.co/","https://assignment-9.arasonyt.repl.co/","https://myproject.arasonyt.repl.co/"];
        let imgArr = ["js.jpeg"];
        let text = ["Bouncing Ball", "Tictactoe", "PIXELARITY", "JS Programs"];
        let srcarr = ["game.jpg", "tictactoe.png", "Screenshot from 2023-03-21 00-51-29.png", "myProject.webp"];
      for(let i=0; i<aarr.length; i++){
         document.getElementById("anchor"+i).setAttribute("href", aarr[i]);
         document.getElementById("proImg"+i).setAttribute("src", imgArr[0]);
         document.getElementById("name"+i).innerText = text[i];
         document.getElementById("hover"+i).setAttribute("src", srcarr[i]);
      }
     }

     if(number==4){
        let aarr = ["https://sheet.zoho.com/sheet/open/rz99hc872fd25f2dc4e6ca16309f57a1a70d8?sheetid=0&range=A1", "https://sheet.zoho.com/sheet/open/rynsd2daf98e8b0a44204b111ef6ab170a406?sheetid=0&range=D13","https://sheet.zoho.com/sheet/open/s0tmb1a376aa8d1e84a53885cb27978c68128","https://sheet.zoho.com/sheet/open/5jn83fb9dfeff26c3487c82e252306d91ad3f?sheetid=0&range=A1"];
        let imgArr = ["md.png"];
        let text = ["Zoho Mail", "Bitly Login", "Flipkart", "TPV Multiplex"];
        let srcarr = ["zohoMail.png", "Bit.ly_Logo.svg.png", "flipkart.png", "tpv.jpeg"];
      for(let i=0; i<aarr.length; i++){
         document.getElementById("anchor"+i).setAttribute("href", aarr[i]);
         document.getElementById("proImg"+i).setAttribute("src", imgArr[0]);
         document.getElementById("name"+i).innerText = text[i];
         document.getElementById("hover"+i).setAttribute("src", srcarr[i]);
      }

     }

     if(number==6){
        let aarr = ["https://scratch.mit.edu/projects/725220137/fullscreen/","https://scratch.mit.edu/projects/718878327/fullscreen/","https://scratch.mit.edu/projects/721340983/fullscreen/","https://scratch.mit.edu/projects/721704718/fullscreen/"];
        let imgArr = ["scratch1.png"];
        let text = ["Assassin Game", "Matching Calender", "HCF & LCM", "Short Story"];
        let srcarr = ["Hunter-Assassin.jpg", "calender.png", "lcmandhcf.jpeg", "shortStory.jpg"];
      for(let i=0; i<aarr.length; i++){
         document.getElementById("anchor"+i).setAttribute("href", aarr[i]);
         document.getElementById("proImg"+i).setAttribute("src", imgArr[0]);
         document.getElementById("name"+i).innerText = text[i];
         document.getElementById("hover"+i).setAttribute("src", srcarr[i]);
      }

     }

     if(number==1){
        let cl = ["productImage ball","productImage","productImage memoryGame","productImage"];
        let aarr = ["https://workdrive.zoho.com/file/osy1ob977b3a91dbe419eaa14ed0499b5cd28","https://workdrive.zoho.com/file/osy1oc18b482ccfd9458484229f1166de1d14","https://workdrive.zoho.com/file/0nd9k0e0f8607d81447ec9f579c66b7fe6b77","https://workdrive.zoho.com/file/2sjpg5e913dce996045e6bc18c07963fca42e"];
        let imgArr = ["testNG1.jpg"];
        let text = ["Tictactoe", "Programiz", "Flipkart", "Connect"];
        let srcarr = ["tictactoe.png", "programiz-removebg-preview (1).png", "flipkart.png", "connect.png"];
      for(let i=0; i<srcarr.length; i++){
         document.getElementById("anchor"+i).setAttribute("href", aarr[i]);
         document.getElementById("proImg"+i).setAttribute("src", imgArr[0]);
         document.getElementById("name"+i).innerText = text[i];
         document.getElementById("hover"+i).setAttribute("src", srcarr[i]);
      }
     }

     if(number==3){
        let cl = ["productImage ball","productImage","productImage memoryGame","productImage"];
        let aarr = ["https://workdrive.zoho.com/file/osy1o2d93140a99884d4ca65fe6ba2759a0b5","https://workdrive.zoho.com/file/osy1oa1a73b8513794ca58d1b9c61701a1a0b","https://workdrive.zoho.com/file/osy1ob72713fb12454992bf147fb33224b3ef","https://workdrive.zoho.com/file/osy1oc1f1a1c2654a4d0480189cd7d0c32e9b"];
        let imgArr = ["see.png"];
        let text = ["BMW", "Swiggy", "Make my Trip", "TPV Multiplex"];
        let srcarr = ["bmww.jpg", "Swiggy.png", "mmt1.jpg", "tpv.jpeg"];
      for(let i=0; i<aarr.length; i++){
         document.getElementById("anchor"+i).setAttribute("href", aarr[i]);
         document.getElementById("proImg"+i).setAttribute("src", imgArr[0]);
         document.getElementById("name"+i).innerText = text[i];
         document.getElementById("hover"+i).setAttribute("src", srcarr[i]);
      }

     }
}

console.log(false)

$('#cb0').addClass("cd1");