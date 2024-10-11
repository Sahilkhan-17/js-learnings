const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

console.log(buttons);

buttons.forEach((btn) => {
  // console.log(btn.id)

  btn.addEventListener('click', (e) => {
    // console.log(e);
    // console.log(e.target);

    // switch (btn.id) {
    //   case 'grey':
    //     body.style.backgroundColor = btn.id;
    //     break;
    //   case 'white':
    //     body.style.backgroundColor = btn.id;
    //     break;
    //   case 'blue':
    //     body.style.backgroundColor = btn.id;
    //     break;
    //   case 'yellow':
    //     body.style.backgroundColor = btn.id;
    //     break;
    //   default:
    //     body.style.backgroundColor = btn.id;
    // }

    switch (e.target.id) {
      case 'grey':
        body.style.backgroundColor = e.target.id;
        break;
      case 'white':
        body.style.backgroundColor = e.target.id;
        break;
      case 'blue':
        body.style.backgroundColor = e.target.id;
        break;
      case 'yellow':
        body.style.backgroundColor = e.target.id;
        break;
      default:
        body.style.backgroundColor = white;
    }
  });
});
