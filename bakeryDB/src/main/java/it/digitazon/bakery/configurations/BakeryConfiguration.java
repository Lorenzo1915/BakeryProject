package it.digitazon.bakery.configurations;

import org.modelmapper.ModelMapper;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class BakeryConfiguration {
    @Bean
    public ModelMapper modelMapper() {   //il modelmapper è una libreria di java che ci mappa gli oggetti automaticamente da un modello all'altro, noi lo usiamo per convertire dto e entity, e risparmia molto lavoro manuale
        return new ModelMapper();

    }
}
