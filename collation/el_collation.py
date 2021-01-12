from icu import Locale, Collator, RuleBasedCollator
import pandas as pd

collation_tailorings = {
    "din": "&a<<<A<<aa<<<Aa<<<AA<<ä<<<Ä<<ää<<<Ää<<<ÄÄ&d<<<D<dh<<<Dh<<<DH<e<<<E<<ee<<<Ee<<<EE<<ë<<<Ë<<ëë<<<Ëë<<<ËË<ɛ<<<Ɛ<<ɛɛ<<<Ɛɛ<<<ƐƐ<<ɛ̈<<<Ɛ̈<<ɛ̈ɛ̈<<<Ɛ̈ɛ̈<<<Ɛ̈Ɛ̈&g<<<G<ɣ<<<Ɣ&i<<<I<<ii<<<II<<ï<<<Ï<<ïï<<<Ïï<<<ÏÏ&n<<<N<nh<<<Nh<<<NH<ny<<<Ny<<<NY<ŋ<<<Ŋ<o<<<O<<oo<<<Oo<<<OO<<ö<<<Ö<<öö<<<Öö<<<ÖÖ<ɔ<<<Ɔ<<ɔɔ<<<Ɔɔ<<<ƆƆ<<ɔ̈<<<Ɔ̈<<ɔ̈ɔ̈<<<Ɔ̈ɔ̈<<<Ɔ̈Ɔ̈<t<<<T<th<<<Th<<<TH<u<<<U<<uu<<<UU",
    "ak": "&E<ɛ<<<Ɛ\n&O<ɔ<<<Ɔ"
}

language_tailorings = {
    "din": "din",
    "din-SS": "din",
    "dip": "din",
    "dip-SS": "din",
    "diw": "din",
    "diw-SS": "din",
    "dib": "din",
    "dib-SS": "din",
    "dks": "din",
    "dks-SS": "din",
    "dik": "din",
    "dik-SS": "din",
    "ak":"ak",
    "ak-GH":"ak",
    "fat":"ak",
    "fat-GH":"ak",
    "bon":"ak",
    "bon-GH":"ak",
    "tw":"ak",
    "tw-GH":"ak"
}

# def sort_(data,l):
#     if (language_tailorings.get(l)):
#         tailored_lang = language_tailorings.get(l)
#         tailored_rules = collation_tailorings.get(tailored_lang)
#     if (tailored_rules):
#         custom_collator = RuleBasedCollator(tailored_rules)
#         sorted_lst = sorted(data, key=custom_collator.getSortKey)
#     return sorted_lst



# https://note.nkmk.me/en/python-list-sort-sorted/

# def sort_(data,l):
#     if (language_tailorings.get(l)):
#         tailored_lang = language_tailorings.get(l)
#         tailored_rules = collation_tailorings.get(tailored_lang)
#     if (tailored_rules):
#         collator = RuleBasedCollator(tailored_rules)
#         sorted_lst = sorted(data, key=collator.getSortKey)
#     if isinstance(data, list):
#         return sorted_lst
#     elif isinstance(data, tuple):
#         return tuple(sorted_lst)
#     elif isinstance(data, str):
#         return ''.join(sorted_lst)
#     else:
#         return sorted_lst

def custom_sort(key=None,reverse=False):
    def sorter(series):
        series_list = list(series)
        return [series_list.index(i) 
           for i in sorted(series_list,key=key,reverse=reverse)]
    return sorter

def df_sort(df, series, key):
    if isinstance(df, pd.DataFrame) or isinstance(df, pd.Series):
        sort_by_custom_dict = custom_sort(key=key)
        return df.iloc[sort_by_custom_dict(series)]

def sorted_(data,l, series=False):
    if (language_tailorings.get(l)):
        tailored_lang = language_tailorings.get(l)
        tailored_rules = collation_tailorings.get(tailored_lang)
        collator = RuleBasedCollator(tailored_rules)
        if isinstance(data, list) or isinstance(data, tuple) or isinstance(data, str):
            sorted_data = sorted(data, key=collator.getSortKey)
        elif isinstance(data, pd.DataFrame) or isinstance(data, pd.Series):
            sorted_data = df_sort(data, series, collator.getSortKey)
    elif Locale.forLanguageTag(l):
        loc = Locale.forLanguageTag(l)
        collator = Collator.createInstance(loc)
        if isinstance(data, list) or isinstance(data, tuple) or isinstance(data, str):
            sorted_data = sorted(data, key=collator.getSortKey)
        elif isinstance(data, pd.DataFrame) or isinstance(data, pd.Series):
            sorted_data = df_sort(data, series, collator.getSortKey)
    else:
        if isinstance(data, list) or isinstance(data, tuple) or isinstance(data, str):
            sorted_data = sorted(data)
        elif isinstance(data, pd.DataFrame) or isinstance(data, pd.Series):
            sorted_data = data.sort_values(by=series)
    if isinstance(data, list):
        return sorted_data
    elif isinstance(data, tuple):
        return tuple(sorted_data)
    elif isinstance(data, str):
        return ''.join(sorted_data)
    else:
        return sorted_data


# def sorted_(data,l, series=False, i=False):
#     if (language_tailorings.get(l)):
#         tailored_lang = language_tailorings.get(l)
#         tailored_rules = collation_tailorings.get(tailored_lang)
#         collator = RuleBasedCollator(tailored_rules)
#         if isinstance(data, list) or isinstance(data, tuple) or isinstance(data, str):
#             sorted_data = sorted(data, key=collator.getSortKey)
#         elif isinstance(data, pd.DataFrame) or isinstance(data, pd.Series):
#             sorted_data = df_sort(data, series, collator.getSortKey)
#         elif isinstance(data, dict):
#             sorted_data = sorted(data.items(), key = lambda x : collator.getSortKey(x[i]))
#     elif Locale.forLanguageTag(l):
#         loc = Locale.forLanguageTag(l)
#         collator = Collator.createInstance(loc)
#         if isinstance(data, list) or isinstance(data, tuple) or isinstance(data, str):
#             sorted_data = sorted(data, key=collator.getSortKey)
#         elif isinstance(data, pd.DataFrame) or isinstance(data, pd.Series):
#             sorted_data = df_sort(data, series, collator.getSortKey)
#         elif isinstance(data, dict):
#             sorted_data = sorted(data.items(), key = lambda x : collator.getSortKey(x[i]))
#     else:
#         if isinstance(data, list) or isinstance(data, tuple) or isinstance(data, str):
#             sorted_data = sorted(data)
#         elif isinstance(data, pd.DataFrame) or isinstance(data, pd.Series):
#             sorted_data = data.sort_values(by=series)
#         elif isinstance(data, dict):
#             sorted_data = sorted(data.items(), key = lambda x : x[i])
#     if isinstance(data, list):
#         return sorted_data
#     elif isinstance(data, tuple):
#         return tuple(sorted_data)
#     elif isinstance(data, str):
#         return ''.join(sorted_data)
#     elif isinstance(data, dict):
#         return dict(sorted_data)
#     else:
#         return sorted_data


# How to handle numpy arrays?

# Would it be better to use df.sort_values() for Pandas dataframes and series?

# https://stackoverflow.com/questions/62147537/how-do-i-do-a-natural-sort-in-pyicu
# https://gist.github.com/dpk/8325992
# https://ianwscott.blog/2015/04/30/python-programming-proper-alphabetical-sorting-for-polytonic-greek/