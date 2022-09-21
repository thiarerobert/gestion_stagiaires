import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Navigation.module.css';

export default function Navigation() {
  return <div >
            <nav >
              <ul className={styles.nav}>
                <li> 
                  <NavLink to='/' className={({isActive}) => isActive ? styles.actif : " "}>
                        Accueil 
                  </NavLink>
                </li>
                <li> 
                  <NavLink to='/stagiaire' className={({isActive}) => isActive ? styles.actif : " "}>
                    Stagiares 
                  </NavLink>
                </li>
                <li> 
                  <NavLink to='/programme' className={({isActive}) => isActive ? styles.actif : " "}>
                    Programmes
                  </NavLink>
                </li>
                <li> 
                  <NavLink to='/affichage' className={({isActive}) => isActive ? styles.actif : " "}>
                    Affichage
                  </NavLink>
                </li>
              </ul>
            </nav>
        </div>
}
