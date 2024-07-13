import inquirer from 'inquirer';
import qr from 'qr-image';
import fs from 'fs';

var link;
inquirer
  .prompt([
    {
        "message":"Enter the url : ",
        "name":"url"
    }
  ])
  .then((answers) => {
    const url=answers.url;
    var qr_png = qr.image(url);
    qr_png.pipe(fs.createWriteStream('qr_img.png'));
    console.log(url);

    fs.writeFile('url-link.txt', url, (err) => {
      if (err) throw err;
      console.log('The file has been saved!');
    });
  });