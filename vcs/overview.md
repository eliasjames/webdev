Version control with Git
  a. Why version control systems (VCS)?
    - Accurate deployment/Rollbacks
    - Accountability/Permissions
    - Store history
    - Store multiple versions
    - Enable separate work on same files
  b. Terminology common to most VCS
    - branch
    - change, diff, or delta
    - checkout
    - clone
    - commit
    - conflict
    - head
    - merge
    - mainline, master, or trunk
    - repository (repo)
    - working copy
  c. Distributed VCS
    - Peer to peer: each working copy is a full repo
    - Usually one repo designated as master, but no difference otherwise
    - Local repos push and pull changed branches to master 
    - Advantages: local operations are faster & devs can work offline
    - Each copy can also function as a backup
  d. How is Git different?
    - Every Git repo contains the complete history
    - Git doesnt store deltas, but snapshots
    - A commit adds a snapshot of the current state of the working copy
    - This means Git knows about uncommitted changes to the working copy
    - Snapshots are checksummed with SHA hash for integrity
    - And since snapshots are additive, its very hard to lose data
  e. Three states in Git
    - modified: file has been changed in the working copy
    - staged: file has been added to the Git index for the next commit
    - committed: index has been saved to the Git database
In Practice (code-along)
  f. Get started
    - Git is preinstalled in OSX; Win, install as usual
    - Create a new working directory
    - Git init
    - Set author info
    - Add some files to the working copy
  g. Examine contents of .git/ directory
  h. git status
  i. git branch & git checkout
  j. git add, mv, rm
  k. git commit
  l. git merge
  m. git push 
  n. git fetch & git pull
  o. git clone
  p. git --set-upstream
