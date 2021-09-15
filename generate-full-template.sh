#! /bin/sh
truncate -s 0 full-template.js

echo "import {css, html, LitElement} from 'lit'" > full-template.js

# concat all the classes into one file
awk 'FNR==1{print ""}1' components/*.js my-template.js >> full-template.js

# delete unnecessary imports
awk '!/<script type="module" src=".\/imports.js"><\/script>/' full-template.js > tmpfile && mv tmpfile full-template.js

awk '!/import {html, css, LitElement} from \x27lit\x27/' full-template.js > tmpfile && mv tmpfile full-template.js

awk '{gsub(/export /,""); print}' full-template.js > tmpfile && mv tmpfile full-template.js

awk '{gsub(/const myTemplate /,"export const myFullTemplate "); print}' full-template.js > tmpfile && mv tmpfile full-template.js
