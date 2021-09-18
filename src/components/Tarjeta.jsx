import { makeStyles } from '@material-ui/core';
import React, { useEffect, useState } from 'react'
import { Modal,   ModalHeader } from 'reactstrap';
import ReactPlayer from 'react-player'
import { Link } from 'react-router-dom';


function Tarjeta() {

    const [modalInsertar, setTipoModalInsertar] = useState(false);
    const [stateTaks, setStateTaks] = useState([])
    const [vid, setVid] = useState([])
    const classes = useStyles();

    const { title, poster_path, overview,  release_date, original_language } = stateTaks;



    const peticionGet = async (id) => {

        const res = await fetch(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=3fd2be6f0c70a2a598f084ddfb75487c&language=en-US`);
        const data = await res.json();
        const data1 = data.results;
        const data2 = data1[0]
        setVid(data2.key)
    }

    const handleReturn = () => {
      
    }

    const modalInsertar1 = () => {
        setTipoModalInsertar(!modalInsertar)
    }
    const handleVer = () => {
        modalInsertar1()
    }
    

    useEffect(() => {
        let dataLocal = JSON.parse(localStorage.getItem('Pelidata'));
        setStateTaks(dataLocal[0])
        let dataId = dataLocal[0]
        const { id } = dataId
        peticionGet(id)
    }, [])

    let muestraVideo = `https://www.youtube.com/watch?v=${vid}`
    return (
        <div >
  
            <div className={classes.cont2}>
                <div className={classes.img}>
                    <img
                        src={poster_path}
                        alt=""
                        className="img-thumbnail animate__animated animate__fadeInLeft"
                    />
                </div>
                <div className={classes.cont}>
                <h1 className={classes.title}>{title}</h1>
                <p className={classes.over}>{overview}</p>
                <h2 className={classes.idioma}>{release_date} - Idioma: {original_language}</h2>
              <div className={classes.btm}>
                <button
                       className="btn btn-outline-info"
                        onClick={handleVer}
                    >
                        Ver Trailer
                    </button>
                    <Link
                     to="/navbar"> 
                    <button
                    
                   
                        className="btn btn-outline-info"
                        onClick={handleReturn}
                    >
                        Volver
                    </button>
                    </Link>
                </div>
                </div>

            </div>
  
            <Modal className={classes.contModal} isOpen={modalInsertar}>
            <div style={{ width:700, backgroundColor: 'white', display: 'block'}}>
                <ModalHeader style={{ display: 'block'}}>
                    <span onClick={() => { modalInsertar1() }} style={{ float: 'right',fontSize:"22px", fontWeight:"bold", cursor: 'pointer' }}>x</span>
                </ModalHeader>
                <ReactPlayer
                style={{ display: 'flex',margin: '40px auto ',alignItems: 'center'}}
                    url={muestraVideo}
                    controls= {true}
                    playing= {true}
                />
            </div>
            </Modal>
           
        </div>
    )
}
const useStyles = makeStyles((theme) => ({
    title:{
        color:"white",
        
    },
    contModal:{
        width: "900px",
    },
    cont:{
        margin:"3rem",
        padding:"1rem",
        color:"white",
    },
    img:{
        width: "400px",
        margin: "20px",
        marginLeft: "8rem"
    },
    cont2: {
    display: "grid", 
    gridTemplateColumns: "1fr 1fr",
    }
}))
export default Tarjeta
