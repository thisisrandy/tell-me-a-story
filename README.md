# Tell Me a Story

<p align="center"> <img alt="Tell Me a Story screenshot"
src="images/screenshot.png"> </p>

What happens when a computer tries to write a children's story? Why,
[this](https://tell-me-a-story.now.sh/), of course!

There is a long history of [statistical language
models](https://en.wikipedia.org/wiki/Language_model) in [natural language
processing](https://en.wikipedia.org/wiki/Natural_language_processing),
beginning with the humble [n-gram model](https://en.wikipedia.org/wiki/N-gram),
which gathers statistics over a
[corpus](https://en.wikipedia.org/wiki/Text_corpus) about the co-occurrence of
n (1, 2, 3, 4...) words or sub-word tokens, to the [probabilistic context free
grammar](https://en.wikipedia.org/wiki/Probabilistic_context-free_grammar),
which imposes statistical likelihood over a pre-defined grammar, to [neural
language models](https://en.wikipedia.org/wiki/Language_model#Neural_network),
which harness biologically inspired [neural
networks](https://en.wikipedia.org/wiki/Artificial_neural_network) in a variety
of architectures to tackle the problem of language modeling.

The task of these models is simple: Given some context, compute a distribution
over what comes next, or equivalently, compute the likelihood of a given block
of text. For example, a high-quality model would predict that "The dog went to
the pound" is more likely than "The dog went to the Vatican," and given the
context, "The dog went to the," it would likewise assign higher probability to
"pound" than "Vatican."

Text generation is a simple extension of this idea. Starting with some context,
the model iteratively predicts (or better yet,
[samples](https://arxiv.org/pdf/1904.09751)) the next token, adds that token to
the context, predicts a further token, and on and on. Supposing that we chose
"Vatican" at the first step above, we would add it to our context (now, "The
dog went to the Vatican"), then likely predict either a comma or a period ("The
dog went to the Vatican,"), then, skipping ahead a few steps ("The dog went to
the Vatican, where he had tea with Pope "), we would likely predict e.g. "Pius"
over "Smith" as the next token.

A dog having tea with the Pope is far from the most likely continuation of our
original context, but it makes for an interesting story. In fact, humans
[rarely](https://arxiv.org/pdf/1904.09751) say the most likely thing, so in
order to mimic the richness of human speech and tell an interesting story,
sampling from the likelihood distribution of next tokens, rather than simply
choosing the most likely one, is critical.

In the past few years, something remarkable has happened: [deep neural
network](https://en.wikipedia.org/wiki/Deep_learning#Deep_neural_networks)
language models have progressed to a point where the text that they generate is
starting to make sense. This is due to the advent of the [transformer
model](https://arxiv.org/abs/1706.03762), which has enabled the training of
language models over huge corpora of high-quality text. The resultant
pre-trained models ([BERT](https://arxiv.org/abs/1810.04805),
[GPT-2](https://openai.com/blog/better-language-models/),
[Transformer-XL](https://ai.googleblog.com/2019/01/transformer-xl-unleashing-potential-of.html),
etc.) can then be adapted relatively cheaply to specific tasks using [transfer
learning](https://en.wikipedia.org/wiki/Transfer_learning).

This work is one such example. Using a pre-trained GPT-2 network (the "small"
size, 12 layer version made
[available](https://github.com/huggingface/transformers) by the folks at
[Hugging Face](https://huggingface.co/)) as a base, the model used in this
project has been fine-tuned on approximately 100 children's stories made
available through [Project Gutenberg](https://www.gutenberg.org/) via the
[bAbI](https://research.fb.com/downloads/babi/) project. The result is model
that can (or at least tries to) write stories in the combined styles of Charles
Dickens, Harriet Elisabeth Beecher Stowe, Lewis Carroll, and 11 other
well-loved authors.

## What else?

### UI

In addition to being an example of transfer learning for text generation, this
project is also an example of the power of [React](https://reactjs.org/) and
[Material-UI](https://material-ui.com/) for building modern web apps. The
entire [mobile- and touch-friendly, shiny modern user
interface](https://tell-me-a-story.now.sh/) was built with fewer than 1000
lines of highly readable code. Check it out!

### I've seen the GPT-2 Ovid's Unicorn text. This seems... less good

Correct. As mentioned above, this project uses the small version of GPT-2,
which has a "mere" 117M parameters :smirk:. By contrast, the XL model, the one
they originally said was too dangerous to release, has 1558M parameters
:flushed:.

So why use the small one?

- Training: The model was fine-tuned on [Google
  Colab](https://colab.research.google.com/), which is an awesome free service.
  Unfortunately, the runtimes they provide don't have enough memory to handle
  anything larger than the small model, so fine-tuning is not free at this
  time.
- Hosting: The model is hosted as cheaply as possible (and as such quite
  suboptimally) on [Google Cloud Run](https://cloud.google.com/run/) (see [the
  backend readme](backend/README.md) for more details). Cloud Run is CPU-only
  and supports a maximum of 2GB memory per worker, so the larger models would
  not only be prohibitively slow (the small model already takes over a minute
  to generate a 500 token story), but actually wouldn't even fit in memory.

That said, if you think this is super cool and want to run the XL model on your
[Cloud TPUs](https://cloud.google.com/tpu/) (or sponsor me to set that up),
you're more than welcome to. Just make sure to give credit where credit's due
:wink:.
