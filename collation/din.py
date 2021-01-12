import pandas as pd
import el_collation as elcol
import random
lang = "din-SS"
ordered_lexemes_tuple = (
    'abany',
    'abaany',
    'abaŋ',
    'abenh',
    'abeŋ',
    'aber',
    'abeer',
    'abëër',
    'abeeric',
    'aberŋic',
    'abuɔ̈c',
    'abuɔk',
    'abuɔɔk',
    'abuɔ̈k',
    'abur',
    'acut',
    'acuut',
    'acuth',
    'ago',
    'agook',
    'agol',
    'akɔ̈r',
    'akɔrcok',
    'akuny',
    'akuŋɛŋ'
)

random.seed(5)
random_lexemes = tuple(random.sample(ordered_lexemes_tuple, len(ordered_lexemes_tuple)))

sorted_lexemes = elcol.sorted_(random_lexemes, lang)
sorted_lexemes

ddf = pd.read_csv("../word_frequency/unilex/din.txt", sep='\t', skiprows = range(2,5))
# words = ddf['Form']
random_ddf = ddf.sample(frac=1)
words = random_ddf['Form']

sorted_ddf = elcol.sorted_(random_ddf, lang, random_ddf['Form'])
sorted_words = elcol.sorted_(words, lang, words)

sample = ("côté","cote","coté","côte")
sorted_sample = elcol.sorted_(sample, "fr-FR")
sorted_sample


