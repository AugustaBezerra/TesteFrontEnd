{/* Marca Lucide*/}

const ProfileCard = () => {
    return(
        <div style={{display:"flex", alignItems:"center", gap:"5px"}}>
            {/* Imagem da marca*/}
            <img 
                src="logo.dark.svg"  
                alt="Espiral vermelha e branca." 
                style={{width: "32px", height: "32px", borderRadius: "50%"}}
                        
            />

            {/* Nome */}
            <h2 style={{fontSize:"18px", fontWeight:"bold"}}>Lucide</h2>
        </div>
    );
}

export default ProfileCard;