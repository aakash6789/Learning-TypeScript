"use strict";
class User {
    constructor(name, email, country) {
        this.name = name;
        this.email = email;
        this.country = country;
        this.movie_count = 1;
    }
    get getName() {
        return `${this.email}`;
    }
    set movieCount(movie_count) {
        if (movie_count < 1) {
            throw new Error("Actor should have atleast one movie");
        }
        this.movie_count = movie_count;
    }
}
const bestActor2025 = new User("Aakash", "aakash2506c");
const bestActor2026 = new User("Aakash", "aakash2506c", "India");
// export {}
