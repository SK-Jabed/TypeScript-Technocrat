{
    // 
    // ----- Utility Types -----
    type Person = {
        name: string;
        age: number;
        email?: string;
        contactInfo: string
    }

    type NameAge = Pick<Person, "name" | "age">
    // 
}