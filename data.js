var defaultThreads = [
    {
        id: 1,
        title: "Thread 1" ,
        author: "Anonymous Dog",
        date: Date.now(),
        content: "Thread content",
        comments: [
            {
                author: "Anonymous Mouse",
                date: Date.now(),
                content: "Which vaccine should I take?",
            },
            {
                author: "Anonymous Rat",
                date: Date.now(),
                content: "Pfizer",
            },
            {
                author: "Anonymous Whale",
                date: Date.now(),
                content: "I got vaccinated today",
            }
        ]
    },
    {
        id: 2,
        title: "Thread 2" ,
        author: "Anonymous Cat",
        date: Date.now(),
        content: "Thread content",
        comments: [
            {
                author: "Anonymous Bat",
                date: Date.now(),
                content: "What are common Covid symptoms",
            },
            {
                author: "Anonymous Rabbit",
                date: Date.now(),
                content: "fever, dry cough, and tiredness",
            }
        ]
    }
]

var threads = defaultThreads
if (localStorage && localStorage.getItem('threads')) {
    threads = JSON.parse(localStorage.getItem('threads'));
} else {
    localStorage.setItem('threads', JSON.stringify(defaultThreads));
}

