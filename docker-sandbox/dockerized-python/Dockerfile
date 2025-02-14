FROM python:3.9

WORKDIR /docker-fast

COPY requirements.txt .
RUN pip install -r requirements.txt

# because of caching, order matteres 
COPY ./src ./src

CMD ["python", "./src/main.py"]
