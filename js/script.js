const form = document.querySelector('form');
        const entries = [
            form.fname, 
            form.lname, 
            form.email, 
            form.password
        ];

        form.addEventListener('submit', e=> {
            e.preventDefault();

            entries.forEach(entry=>{
                if(entry.value === ''){
                    entry.parentNode.classList.add(
                        'invalid-input'
                        );
                    entry.classList.add(
                        'declined'
                        );
                    entry.nextElementSibling.style.display = 'block';
                    entry.nextElementSibling.nextElementSibling.style.display = 'block';
                }

                else{
                    entry.parentNode.classList.remove(
                        'invalid-input'
                        );
                    entry.classList.remove(
                        'declined'
                        );
                    entry.nextElementSibling.style.display = 'none';
                    entry.nextElementSibling.nextElementSibling.style.display = 'none';
                }
            });
        });

        form.addEventListener('focusout', e=> {
            const entry = e.target;

            if(entry.type === 'submit'){
                return;
            }
            
            if(entry.value === ''){
                entry.parentNode.classList.add('invalid-input');
                entry.classList.add('declined');
                entry.nextElementSibling.style.display = 'block';
                entry.nextElementSibling.nextElementSibling.style.display = 'block';
            }

            else if(entry.type == 'email'){
                entry.innerHTML = entry.value;
                regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
                
                if(!regex.test(entry.value)){

                    entry.parentNode.classList.add('invalid-input');
                    entry.classList.add('declined');
                    entry.nextElementSibling.style.display = 'block';
                    entry.nextElementSibling.nextElementSibling.style.display = 'block';
                }
                
                else{
                    entry.parentNode.classList.remove('invalid-input');
                    entry.classList.add('successful');
                    entry.nextElementSibling.style.display = 'none';
                    entry.nextElementSibling.nextElementSibling.style.display = 'none';
                }}
                
                else{
                    entry.parentNode.classList.remove('invalid-input');
                    entry.classList.add('successful');
                    entry.nextElementSibling.style.display = 'none';
                    entry.nextElementSibling.nextElementSibling.style.display = 'none';
            }
        })