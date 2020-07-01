const express = require('express')

const port = process.env.PORT || 3000

express()
  .use(express.static('public', {
    extensions: [
      'html'
    ]
  }))
  .listen(port, () => console.log('Listing on port', { port }))
