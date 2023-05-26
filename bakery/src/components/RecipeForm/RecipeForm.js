import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { usePost, usePut } from "../_Hooks/Custom";

import Alert from "../Alert/Alert";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
const RecipeForm = (props,{ data = {} }) => {

    const [recipe, setRecipe] = useState({      //lo use state rende recipe un elemento con un stato, il che vuol dire che il suo valore può cambiare dinamicamente
        name: "",  
        description: "",
        publishDate: "",
        photo: "",
    })

    const [alertShow, setAlertShow] = useState(false); // Variabile di stato per gestire la visualizzazione dell'alert
    const [alertMessage, setAlertMessage] = useState(""); //  // Variabile di stato per gestire il messaggio dell'alert

    const putData = usePut("http://localhost:3432/recipes", data.id); // usePut restituiesce la funzione per il salvataggio dei dati

    const postData = usePost("http://localhost:3432/recipes"); // // usePost restituiesce la funzione per la cereazione dato dei dati

    const navigate = useNavigate();

    useEffect(() => {
        if (data.id > 0) {
            setRecipe({
                name: data.name,
                description: data.description,
                publishDate: data.publishDate ? data.publishDate : "",
                photo: "",
            });
        }
    }, [data.id, data.name, data.description, data.publishDate])

    const getBase64 = async (file) => {   //codice di conversione da jpeg a blob

        const base64prefix = "data:image/jpeg;base64,"

        var reader = new FileReader();      

        await reader.readAsDataURL(file);   
        reader.onload = function () {         
            setRecipe((prevValues) => {      
                return {
                    ...prevValues,
                    "photo": reader.result.replace(base64prefix, "")  
                }
            });
        };
        reader.onerror = function (error) {
            console.log('Error: ', error);
        };
    }
    const handleChange = (e) => {
        if (e.target.name === 'photo') {
            getBase64(e.target.files[0])
        }
        setRecipe((prevValues) => {
            return {
                ...prevValues,
                [e.target.name]: e.target.value
            }
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        // Codice per Salvataggio
        if (data.id > 0) {
            putData(recipe, submitSuccess); // data -> song; successFn -> submitSuccess ( vedi Customs.js / usePut)
        }
        else {
            postData(recipe, submitSuccess);
        }

    }

    const submitSuccess = () => {
        setAlertMessage("Salvataggio completato")
        setAlertShow(true);
    }

    const alertDismiss = () => {
        setAlertShow(false);
        navigate("/", { replace: true });
        window.location.reload(true);
    }
  

    return (

        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Modal heading
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <>
                    <form className=" row" onSubmit={handleSubmit}>
                        <div className=" col-6">
                            <label className=" form-lable">Titolo</label>
                            <input className=" form-control form-control-sm" name="name" value={recipe.name} onChange={handleChange} />
                        </div>
                        <div className=" col-4">
                            <label className=" form-lable">Data</label>
                            <input className=" form-control form-control-sm" type="date" name="publishDate" value={recipe.publishDate.substring(0, 10)} onChange={handleChange} />
                        </div>
                        <div class="mb-3">
                            <label for="validationTextarea">Textarea</label>
                            <textarea class="form-control is-invalid" id="validationTextarea" placeholder="Required example textarea" name="description" value={recipe.description} onChange={handleChange} required></textarea>
                            <div class="invalid-feedback">
                                Please enter a message in the textarea.
                            </div>
                        </div>
                        <div className=" col-12">
                            <label className=" form-lable">Immagine</label>
                            <input className=" form-control form-control-sm" type="file" name="photo" onChange={handleChange} />
                        </div>
                        <div className="col-12">
                            <div className=" d-flex justify-content-around mt-3">
                                <button className=" btn btn-success " type="submit">Salva</button>
                                <Link className=" btn btn-outline-danger " to="/recipes">Annulla</Link>
                            </div>
                        </div>
                    </form>
                    <Alert show={alertShow} onHide={alertDismiss} message={alertMessage} />

                </>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>

    );

}

export default RecipeForm;