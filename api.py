from io import BytesIO
import uvicorn
from starlette.applications import Starlette
from starlette.responses import JSONResponse, HTMLResponse, RedirectResponse
import aiohttp
import asyncio
import os
from random import randint
from modelinference import ModelInference
from textcleaner import clean_children_gpt2 as clean
import torch

app = Starlette()

seed = randint(1, 50000)
inference = ModelInference("gpt2", "./models/fine-tuned_gpt2_1000/", seed=seed)


@app.route("/story", methods=["GET"])
async def story(request):
    prompt = request.query_params["prompt"]
    print(prompt)
    length = int(request.query_params["length"])
    return JSONResponse(
        {"response": clean(inference.sample_and_decode(prompt, length)[0])}
    )


@app.route("/check-cuda", methods=["GET"])
async def check_cuda(request):
    cuda_available = torch.cuda.is_available()
    return JSONResponse(
        {
            "cuda_available": cuda_available,
            "cuda_capability": torch.cuda.get_device_capability()[0]
            if cuda_available
            else "N/A",
        }
    )


@app.route("/")
def form(request):
    return HTMLResponse(
        """
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <title>Tell me a story API server</title>
        </head>
        <body>
            <h2>Tell me a story API server</h2>
            <p>Available routes:</p>
            <ol>
                <li>GET /story: prompt, length</li>
                <li>GET /check-cuda</li>
            </ol>
        </body>
        </html>
        """
    )


if __name__ == "__main__":
    port = int(os.environ.get("PORT", 8008))
    uvicorn.run(app, host="0.0.0.0", port=port)
