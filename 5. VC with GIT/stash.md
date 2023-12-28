
/*-----------DELETE------------*/
- git stash pop (delete and bring back the toppest files in stash stack)

- git stash drop (delete the toppest file in stash)
- git stash drop stash@{id} (delete the selected file from stash)

- git stash clear (remove everything in stash)

/*--------------Naming to stash file----------*/
- git stash save "Mesage and filename" (for staged files)
- git stash save "Mesage and filename" --include-untracted (for untracted files)

