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
random_lexemes
sorted_lexemes = elcol.sort_(random_lexemes, lang)
sorted_lexemes
isinstance(sorted_lexemes, tuple)