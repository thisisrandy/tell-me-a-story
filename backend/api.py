from io import BytesIO
import uvicorn
from starlette.applications import Starlette
from starlette.responses import (
    JSONResponse,
    HTMLResponse,
    RedirectResponse,
    PlainTextResponse,
)
import aiohttp
import asyncio
import os
from random import randint
from modelinference import ModelInference
from textcleaner import clean_children_gpt2 as clean
import torch

app = Starlette()

seed = randint(1, 50000)
inference = ModelInference(
    "gpt2", "./models/fine-tuned_gpt2_1000/", seed=seed, progress_bar=False
)


@app.route("/story", methods=["GET"])
async def story(request):
    response_headers = {"Access-Control-Allow-Origin": request.headers["Origin"]}
    try:
        prompt = request.query_params["prompt"]
        length = int(request.query_params["length"])
        trim_dangling = request.query_params.get("trim_dangling", True)
        quote_style = request.query_params.get("quote_style", "standard")
        return JSONResponse(
            {
                "prompt": prompt,
                "story": clean(
                    inference.sample_and_decode(prompt, length)[0],
                    trim_dangling=trim_dangling,
                    quote_style=quote_style,
                ),
            },
            headers=response_headers,
        )
    except KeyError as ke:
        return PlainTextResponse(
            f"Required param {ke} missing in request",
            status_code=400,
            headers=response_headers,
        )
    except ValueError as ve:
        return PlainTextResponse(
            f"Param 'length' must be a valid integer value",
            status_code=400,
            headers=response_headers,
        )


@app.route("/check-cuda", methods=["GET"])
async def check_cuda(request):
    response_headers = {"Access-Control-Allow-Origin": request.headers["Origin"]}
    cuda_available = torch.cuda.is_available()
    return JSONResponse(
        {
            "cuda_available": cuda_available,
            "cuda_capability": torch.cuda.get_device_capability()[0]
            if cuda_available
            else "N/A",
        },
        headers=response_headers,
    )


@app.route("/")
def form(request):
    response_headers = {"Access-Control-Allow-Origin": request.headers["Origin"]}
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
                <li>GET /story: prompt, length[, trim_dangling=True, quote_style="standard"]</li>
                <li>GET /check-cuda</li>
            </ol>
        </body>
        </html>
        """,
        headers=response_headers,
    )


if __name__ == "__main__":
    port = int(os.environ.get("PORT", 8008))
    uvicorn.run(app, host="0.0.0.0", port=port)
