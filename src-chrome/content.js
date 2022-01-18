function getAllTextNodes() {
    var elements = document.querySelectorAll("body, body *:not(script):not(noscript):not(style)");
    var results = [];
    for (var i = 0; i < elements.length; i++) {
        if (!elements[i].hasChildNodes()) {
            continue;
        }

        const children = elements[i].childNodes;
        children.forEach(child => {
            if (child.nodeType == 3) {
                results.push(child);
            }
        });
    }
    return results;
}

function nft2bb(text) {
    return text.replace(/\b(a)n nft\b/ig, '$1 Beanie Baby')
        .replace(/\bnfts|non-fungible tokens\b/ig, 'Beanie Babies')
        .replace(/\bnft|non-fungible token\b/ig, 'Beanie Baby');
}

function updateAllText() {
    const textnodes = getAllTextNodes();
    for (var i = 0, len = textnodes.length; i < len; i++) {
        textnodes[i].nodeValue = nft2bb(textnodes[i].nodeValue);
    }

    document.title = nft2bb(document.title);
}

// do the thing
updateAllText();

// do the thing again in a second incase there is a late DOM update
setTimeout(updateAllText, 1000);
