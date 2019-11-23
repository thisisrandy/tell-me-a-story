from modelinference import ModelInference
from random import randint
from textcleaner import wrap_print, clean_children_gpt2 as clean

length = 500
seed = randint(1, 50000)
prompt = "Once upon a time, Jack found a magical bean."
inference = ModelInference("gpt2", "./models/fine-tuned_gpt2_1000/", seed=seed)
for response in inference.sample_and_decode(prompt, length):
    print(f"== PROMPT ==\n\n{prompt}\n\n== RESPONSE ==")
    wrap_print(clean(response))

