const button = document.querySelector('button');
const adviceId = document.querySelector('p');
const advice = document.querySelector('h1');

const adviceGenerate = async () => {
    try {
        const res = await fetch('https://api.adviceslip.com/advice');
        const data = await res.json();
        adviceId.innerHTML = `Advice #${data.slip.id}`;
        advice.innerHTML = data.slip.advice;
        button.disabled = true;
        setTimeout(() => button.disabled = false, 2000);
    } catch (e) {
        console.log(e);
    }
}

button.addEventListener('click', adviceGenerate);