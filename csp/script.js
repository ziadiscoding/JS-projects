// Déclaration des variables
const hide = document.querySelectorAll('.hide');
const inputs = document.querySelectorAll('.input')
const generate = document.querySelector('.generate');
const shown = document.querySelectorAll('.shown');
const copier = document.querySelector('.copier');
const scp = document.getElementById('scp');



// Click sur le bouton generate
generate.addEventListener("click", () => {
    // Ce que l'on fait
    // On cache la p1 du form
    hide.forEach((index) => index.classList.toggle('hidden'));
    shown.forEach((indexe) => indexe.classList.toggle('hidden'));
    // On switch de bouton
    generate.classList.add('hidden');
    copier.classList.remove('hidden');
    // On récupére les valeurs des input
    text = "scp -r /" + inputs[2].value + "/installer.php" + inputs[0].value + "@ssh.cluster030.hosting.ovh.net:~/" + inputs[3].value + " && scp -r /" + inputs[2].value + "/" + inputs[1].value + inputs[0].value + "@ssh.cluster030.hosting.ovh.net:~/" + inputs[3].value;
    console.log(text);
    scp.value = text;
});


// Click sur le bouton copier
copier.addEventListener("click", () => {
    // Ce que l'on fait
    // On cache la p1 du form
    hide.forEach((index) => index.classList.toggle('hidden'));
    shown.forEach((indexe) => indexe.classList.toggle('hidden'));
    generate.classList.remove('hidden');
    copier.classList.add('hidden');
    // choisir l'input
    scp.select();
    scp.setSelectionRange(0, 99999); // For mobile devices

    // Copy the text inside the text field
    navigator.clipboard.writeText(scp.value);

    // Alert the copied text
    alert("Copied the text: " + scp.value);
});