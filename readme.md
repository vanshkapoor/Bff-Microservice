# About
BFF Microservice Architecture is designed and explained in the 3 Part series blog. You can acces the blog here:


# Setup guide
Installation instructions here are for Order service. The steps will be same for other services.

### Step 1:
Install nodejs and npm.

### Step 2:
`cd ./ProductSvc`

### Step 3
`npm i`

### Step 4
Setup Postgres DB before running the services.

start kubernetes:
`minikube start`

Run up the product postgresdb deployment:
`kubectl apply -f ./ProductDb/productDbDeployment.yml`

Get the Pod name:
`kubectl get pods`

Port-Forward the pod to access in the local (add ur pod name in pod/:podname)
`kubectl port-forward pod/productpostgresql-596ffbf8f9-kn578 5432:5432`

### Step 4
`npx sequelize-cli db:migrate`

### Step 5
`node index.js`

You could access the API's in your local now.




