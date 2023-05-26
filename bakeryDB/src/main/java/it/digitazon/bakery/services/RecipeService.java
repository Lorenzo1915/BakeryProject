package it.digitazon.bakery.services;

import it.digitazon.bakery.persistence.entities.Recipe;
import it.digitazon.bakery.persistence.repositories.RecipeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
@Service
public class RecipeService {

    @Autowired
    private RecipeRepository recipeRepository;

    public List<Recipe> getAll(){
        return recipeRepository.findAll();
    }  //il servizio fa le chiamate al database, le quali possono essere chiamate get(ottiene),post(crea),put(inserisce), delete(rimuove) e update(aggiorna) e restituisce dal database o fornisce al database

    public Recipe getById(long id){
        Optional<Recipe> optionalRecipe = recipeRepository.findById(id);

        if(optionalRecipe.isEmpty()){
            throw new IllegalStateException("Recipe not found");
        }

        return optionalRecipe.get();
    }

    public  Recipe create(Recipe newRecipe){
        newRecipe = recipeRepository.save(newRecipe);
        return newRecipe;
    }

    public Recipe update(long id,Recipe updateRecipe){

        Optional<Recipe> optionalRecipe = recipeRepository.findById(id);
        if(optionalRecipe.isEmpty()){
            throw new IllegalStateException("Recipe not found");
        }
        Recipe entityToUpdate = optionalRecipe.get();

        updateRecipe.setId(entityToUpdate.getId());

        updateRecipe = recipeRepository.save(updateRecipe);

        return updateRecipe;
    }

    public Recipe delete(long id) {
        Optional<Recipe> optionalRecipe = recipeRepository.findById(id);

        if(optionalRecipe.isEmpty()){
            throw new IllegalStateException("Recipe not found");
        }
        Recipe entityToDelete = optionalRecipe.get();

        recipeRepository.delete(entityToDelete);

        return entityToDelete;
    }

}
