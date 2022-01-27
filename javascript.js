//Modell
var hoved = 'Never gonna: '
    var valg1 = '   Give you up!'
    var valg2 = '   Let you down!'
    var valg3 = '   Run around and desert you!'
    var valg4 = '   Make you cry!'
    var valg5 = '   Say goodbye!'
    var valg6 = '   Tell a lie and hurt you!'
    var valg7 = '   Make you rice!'
    var valg8 = '   12,5!'
    var valg9 = '   Help you out!'
    var valg10 = '  Lay around and cheat you!'
    var slot1 = ''
    var slot2 = ''
    var slot3 = ''
    var slot4 = ''
    var slot5 = ''
    var slot6 = ''



// View

function Solveig() {
        rickyboy()
    
        document.getElementById('sjef').innerHTML = /*html*/ `
                
            <h1> Rick Astley wordchooser </h1>
            <div class='wrapper'>
                <div class='valgbox1'>
                    <div class="button" onclick=Kurikku(valg10)>${valg10}</div>
                    <br/> <div class="button" onclick=Kurikku(valg5)>${valg5}</div> 
                    <br/> <div class="button" onclick=Kurikku(valg1)>${valg1}</div>
                    <br/> <div class="button" onclick=Kurikku(valg8)>${valg8}</div>
                    <br/> <div class="button" onclick=Kurikku(valg3)>${valg3}</div>
                </div>
                <div class='hovedtekst'>
                    ${hoved}<br/>
                    ${slot1}<br/>
                    ${hoved}<br/>
                    ${slot2}<br/>
                    ${hoved}<br/>
                    ${slot3}<br/>
                    ${hoved}<br/>
                    ${slot4}<br/>
                    ${hoved}<br/>
                    ${slot5}<br/>
                    ${hoved}<br/>
                    ${slot6}
                </div>
            <div class='valgbox2'>
                <div class="button" onclick=Kurikku(valg6)>${valg6}</div> 
                <br/> <div class="button" onclick=Kurikku(valg4)>${valg4}</div>
                <br/> <div class="button" onclick=Kurikku(valg9)>${valg9}</div>
                <br/> <div class="button" onclick=Kurikku(valg2)>${valg2}</div>
                <br/> <div class="button" onclick=Kurikku(valg7)>${valg7}</div>
            </div>
                
            </div>
            
            
            
            
            
            
        `}

        /* Hvis det ikke er noe der, legg noe der. hvis det er noe der, hopp over og sjekk om det er noe i neste*/



        

// controller
function rickyboy(){
    if (slot1 == valg1 && slot2 == valg2 && slot3 == valg3 && slot4 == valg4 && slot5 == valg5 && slot6 == valg6){
        window.location.assign("https://www.youtube.com/watch?v=dQw4w9WgXcQ");
    }
}

function Kurikku(klikka) {

     if (slot1 == ''){ 
        slot1 = klikka;   
        
    }
    else if (slot2 == ''){ 
        slot2 = klikka;   
 
    }
    else if (slot3 == ''){ 
        slot3 = klikka;   
      
    }
    else if (slot4 == ''){ 
        slot4 = klikka;   
      
    }
    else if (slot5 == ''){ 
        slot5 = klikka;   
     
    }
    else if (slot6 == ''){ 
        slot6 = klikka;   
     
    }

    
    else {
        slot1 = klikka;
        slot2 = '';
        slot3 = '';
        slot4 = '';
        slot5 = '';
        slot6 = '';

      
    }
    Solveig()
}



