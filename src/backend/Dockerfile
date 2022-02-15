FROM tiangolo/uvicorn-gunicorn:python3.8-slim

RUN mkdir /backend

COPY ./requirements.txt backend/

RUN pip install -r backend/requirements.txt

COPY . /backend

RUN apt-get update -y

# RUN apt-get install build-essential cmake protobuf-compiler python3-opencv -y

WORKDIR /backend

EXPOSE 8088

RUN chmod +x ./start.sh

CMD ["./start.sh"]