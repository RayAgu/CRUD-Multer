const app = require( './app' );
const PORT = 4040;

app.listen( PORT, () => {
    console.log(`Server is listening to port: ${PORT}`);
})