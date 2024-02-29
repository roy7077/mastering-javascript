
# Basic commands

```
mongosh                                 // to start mongo server
show databases or show dbs              // to show existing databases
show collections                        // to show existing collections in selected database
use <database_name>                     // you can use database or (it will create database if does not exist)
db.createCollection("collection_name")  // create a new collection
db.collection_name.insertOne({key:"value"}) // insert one tuple in a collection
db.collection_name.insertMany([{},{}])      // insert multiple tuple in a collection
db.collection_name.count()
```
# Find
```
db.collection_name.find()                   // print whole collection_name's tuple
db.collection_name.find().limit(1)          // print topmost 1st tuple

db.collection_name.find({},{})  // 1st object is for filteration
                                // 2nd object is for projection or what you want to print

#### Example   

db.collection_name.find({id:"2"},{name:1,uid:1}) // it is same as
                                                     select name,uid from collection_name where id=2

db.collection_name.find({},{name:1,age:1})       // it is same as
                                                 // select name,age from collection_name

db.collection_name.find({id:"2"},{})             // it is same as
                                                 // select * from collection_name where id=2
```
# Removing
```
db.collection_name.deleteOne({})      -> delete one matched record
db.collection_name.deleteMany({})     -> delete all matched records
```

# Updatde
```
db.collection_name.updateOne({},{}) // 1st object is for filteration
                                    // 2nd object is for update

Example

db.collection_name.updateOne({id:"2"},{$set:{age:25}})
db.collection_name.updateOne({id:"2"},{$set:{age:25},$inc:{exp:5}})
```

# Comparison Query Operators
```
Select all documents in the inventory collection where quantity is greater than 20:
db.inventory.find( { quantity: { $gt: 20 } } )
```

```
Select all documents in the inventory collection where quantity is greater than or equal to 20:
db.inventory.find( { quantity: { $gte: 20 } } )
```

```
Select all documents in the inventory collection where quantity is less than 20:
db.inventory.find( { quantity: { $lt: 20 } } )
```

```
Consider the following example:
db.inventory.find( { quantity: { $lte: 20 } } )
```

```
Select all documents in the inventory collection where quantity is not equal to 20. This query also selects documents that do not have the quantity field:
db.inventory.find( { quantity: { $ne: 20 } } )
```

# Logical Query Operators
```
db.weather_data.find({$and :[{elevation:{$lte:10000}},{elevation:{$gt:99999}}]});
```



### Indexes
### aggregation