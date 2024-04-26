const CorsConfigurations = {
    origin: "*",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    preflightContinue: false,
}

const DatabaseConfigurations = {
    username: "lakee-foods-db-user",
    password: "vCynP63sC0xhFSBC",
    cluster: "snapps-dev.zfl1adm.mongodb.net",
    db: "lakee-foods"
}

const ApplicationConfigurations = {
    port: 3001
}

module.exports = {CorsConfigurations , DatabaseConfigurations, ApplicationConfigurations}