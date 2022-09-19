package com.project2Robert.gestionstage.controller;

import com.project2Robert.gestionstage.model.Stagiaire;
import com.project2Robert.gestionstage.service.StagiaireService;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/stagiaire")
@AllArgsConstructor
@CrossOrigin
public class StagiaireController {
    private final StagiaireService stagiaireService;

    @PostMapping("/create")
    public Stagiaire create (@RequestBody Stagiaire stagiaire) {
        return stagiaireService.creer(stagiaire);
    }
}
