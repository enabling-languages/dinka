import pandas as pd
from icu import RuleBasedCollator

ddf = pd.read_csv("../word_frequency/unilex/din.txt", sep='\t', skiprows = range(2,5))
words = ddf['Form']

#random_words = words.sample(frac=1)

#random_words_lst = list(random_words)

collation_rules_1 = "&A<<aa<<<aA<<<Aa<<<AA<<ä<<<Ä<<ää<<<äÄ<<<Ää<<<ÄÄ\n&D<dh<<<dH<<<Dh<<<DH\n&E<<ee<<<eE<<<Ee<<<EE<<ë<<<Ë<<ëë<<<ëË<<<Ëë<<<ËË<ɛ<<<Ɛ<<ɛɛ<<<ɛƐ<<<Ɛɛ<<<ƐƐ<<ɛ̈<<<Ɛ̈<<ɛ̈ɛ̈<<<ɛ̈Ɛ̈<<<Ɛ̈ɛ̈<<<Ɛ̈Ɛ̈\n&G<ɣ<<<Ɣ\n&I<<ii<<<iI<<<Ii<<<II<<ï<<<Ï<<ïï<<<ïÏ<<<Ïï<<<ÏÏ\n&N<nh<<<nH<<<Nh<<<NH<ny<<<nY<<<Ny<<<NH<ŋ<<<Ŋ\n&O<<oo<<<oO<<<Oo<<<OO<<ö<<<Ö<<öö<<<öÖ<<<Öö<<<ÖÖ<ɔ<<<Ɔ<<ɔɔ<<<ɔƆ<<<Ɔɔ<<<ƆƆ<<ɔ̈<<<Ɔ̈<<ɔ̈ɔ̈<<<ɔ̈Ɔ̈<<<Ɔ̈ɔ̈<<<Ɔ̈Ɔ̈\n&T<th<<<tH<<<Th<<<TH\n&U<<uu<<<uU<<<Uu<<<UU"
collator_1 = RuleBasedCollator(collation_rules_1)
collation_rules_2 = "&A<<<aa<<<aA<<<Aa<<<AA<<ä<<<Ä<<<ää<<<äÄ<<<Ää<<<ÄÄ\n&D<dh<<<dH<<<Dh<<<DH\n&E<<<ee<<<eE<<<Ee<<<EE<<ë<<<Ë<<<ëë<<<ëË<<<Ëë<<<ËË<ɛ<<<Ɛ<<<ɛɛ<<<ɛƐ<<<Ɛɛ<<<ƐƐ<<ɛ̈<<<Ɛ̈<<<ɛ̈ɛ̈<<<ɛ̈Ɛ̈<<<Ɛ̈ɛ̈<<<Ɛ̈Ɛ̈\n&G<ɣ<<<Ɣ\n&I<<<ii<<<iI<<<Ii<<<II<<ï<<<Ï<<<ïï<<<ïÏ<<<Ïï<<<ÏÏ\n&N<nh<<<nH<<<Nh<<<NH<ny<<<nY<<<Ny<<<NH<ŋ<<<Ŋ\n&O<<<oo<<<oO<<<Oo<<<OO<<ö<<<Ö<<<öö<<<öÖ<<<Öö<<<ÖÖ<ɔ<<<Ɔ<<<ɔɔ<<<ɔƆ<<<Ɔɔ<<<ƆƆ<<ɔ̈<<<Ɔ̈<<<ɔ̈ɔ̈<<<ɔ̈Ɔ̈<<<Ɔ̈ɔ̈<<<Ɔ̈Ɔ̈\n&T<th<<<tH<<<Th<<<TH\n&U<<<uu<<<uU<<<Uu<<<UU"
collator_2 = RuleBasedCollator(collation_rules_2)

collation_rules = "&A<<aa<<<aA<<<Aa<<<AA<<ä<<<Ä<<ää<<<äÄ<<<Ää<<<ÄÄ\n&D<dh<<<dH<<<Dh<<<DH\n&E<<ee<<<eE<<<Ee<<<EE<<ë<<<Ë<<ëë<<<ëË<<<Ëë<<<ËË<ɛ<<<Ɛ<<ɛɛ<<<ɛƐ<<<Ɛɛ<<<ƐƐ<<ɛ̈<<<Ɛ̈<<ɛ̈ɛ̈<<<ɛ̈Ɛ̈<<<Ɛ̈ɛ̈<<<Ɛ̈Ɛ̈\n&G<ɣ<<<Ɣ\n&I<<ii<<<iI<<<Ii<<<II<<ï<<<Ï<<ïï<<<ïÏ<<<Ïï<<<ÏÏ\n&N<nh<<<nH<<<Nh<<<NH<ny<<<nY<<<Ny<<<NH<ŋ<<<Ŋ\n&O<<oo<<<oO<<<Oo<<<OO<<ö<<<Ö<<öö<<<öÖ<<<Öö<<<ÖÖ<ɔ<<<Ɔ<<ɔɔ<<<ɔƆ<<<Ɔɔ<<<ƆƆ<<ɔ̈<<<Ɔ̈<<ɔ̈ɔ̈<<<ɔ̈Ɔ̈<<<Ɔ̈ɔ̈<<<Ɔ̈Ɔ̈\n&T<th<<<tH<<<Th<<<TH\n&U<<uu<<<uU<<<Uu<<<UU"
collator = RuleBasedCollator(collation_rules)

random_ddf = ddf.sample(frac=1)

def sort_pd(key=None,reverse=False):
    def sorter(series):
        series_list = list(series)
        return [series_list.index(i) 
           for i in sorted(series_list,key=key,reverse=reverse)]
    return sorter

sort_by_custom_dict = sort_pd(key=collator_1.getSortKey)
sorted_ddf_1 = random_ddf.iloc[sort_by_custom_dict(random_ddf['Form'])]
sorted_words_1 = words.iloc[sort_by_custom_dict(words)]
sorted_words_1

sort_by_custom_dict = sort_pd(key=collator_2.getSortKey)
sorted_ddf_2 = random_ddf.iloc[sort_by_custom_dict(random_ddf['Form'])]
sorted_words_2 = words.iloc[sort_by_custom_dict(words)]
sorted_words_2


if isinstance(random_ddf, pd.DataFrame) or isinstance(random_ddf, pd.Series):
    sort_by_custom_dict = sort_pd(key=collator.getSortKey)
    sorted_ddf = random_ddf.iloc[sort_by_custom_dict(random_ddf['Form'])]

def pd_sort(df, series, key):
    if isinstance(df, pd.DataFrame) or isinstance(df, pd.Series):
        sort_by_custom_dict = sort_pd(key=key)
        return df.iloc[sort_by_custom_dict(series)]

# sort a pd.DataFrame
new_ddf = pd_sort(random_ddf, random_ddf['Form'], collator.getSortKey)

# sort a pd.Series object
lexemes = pd_sort(words, words, collator.getSortKey)

