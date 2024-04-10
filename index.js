app.get('/', async (request, resposne) => {
    response.send(await readFile('.prophecies.vue', 'utf8'));
});
