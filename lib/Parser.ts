import {CommonTokenStream, InputStream} from "antlr4";
import {SqlBaseLexer} from "../parser/ksql/SqlBaseLexer";
import {SqlBaseParser} from "../parser/ksql/SqlBaseParser";

export function parse(input: string): any {
    const chars = new InputStream(input);
    const lexer = new SqlBaseLexer(chars);
    const tokens = new CommonTokenStream(lexer);
    const parser = new SqlBaseParser(tokens);
    parser.buildParseTrees = true;
    return parser.statements();
}

export {SqlBaseParser} from "../parser/ksql/SqlBaseParser";