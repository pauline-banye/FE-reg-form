const form = document.querySelector('form');
        const entries = [form.firstName, form.lastName, form.email, form.password];
        form.addEventListener('submit',e=>{
            e.preventDefault();
            entries.forEach(entry=>{
                if(entry.value === ''){
                    entry.parentNode.classList.add('invalid-input');
                    entry.classList.add('declined');
                    entry.nextElementSibling.style.display = 'block';
                    entry.nextElementSibling.nextElementSibling.style.display = 'block';
                }else{
                    entry.parentNode.classList.remove('invalid-input');
                    entry.classList.remove('declined');
                    entry.nextElementSibling.style.display = 'none';
                    entry.nextElementSibling.nextElementSibling.style.display = 'none';
                }
            });
        });

        form.addEventListener('focusout',e=>{
            const entry = e.target;
            if(entry.type === 'submit'){
                return;
            }
            if(entry.value === ''){
                entry.parentNode.classList.add('invalid-input');
                entry.classList.add('declined');
                entry.nextElementSibling.style.display = 'block';
                entry.nextElementSibling.nextElementSibling.style.display = 'block';
            }else if(entry.type == 'email'){
                entry.innerHTML = entry.value;
                console.log(entry.value);
                emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                if(!emailRegex.test(entry.value)){
                    console.log('email is not valid');
                    entry.parentNode.classList.add('invalid-input');
                    entry.classList.add('declined');
                    entry.nextElementSibling.style.display = 'block';
                    entry.nextElementSibling.nextElementSibling.style.display = 'block';
                    }else{
                        entry.parentNode.classList.remove('invalid-input');
                entry.classList.add('successful');
                entry.nextElementSibling.style.display = 'none';
                entry.nextElementSibling.nextElementSibling.style.display = 'none';
                    }
                }else{
                entry.parentNode.classList.remove('invalid-input');
                entry.classList.add('successful');
                entry.nextElementSibling.style.display = 'none';
                entry.nextElementSibling.nextElementSibling.style.display = 'none';
            }
        })