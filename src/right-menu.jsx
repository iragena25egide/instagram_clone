

function Rightmenu(){
    return(
        <div className="right-menu-container">
            <div className="user">
                <div className="user-profile">
                    <img src="egide.jpg" width={40} height={40} style={{borderRadius:'50px'}}/>
                    <small>egide_kid</small>
                </div>
                <div className="switch">
                <p>Switch</p>
                </div>
            </div>
            <div className="user-bottom">
                <div className="top-suggest">
                <small>Suggested for you</small>
                <p>see All</p>
                </div>
                <div className="suggest-container">
                    <div className="suggest">
                        <div className="suggest-profile">
                        <img src="diana.jpg" width={40} height={40} style={{borderRadius:'50px'}}/>
                        <small>Diana_k</small>
                        </div>
                    <p>Follow</p>
                    </div>
                    <div className="suggest">
                        <div className="suggest-profile">
                        <img src="edmond.jpg" width={40} height={40} style={{borderRadius:'50px'}}/>
                        <small>Edmond</small>
                        </div>
                    <p>Follow</p>
                    </div>
                    <div className="suggest">
                        <div className="suggest-profile">
                        <img src="bruno.jpg" width={40} height={40} style={{borderRadius:'50px'}}/>
                        <small>Bruno_Cool</small>
                        </div>
                    <p>Follow</p>
                    </div>
                    <div className="suggest">
                        <div className="suggest-profile">
                        <img src="pazzo.jpg" width={40} height={40} style={{borderRadius:'50px'}}/>
                        <small>Khalipha</small>
                        </div>
                    <p>Follow</p>
                    </div>
                    <div className="suggest">
                        <div className="suggest-profile">
                        <img src="imena.jpg" width={40} height={40} style={{borderRadius:'50px'}}/>
                        <small>Imena Gentille</small>
                        </div>
                   
                    <p>Follow</p>
                    </div>
                </div>
                <div className="copy">
                <small>&copy; 2024 INSTAGRAM FROM META</small>
                </div>
               
            </div>
        </div>
    )
}


export default Rightmenu