package com.project2Robert.gestionstage.service;

import com.project2Robert.gestionstage.model.Programme;

import java.util.List;

public interface ProgrammeService {
    Programme creer(Programme programme);
    List<Programme> lire();

    String supprimer(Long numeroProgramme);
}
