const routeHandler = (req , res) => {
    const { url } = req;

    if (url === "/") {
        res.write(`
            <html>
                <head>
                    <title>Home Page</title>
                </head>
                <body>
                    <h1>Home</h1>
                </body>
            </html>
        `);
        return res.end();
    }

    if (url === "/user") {
        res.write(`
            <html>
                <head>
                    <title>User Page</title>
                </head>
                <body>
                    <h1>User Page</h1>
                </body>
            </html>
        `);
        return res.end();
    }

    res.write(`
        <html>
            <head>
                <title>404 Page</title>
            </head>
            <body>
                <h1>You're Lost</h1>
                <h2>Page Not Found</h2>
            </body>
        </html>
    `);
    return res.end();
}

const str = "string text" ;

// module.exports = routeHandler ;


module.exports = {
    routeHandler ,
    text : str
}