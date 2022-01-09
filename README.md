# tiddelibom-lang
The Infinitely Dumb Extensible Programming Language

The idea for this new programming language is to have a tiny extensible core,
which can be extended linearly in complexity by "examples". The compiler
should be so dumb that anyone can easily extend it.

We may treat the modification history of the source code as a living organism,
in an append-only fashion by default, such that instead of editing previous code we
call commands to modify already committed code. It's not mandatory however, but recommended.