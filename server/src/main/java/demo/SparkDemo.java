package demo;

import static spark.Spark.*;
import static com.mongodb.client.model.Filters.*;


import com.google.gson.Gson;
import com.mongodb.MongoClient;
import com.mongodb.client.FindIterable;
import com.mongodb.client.MongoCollection;
import com.mongodb.client.MongoDatabase;
//import com.sun.tools.javac.util.List;
import java.sql.SQLOutput;
import java.util.ArrayList;
import java.util.List;
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
    MongoCollection<ListingDto> collection = db.getCollection("ListingCollection", ListingDto.class);

    //List<ListingDto> temp = collection.find(new Document(), ListingDto.class).into(new ArrayList<ListingDto>());

    Gson gson = new Gson();
      port(1235);                                                     // Same port as that in classwork 10
      webSocket("/ws", WebSocketHandler.class);

      // Testing mongo database

      get("/view-Listings", (req, res) -> {
        ArrayList<Document> docs = listCollection.find().into(new ArrayList<Document>());
          // I'm assuming that I dont need to convert using Gson because it is already in Json i think

        for(int n= 0; n < docs.size(); n++)
        {
          System.out.println(docs.get(n));
        }
          return gson.toJson(docs);                                      //Maybe I have to urn this into json
      });     
      
          //Plural one is for the whole database. Displays all everything from the database.

      get("/filter", (req, res) -> {             // I made a separate function but maybe I can just update the function above

        ArrayList<Document> docs = listCollection.find().into(new ArrayList<Document>());
          String email = req.queryMap("email").value();

         for(int n =  0; n < docs.size(); n++)
          {
            String temp = gson.toJson(docs.get(n));
            System.out.println(docs.get(n));
            System.out.println(temp);
            if(!(temp.contains(email))){
              docs.remove(n);
              n = n-1;
            }

          }

        return gson.toJson(docs);
      });      // checks the email you're passing in. Front end to past in request body parameter email. Pass back json (of evreything) that has same email aka filtered lists.


      post("/post-listing", (req, res) -> {
        String request = req.body();
        ListingDto newMessage = gson.fromJson(request, ListingDto.class);
        System.out.println("newMessage E: " + newMessage.email);
        System.out.println("newMessage D: " + newMessage.description);
        if(!(newMessage.email.equals("")) && !(newMessage.description.equals(""))) {
          Document doc2 = new Document("email", newMessage.email)
                  .append("description", newMessage.description);
          System.out.println("Doc: " + doc2);
          listCollection.insertOne(doc2);
        }
        return null;
      });

      delete("/delete-Listing", (req, res) -> {
        String request = req.body();
        String  des = req.queryMap("description").value();
        String email = req.queryMap("email").value();
        System.out.println("req: " + req);
        System.out.println("Body: " + request);
        System.out.println("description: " + des);
        listCollection.deleteOne(eq("description", des));
        ArrayList<Document> docs = listCollection.find().into(new ArrayList<Document>());
        return gson.toJson(docs);                                         // I'm returning 0 now but if the front end needs anything returned it can be changed
      });

  }
}
