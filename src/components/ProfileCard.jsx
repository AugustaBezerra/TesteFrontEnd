{/* Marca Lucide*/}

const ProfileCard = () => {
    return(
        <div style={{display:"flex", alignItems:"center", gap:"10px"}}>
            {/* Imagem da marca*/}
            <img 
                src="/marcaLucide.JPG"  
                alt="Espiral vermelha e branca." 
                style={{width: "50px", height: "50px", borderRadius: "50%"}}
                        
            />

            {/* Nome */}
            <h2 style={{fontSize:"20px", fontWeight:"bold"}}>Lucide</h2>
        </div>
    );
}

export default ProfileCard;