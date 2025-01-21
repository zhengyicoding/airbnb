
export default function onCreateForm(event) {
  event.preventDefault();

  console.log("Form submitted");

  const form = event.target;

  console.log("❤️ form", form.title.value, form);


}
