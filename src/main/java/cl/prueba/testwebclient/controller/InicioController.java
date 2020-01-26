package cl.prueba.testwebclient.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class InicioController {

    @RequestMapping("/consulta_edad")
    public String consultaPersona(Model model){
        //model.addAttribute("nombre", nombre);
        return "consulta_edad.html";
    }
}
