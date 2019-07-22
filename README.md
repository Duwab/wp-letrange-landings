# LETRANGE - Landings


## Style rules

### Section full-width + .site-content

If you want a full-width section background, but content aligned like the other blocks, use a section with .site-content inside the full-width section 
```
some block or section with content
section (full-width)
  |
  |- section (with .site-content CSS class)
      |
      |- your content
```

TODO : explain theme + customisation (customize > additionnal css, blocks, ...)

```
UPDATE wp_options SET option_value='http://34.220.48.184:8000' WHERE option_name='siteurl' OR option_name='home'
```

## Images upload and resize
Nota bene : 
- images file shall be under 2Mo
- height and width shall have reasonible dimensions (otherwise you will receive an http error after a long timeout)


## Translations
TODO : quick manual

