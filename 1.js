class Author{

    constructor(name, email, gender)
    {
        this.name=name;
        this.email=email;
        this.gender=gender;
    }

    get name()
    {
        return this._name;
    }

    set name(value)
    {
        this._name=value;
    }

    get email()
    {
            return this._email;
    }

    set email(value)
    {
        this._email=value;
    }

    get gender()
    {
            return this._gender;
    }

    set gender(value)
    {
        this._gender=value;
    }

    toString() 
    {
        return `name: ${this.name}, email: ${this.email}, gender: ${this.gender}`;
    }

}


class Book{

    constructor(title,price,quantity,author)
    {
        this._title=title;
        this._price=price;
        this._quantity=quantity;
        this._author=author;
    }

    get title()
    {
         return this._title;
    }

    set title(value)
    {
         this._title=value;
    }

    get price()
    {
         return this._price;
    }

    set price(value)
    {
         this._price=value;
    }

    get quantity()
    {
         return this._quantity;
    }

    set quantity(value)
    {
         this._quantity=value;
    }

    get author()
    {
         return this._author;
    }

    set author(value)
    {
         this._author=value;
    }

    toString() 
    {
         return `title: ${this.title}, price: ${this.price}, quantity: ${this.quantity}, author: ${this.author}`;
    }

    getProfit()
    {
        return this.price*this.quantity;
    }

}

let Author1= new Author ("Ernest Hemingway", "Hemingway@gmail.com", "male");
let Book1 = new Book ("Fiesta", 5000, 300, Author1 );
Book1.getProfit();
