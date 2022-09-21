import React from "react";
import './Header.css';
import Navigation from "./Navigation";

export default function Header() {
    return <div className="header">
    
                <span>
                    Gestion de stagiaires
                </span>

                <div>
                    <Navigation/>
                </div>

            </div>
}