import React from "react";
import { Aperture, User } from 'lucide-react';
import { Palette } from 'lucide-react';
import { PackageCheck } from 'lucide-react';
import { Expand } from 'lucide-react';
import { TreeDeciduous } from 'lucide-react';
import { Users } from 'lucide-react';


//import Pesquisa from "./searc";

function MainPage(){

    const [isOpen, setIsOpen] = React.useState(false);

    return(
        <div className="FatherContainer">

            <div className="containerMS container">
                <main className="main-container">
                    <p className="vertext">v0.476.0</p>
                    <h1 className="name"> <span style={{color:"#F56565"}}>Beautiful & </span></h1>
                    <h1 className="name">consistent icons</h1>
                    <h2 style={{color: "#d2d2d2", lineHeight:"36px", fontSize:"24px"}}>  Made by the community</h2>
                </main>
            </div>


             <div className="btn-abrir-menu" id="btn-menu"
             onClick={()=>setIsOpen(true)}> 
                <img src="menu.png" alt="menu" />
                
            </div>   
            {
        
                isOpen && (
                    <div className="menu-mobile" id="menu-mobile">
                        <div className="btn-fechar" 
                        
                        onClick={()=>setIsOpen(false)}>
                            <img src="close.png" alt="" />
                        </div>
                        <div style={{marginBlock:" 70px"}}></div>
                        <nav>
                            <ul>
                                <li className="Textocolor">Icons</li>
                                <li className="Textocolor">Guide</li>
                                <li className="Textocolor">Packages</li>
                                <li className="Textocolor">Showcase</li>
                                <li className="Textocolor">License</li>
                                <li>  darkmode </li>
                            </ul>
        
                            <img className="iconsUp" src="/discord.png" alt="Símbolo do Discord" />
                        </nav>



                    </div>
                )
            }

            <div className="overlay-menu"></div>

        <div className="ColumnContainer">

             <div className="roundContainer container">
                <p className="roundcard">View all icons</p>
                <p className="roundcard" style={{background:"#2b2b30"}}>Get Started</p>
                <p className="roundcard" style={{background:"#2b2b30"}}>GitHub</p>


            </div>
            <div className="seachIcons">
                        <img className="lupaIcon" src="/lupa.png" alt="lupa" />
                        <input 
                            type="search" 
                            id="search" 
                            placeholder="Search 1556 icons..." 
                        />
            </div>

            <div className="content">

            </div>
                

        </div>



            <div className="rectangleContainer container">
                <div className="rectanglecard">
                    <div className="rectangleIcon">
                        <Expand style={{width:"24", height:"24", viewBox:"0 0 24 24", fill:"none", 
                            stroke:"#F56565", strokewidth:"2", strokeLinecap:"round",
                            strokeLinejoin:"round"
                        }} />
                    </div>

                    <h3>Lightweight & Scalable</h3>
                    <p>Icons are Lightweight, highly optimized Scalable
                        wector graphics (SVG).
                    </p>

                </div>

                <div className="rectanglecard">
                    <div className="rectangleIcon">
                        <Aperture style={{width:"24", height:"24", viewBox:"0 0 24 24", fill:"none", 
                         stroke:"#F56565", strokewidth:"2", strokeLinecap:"round",
                        strokeLinejoin:"round"
                    }} /></div>

                    <h3>Clean & consistent</h3>
                    <p>Designed with a strict set of design rules for
                        consistecy in style and readability.
                    </p>

                </div>
                
                <div className="rectanglecard">
                    <div className="rectangleIcon">
                    <Palette style={{width:"24", height:"24", viewBox:"0 0 24 24", fill:"none", 
                         stroke:"#F56565", strokewidth:"2", strokeLinecap:"round",
                        strokeLinejoin:"round"
                    }} />
                    </div>

                    <h3>Customizable</h3>
                    <p>Customize the color, size, stroke width, and more.
                    </p>

                </div>
            </div>

            <div className="rectangleContainer container" style={{marginTop: "20px", marginbottom: "20px"}}>
                <div className="rectanglecard">
                    <div className="rectangleIcon">
                        <PackageCheck style={{width:"24", height:"24", viewBox:"0 0 24 24", fill:"none", 
                            stroke:"#F56565", strokewidth:"2", strokeLinecap:"round",
                            strokeLinejoin:"round"
                        }} />
                    </div>

                    <h3>Packages support</h3>
                    <p>
                         Lucide is a available as a package for all major 
                         package managers.
                    </p>
                    </div>

                    <div className="rectanglecard">
                        <div className="rectangleIcon">
                            <TreeDeciduous style={{width:"24", height:"24", viewBox:"0 0 24 24", fill:"none", 
                                    stroke:"#F56565", strokewidth:"2", strokeLinecap:"round",
                                    strokeLinejoin:"round"
                                }} />
                        </div>

                    <h3>Tree Shakable</h3>
                    <p>
                         The icons are tree shakable, so you 
                         only import the icons you use.
                    </p>
                    </div>

                    <div className="rectanglecard">
                        <div className="rectangleIcon">
                            <Users style={{width:"24", height:"24", viewBox:"0 0 24 24", fill:"none", 
                                        stroke:"#F56565", strokewidth:"2", strokeLinecap:"round",
                                        strokeLinejoin:"round"
                                    }} />
                        </div>

                    <h3>Active community</h3>
                    <p>
                         Lucide has active community on GitHub
                         and Discord.
                    </p>
                    </div>
            </div>
           
        </div>
    )
}

export default MainPage;

