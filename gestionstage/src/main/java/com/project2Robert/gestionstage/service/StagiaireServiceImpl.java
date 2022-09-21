package com.project2Robert.gestionstage.service;


import com.project2Robert.gestionstage.model.Stagiaire;
import com.project2Robert.gestionstage.repository.StagiaireRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
@AllArgsConstructor
public class StagiaireServiceImpl implements StagiaireService{
    //Déclaration d'un objet de type StagiaireRepository
    private final StagiaireRepository stagiaireRepository;

    //Sauvegarde de l'objet créé dans la base de données
    @Override
    public Stagiaire creer(Stagiaire stagiaire) {
        return stagiaireRepository.save(stagiaire);
    }

    @Override
    public List<Stagiaire> lire() {
        return stagiaireRepository.findAll();
    }
}
