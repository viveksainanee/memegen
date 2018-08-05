window.onload = function() {
  var memeList = document.getElementById('memeList');
  var memeForm = document.getElementById('memeForm');

  memeForm.addEventListener('submit', function(event) {
    event.preventDefault();

    var newMeme = document.createElement('div');
    newMeme.setAttribute('class', 'meme');

    var memeImage = document.createElement('img');
    memeImage.setAttribute('src', document.getElementById('url').value);
    memeImage.setAttribute('width', '500');
    memeImage.setAttribute('height', '500');
    memeImage.setAttribute('alt', 'Your meme!');
    newMeme.appendChild(memeImage);

    var memeTopText = document.createElement('div');
    memeTopText.innerText = document.getElementById('ttxt').value;
    memeTopText.setAttribute('class', 'top');
    newMeme.appendChild(memeTopText);

    var memeBottomText = document.createElement('div');
    memeBottomText.innerText = document.getElementById('btxt').value;
    memeBottomText.setAttribute('class', 'bottom');
    newMeme.appendChild(memeBottomText);

    var memeBlock = document.createElement('div');
    memeBlock.setAttribute('class', 'memeBlock col-12 m-3');
    memeBlock.appendChild(newMeme);

    var removeButton = document.createElement('button');
    removeButton.setAttribute('class', 'btn btn-danger');
    removeButton.innerText = 'Remove';
    memeBlock.appendChild(removeButton);

    memeList.appendChild(memeBlock);
    memeForm.reset();
  });

  memeList.addEventListener('click', function(event) {
    if (event.target.tagName.toLowerCase() === 'button') {
      event.target.parentNode.remove();
    }
  });
};
