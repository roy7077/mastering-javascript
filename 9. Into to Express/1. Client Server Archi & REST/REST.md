# REST 
REST stands for **Representational state transfer** 

1) set of guidelines that drives archi of the web

2) REST API :- any api that follows the recommendation of REST is a REST API

3) REST provides a bunch of guideliness to prepare good APIs

4) REST prefers a client server communication should happen over http

5) REST prefers JSON as the format to send & recieve data

**REST gives guideliness that how the URLS should look like**

In REST the main scource of info is considered as a Resources

example :-
tweet - Resource (Noun)
Create Tweet - Action (Verbs)
User - Resource
Add User - Action

1) the endpoints / Url should use Noun & not verbs

medium.com/blogs
medium.com/blogs/2

2) The Nouns that we mention are expected to be plural

4) Every REST endpoint should be defend along with a HTTP mehtod

Get - retrive data/Resource
Post- sender data , create resource
Delete- delete a resource
Put - Update a resource
Patch - partialy update resource


**EXAMPLES**
1) /blogs -> get ( retrive data of all the blogs)

2) /blogs/12 -> get (retrive data of blog whose unique identify value is 12)

3) /blog/:id -> get (the endpoints of the url can be variable)

4) /blogs -> delete (delete all blogs)

5) /blogs/:id -> delete (delete blog with a particular id)

6) /blogs -> POST (you want to create a blog)

7) /blogs/:id -> Put/Patch (if you want to partialy or fully update on a particular blog)Properties to be updated in request body.

**We use nesting for relationship**
don't use more that 3 level of nesting

Examples:-

/blogs/13/comments    -> get 
/blogs/22/comments/3  -> get
/blogs/10/comments    -> Post