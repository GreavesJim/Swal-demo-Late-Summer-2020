class NotificationService {
  toast() {
    swal.fire({
      toast: true,
      title: "Congrats",
      text: "added been to cart",
      icon: "info",
      position: "top-end",
      showConfirmButton: false,
      timer: 3000,
    });
  }
  basic(title, text) {
    swal.fire({
      title: title,
      text: text,
      icon: "success",
    });
  }
  async Confirm() {
    let res = await swal.fire({
      title: "Are you sure?",
      text: "you won't be able to undo this",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "DELETE",
      confirmButtonColor: "green",
      cancelButtonColor: "red",
    });
    console.log(res);
    return res.value;
  }
  async inputAction() {
    Swal.mixin({
      input: "text",
      confirmButtonText: "Next &rarr;",
      showCancelButton: true,
      progressSteps: ["1", "2", "3"],
    })
      .queue([
        {
          title: "Question 1",
          text: "What is your name?",
        },
        {
          title: "Question 2",
          text: "What is your quest?",
        },
        {
          title: "Question 3",
          text: "what is your favorite color?",
        },
      ])
      .then((result) => {
        if (result.value) {
          const answers = JSON.stringify(result.value);
          Swal.fire({
            title: "All done!",
            html: `
        Your answers:
        <pre><code>${answers}</code></pre>
      `,
            confirmButtonText: "Lovely!",
          });
          return answers;
        }
      });
  }
}

const SERVICE = new NotificationService();
export default SERVICE;
