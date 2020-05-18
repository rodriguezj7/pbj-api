
const config = {
    auth: {
        jwtBypass: process.env.JWT_BYPASS,
        jwtSecret: process.env.JWT_SECRET,
        verificationEnabled: process.env.JWT_PERMISSIONS_VERIFICATION === 'true' || false
    },
    db: {
        automigrate: process.env.DB_AUTO_MIGRATE === 'true' || false,
        database: process.env.DB_NAME,
        host: process.env.DB_HOST,
        max_pool: parseInt(process.env.DB_MAX_POOL || 100, 10),
        min_pool: parseInt(process.env.DB_MIN_POOL || 50, 10),
        password: process.env.DB_PASS,
        port: process.env.DB_PORT,
        user: process.env.DB_USER
    },

    env: process.env.NODE_ENV || 'development',
    port: process.env.PORT || 3000,
}

module.exports = {
    config
}
