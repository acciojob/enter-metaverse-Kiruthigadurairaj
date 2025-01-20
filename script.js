 const statusParagraph = document.getElementById('status');
    const enterButton = document.getElementById('enterBtn');

    // Add an event listener for the button click
    enterButton.addEventListener('click', () => {
      // Update the paragraph content to an <h1> tag with "Entered Metaverse"
      statusParagraph.innerHTML = '<h1>Entered Metaverse</h1>';
    });