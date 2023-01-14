package com.carwash.CarwashAdminMicro.models;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection="ratings")
public class rating {
    @Id
    int id;
    String washerName;
    String comments;
    int rating;

    public rating(int id, String washerName, String comments, int rating) {
        this.id = id;
        this.washerName = washerName;
        this.comments = comments;
        this.rating = rating;
    }

    public rating(){

    }
    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getWasherName() {
        return washerName;
    }

    public void setWasherName(String washerName) {
        this.washerName = washerName;
    }

    public String getComments() {
        return comments;
    }

    public void setComments(String comments) {
        this.comments = comments;
    }

    public int getRating() {
        return rating;
    }

    public void setRating(int rating) {
        this.rating = rating;
    }

    @Override
    public String toString() {
        return "Rating{" +
                "id=" + id +
                ", washerName='" + washerName + '\'' +
                ", comments='" + comments + '\'' +
                ", rating=" + rating +
                '}';
    }
}
