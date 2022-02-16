

## For Review:


---

##### If you get error:
```
Error: listen EADDRINUSE: address already in use 127.0.0.1:8003
```

Then run:
```
ps aux | grep 8003
# shows something similar to:
# username 44184   0.0  0.1  4584968  24844 s002  T     7:01AM   0:00.20 node /path/.nvm/versions/node/v12.22.8/bin/static -p 8080
```
and then kill the process using PID in output: Eg from above, when PID = 44184:
```
kill -9 44184
```

---

## For Development:

#### first, clone repo, then start each micro apps:

```
# change to app folder
cd product-fetching-app

# install modules
npm i

# start the app 
npm run start

# change to app folder
cd ..
cd product-listing-app

# install modules
npm i

# start the app 
npm run start

# change app folder
cd ..
cd api-app-connector

# install modules
npm i

# start the app
npm run start
```


For testing inside the container app:
```
# change to container app folder
cd ..
cd test-app

# start the app
npm run start

# navigate to
127.0.0.1:8003
```
