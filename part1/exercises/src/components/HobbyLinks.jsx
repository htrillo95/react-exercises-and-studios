import React from 'react';

export default function HobbyLinks() {
    const hobbyLinks = [
        'https://www.runnersworld.com/uk/training/beginners/a772727/how-to-start-running-today/',
        'https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&ved=2ahUKEwixuYL0pOWEAxWTrYkEHYpoDsgQFnoECAoQAQ&url=https%3A%2F%2Fwww.art.com%2F&usg=AOvVaw0rKwDHjJCC2qaSb95QJ6Po&opi=89978449',
    ];

    return (
        <div>
            <h3>Hobby Websites</h3>
            <a href={hobbyLinks[0]}>Running Tips & Tricks</a><br />
            <a href={hobbyLinks[1]}>Art & Creativity Inspo</a><br />
        </div>
    );
}