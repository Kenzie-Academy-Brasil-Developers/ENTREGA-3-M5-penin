import { app } from "./app";

const port = 3000 || process.env.PORT;

app.listen(port, () => {
    console.log(`API started successfully on port ${port}.`);
    
});