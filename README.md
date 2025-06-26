# visualizeJSONdataAngular

## How to Run with Docker

Follow these steps to build and run the application in a Docker container.

1.  **Navigate to the project directory**
    Open a terminal or command prompt and navigate to this project's root folder.

2.  **Build the Docker image**
    This command installs dependencies and packages the Angular application into a static website, served by a lightweight Nginx server. The image will be named `visualize-angular`.
    ```sh
    docker build -t visualize-angular .
    ```
3.  **Run the Docker container**
    This command starts the application from the image you just built. It will be accessible on port `5200` of your local machine.
    ```sh
    docker run -p 5200:80 --name my-angular-app visualize-angular
    ```
4.  **Access the application**
    Open your web browser and go to:
    *   **Main Page:** [http://localhost:5200](http://localhost:5200)
  
To stop and remove the running container, open a new terminal and run:
```sh
docker stop my-angular-app
docker rm my-angular-app
```


    
