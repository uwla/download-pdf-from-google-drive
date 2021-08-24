function downloadPdfFromImages()
{
  let pdf = new jsPDF();
  let images = document.querySelectorAll('[role="main"] img');
  let i = 0;
  for (let img of images)
  {
    i += 1;
    console.log("adding page", i);

    /* validate source */
    if (!/^blob:/.test(img.src))
    {
      console.log("invalid src");
      continue ;
    }

    /* get image dimensions */
    let height = img.height;
    let width = img.width;
    if (! width) {
      let widthStr = window.getComputedStyle(img).getPropertyValue("width").replace("px", "");
      width = Math.round(Number(widthStr));
    }
    if (! height) {
      let heightStr = window.getComputedStyle(img).getPropertyValue("height").replace("px", "");
      height = Math.round(Number(heightStr));
    }

    /* create canvas for drawing the image */
    let canvas = document.createElement('canvas');
    let context = canvas.getContext("2d");
    canvas.width = width;
    canvas.height = height;
    context.drawImage(img, 0, 0);

    /* save the image to pdf */
    let imgData = canvas.toDataURL("image/jpeg", 1.0);
    pdf.addImage(imgData, 'JPEG', 0, 0);
    pdf.addPage();
  }

  /* save the pdf */
  let title = document.title || "google-drive";
  pdf.save(title + ".pdf");
};

let jspdf = document.createElement("script");
jspdf.onload = downloadPdfFromImages; /* this function will be executed after script loads */
jspdf.src = 'https://cdnjs.cloudflare.com/ajax/libs/jspdf/1.5.3/jspdf.debug.js';
document.body.appendChild(jspdf);
