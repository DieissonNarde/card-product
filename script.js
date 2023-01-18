function changeImg() {
  let imageSofa = document.getElementById('imageSofa');
  let imageButton = document.getElementById('imageButton');
  let toggleButton = document.getElementById('toggleButton');

  let isImage = true;
  const imageSrc = './images/imageSofa.png';
  const gifSrc = './images/imageSofa.gif';

  const icon360 = './images/icon360.png';
  const iconClose = './images/iconClose.png';

  toggleButton.addEventListener('click', function () {
    if (isImage) {
      imageSofa.src = gifSrc;
      imageButton.src = iconClose;
    } else {
      imageSofa.src = imageSrc;
      imageButton.src = icon360;
    }

    isImage = !isImage;
  });
}

changeImg();
