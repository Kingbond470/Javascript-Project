const text = [
  `Death Note is rather dark, and its protagonist isn’t a stereotypical good guy like in many other series.  The film goes to places where other anime series haven’t dared, and this is what makes it absolutely enthralling.The Shinigami is a god of death able to kill any person as long as he is able to see the victim’s face and write their name down in the Death Note notebook.`,
  'Ryuk, who is bored by living the god of death lifestyle, leaves one of these notebooks in human reals to see how humans use it.The prodigal high school student Light Yagami finds the Death Note and begins testing it by writing the name of a criminal in it. The criminal dies immediately, and Light realizes how devastating the power of the notebook in his hands really is.',
  'Light decides to clear out the world from criminals with the help of the notebook, and people begin worshiping him. The police, though, realize that there is a serial killer targeting criminals and try to apprehend him with the help of an eccentric detective named L.The original manga series was published from 2003 to 2006 and includes 12 volumes and 108 chapters.',
  'The anime series developed by Madhouse was composed of 37 episodes directed by Tetsuro Araki.  These were broadcasted in Japan from October 2006 to June 2007. In 2006 a light novel based on the series was also released, followed by a series of Nintendo video games and three live-action films, a TV drama, and mini-series in Japan as well as a US film shown on Netflix in August 2017......',
  'L Lawliet, exclusively known by the mononym L, is a fictional character in the manga series Death Note, created by Tsugumi Ohba and Takeshi Obata.I thought that L was a weird guy who sits like a strange alien. But so far now I understands that L is just a quite guy and quite cute seeing him sitting like weirdo. (Which I also sits like that when I was a little) the way he shows his laziness side is also very funny but all he sense was tedious of all things around him. I could mention that he is way more better than anyone could do',
  'What is so great about L is that he is not just brilliant. He is also awkward and vulnerable. And he has this child-like side to him that loves sweets and does not like to adhere to social niceties. He is so likeable and he is so different. Easy to root for him. Wonderfully written character.',
  'The world best anime is one of the best character including yagami light . I equally love both of them. But if we talk seriously L is more awesome than yagami light cause he already found that light was the kira or killer and yet he did not sincerely told anyone but even rhough he made it up with light and while trying to solve the case he died because of light . It was the saddest death in the whole anime industry, it led me to tears . He was also the worlds three famous detective who were himself..',
  'An amazing and smart character. Without him, no one would be able to solve the Kira case and they would all end up dying instead. He knew all along the Light was Kira, but he just did not know how to prove it.It was really sad when he died. He died without even knowing if he was right or wrong. I feel very bad',
  'Naruto Uzumaki is a fictional character in the anime and manga franchise Naruto, created by Masashi Kishimoto.Though this might be because I grew up watching Naruto,he had a saddening childhood, and yet never gave in to the hate. He always told everyone something similar to: "I will become the Hokage, just you wait and see. Believe it! " And as we know he grows up to be a fine shinobi, conquering his enemies and even turning many into friends and comrades. Once again, for those who watched from beginning to the end, we got to witness as Naruto a kid became a teen, then finally an adult as he achieves his dream of becoming Hokage and even getting married and have kids.',
  'Naruto is an amazing character. He is a legend. Even if someone who has not watch Naruto came to judge him, they would say that he looks like a strong idiotic legend. XDI really like Naruto friendship with Sasuke, apart from the part where they ended up cutting each other arms off. XD',
  'Once a failure Now a leader,Must I say more? Giving up is not an option His faith is what I adore Silly and Funny, different is a fact The one who will always stand out Yet looking back He still had the time to smile Everyone loves the way he would act',
  'I did not know what he would be like so I thought of Naruto. He is not the smartest person ever but he is able to live with the fact that he is different but still able to do amazing things. What a beautiful poem. If it were not for Naruto, you might running out of idea.I salute him with my whole heart cause no one can find such an amazing and strong willed, lovable person as him. Though he is foolish sometimes I understand it is cause he feels lonely and wants to fulfill his empty heart with some joy. All through what he is gone through and still not losing hope and fight on with the will of fire making enemies into friends, turning each person to love him, making him acceptable to everyone, protecting with his life, working hard to fulfill every ones wishes just to make them happy, bearing everything on his shoulders ad not asking anything in return, and just giving hope to others, this guy just made me realize the importance of family, friends, teachers, and all other villagers who in the world has courage to do that! If a person like him would be alive the world would seem more beautiful, enjoyable, lovable, exciting for me to live with a smile on my face and I will look forward for my life and be very happy that I lived in a world.',
];

const form = document.querySelector(".anime-form");
const amount = document.getElementById("amount");
const result = document.querySelector(".anime-text");

form.addEventListener("submit", function (e) {
  
  e.preventDefault();

  const value = parseInt(amount.value);
  const random = Math.floor(Math.random() * text.length);

  if (isNaN(value) || value < 0 || value > 12) {
    result.innerHTML = `<p class="result">${text[random]}</p>`;
  } else {
    let tempText = text.slice(0, value);
    tempText = tempText
      .map(function (item) {
        return `<p class="result">${item}</p>`;
      })
      .join("");
    result.innerHTML = tempText;
  }
});
