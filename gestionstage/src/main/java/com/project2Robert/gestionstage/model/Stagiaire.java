package com.project2Robert.gestionstage.model;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.sql.Date;

//Création de la table stagiaire
@Entity
@Table(name = "stagiaire")
//importation des getteurs et setteurs
@Getter
@Setter
@NoArgsConstructor
public class Stagiaire {
    //Déclaration des variables de la classe
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idStagiaire;
    @Column(length = 50)
    private String nom_stagiaire;
    @Column(length = 50)
    private String prenom_stagiaire;
    @Column(length = 150)
    private String adresse;

}
