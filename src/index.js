
const { generate } = require('astring');

// A test program that sums the numbers from 0 to 10.

const program = `
Open = Builtin
Literal = Builtin
Nested = Builtin
Statements = Builtin

symbols = Scope
    Braces = Nested { }
    Parens = Nested ( )
    Brackets = Nested [ ]
    Quotes = Nested " "
    SingleQuotes = Nested ' '
    Increment = Literal ++
    Add = Literal +
    For = Literal for
    LessThan = Literal <
    EndStatement = Literal ;
    Assign = Literal =

openSymbols = Open symbols

basics = Scope
    Let = Parameters pvar Assign pvalue 
    ForRange = Parameters pi pfrom pto pbody
        loop = For
            iteration = Parens
                init = Let pi pfrom EndStatement
                cond = pi LessThan pto EndStatement
                incr = pi Increment
            body = Braces
                pbody

myscope = Scope
    sumDecl = Let sum 0
    iDecl = Let i 0
    iBody = Statements
        adder = sum Add i
        assignSum = Assign sum adder
    iLoop = ForRange i 0 10 iBody
    printsum = Print sum
    program = Sequence iloop printsum

# After end of scope, program is now an assignable name again.
# We can use ScopeGet to retrieve the internal value.
program = ScopeGet myscope program
`;

const rules = {
    'Let': (name, value) => `let ${name} = ${value};`,
};
const lines = program.split('\n');
for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const tokens = line.split(' ');
    for (let t = 0; t < tokens.length; t++) {
        const token = tokens[t];
        if (token in rules) {

        }
    }
}