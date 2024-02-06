const buttons = document.querySelectorAll('.button');
const body = document.querySelector('.body')

buttons.forEach((button) => {
    console.log(button);
    button.addEventListener('click', function(e) {
        console.log(e);
        console.log(e.target);

        switch (e.target.id) {
            case 'red':
                document.body.style.backgroundColor = e.target.id;
                break;
                case 'violet':
                    document.body.style.backgroundColor = e.target.id;
                    break;
                  case 'blue':
                    document.body.style.backgroundColor = e.target.id;
                    break;
                  case 'yellow':
                    document.body.style.backgroundColor = e.target.id;
                    break;
                  case 'purple':
                    document.body.style.backgroundColor = e.target.id;
                    break;
            default:
                break;
        }
    });
  });