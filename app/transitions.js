export default function() {
  this.transition(
    this.fromRoute("index"),
    this.use("toLeft"),
    this.reverse("toRight")
  );
  // End global animations

  this.transition(
    this.fromRoute([
      "psychotherapeut",
      "praktijk",
      "informatie",
      "contact",
      "links",
    ]),
    this.toRoute([
      "psychotherapeut",
      "praktijk",
      "informatie",
      "contact",
      "links",

    ]),
    this.use("crossFade"),
    this.reverse("crossFade")
  );
}
