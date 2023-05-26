import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useGet, useDelete } from "../_Hooks/Custom";
import { URL_RECIPES } from '../_Utils/Constant';
import RecipesDetailPage from '../RecipesDetailPage/RecipesDetailPage';
import { Routes, Route, useNavigate } from 'react-router-dom';

const RecipeCard = ({ recipe, deleteSuccess }) => {

  const base64prefix = "data:image/jpeg;base64,"
  const deleteData = useDelete(URL_RECIPES, recipe.id);
  const navigate = useNavigate();

  const performDelete = () => {
    deleteData(deleteSuccess);

  }

  return (
    <>
      <Card className="text-center bg-light" style={{ width: '30rem', margin: '1rem' }}>
        <Card.Img style={{ maxWidth: '100%' , height:"320px"}} sizevariant="top" src={base64prefix + recipe.photo} />
        <Card.Body className='px-2'>
          <Card.Title>{recipe.name}</Card.Title>
          <Button href= {"recipes/" + recipe.id} variant="primary">Mostra descrizione</Button>

        </Card.Body>
      </Card>
    </>
  );
}



export default RecipeCard;