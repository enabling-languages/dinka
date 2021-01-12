import el_collation as elcol
dei = [{'name': u'Thor'}, {'name': u'Œdipus'}, {'name': u'Creon'}]
collator = icu.Collator.createInstance()
# dei.sort(key=lambda x: collator.getSortKey(x['name']))
sorted(dei, key=lambda x: collator.getSortKey(x['name']))

# https://stackoverflow.com/questions/38793694/python-sort-a-list-of-objects-dictionaries-with-a-given-sortkey-function
# https://ianwscott.blog/2015/04/30/python-programming-proper-alphabetical-sorting-for-polytonic-greek/

loc = Locale('el')
col = Collator.createInstance(loc)

# lost list of strings
words = ['βλα', 'ὁμηρ', 'ἀγ']
sorted_words = sorted(words, key=col.getSortKey)

# sort a list of dictionaries
from operator import itemgetter
list_of_dicts = [
    {'id': 0, 'word': 'βλα'}, 
    {'id': 1, 'word': 'ὁμηρ'},
    {'id': 2, 'word': 'ἀγ'}
]

sorted_dicts = sorted(list_of_dicts, 
    key=lambda x: collator.getSortKey(x['word'])
    #itemgetter('word')
)

gr_dict = {
    0: 'βλα', 
    2: 'ὁμηρ', 
    1: 'ἀγ'
}

print("Sorted by key: ", sorted(gr_dict))
print("Sorted by key: ", sorted(gr_dict.keys()))
print("Sorted by value: ", sorted(gr_dict.values()))


print("Sorted by key: ", sorted(gr_dict.items(), key = lambda x : x[0]))
print("Sorted by value: ", sorted(gr_dict.items(), key = lambda x : collator.getSortKey(x[1])))


gr_sorted = sorted(gr_dict.items(), key = lambda x : collator.getSortKey(x[1]))
gr_sorted
dict(gr_sorted)
from collections import OrderedDict
gr_sorted_dict = OrderedDict(gr_sorted)
gr_sorted_dict





sorted_d = sorted(gr_dict.items(), key=lambda x: x[1])
# equivalent version
# sorted_d = sorted(d.items(), key=lambda (k,v): v)

# Use the sorted function and return an ordered dictionary
from collections import OrderedDict
dd = OrderedDict(sorted(gr_dict.items(), key=lambda x: x[1]))


# https://thomas-cokelaer.info/blog/2017/12/how-to-sort-a-dictionary-by-values-in-python/


# https://www.geeksforgeeks.org/python-convert-tuples-to-dictionary/


import el_collation as elcol
lang="gr"
gr_dict = {
    0: 'βλα', 
    2: 'ὁμηρ', 
    1: 'ἀγ'
}
sorted_gr= elcol.sorted_(gr_dict, lang, i=0)
sorted_gr2 = elcol.sorted_(gr_dict, lang, i=1)