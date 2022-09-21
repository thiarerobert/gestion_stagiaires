package com.project2Robert.gestionstage.controller;

import com.project2Robert.gestionstage.model.Stagiaire;
import com.project2Robert.gestionstage.service.StagiaireService;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/stagiaire")
@AllArgsConstructor
@CrossOrigin
public class StagiaireController {
    //Création d'un objet de type StagiaireService
    private final StagiaireService stagiaireService;

    //Envoie des données saisies par requête http POST dans la route /create
    @PostMapping("/create")
    public Stagiaire create (@RequestBody Stagiaire stagiaire) {
        return stagiaireService.creer(stagiaire);
    }

    @GetMapping("/read")
    public List <Stagiaire> read(){
        return stagiaireService.lire();
    }
}
