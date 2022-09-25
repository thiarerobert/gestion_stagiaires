package com.project2Robert.gestionstage.controller;

import com.project2Robert.gestionstage.model.Programme;
import com.project2Robert.gestionstage.service.ProgrammeService;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/programme")
@AllArgsConstructor
@CrossOrigin(origins = "*")

public class ProgrammeController {
    private final ProgrammeService programmeService;

    @PostMapping("/create")
    public Programme create (@RequestBody Programme programme) {
        return programmeService.creer(programme);
    }

    @GetMapping ("/read")
    public List <Programme> read() {
        return programmeService.lire();
    }

    @DeleteMapping("/delete/{numeroProgramme}")
    public String delete(@PathVariable Long numeroProgramme){
        return programmeService.supprimer(numeroProgramme);
    }
}
