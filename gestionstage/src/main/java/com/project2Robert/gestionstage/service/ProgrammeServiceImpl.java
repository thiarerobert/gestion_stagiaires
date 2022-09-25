package com.project2Robert.gestionstage.service;

import com.project2Robert.gestionstage.model.Programme;
import com.project2Robert.gestionstage.repository.ProgrammeRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor
public class ProgrammeServiceImpl implements ProgrammeService{
    private final ProgrammeRepository programmeRepository;
    @Override
    public Programme creer(Programme programme) {
        return programmeRepository.save(programme);
    }

    @Override
    public List<Programme> lire() {
        return programmeRepository.findAll();
    }

    @Override
    public String supprimer(Long numeroProgramme) {
        programmeRepository.deleteById(numeroProgramme);
        return "Le programme a été supprimé.";
    }
}
