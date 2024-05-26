function recomendar(genero){
    let edad = document.getElementById("edad").value;
    let recomendacion = document.getElementById("recomendacion");
    switch(genero){
     case 'drama':
       if (edad < 13){
         recomendacion.textContent="Arthur, una amistad sin límites";
       }else{
        recomendacion.textContent="Lazos de vida";
        }
        break;
    
    
      case 'comedia':
         if (edad < 13){
             recomendacion.textContent="Ghostbusters";
         }else{
             recomendacion.textContent="Ghostbusters";
             }
         break;
     
         case 'terror':
            if (edad < 13){
                 recomendacion.textContent="No hay opciones para esta edad";
             }else{
                 recomendacion.textContent="La primera profecía";
                 }
             break;

         case 'infantil':
             if (edad < 13){
                     recomendacion.textContent="Kung fu panda 4";
                 }else{
                     recomendacion.textContent="¡Patos!";
                 }
                break;
         
        case 'cienciaFiccion':
             if (edad < 13){
                      recomendacion.textContent="Godzilla y Kong: El nuevo imperio";
                 }else{
                      recomendacion.textContent="Duna: parte dos";
                 }
                 break;     

          case 'accion':
             if (edad < 13){
                    recomendacion.textContent="No hay opciones para esta edad";
                }else{
                    recomendacion.textContent="Guerra civil"
                }
                break;    
                
         case 'musical':
             if (edad < 13){
                   recomendacion.textContent="Aespa: world tour";
                }else{
                    recomendacion.textContent="Black to black";
                       }
                       break; 
                       
         case 'crimen':
             if (edad < 13){
                    recomendacion.textContent="No hay opciones para esta edad";
                }else{
                    recomendacion.textContent="Recuerdos mortales"
                      }
                      break;         
    }
}
