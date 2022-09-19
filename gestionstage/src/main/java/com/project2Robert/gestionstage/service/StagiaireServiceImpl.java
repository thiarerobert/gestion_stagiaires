package com.project2Robert.gestionstage.service;


import com.project2Robert.gestionstage.model.Stagiaire;
import com.project2Robert.gestionstage.repository.StagiaireRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
@AllArgsConstructor
public class StagiaireServiceImpl implements StagiaireService{
    private final StagiaireRepository stagiaireRepository;

    @Override
    public Stagiaire creer(Stagiaire stagiaire) {
        return stagiaireRepository.save(stagiaire);
    }
}
