# Backend

## Model generation

Run the first section of `tell-me-a-story_gpt2.ipynb` to generate the model.
Download the complete model directory to `models/`. Note that rather than
attempting to download the model directly from Colab, it is _much_ faster to
save the model to your Google Drive and download from there (steps in the
notebook). You can try it directly with `test_inference.py` or by running
`api.py` and navigating to `localhost:8008`.

## Deployment to Google Cloud Run

Note first of all that Google Cloud Run is not an ideal platform for a large
deep network model. The model samples many times more quickly on a GPU (Cloud
Run is CPU only), and there is a significant startup cost to load the model
(Cloud Run is serverless, so workers are dynamically created and removed).

That said, for limited use, a serverless CPU deployment is by far the cheapest
option for a toy project like this one, as it is pay for use only. No known free
services will accept Docker images of the size required to fit in the model
(~500GB).

1. Begin by following the "Before you begin" section of the [Cloud Run
   quickstart
   guide](https://cloud.google.com/run/docs/quickstarts/build-and-deploy)
2. Build using `gcloud builds submit --tag gcr.io/PROJECT-ID/helloworld`, where
   `PROJECT-ID` is the result of `gcloud config get-value project`
3. Deploy using `gcloud run deploy --image gcr.io/PROJECT-ID/helloworld --platform managed`

Et voila! Make sure to use your new API url on the frontend (see those docs).
