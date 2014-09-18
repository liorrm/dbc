# Git, Github, and Version Control
#### Programmers' godsend
#### September 18, 2014

Version control in computer programming has many benefits. For one, it basically allows the programmer to "go back in time" in that various versions of the project are saved throughout a period of time. If the programmer works on the project, but accidentally adds a bug in committing those changes, they can go back to the version of that code *before* they made that mistake, rather than trying to figure out how it was before. This saves a lot of time, panic, and effort! Version control is also essential in collaborative projects, where there is more than one programmer working on a code base. It allows the programmers to each have their own copy of the code base, and make changes to that personal copy (and test those changes to make sure they work/don't add a bug) before adding it to the master copy.

Git is software that makes version control easy. It runs in the background of any directory you decide to initialize with git. It
-notices if you have made any changes to that directory, whether it be adding files or editing files,
-knows exactly what those changes are, and can show you them, and
-allows you to save ("commit") those changes along with a small message where you describe what changes you have made. Git then keeps a log of your commits (changes), and you can go back and see the code as it was before and after the various changes you made.

GitHub is another useful tool for programmers, especially for teams of developers. Storing your code on GitHub allows you to collaborate with people remotely, so you can theoretically work on a project with a remote team all around the world, so long as they have Internet access. While git lives locally on your computer, and is therefore useful for working on your local disk, GitHub lives on the cloud, and works in tandem with git to push your code on to GitHub, enabling other team members to see your code, and enabling *you* to make changes to the master copy of the project. GitHub also provides peace of mind, knowing that your code is stored on a remote and very reliable server; it basically acts like a backup of your code.