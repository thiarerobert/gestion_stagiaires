package com.project2Robert.gestionstage.model;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.sql.Date;

@Entity
@Table(name = "stagiaire")
@Getter
@Setter
@NoArgsConstructor
public class Stagiaire {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idStagiaire;
    @Column(length = 50)
    private String nom_stagiaire;
    @Column(length = 50)
    private String prenom_stagiaire;
    @Column(length = 150)
    private String adresse;
    @Column(length = 8)
    private Date date_naissance;
}
