tree .git
echo 'hello git'
echo 'hey sagar' | git hash-object --stdin
git cat-file -p _____________
git cat-file -t (type of a file)
git vefify-pack
git gc (garbage collection)

----------------------------------------------------------

=> how internally git works?
   hasing -> graph/tree data structure

=> git is like key value store
   - key -> hash of data
   - value-> data

=> git was a cryptographic hash function
   (SHA-1) for a given data , it outputs
   40 digit hexadecimal number. the hash
   value is always same for some data

=> git compresses the data in a blob and
   stores some meta data about data

=> .git
     |
     object
      -ao
        -file

    -> file name generally has 1st 2 char of hash
    -> blob file is named as remaming 38 character of hash

----------------------------------------------------------
