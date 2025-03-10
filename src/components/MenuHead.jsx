import React from "react";
import { Github } from 'lucide-react';
import { Moon } from 'lucide-react';
import { Sun } from 'lucide-react';

const MenuHead = () => {
    return(
        <nav>
            <ul style={{listStyle:"none", display:"flex", gap:"10px", padding: 0, marginLeft: "15px", fontSize: "14px", textAlign:'right', fontWeight:"bold"}}>
                <li className="Textocolor">Icons</li>
                <li className="Textocolor">Guide</li>
                <li className="Textocolor">Packages</li>
                <li className="Textocolor">Showcase</li>
                <li className="Textocolor">License</li>
                <li style={{color:"#d2d2d2"}}>|</li>
                <li>  
                    <script type="text/javascript" src="darkmode.jsx" defer> </script>
                    <button id="theme-switch"> 
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-moon"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/></svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-sun"><circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/></svg>

                    </button>
                    
                 </li>
                <li style={{color:"#d2d2d2"}}>|</li>
                <li>
                    <a 
                    href="https://github.com/lucide-icons/lucide" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                    className="iconsUp"/>
                    <Github size={20} />
                </li>
                <li><a  className="iconsUp" href=""><img src="discord.png" alt="" style={{opacity:"10%", width:"24px", height:"24px" }} /></a></li>

            </ul>
        </nav>

        
    );
};

export default MenuHead;