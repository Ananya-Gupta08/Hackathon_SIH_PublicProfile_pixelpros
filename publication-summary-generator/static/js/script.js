document.addEventListener('DOMContentLoaded', () => {
    const addLinkButton = document.getElementById('add-link');
    const linksContainer = document.querySelector('.links-container');

    addLinkButton.addEventListener('click', () => {
        const linkInputDiv = document.createElement('div');
        linkInputDiv.className = 'link-input';

        linkInputDiv.innerHTML = `
            <input type="url" name="link" placeholder="Enter a link" />
            <button type="button" class="remove-link">Remove</button>
        `;

        linksContainer.appendChild(linkInputDiv);

        linkInputDiv.querySelector('.remove-link').addEventListener('click', () => {
            linksContainer.removeChild(linkInputDiv);
        });
    });

    document.querySelectorAll('.remove-link').forEach(button => {
        button.addEventListener('click', () => {
            linksContainer.removeChild(button.parentElement);
        });
    });
});
