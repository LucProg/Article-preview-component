const btn = document.querySelector('.btn');
const share = document.querySelector('.share')

function activate() {
    share.classList.toggle('hidden');
    if (!share.classList.contains('hidden')) {
        btn.classList.add('btnActive');
    } else {
        btn.classList.remove('btnActive');
    }
}

btn.addEventListener('click', activate)