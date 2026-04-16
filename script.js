const message = `haii aku minta maaff ya kalo aku banyak salah sama kamu ntah itu di sengaja ataupun tidak.\nmaaf juga ya kalo sama aku mungkin bikin kamu bosen atau cape atau apapun itu sayang.\n\ntapi aku banyak" terimakasih sama kamu sudah mau hadir di hidup aku yg rumit ini:).”\n\nmungkin aku belom bisa jadi yg terbaik buat kamu mungkin aku juga gagal dalam memahami kamu, jadi maaf untuk semua hal yg buat kamu kecewa ya sayang\n\n.`;

function showLetter() {
  document.getElementById("introText").style.opacity = 0;
  document.querySelector(".btn").style.display = "none";

  setTimeout(() => {
    const letterBox = document.getElementById("letterBox");
    const typedText = document.getElementById("typedText");
    letterBox.style.display = "block";
    let i = 0;

    function typeWriter() {
      if (i < message.length) {
        typedText.innerHTML += message.charAt(i);
        i++;
        setTimeout(typeWriter, 30);
      }
    }

    typeWriter();
  }, 600);
}
