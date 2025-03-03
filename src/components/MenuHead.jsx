import React from "react";


const MenuHead = () => {
    return(
        <nav>
            <ul style={{listStyle:"none", display:"flex", gap:"10px", padding: 0, marginLeft: "20px", fontSize: "14px", textAlign:'right', fontWeight:"bold"}}>
                <li className="Textocolor">Icons</li>
                <li className="Textocolor">Guide</li>
                <li className="Textocolor">Packages</li>
                <li className="Textocolor">Showcase</li>
                <li className="Textocolor">License</li>
                <li style={{color:"#d2d2d2"}}>|</li>
                <li>  darkmode </li>
                <li style={{color:"#d2d2d2"}}>|</li>
                <li><img className="iconsUp" src="/GitHub.png" alt="Símbolo do GitHub" /></li>
                <li><img className="iconsUp" src="/discord.png" alt="Símbolo do Discord" /></li>
            </ul>
        </nav>

        
    );
};

export default MenuHead;