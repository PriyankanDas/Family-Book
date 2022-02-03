var images = ["https://i.postimg.cc/MGn9GJXw/family.jpg", "https://i.postimg.cc/qqyYvVbq/grandpa.jpg", "https://i.postimg.cc/wjMnFtMX/father.jpg", "https://i.postimg.cc/5ymDKL83/bro.jpg", "https://i.postimg.cc/JnL6wtrd/sister.jpg", "https://i.postimg.cc/bw5W5zSK/mother.jpg"];
var names = ["Family Book", "Ranbir Singh", "Diljeet Singh", "Rocky Singh", "Alia Singh", "Soni Singh"];
var i = 0;
function update() {
    i++;
    var numbers_of_family_member_in_array = 5;
    if (i > numbers_of_family_member_in_array) {
      i = 0;
    } 
    var updatedImage = images[i];
    var updatedName = names[i];
    localStorage.setItem("image", updatedImage);
    localStorage.setItem("name", updatedName);
    document.getElementById("family_member_image").src = updatedImage;
    document.getElementById("family_member_name").innerHTML = updatedName;
}

window.addEventListener("load", function() {
  if (this.localStorage.getItem("image") || this.localStorage.getItem("name")) {
    document.getElementById("family_member_image").src = this.localStorage.getItem("image");
    document.getElementById("family_member_name").innerHTML = this.localStorage.getItem("name");
  } else {
    document.getElementById("family_member_image").src = "https://i.postimg.cc/MGn9GJXw/family.jpg";
    document.getElementById("family_member_name").innerHTML = "Family Book";
  }
  
});