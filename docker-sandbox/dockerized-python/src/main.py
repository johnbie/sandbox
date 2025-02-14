# project based on YouTube tutorial: https://www.youtube.com/watch?v=0TFWtfFY87U
import uvicorn
from fastapi import FastAPI

app = FastAPI()

@app.get("/")
def central_function():
    return {"Neural": "Nine"}

if __name__ == "__main__":
    uvicorn.run(app, port=8000, host="0.0.0.0")

# To run the project via Docker (assuming it's already installed and running), type `docker build -t [IMAGE_NAME] .`
# Then, run `docker run -p 8000:8000 --name [SERVICE_NAME] [IMAGE_NAME]`
# You should be able to view the endpoint locally
