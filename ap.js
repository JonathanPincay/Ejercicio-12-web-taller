var getData = function(){
    var Nombres = document.getElementById("Nombres").value;
    var Apellidos = document.getElementById("Apellidos").value;
    var Cedula = document.getElementById("Cedula").value;
    var Telefono = document.getElementById("Telefono").value;
    var Email = document.getElementById("Email").value;
    var Contraseña = document.getElementById("Contraseña").value;
    var RepitaContraseña = document.getElementById("RepitaContraseña").value;
    if (Nombres == "") {
        document.getElementById("Nombres").focus();
    } else { 
            if (Apellidos == "") {
                document.getElementById("Apellidos").focus();
    } else {
            if (Cedula == "") {
                document.getElementById("Cedula").focus();
    } else {
            if (Telefono == "") {
                document.getElementById("Telefono").focus();
    } else {
            if (Email == "") {
                document.getElementById("Email").focus();
    } else {
            if (Contraseña == "") {
                document.getElementById("Contraseña").focus()
    } else {
        if (RepitaContraseña == "") {
            document.getElementById("RepitaContraseña").focus();
        } else {
            console.log(Nombres+" "+Apellidos+" "+Cedula+" "+Telefono+" "+Email+" "+Contraseña+" "+RepitaContraseña);
            document.getElementById("Nombres").value = "";
            document.getElementById("Apellidos").value = "";
            document.getElementById("Cedula").value = "";
            document.getElementById("Telefono").value = "";
            document.getElementById("Email").value = "";
            document.getElementById("Contraseña").value = "";
            document.getElementById("RepitaContraseña").value = "";  
            document.getElementById("Nombres").focus()     
        }
            
        }
                
        }
                
        }
                
        }
        
    }
        
    }

}