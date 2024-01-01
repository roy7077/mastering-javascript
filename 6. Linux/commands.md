/*--------*/
REPL - READ evaluate print loop.

note:- for any linux command you can check the usage and different input flags it expects by running the command followed by --help

pwd - this represents what is the current directory we are currently at.

ls - you can print the content of the current directory we are in . all the files and sub - directories will be printed.

cd - this can help you to move into the folder and out of the folder

cd ..    - one folder back
cd ../.. - two folder back
cd ~     - come back to home directory directly
cd /     - come back to root directory

mkdir "filename" - this helps us to create a new folder.
touch "filename" - we can create a brand new blank file out of the blue.
cat "filename"   - prints the whole content of a file.
rm "filename"    - remove a file
rm -r "directory name" - remove a directory.

/*----------------Vim---------------*/
vim "filename" : this will create a file (if it does not exist) and then open it in the vim editor in the normal mode. in normal mode we can do changes to file but we can read it and navigate it. you can also use vi "filename" to do the same thing.

now after opening vim if you want to start making changes you need to , first of all , make it change the mode from normal to insert mode. to go into the insert mode we can press 'i' . if you want to come back to normal mode then press ESC.

esc + :q -> if you want to exit a file we can do this
esc + :q! ->if file has some changes and we want to exit without saving changes
esc + :wq ->if file has changes and we want to save it and then exit

l -> in normal mode , you can move the cursor right
h -> in normal mode , you can move the cursor left
j -> in normal mode , you can move the cursor down
k -> in normal mode , you can move the curosr up
dd-> in normal mode, it will delete the line the cursor in currently at.
gg -> in normal mode , it will make the cursor go on the first line.
G  -> in normal mode , it will make the cursor go on the last line.

you can use normal right , left , up and down arrow keys as well to navigate.



/*-----------------------------*/
tail -n 3 <filename> - print last 3 lines of filename
head -n 3 <filename> - print initial 3 lines of filename

/*---------------------------------*/
ls | grep python : this will actually pass the output of ls as an input to grep , grep does a substring search of python on the output of ls.

ls > new.txt : whatever is the result of ls will be dumped into new.txt , nothing will be printed on the console. if new.txt has some content already then that will be replaced.

ls >> new.txt : whatever is the result of ls will be dumped into new.txt , nothing will be printed on the console. if new.txt has some content already then the new content will be appended.

<command 1> && <command 2> : this excutes command 1 followed by command 2 considering command 1 has no errors.
  example -> g++ permutation.cpp --std=c++14 -o run && ./run 

/*----------copy , move ,rename ,zip----------*/

cp file1 file2 : copies the content of file1 to file2

mv file1 file2 : moves the content of file1 to file2

mv file1 file2 : moves (cut paste) the file1 to new position as file2. this can also help us to rename the file.

tar -cf archive.zip 1.txt 2.txt : this command will add all the files mentioned after archive.zip into zipped archive as mentioned

tar -zcf archived.zip 1.txt 2.txt : this command will not only add the files to zip but also compress them.

tar xf archive1.zip -C extract : all the content of archive1 will be extracted into the extracted folder.

