$(document).on('turbo:load',function(){

    // signout button style1

  // $(".button_to").on("submit", function(event) {
  //   event.preventDefault();
  //   const form=this;
  //   Swal.fire({
  //     title: 'Are you sure?',
  //     icon: 'warning',
  //     showCancelButton: true,
  //     confirmButtonColor: 'linear-gradient(to bottom, #0f0c29, #302b63, #24243e);',
  //     cancelButtonColor: '#d33',
  //     confirmButtonText: 'Yes, signout!'
  //   }).then(function(result){
  //       if(result.isConfirmed){
  //         $(".button_to").off("submit").submit();
  //       }
  //   }).catch(function(){
  //       event.preventDefault();
  //   })
  // });
   

  // signout button style2

  $(".button_to").on("submit", function(event) {
    event.preventDefault();
    const form=this;
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
      confirmButton: 'btn btn-success',
      cancelButton: 'btn btn-danger'
    },buttonsStyling: false})

    swalWithBootstrapButtons.fire({
      title: 'Are you sure?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, Signout!',
      cancelButtonText: 'No, cancel!',
      reverseButtons: true
    }).then((result) => {
      if(result.isConfirmed) {
        $(".button_to").off("submit").submit();
        swalWithBootstrapButtons.fire(
          'Sign out!',
          'Your are signed out.',
          'success'
      )}
      })
  });

  // delete account button style1

  // $(".delt_act").on("submit", function(event) {
  //   event.preventDefault();
  //   const form=this;
  //   Swal.fire({
  //     title: 'Are you sure?',
  //     icon: 'warning',
  //     showCancelButton: true,
  //     confirmButtonColor: 'linear-gradient(to bottom, #0f0c29, #302b63, #24243e);',
  //     cancelButtonColor: '#d33',
  //     confirmButtonText: 'Yes, Delete account!'
  //   }).then(function(result){
  //       if(result.isConfirmed){
  //         $(form).off("submit").submit();
  //       }
  //   }).catch(function(){
  //       event.preventDefault();
  //   })
  // });

  // Delete account button style 2

  $(".delt_act").on("submit", function(event) {
    event.preventDefault();
    const form=this;
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
      confirmButton: 'btn btn-success',
      cancelButton: 'btn btn-danger'
    },buttonsStyling: false})

    swalWithBootstrapButtons.fire({
      title: 'Are you sure?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, Delete!',
      cancelButtonText: 'No, cancel!',
      reverseButtons: true
    }).then((result) => {
      if(result.isConfirmed) {
        $(form).off("submit").submit();
        swalWithBootstrapButtons.fire(
          'Deleted!',
          'Your account has been deleted.',
          'success'
      )}
    })
  })


  // delete task button style1

  // $(".delt_tasks").on("submit", function(event) {
  //   event.preventDefault();
  //   const form=this;
  //   Swal.fire({
  //     title: 'Are you sure?',
  //     icon: 'warning',
  //     showCancelButton: true,
  //     confirmButtonColor: 'linear-gradient(to bottom, #0f0c29, #302b63, #24243e);',
  //     cancelButtonColor: '#d33',
  //     confirmButtonText: 'Yes, Delete task!'
  //   }).then(function(result){
  //       if(result.isConfirmed){
  //         $(form).off("submit").submit();
  //       }
  //   }).catch(function(){
  //       event.preventDefault();
  //   })
  // })

  //Delete task button style2

  $(".delt_tasks").on("submit", function(event) {
    event.preventDefault();
    const form=this;
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
      confirmButton: 'btn btn-success',
      cancelButton: 'btn btn-danger'
    },buttonsStyling: false})

    swalWithBootstrapButtons.fire({
      title: 'Are you sure?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, Delete!',
      cancelButtonText: 'No, cancel!',
      reverseButtons: true
    }).then((result) => {
      if(result.isConfirmed) {
        $(form).off("submit").submit();
        swalWithBootstrapButtons.fire(
          'Deleted!',
          'Your task has been deleted.',
          'success'
      )}
    })
  })



});

