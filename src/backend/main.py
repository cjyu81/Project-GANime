import io
import random

import uvicorn

from starlette.responses import Response
from fastapi import FastAPI, File, UploadFile
from starlette.middleware.cors import CORSMiddleware

from model.stylegan import stylegan


app = FastAPI(
    title="World GAN",
    description="""Visit port 80 for the front end""",
    version="0.0.1")

origins = [
    "*",
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
    return {"message": "Backend Site"}


@app.get("/api/stylegan/")
async def generate_stylegan():
    gan_image = stylegan(
        truncation_psi = 0.4,
        network_pkl = 'network-snapshot-004200.pkl',
        seeds = random.randint(0, 99999),
    )
    bytes_io = io.BytesIO()  # bytes buffer
    gan_image.save(bytes_io, format="PNG")  # save image to buffer
    return Response(bytes_io.getvalue(), media_type="image/png")


if __name__ == "__main__":
    uvicorn.run("main:app", host="0.0.0.0", port=8088, reload=True)
