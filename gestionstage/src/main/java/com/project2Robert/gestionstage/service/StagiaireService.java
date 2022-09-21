package com.project2Robert.gestionstage.service;

import com.project2Robert.gestionstage.model.Stagiaire;

import java.util.List;

public interface StagiaireService {
    Stagiaire creer(Stagiaire stagiaire);
    List <Stagiaire> lire();

}
