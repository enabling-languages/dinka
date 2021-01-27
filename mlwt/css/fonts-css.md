# Fonts

## Brill (commercial)

Brill does not use the n-form with descender version of Eng by default, but makes them available via `ss01` and `cv01` features. These features also provide support for small caps.

The font has the normal ïï diacritic collision problems that most fonts have.

```css
:root {
    font-family: "Brill";
}

:lang(din) {
    /* font-feature-settings: "ss02" 1; */
    font-feature-settings: "cv01" 2;
}

.smallcaps:lang(din) {
    font-variant-caps: small-caps;
    /* font-variant-caps: all-small-caps; */
}
```

## Lato (opensource)

Brill does not use the n-form with descender version of Eng by default, but makes them available via `ss02` feature. 

The font has the normal ïï diacritic collision problems that most fonts have.

```css
:root {
    font-family: "Lato";
    font-size: 16px;
}

:lang(din) {
    font-feature-settings: "ss02" 1;
}
```

Bugs/issues filed:

* [Diacritic collisions in Latin sequence ïï](https://github.com/latofonts/lato-source/issues/11)

