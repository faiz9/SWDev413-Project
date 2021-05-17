package demo;

public class ListingDto {
    public final String description;
    public final String email;
             // An ID so it can be easier to find and delete a post
    // Right now I think we only keep track of a description and an email
    // Feel free to add amy other fields we may need
    // I modeled this class after classwork 10

    public ListingDto(String description, String email, String id){
        this.description = description;
        this.email = email;
    }
}
