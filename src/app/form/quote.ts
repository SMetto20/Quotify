export class Quote {
    quote:string;
    author:string;
    person:string;
    upVote:number;
    downVote:number;

    constructor(quote:string,author :string,person:string, upVote:number, downVote: number){
        this.quote = quote
        this.author= author
        this.person= person
        this.upVote = upVote
        this.downVote = downVote
    }
}
