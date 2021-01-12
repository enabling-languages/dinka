import pandas as pd
from icu import Collator, Locale, RuleBasedCollator

ddf = pd.read_csv("../word_frequency/unilex/din.txt", sep='\t', skiprows = range(2,5))

collator = Collator.createInstance(Locale('en_AU.UTF-8'))

# https://stackoverflow.com/questions/13838405/custom-sorting-in-pandas-dataframe/27009771#27009771
# https://gist.github.com/seanpue/e1cb846f676194ae77eb
def sort_pd(key=None,reverse=False):
    def sorter(series):
        series_list = list(series)
        return [series_list.index(i) 
           for i in sorted(series_list,key=key,reverse=reverse)]
    return sorter

sort_by_custom_dict = sort_pd(key=collator.getSortKey)


#ddf.iloc[sort_by_custom_dict(ddf.index)]
# ddf.iloc[sort_by_custom_dict(ddf['Form'])]
ddf.iloc[sort_by_custom_dict(ddf['Form'])]


#https://python3.wannaphong.com/2015/03/sort-python.html

# https://pyerror.com/detail/1316/

lexemes = ddf.Form

#lexemes2 = ddf['Form']

temp = lexemes.sort_values()

collation_rules = "&A<<aa<<<aA<<<Aa<<<AA<<ä<<<Ä<<ää<<<äÄ<<<Ää<<<ÄÄ\n&D<dh<<<dH<<<Dh<<<DH\n&E<<ee<<<eE<<<Ee<<<EE<<ë<<<Ë<<ëë<<<ëË<<<Ëë<<<ËË<ɛ<<<Ɛ<<ɛɛ<<<ɛƐ<<<Ɛɛ<<<ƐƐ<<ɛ̈<<<Ɛ̈<<ɛ̈ɛ̈<<<ɛ̈Ɛ̈<<<Ɛ̈ɛ̈<<<Ɛ̈Ɛ̈\n&G<ɣ<<<Ɣ\n&I<<ii<<<iI<<<Ii<<<II<<ï<<<Ï<<ïï<<<ïÏ<<<Ïï<<<ÏÏ\n&N<nh<<<nH<<<Nh<<<NH<ny<<<nY<<<Ny<<<NH<ŋ<<<Ŋ\n&O<<oo<<<oO<<<Oo<<<OO<<ö<<<Ö<<öö<<<öÖ<<<Öö<<<ÖÖ<ɔ<<<Ɔ<<ɔɔ<<<ɔƆ<<<Ɔɔ<<<ƆƆ<<ɔ̈<<<Ɔ̈<<ɔ̈ɔ̈<<<ɔ̈Ɔ̈<<<Ɔ̈ɔ̈<<<Ɔ̈Ɔ̈\n&T<th<<<tH<<<Th<<<TH\n&U<<uu<<<uU<<<Uu<<<UU"
custom_collator = RuleBasedCollator(collation_rules)


temp.sort_values(key=lambda x: custom_collator.getSortKey(x) )

def sort_pd(key=None,reverse=False):
    def sorter(series):
        series_list = list(series)
        return [series_list.index(i) 
           for i in sorted(series_list,key=key,reverse=reverse)]
    return sorter

sort_by_custom_dict = sort_pd(key=custom_collator.getSortKey)