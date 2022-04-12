import io

import uvicorn
# from PIL import Image
from starlette.responses import Response

from fastapi import FastAPI, File, UploadFile
from starlette.middleware.cors import CORSMiddleware
from model.gan import gan
import pickle
import os
import uuid

app = FastAPI(
    title="World GAN",
    description="""Visit port 8501 for the front end""",
    version="0.0.1")

origins = [
    "http://localhost",
    "http://localhost:8088",
    "http://localhost:3000",
    "http://localhost:3000/gan",
]


app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/")
async def home():
    return {"message": "Backend Site1"}


@app.get("/api/gan/")
async def generate_gan():
    gan_image = gan()  # generates an image
    bytes_io = io.BytesIO()  # bytes buffer
    gan_image.save(bytes_io, format="PNG")  # save image to buffer
    # response contains a PNG
    return Response(bytes_io.getvalue(), media_type="image/png")


# @app.post("/api/gan/")
# async def create_upload_file(file: UploadFile = File(...)):

#     file.filename = f"{uuid.uuid4()}.png"
#     contents = await file.read()  # <-- Important!

#     db.append(contents)

#     return {"filename": file.filename}


if __name__ == "__main__":
    uvicorn.run("main:app", host="0.0.0.0", port=8088, reload=True)
