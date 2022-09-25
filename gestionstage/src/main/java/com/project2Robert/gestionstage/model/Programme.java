package com.project2Robert.gestionstage.model;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

//Spécifier que la classe est une entité
@Entity
//Donner un nom à la table
@Table(name = "programme")
//importation des getteurs et setteurs
@Getter
@Setter
@NoArgsConstructor
//Création de la classe Programme
public class Programme {
    //création d'une clé primaire
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    //Déclaration des variables
    private Long numeroPogramme;
    @Column(length = 100)
    private String titre;
    private Integer duree;
}
