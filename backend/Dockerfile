FROM python:3.6-slim-stretch

RUN apt-get update
RUN apt-get install -y python3-dev gcc

COPY models/childrens-stories_fine-tuned_gpt2/* models/childrens-stories_fine-tuned_gpt2/

COPY requirements.txt requirements.txt
RUN pip install -r requirements.txt

COPY modelinference.py modelinference.py
COPY api.py api.py
COPY textcleaner.py textcleaner.py

EXPOSE 8008

CMD [ "python", "api.py" ]
