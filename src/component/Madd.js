import React, {useState} from "react";
import { Button, Modal,Form} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import { v4 } from 'uuid';


const Add=({addMovie})=> {
    
    const [show, setShow] = useState(false);
    
    const handleClose = () => { 
        setPoster ('')
        setTitle ('')
        setDescription ('')
        setTrailerUrl ('')
        setYear ('') 
        setRating ('')
        setShow(false) 
    };
    
    const handleShow = () => setShow(true);


    const [Poster,setPoster]= useState ('');
    const [title,setTitle]= useState ('');
    const [description,setDescription]= useState ('');
    const [trailerUrl,setTrailerUrl]= useState ('');
    const [year,setYear]= useState ('');
    const [rating,setRating]= useState (0);

    const handleSave =()=>{

        addMovie ({
            id:v4(),
            Poster,
            title,
            description,
            trailerUrl,
            year,
            rating
        })
        handleClose()
    } 

    return (
    <>
        <Button variant="primary" onClick={handleShow} style={{ margin:10 , borderRadius:15, borderColor:"#1ca44d", backgroundColor:"#FFC300"}}>
            Add movie
        </Button>

        <Modal show={show} onHide={handleClose}>
        
            <Modal.Header closeButton>
                <Modal.Title>
                    New movie
                </Modal.Title>
            </Modal.Header>
        
            <Modal.Body>

                <Form.Control type="text" placeholder="Poster url..." onChange={(e)=>setPoster(e.target.value)}  />
                <Form.Control type="text" placeholder="Title..." onChange={(e)=>setTitle(e.target.value)}  />
                <Form.Control type="text" placeholder="Description..." onChange={(e)=>setDescription(e.target.value)}  />
                <Form.Control type="text" placeholder=" Trailer Url..."  onChange={(e)=>setTrailerUrl(e.target.value)} />
                <Form.Control type="text" placeholder="Year..."  onChange={(e)=>setYear(e.target.value)} />
                <Form.Control type="text" placeholder="Rating..."  onChange={(e)=>setRating(e.target.value)}  />
            </Modal.Body>
        
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="primary" onClick={handleSave}  style={{backgroundColor:"#FFC300", borderRadius:15}}>
                    Save Changes
                </Button>
            </Modal.Footer>
    
        </Modal>
    </>
    );
};
export default Add;