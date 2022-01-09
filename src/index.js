
const { generate } = require('astring');

// A test program that sums the numbers from 0 to 10.

const program = `
myscope = Scope
    sum = Let sum 0
    i = Let i 0
    iloop = ForRange i 0 10
        adder = Add sum i
        assignsum = Assign sum adder
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