FROM python:3.7.9

RUN mkdir /backend

COPY ./requirements.txt backend/

RUN pip install uvicorn

RUN pip install torch==1.7.1+cu110 torchvision==0.8.2+cu110 torchaudio==0.7.2 -f https://download.pytorch.org/whl/torch_stable.html

RUN pip install -r backend/requirements.txt

COPY . /backend

# RUN apt-get update -y

WORKDIR /backend

EXPOSE 8088

RUN chmod +x ./start.sh

CMD ["./start.sh"]