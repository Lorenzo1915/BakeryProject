package it.digitazon.bakery.persistence.entities;

import jakarta.persistence.*;

import java.util.Date;


@Entity
@Table(name = "recipes")
public class Recipe {

    @Id
    @GeneratedValue (strategy = GenerationType.IDENTITY) //l'entity è mappata per il database, ovvero è il formato che ci serve per comunicare con il database
    private long id;

    @Column(name = "name", nullable = false)
    private String name;

    @Column ( name = "is_deleted", nullable = false, columnDefinition = "BOOLEAN NOT NULL DEFAULT false")
    private boolean isDeleted;
    @Column( name = "publish_date" )
    private Date publishDate;
    @Column (name= "photo", columnDefinition = "MEDIUMBLOB")
    @Lob
    private byte[] photo;
    @Column (name= "description", columnDefinition = "MEDIUMTEXT")
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
