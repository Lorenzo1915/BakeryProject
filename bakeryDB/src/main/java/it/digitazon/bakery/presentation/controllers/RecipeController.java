package it.digitazon.bakery.presentation.controllers;

import it.digitazon.bakery.persistence.entities.Recipe;
import it.digitazon.bakery.presentation.dto.RecipeDTO;
import it.digitazon.bakery.services.RecipeService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;


import java.util.List;

@RestController
@RequestMapping("/recipes")
@CrossOrigin(origins = "http://localhost:3000")
public class RecipeController {

    @Autowired
    private RecipeService recipeService; //il controller gestisce il flusso dei dati, quando viene fatta una chimata al database, lui poi restituisce oggetti di tipo DTO i quali sono visiibli a schermo


    @Autowired
    private ModelMapper modelMapper;

    @GetMapping
    public List<RecipeDTO> getRecipes(){
        return recipeService.getAll()
                .stream()
                .map(this::convertToDTO)
                .toList();
    }

    @GetMapping("/{id}")
    public RecipeDTO getRecipeById(@PathVariable long id){
        return convertToDTO(recipeService.getById(id));
    }

    @PostMapping
    public RecipeDTO createRecipe (@RequestBody RecipeDTO newRecipe){
        Recipe recipe = convertToEntity(newRecipe);
        recipe = recipeService.create(recipe);

        return convertToDTO(recipe);
    }

    @PutMapping ("/{id}")
    public RecipeDTO updateRecipe (@PathVariable long id, @RequestBody RecipeDTO updateRecipe){
        Recipe recipe = convertToEntity(updateRecipe);
        recipe = recipeService.update(id, recipe);

        return  convertToDTO(recipe);
    }


    @DeleteMapping("/{id}")
    public RecipeDTO deleteRecipe(@PathVariable long id){
        return convertToDTO(recipeService.delete(id));
    }





    private RecipeDTO convertToDTO(Recipe recipe){
        return modelMapper.map(recipe, RecipeDTO.class);
    }

    private Recipe convertToEntity(RecipeDTO dto){
        return modelMapper.map(dto, Recipe.class);

    }

}