// Force load new css
const oldCss = document.querySelectorAll('link[rel="stylesheet"]')[0].sheet.href
document.write(`<link rel="stylesheet" type="text/css" href="${oldCss + '?v=' + Date.now()}">`);