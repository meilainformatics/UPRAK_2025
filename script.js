document.getElementById('userForm').addEventListener('submit', function(event) {
    event.preventDefault();

    let mbti = document.getElementById('mbti').value;
    let age = document.getElementById('age').value;
    let mood = document.getElementById('mood').value;
    let genre = document.getElementById('genre').value.toLowerCase();

    // Proses data dan beri rekomendasi film berdasarkan input pengguna
    let recommendation = getMovieRecommendation(mbti, mood, genre);
    document.getElementById('recommendation').innerText = recommendation;
});

function getMovieRecommendation(mbti, mood, genre) {
    // Contoh data film berdasarkan genre
    const movies = {
        action: [
            'Mad Max: Fury Road', 'John Wick', 'Die Hard', 'The Raid 2: Berandal', 
            'John Wick: Chapter 4', 'Mission: Impossible - Dead Reckoning Part One', 
            'Everything Everywhere All at Once', 'Spider-Man: Across the Spider-Verse',
            'Extraction', 'The Dark Knight Rises', 'Avengers: Infinity War', 
            'Mission: Impossible - Fallout', 'John Wick: Chapter 3 - Parabellum'
        ],
        drama: [
            'Forrest Gump', 'The Pursuit of Happyness', 'A Beautiful Mind', 
            'The Shawshank Redemption', 'Schindler\'s List', '12 Angry Men', 
            'The Godfather', 'The Godfather Part II', 'The Dark Knight', 
            'Pulp Fiction', 'Fight Club', 'Goodfellas', 'The Green Mile', 
            'Saving Private Ryan', 'American History X', 'The Pianist', 
            'Million Dollar Baby', 'The Social Network', 'Whiplash', 
            'Parasite', 'Nomadland', 'The Trial of the Chicago 7', 
            'Manchester by the Sea'
        ],
        comedy: [
            'The Hangover', 'Superbad', 'Deadpool', 'Bridesmaids', 
            'Monty Python and the Holy Grail', 'Mean Girls', 'Anchorman: The Legend of Ron Burgundy', 
            'The Big Lebowski', 'Office Space', 'Shaun of the Dead', 'Hot Fuzz', 
            'This Is Spinal Tap', 'Airplane!', 'Naked Gun: From the Files of Police Squad!', 
            'Dumb and Dumber', 'Austin Powers: International Man of Mystery', 
            'Zoolander', 'Dodgeball: A True Underdog Story', 'Knocked Up'
        ]
    };

    let moodRecommendation = `Dengan mood Anda yang "${mood}", kami rekomendasikan: `;
    
    if (movies[genre]) {
        let genreRecommendation = `Genre ${genre.charAt(0).toUpperCase() + genre.slice(1)}: ` + movies[genre].join(', ');
        return moodRecommendation + genreRecommendation;
    } else {
        return `Genre "${genre}" tidak ditemukan, coba genre lain.`;
    }
}
