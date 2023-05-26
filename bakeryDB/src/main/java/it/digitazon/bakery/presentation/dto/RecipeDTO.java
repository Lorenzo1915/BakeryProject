package it.digitazon.bakery.presentation.dto;

import java.util.Date;

public class RecipeDTO {
    private long id;    //le entity non sono del formato adatto per essere "leggibili" a schermo da una persona normale, proprio per questo le convertiamo in DTO per utilizzarle nel nostro sito.
    private String name;

    private boolean isDeleted;
    private Date publishDate;
    private byte[] photo;
    private String description;

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public boolean isDeleted() {
        return isDeleted;
    }

    public void setDeleted(boolean deleted) {
        isDeleted = deleted;
    }

    public Date getPublishDate() {
        return publishDate;
    }

    public void setPublishDate(Date publishDate) {
        this.publishDate = publishDate;
    }

    public byte[] getPhoto() {
        return photo;
    }

    public void setPhoto(byte[] photo) {
        this.photo = photo;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }
}
