

## Quick description:

The goal of this project is to adopt a new strategy for the development of frontend web applications. Contrary to what is commonly done, that is to say a single project with a multitude of functionalities depending on each other, this new approach offers the possibility to separate the project into several parts and to develop these parts independently. The goal of module federation is to expose these sub-parts to a large entity that we call here container app (test-app). This way each part can be in a separate repository and be integrated in real time in the container app.

Here we have 3 apps:
> The api-app-container: which contain the state-management (vuex instance). Inside this app we are able to fetch data from [fakestore API](https://fakestoreapi.com/) create and manage the state 

> The product-fetching-app: where we got our button to load products (onclick it will dispatch the action and mutate the state inside the api-app-connector)

> The product-listing-app: where we display the updated state (using getters of the api-app-connector)

> The test-app: where we assemble the button and the list and admire the reactivity

# Here's a quick diagram to make things a bit more clear in mind

![image](/test-app/public/diagrammes.png)

---

## Follow the steps
--
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

http://127.0.0.1:8003
```
