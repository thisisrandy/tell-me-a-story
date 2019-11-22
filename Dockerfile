FROM python:3.6-slim-stretch

RUN apt update
RUN apt install -y python3-dev gcc

COPY models/fine-tuned_gpt2_1000/* models/fine-tuned_gpt2_1000/

COPY requirements.txt requirements.txt
RUN pip install -r requirements.txt

COPY modelinference.py modelinference.py
COPY api.py api.py

EXPOSE 8008

CMD [ "python", "api.py" ]
