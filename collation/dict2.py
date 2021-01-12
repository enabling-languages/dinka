import el_collation as elcol
from icu import Locale, Collator
lang="el"
gr_dict = {
    0: 'βλα', 
    2: 'ὁμηρ', 
    1: 'ἀγ'
}


def sorted_(data,l, series=False, i=False):
    loc = Locale.forLanguageTag(l)
    collator = Collator.createInstance(loc)
    if isinstance(data, dict):
        sorted_data = sorted(data.items(), key = lambda x : collator.getSortKey(x[i]))
        return dict(sorted_data)


s1 = sorted_(gr_dict, lang, i=0)

s2 = sorted_(gr_dict, lang, i=1)
