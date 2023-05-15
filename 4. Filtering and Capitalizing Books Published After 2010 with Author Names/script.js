const listOfbooks=[
    {title:"Pshycology of Money",Author:"Morgan Housel",YearOfpublication:2022},
    {title:"Who will cry when you die", Author:"Robin Shorma",YearOfpublication:2010},
    {title:"Compound effect",Author:"Darren Hardy",YearOfpublication:2023}
]

function filterbook(books){
    return books.filter(book=>book.YearOfpublication>=2010).map(x=>{
        return {
            title:x.title,
            Author:x.Author.toUpperCase(),
            YearOfpublication:x.YearOfpublication
    
        }
    });

}

console.log(filterbook(listOfbooks));