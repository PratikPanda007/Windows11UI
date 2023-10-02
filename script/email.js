function submitForm(){
    const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
          confirmButton: 'btn btn-success',
          cancelButton: 'btn btn-danger'
        },
        buttonsStyling: false
      })
      
      swalWithBootstrapButtons.fire({
        title: 'You have fake sent this mail',
        text: "Would you like to send a real mail to the dev?",
        icon: 'success',
        showCancelButton: true,
        confirmButtonText: 'Yes, Send real mail',
        cancelButtonText: 'No, cancel!',
        reverseButtons: false
      }).then((result) => {
        if (result.isConfirmed) {
          // swalWithBootstrapButtons.fire(
          //   'Redirecting!',
          //   'Your will be redirected soon.',
          //   'warning'
          // )
          Swal.fire({
        title: 'Redirecting',
        icon: 'info',
        html:
          'You can Proceed to ' +
          'Send email.Click on \'Great\' button',
        showCloseButton: true,
        showCancelButton: true,
        focusConfirm: false,
        confirmButtonText:
          '<i class="fa fa-thumbs-up"></i> Great!',
        confirmButtonAriaLabel: 'Thumbs up, great!',
        // cancelButtonText:
        //   '<i class="fa fa-thumbs-down"></i>',
        // cancelButtonAriaLabel: 'Thumbs down'
      }).then((result) => {
            if (result.isConfirmed){
                window.location.href = "mailto:pratikpanda0007@gmail.com?subject=Let's%20Connect&cc=pratic.panda@gmail.com";
            }
          })
        } else if (
          /* Read more about handling dismissals below */
          result.dismiss === Swal.DismissReason.cancel
        ) {
          swalWithBootstrapButtons.fire(
            'Cancelled',
            'Your imaginary mail is safe :)',
            'error'
          )
        }
      })
}

// $("#mailBodyText").on('change', function(){
//     console.log();
// });

mailBodyCheck();
function mailBodyCheck(){
    let mailBodyText = document.getElementById("mailBodyText");
    let textLen = mailBodyText.value.length;
    console.log(textLen);
    let btnSendFrom = document.getElementById("btnSendFrom");
    if(textLen > 10){
        btnSendFrom.disabled = false;
    }else{
        btnSendFrom.disabled = true;
    }
}

// Close Email Window
function closeEmailScreen(){
    let emailViewer = document.getElementsByClassName("emailViewer")[0];
    if (emailViewer.style.bottom == "20vh") {
        emailViewer.style.bottom = "-655px"
    }
}