# FS Extension

This extension creates a file in local and append contents to it.
It is a simple demonstration of creating a basic web extension using fs.

## Efforts and time needed

Around 80 Files need to be changed in 300+ places. - 2 days of effort will be
required to change each fs functionalities.

## Methods used in fs

1. mkdirsync - done in the POC
2. writefilesync - done in the POC
3. readfilesync
4. cpsync
5. copyfilesync
6. appendfilesync
7. existssync
8. rmsync
9. rmdirsync
10. unlinksync
11. readdir
12. readfile
13. rm
14. statsync
15. writestream
16. stat

## Conclusion

We can migrate the fs by changing each line of code wherever we use fs,
but not sure if it can produce any bugs in the application after all the
files are changed. I got lot of ts errors after migrating it to workspace.fs
and errors like "it will always return true".

![Error](images/error.png)
