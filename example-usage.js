const assemblyai = require('./index.js')
// assemblyai.setAPIKey("")
// const file = '';

async function upload () {
    try {
      const transcript = new assemblyai.Upload(file)
      const response = await transcript.create()
      const data = response.get()
      
      // do something with the JSON response
      console.log(data);
      
    } catch (e) {
      // Do some error handling here
    }
  }

  upload()