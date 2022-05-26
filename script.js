function toggleHeaderGappsBox(){
    var  headerGappsBox = document.getElementById("header__GappsWrapper");
    if(headerGappsBox == null) console.log("not found the element");
    else {
        if( headerGappsBox.style.display != 'flex')
        {
            headerGappsBox.style.display = "flex";
            
         }
        else
        {
            headerGappsBox.style.display = "none";
        }
    }
}

document.addEventListener('mouseup', function(e) {
    var headerGappsBox = document.getElementById('header__GappsWrapper');
    if (!headerGappsBox.contains(e.target)) {
        headerGappsBox.style.display = 'none';
    }
});

function toggleFooterSettingsContainer(){
    var footerSettingsContainer = document.getElementById("footer__settingsContainer");
    if(footerSettingsContainer != null){
        if( footerSettingsContainer.style.display != 'block')
        {
            footerSettingsContainer.style.display = "block";
            
         }
        else
        {
            footerSettingsContainer.style.display = "none";
        }
    }
}



//theme 


document.getElementById('darkThemeCss').disabled  = true;


function toggleTheme(){
    changeThemeSettingsItems();
    changeLogo();
    var darkTheme = document.getElementById('darkThemeCss');
    darkTheme.disabled = !darkTheme.disabled;
    console.log("working");
}


function changeLogo(){
    var lightLogo = document.getElementById('s1__LogoImg--light');
    var darkLogo = document.getElementById('s1__LogoImg--dark');
    
    if(darkLogo.style.display != 'block' ){
        lightLogo.style.display = 'none';
        darkLogo.style.display = 'block';
    }
    else{
        lightLogo.style.display = 'unset';
        darkLogo.style.display = 'none';
    }
    console.log(darkLogo.style.display);
}


var themeDarkOff = document.getElementById("themeDarkOff");
var themeDarkOn = document.getElementById("themeDarkOn");
var themeSun = document.getElementById("themeSun");
var themeMoon = document.getElementById("themeMoon");

var footerThemeSettings = document.getElementById("footer__settingsTheme");
footerThemeSettings.removeChild(themeMoon);
function changeThemeSettingsItems(){
    
   if(themeDarkOn.style.display!='block'){
       themeDarkOff.style.display = 'none';
       if(footerThemeSettings.contains(themeSun) && footerThemeSettings.contains(themeMoon)){
         footerThemeSettings.removeChild(themeSun);
       }
       else if(footerThemeSettings.contains(themeSun)){

            footerThemeSettings.removeChild(themeSun);
            footerThemeSettings.appendChild(themeMoon);
       }

       themeDarkOn.style.display = 'block';
       

   }
   else{
    themeDarkOff.style.display = 'block';
    if(footerThemeSettings.contains(themeMoon)){

           footerThemeSettings.removeChild(themeMoon);
           footerThemeSettings.appendChild(themeSun);
    }
    themeDarkOn.style.display = 'none';
    
   }


}






