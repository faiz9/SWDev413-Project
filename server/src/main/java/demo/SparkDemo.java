package demo;

import static spark.Spark.*;
import static com.mongodb.client.model.Filters.*;


import com.google.gson.Gson;
import com.mongodb.MongoClient;
import com.mongodb.client.MongoCollection;
import com.mongodb.client.MongoDatabase;
import com.sun.tools.javac.util.List;
import java.util.ArrayList;
import org.bson.Document;

public class SparkDemo {

  List<ListingDto> listing;                     // Use this list to retrieve from the database and put it in here
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



      get("/view-Listings", (req, res) -> {
        ArrayList<Document> docs = listCollection.find().into(new ArrayList<Document>());
          // I'm assuming that I dont need to convert using Gson because it is already in Json i think
          return docs;
      });







  }
}
