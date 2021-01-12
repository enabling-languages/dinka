#!/usr/bin/env python3
import os
import sys
libpath = os.path.expanduser('~/dev/i18n/py/')
if libpath not in sys.path:
    sys.path.append(libpath)
from elle import *
import el_collation as elcol

# Initiate 
nf = "NFC"
lang = "din-SS"
u = uCase(l=lang,unf=nf)

# Test data: tuple containing words in alphabetical order
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

# convert tuple to list
ordered_lexemes = list(ordered_lexemes_tuple)
print("Original list: ", ordered_lexemes)

import random

# set seed for reproduceable results
random.seed(5)

# randomise lexemes 
#     N.B random.sample generates a new list, random.shuffle shuffles original list
random_lexemes = random.sample(ordered_lexemes, len(ordered_lexemes))

print("Randomised list: ", random_lexemes)

# Check - should return False
#print("Lists are the same? ", ordered_lexemes == random_lexemes)

# Sort random_lexemes
#random_lexemes.sort()
#print("Randomised list (using default sort): ", random_lexemes)



sorted_lexemes = elcol.sort_(random_lexemes, lang)

print("Sorted list:   ", sorted_lexemes)
print("Original list and sorted list are identical: ", ordered_lexemes == sorted_lexemes)

# https://docs.python.org/3/howto/sorting.html


# >>> import icu
# >>> dei = [{'name': u'Thor'}, {'name': u'Œdipus'}, {'name': u'Creon'}]
# >>> collator = icu.Collator.createInstance()
# >>> dei.sort(key=lambda x: collator.getSortKey(x['name']))
# >>> dei
# [{'name': 'Creon'}, {'name': 'Œdipus'}, {'name': 'Thor'}]
