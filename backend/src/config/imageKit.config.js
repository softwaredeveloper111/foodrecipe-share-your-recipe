const ImageKit = require('@imagekit/nodejs');
const {toFile} = require("@imagekit/nodejs");




const client = new ImageKit({
  privateKey: process.env.IMAGEKIT_PRIVATE_KEY
});



async function uploadToImageKit(uploadedFile){

  const response = await client.files.upload({
  file: await toFile(Buffer.from(uploadedFile.buffer), 'file'),
  fileName: 'fileName',
  folder:'food-recipe'
});
 
return response

}

module.exports = uploadToImageKit