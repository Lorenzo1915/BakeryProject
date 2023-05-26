

import React, { useState } from 'react';
import RecipeCard from "./RecipesCard";
import { useGet } from "../_Hooks/Custom";
import { URL_RECIPES } from '../_Utils/Constant';
import '../../App.css';
import Button from 'react-bootstrap/Button';
import RecipeForm from '../RecipeForm/RecipeForm';

const RecipesCards = () => {

    const { data, error, isLoading,  } = useGet(URL_RECIPES);

    const [alertShow, setAlertShow] = useState(false);
    const [AlertMessage, setAlertMessage] = useState("");
    const [index, setIndex] = useState(0);
    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    }


    const deleteSuccess = () => {
        setAlertMessage("Canzone eliminiata");
        setAlertShow(true);
    }

    const [modalShow, setModalShow] = React.useState(false);

    if (data) {
        return (
            <div>
                <div className="cards">
                    {data.map(recipe => (
                        <RecipeCard recipe={recipe} deleteSuccess={deleteSuccess} />
                        // )
                    ))}
                </div>
                <div className='text-center mt-5 mb-5'>
                    <h2><b> Crea la tua Ricetta personale!</b></h2>
                    <Button onClick={() => setModalShow(true)}>
                        Clicca qui
                    </Button>

                    <RecipeForm
                        show={modalShow}
                        onHide={() => setModalShow(false)}
                    />
                </div>
            </div>
        );
    }
}



export default RecipesCards;