#!/usr/bin/env python3
import os
from os import O_RANDOM
import sys
libpath = os.path.expanduser('~/dev/i18n/py/')
if libpath not in sys.path:
    sys.path.append(libpath)
from elle import *
import el_collation as elcol
import pandas as pd

df = pd.read_csv("../word_frequency/unilex/din.txt", sep='\t', skiprows = range(2,5)
# df.dtypes

# df.loc[1,'Form']
# df.size

# pd.get_option('display.max_rows')
# pd.set_option('display.max_rows', df.shape[0]+1)
# print(df)
# pandas.set_option('display.max_rows', 5)
# pd.reset_option('display.max_rows')
# df.tail(30)


# inbuilt sorting
# https://datatofish.com/sort-pandas-dataframe/
# df.sort_values(by=['Form'], inplace=True)
df_sorted = df.sort_values(by=['Form'])
df_sorted.tail(30)

df_sorted = df.sort_values(by=['Frequency'], ascending=False)
df_sorted.tail(30)

# sorting with PyICU

# https://stackoverflow.com/questions/13838405/custom-sorting-in-pandas-dataframe
# https://cmdlinetips.com/2018/02/how-to-sort-pandas-dataframe-by-columns-and-row/
# https://towardsdatascience.com/how-to-do-a-custom-sort-on-pandas-dataframe-ac18e7ea5320
# https://towardsdatascience.com/how-to-do-a-custom-sort-on-pandas-dataframe-ac18e7ea5320

#df.sort_values(by=['Form'], key=lambda x: x.map(custom_dict))



collator = Collator.createInstance(Locale('de_DE.UTF-8'))
df_sorted = df.sort_values(by=['Form'], key=collator.getSortKey)

#https://stackoverflow.com/questions/57361637/sorting-pandas-dataframe-with-german-umlaute 

# https://note.nkmk.me/en/python-pandas-sort-values-sort-index/


# df.sort_values(by='clouds', key=kf)
# where kf is the key function that operates on type Series. Accepts and returns Series.


# import PyICU
# collator = PyICU.Collator.createInstance(PyICU.Locale('de_DE.UTF-8'))
# sorted(['a','b','c','ä'],key=collator.getSortKey)





# below from http://stackoverflow.com/questions/13838405/custom-sorting-in-pandas-dataframe


loc = 'tr_TR.UTF-8'
collator = Collator.createInstance(Locale(loc))

def sort_pd(key=None,reverse=False):
    def sorter(series):
        series_list = list(series)
        return [series_list.index(i) 
           for i in sorted(series_list,key=key,reverse=reverse)]
    return sorter

sort_by_custom_dict = sort_pd(key=collator.getSortKey)

df.iloc[sort_by_custom_dict(df.index)]
df.iloc[sort_by_custom_dict(df['Form'])]


def sort_pd(s, key=None, reverse=False):
    s.sort_values(key=key, reverse=reverse)
    return s

# >>> import icu # pip install PyICU
# >>> sorted(['a','b','c','ä'])
# ['a', 'b', 'c', 'ä']
# >>> collator = icu.Collator.createInstance(icu.Locale('de_DE.UTF-8'))
# >>> sorted(['a','b','c','ä'], key=collator.getSortKey)
# ['a', 'ä', 'b', 'c']

words = df['Form']
# as numpty array:
# df['Form'].values


words = df['Form']

words.name
# default sorting
words.sort_values(ascending = True)


# randomise order
random_words = words.sample(frac=1)


#sorting using icu

key = collator.getSortKey
key = lambda s: collator.getSortKey(s[1])

sorted_words = random_words.sort_values(key = lambda s: collator.getSortKey(s[1]))

# https://gist.github.com/hellpanderrr/599bce82ecc6934aa9e1


# import icu

# collator = icu.Collator.createInstance(icu.Locale('en_US'))
# collator.setAttribute(icu.UCollAttribute.NUMERIC_COLLATION, icu.UCollAttributeValue.ON)

# sorted(['3 three', '1 one', '10 ten', '2 two'])
# # ['1 one', '10 ten', '2 two', '3 three']

# sorted(['3 three', '1 one', '10 ten', '2 two'], key=collator.getSortKey)
# # ['1 one', '2 two', '3 three', '10 ten']


foo = sorted(parts, key=lambda s: collator.getSortKey(s[1]))

>>> def sort_pd(key=None, reverse=False):
...     def sorter(series):
...             series_list = list(series)
...             return [series_list.index(i)
...                     for i in sorted(series_list,key=key,reverse=reverse)]
...     return sorter
... 
>>> sort_by_custom_dict = sort_pd(key=collator.getSortKey)
>>> df.iloc[sort_by_custom_dict(df.index)]


# natsort
# https://stackoverflow.com/questions/29580978/naturally-sorting-pandas-dataframe


# https://stackoverflow.com/questions/13838405/custom-sorting-in-pandas-dataframe/27009771#27009771
