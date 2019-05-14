function go_ios() {
    location.href='itms-services://?action=download-manifest&url=https://kolizej.github.io/manifest.plist';
    document.getElementById("btnInstall").innerText = "PRESS INSTALL BUTTON AND GO TO MAIN SCREEN";
    //alert("APPLICATION IS INSTALLING. GO TO MAIN SCREEN");
}