let word = "radda";
let wc = 0;
let endMessage = "That's all the Radda!";

function setup() {
  // No canvas needed
  noCanvas();

  let content = select("body");
  content.attribute("id", "content");

  // Title page
  content.child(createElement("h1", "Shnitzel's Radda Radda"));

  //Making sentences
  while (wc < 50000) {
    //Making sentences
    content.child(createElement("h2", String(word.toUpperCase() + " ").repeat(int(random(2, 6)))));

    for (let p = 0; p < random(5, 15); p++) {
      let paragraph = '';

      for (let s = 0; s < random(3, 10); s++) {
        let internalPunct = [",", "..."];
        let endPunct = [".", "!", "?"];
        let sentence = word.charAt(0).toUpperCase() + word.slice(1);
        let sentenceLength =random(8, 20);

        wc += sentenceLength + 1;

        for (let w = 0; w < sentenceLength; w++) {
          sentence += " " + word;

          if (random() < 0.2) {
            sentence += random(internalPunct);
          }
        }

        sentence += random(endPunct) + " ";
        paragraph += sentence;
      }

         content.child(createElement("p", paragraph));
    }
  }

  window.PagedPolyfill.preview();
}