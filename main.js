function LogIn() {
    player1 = document.getElementById("Inp1").value;
    player2 = document.getElementById("Inp2").value;
    console.log(player1);
    console.log(player2);
    localStorage.setItem("Inp1", player1);
    localStorage.setItem("Inp2", player2);
    window.location = "game.html";
    
}