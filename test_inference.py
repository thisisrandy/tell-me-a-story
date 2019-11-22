from modelinference import ModelInference
from random import randint

length = 100
seed = randint(1, 50000)
prompt = "Once upon a time, Jack found a magical bean."
inference = ModelInference(
    "gpt2", "./models/fine-tuned_gpt2_1000/", length=length, seed=seed
)
for response in inference.sample_and_decode(prompt):
    print(f"== PROMPT ==\n\n{prompt}\n\n== RESPONSE ==\n{response}")

