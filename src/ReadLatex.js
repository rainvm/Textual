const { parse, HTMLGenerator } = require('latex.js')
const { createHTMLWindow } = require('svgdom')

async function gen() {
    let gf = './latex/GreensFunctions/main.tex';
    let lim = './latex/limits/limits.tex'
    let latex = '';
    for await (const line of makeTextFileLineIterator(gf)) {
        latex += line;
    }
    console.log(latex)
}


async function* makeTextFileLineIterator(path) {
    let utf8Decoder = new TextDecoder();
    const latexResponse = await fetch(path);
    const reader = latexResponse.body.getReader();
    let { value: chunk, done: readerDone } = await reader.read();
    chunk = chunk ? utf8Decoder.decode(chunk) : "";
    const newline = /\r?\n/gm;
    let startIndex = 0;
    let latexContent = " ";

    while (true) {
        const result = newline.exec(chunk);
        if (!result) {
            if (readerDone) break;
            const remainder = chunk.substr(startIndex);
            ({ value: chunk, done: readerDone } = await reader.read());
            chunk = remainder + (chunk ? utf8Decoder.decode(chunk) : "");
            startIndex = newline.lastIndex = 0;
            continue;
        }
        yield chunk.substring(startIndex, result.index);
        startIndex = newline.lastIndex;
    }

    if (startIndex < chunk.length) {
        // Last line didn't end in a newline char
        yield chunk.substr(startIndex);
    }
}


export default gen