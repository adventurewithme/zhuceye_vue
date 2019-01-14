module.exports = {
    devServer: {
        proxy: {
            "/marketing_war_exploded": {
                target:"http://10.50.10.117:8090",
                changeOrigin: true
            }
        }
    }
}