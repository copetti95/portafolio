
package com.portafolio.copetti.Interface;

import com.portafolio.copetti.entity.Persona;
import java.util.List;



public interface IPersonaService {
    //traer una lista de persona
    public List<Persona> getPersona();
    
    //Guardar un objeto de tipo persona
    public void savePersona(Persona persona);
    
    //Eliminar un usuario pero lo buscamos por ID
    public void deletePersona(Long id);
    
    //Buscar una persona por ID
    public Persona findPersona(Long id);
    
}
