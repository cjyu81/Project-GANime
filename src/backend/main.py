import io

import uvicorn
# from PIL import Image
from starlette.responses import Response

from fastapi import FastAPI, File, UploadFile
from model.gan import gan


app = FastAPI(
    title="World GAN",
    description="""Visit port 8501 for the front end""",
    version="0.0.1")


@app.get("/")
def home():
    return {"message": "Backend Site"}


@app.get("/gan")
def generate_gan():
    gan_image = gan() # generates an image
    # bytes_io = io.BytesIO() # bytes buffer
    # dcgan_image.save(bytes_io, format="PNG") # save image to buffer
    # return Response(bytes_io.getvalue(), media_type="image/png") # response contains a PNG
    return Response("images go here", media_type="text/html")


if __name__ == "__main__":
    uvicorn.run("main:app", host="0.0.0.0", port=8088, reload=True)