class ExamplePlugin {
    constructor () {

    }

    apply (compiler) {
        compiler.hooks.done.tap('ExamplePlugin', (compilation) => {
            console.log('s')
        })
    }
}

module.exports = ExamplePlugin