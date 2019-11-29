from textcleaner import clean_children_gpt2, wrap_print

text = """
`` Come on, kitten! ''
said Alice, `` you needn't say a word to any one who is here.
I am just sort of tired of things like this, and I really don't want to talk about them. ''
`` You may say so, perhaps you will, '' said the rabbit, bowing politely to Alice.
`` You 'll have to, '' said Alice, `` but go away at once and let me help you. ''
When the rabbit was gone the kitten began to bark at Alice, saying, `` Oh, you black old coward! ''
`` I think I must go and steal some flax, '' said the rabbit, so as to prevent him from barking to her.
Alice was so surprised that she would not say a word, but instead flew away after another time.
`` Now, do you think that would make any difference? ''
asked the rabbit, beginning to grin, and before Alice could get another word of answer she broke the rabbit out of his kennel by opening the little window and running to the town.
The rabbit began to make splendid music, and soon there was a lively conversation, beginning with one of the girls, who said to the little boy, ` I don't know where I am going, but I think I shall go, and if I can't find my way out I shall never get anywhere near where I am going. '
The little girl went on for some time to try, and when she had finished she drew a long wand round the arm of her neighbour, who tried to hold her steady, and came out too hard to get up again.
`` But you can not feel tired.
This is the place for you, if you will help me ; it is just the same thing as if you were there, '' said the little girl, who was a little afraid of losing her comrades.
`` Well, the water is thick enough for you to swim, and it seems as if you could break me and free me, you little coward! ''
` Yes, yes, yes,! '
said the little girl, and as soon as the water was empty she ran down to the water-bed and saw three bright light-mobs making a long climb.
She began to think a little, and she can't walk very well, but with one hand she filled up a large bowl and put it in the water, and then looked up, saying, ` See!
here the four main boats stand out below ; where are they? '
` On either side of the water there are four beautiful heads and two beautiful eyes, and on each of them is a bundle of great riches, and on them is a great cow's hide and a great pig's head, and it is to feed all the poultry that came to them.
Each of the beautiful heads is of a fine yellow skin, like silk, and on them are all fine silk earrings, and on them is a lovely gun-bow and a great iron bar. '
` Two of these are gold chains, and you can get one from each hand,'said the pig, ` but if you cross a gold chain you must leave all the other things behind to each other, as the horse's ring is now. '
` There are golden spots all around the heads, but I needn't say where the gold chains are, because the ones that appear are always outside ; and also there are two silver earrings on each side, and on them is a very fine golden ring.
So it isn't difficult to get these two treasures together. '
` Well, now if you see me,'said Alice, ` and you see how many great ones there are,'and her eyes said ` Well,'and she went up to the table and took out the big crystal bucket and poured it into it.
She said ` Put this crystal bucket over to my hand, and then say ` Take it off ', and I will give you two gold chains to fill you up. '
So the basket was empty, and the first basket was laid out on the floor, and after that Alice was left to her work.
Next day she went to her master, and told him she could have one basket over for him.
And the master loved her, and she began to think of her, and said she was quite happy, and wanted to live a good life.
The master was so grateful that he put a little paper in his pocket and went with her, and she soon enjoyed herself immensely.
But when her father got tired of her all he said to her that she must go away and hide her treasures behind her bed in the dark.
` If you do, then you must send for a new cart, and sell my
"""

print("== FULL 1000 TOKEN OUTPUT ==")
wrap_print(clean_children_gpt2(text, quote_style="standard"))

text = """
I'm the first line.
I'm the last line!
"""
print("\n== VALID LAST LINE ==")
wrap_print(clean_children_gpt2(text))

text = """
I'm the first line.
"Am I the last line?"
"""
print("\n== VALID LAST LINE WITH QUOTES ==")
wrap_print(clean_children_gpt2(text))

text = """
I'm the first line.
``Am I the last line?''
"""
print("\n== VALID LAST LINE WITH CURSIVE QUOTES ==")
wrap_print(clean_children_gpt2(text))

text = """
I'm the first line.
``Am I the last line?'' I hope
"""
print("\n== PARTIAL LAST LINE WITH CURSIVE QUOTES ==")
wrap_print(clean_children_gpt2(text))

text = """
I'm the first line, but I have no end
"""
print("\n== PARTIAL LAST LINE WITH CURSIVE QUOTES ==")
wrap_print(clean_children_gpt2(text))
