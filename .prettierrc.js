/**
 * @type {import('prettier').Options}
 */
const config = {
    arrowParens: 'always',
    bracketSpacing: true,
    endOfLine: 'lf',
    filepath: undefined,
    htmlWhitespaceSensitivity: 'css',
    insertPragma: false,
    jsxBracketSameLine: false,
    jsxSingleQuote: false,
    // parser: undefined,
    plugins: [],
    printWidth: 100,
    proseWrap: 'preserve',
    quoteProps: 'as-needed',
    rangeEnd: Infinity,
    rangeStart: 0,
    requirePragma: false,
    semi: true,
    singleQuote: true,
    tabWidth: 4,
    trailingComma: 'es5',
    useTabs: false,
    vueIndentScriptAndStyle: false,
};

module.exports = config;
