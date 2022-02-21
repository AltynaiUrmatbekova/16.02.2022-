// Focus - make input active

// document.querySelector('input[type="text"]')
// .addEventListener('focus', function() {
//     this.value = "Hello";
// });

// // Lose focus
// document.querySelector('input[type="text"]')
// .addEventListener('blur', function() {
//     this.value = "Bye";
// })

// document.querySelector('input[type="text"]')
// .addEventListener('focus', function() {
//     if(!this.value) {
//         this.style.borderColor = "yellow";
//     }
    
// });

// document.querySelector('input[type="text]')
// addEventListener('blur', function() {
//     this.style.borderColor = "green";
// });

// document.querySelector('input[type="text]')
// addEventListener('change', function() {
//     alert('changed');
// });

// document.querySelector('input[type="text"')
// addEventListener('change', function() {
//     if(this.checked) {
//         this.alert('You are employed');
//     }
//     else {
//         alert ('You are umemployed');
//     }
// });

document.querySelector('select')
.addEventListener('input', function() {
    console.log(this.value);
    if (this.value =='Bishkek') {
        alert('Chui');
    }
    else if (this.value =='Karakol') {
        alert('Issyk-Kul');
    }
    else if (this.value =='Osh') {
        alert('Osh');
    }
    else if (this.value =='Jalal-Abad') {
        alert('Jalal-Abad');
    }
    else if (this.value =='Naryn') {
        alert('Naryn');
    }
    else if (this.value =='Talas') {
        alert('Talas');
    }
    else if (this.value =='Batken') {
        alert('Batken');
    }
})