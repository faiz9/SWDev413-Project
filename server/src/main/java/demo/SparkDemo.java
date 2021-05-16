package demo;

import static spark.Spark.*;
import static com.mongodb.client.model.Filters.*;


import com.google.gson.Gson;
import com.mongodb.MongoClient;
import com.mongodb.client.FindIterable;
import com.mongodb.client.MongoCollection;
import com.mongodb.client.MongoDatabase;
//import com.sun.tools.javac.util.List;
import java.util.ArrayList;
import org.bson.Document;

public class SparkDemo {

  ArrayList<ListingDto> listing;                     // Use this list to retrieve from the database and put it in here
                                                // Actually I'm wondering if we need it
                                                // I'll keep it here and if we dont need it we can get rid of it later
  static Gson gson = new Gson();

  public static void main(String[] args) {
    MongoClient mongoClient = new MongoClient("localhost", 27017); // Since we have to insert into and get from a database I put it here
    // Feel free to change it if I made an error
    MongoDatabase db = mongoClient.getDatabase("Listings"); // Make a mongodb database called Listings
    MongoCollection<Document> listCollection = db.getCollection("ListingCollection");
    // I got this mongo DB set up from our classwork mongo-demo

      port(1235);                                                     // Same port as that in classwork 10
      webSocket("/ws", WebSocketHandler.class);

      // Testing mongo database
      Document doc = new Document("email", "gabe@mail.com")
              .append("description", "I DO KNOW");
      listCollection.insertOne(doc);
      Document doc1 = new Document("email", "idk@mail.com")
              .append("description", "I hope I appear");
      listCollection.insertOne(doc1);

      get("/view-Listings", (req, res) -> {
        ArrayList<Document> docs = listCollection.find().into(new ArrayList<Document>());
          // I'm assuming that I dont need to convert using Gson because it is already in Json i think
        System.out.println("REquest: " + req);
        for(int n= 0; n < docs.size(); n++)
        {
          System.out.println(docs.get(n));
        }
          return gson.toJson(docs);                                      //Maybe I have to urn this into json
      });     
      
          //Plural one is for the whole database. Displays all everything from the database.

      get("/view-Listing", (req, res) -> {             // I made a separate function but maybe I can just update the function above
        String request = req.body();                        // so that it gets("/view-Listings/email") and there will be an if statement.
        String email = req.params("email");
        System.out.println("Request: " + request);
        System.out.println("Email: " + email);
        ArrayList<Document> docs = (ArrayList<Document>) listCollection.find(eq("email", email));
        return gson.toJson(docs);
      });      // checks the email you're passing in. Front end to past in request body parameter email. Pass back json (of evreything) that has same email aka filtered lists.

      post("/post-listing", (req, res) -> {
        String email = req.params("email");
        String desc = req.params("description");
        Document doc2 = new Document("email", email)
                .append("description", desc);
        listCollection.insertOne(doc2);
        return null;
      });

      delete("/delete-Listing", (req, res) -> {
        String request = req.body();
        String  des = req.params("description");
        System.out.println("req: " + req);
        System.out.println("description: " + des);
        listCollection.deleteOne(eq("description", des));
        return 0;                                         // I'm returning 0 now but if the front end needs anything returned it can be changed
      });







  }
}
