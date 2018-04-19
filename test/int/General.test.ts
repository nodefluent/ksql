import {parse, SqlBaseParser} from "../../lib";
const {
    SingleStatementContext,
    ListTopicsContext,
    QuerystatementContext
} = SqlBaseParser;

function test(query: string) : any {

    //parse query
    const parsed = parse(query);

    //find first statement
    let stmt: any = null;
    parsed.children.forEach(child => {
        if(child instanceof SingleStatementContext){
            stmt =  child;
        }
    });

    if(!stmt){
        //TODO throw
        return false;
    }

    //check type of statement
    const firstStatementChild = stmt.children[0];
    if(firstStatementChild instanceof ListTopicsContext){
        //TODO call list topics method
        return true;
    } else if(firstStatementChild instanceof QuerystatementContext){
        const queryChildren = firstStatementChild.children;
        return true;
    }

    return true;
}

test("CREATE STREAM `kaese` AS SELECT * from `wurst`;");