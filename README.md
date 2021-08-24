# Download PDF from Google Drive

A simple script to download any PDF from Google Drive.

This script takes the images of each page being displayed on Google Drive,  then
adds them together and download the result as a PDF.

## How to use

Go to the URL of the PDF you want to download from Google  Drive.   After  that,
scroll the page up and down several times to ensure  that  all  images  will  be
loaded.  This script will join all loaded images to producde the PDF, therefore,
it WON'T download images that weren't loaded.   You  have  to  load  the  images
manually by scrolling up and down and waiting for the  images  to  be  rendered.

To know how many images have been loaded so far, type this in the console.

```javascript
[... document.querySelectorAll('[role="main"] img')].length
```

This will output how many images have been loaded.  Make  sure  this  number  is
equal to the total number of pages of the PDF.

Then, copy and paste the source code from the
[script](./download-pdf-from-google-drive.js) to the console.  It  will  do  the
job for you, so you wait.  After that, it will open a pop-up dialog  asking  you
to save the file. Confirm saving the file. That is it.

Enjoy :)

## Notes

Since the script will convert all  images  to  a  PDF,  you  should  expect  the
resulting PDF to be quite large in size.  For example, even if the original  PDF
has around 2MB,  the  PDF  generated  by  this  script  could  have  ~100MB  (no
kidding).  Of course, you can try compress the PDF later on, but be  aware  that
the generated PDF may be large.

## License

Do whatever you want with it.
