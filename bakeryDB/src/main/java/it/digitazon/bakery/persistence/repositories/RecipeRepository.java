package it.digitazon.bakery.persistence.repositories;

import it.digitazon.bakery.persistence.entities.Recipe;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RecipeRepository extends JpaRepository<Recipe,Long> {   //la Reciperepository estende Jparepository in modo tale da ereditare i suoi metodi già scritti, i quali risparmiano un sacco di tempo invece che scriverli manualmente
}
