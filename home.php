<?php
session_start();

if (!isset($_SESSION['email'])) {
    header('Location: home.php');
    exit();
}
?>

<!DOCTYPE html>
<html>
<head>
    <title>Nexus Party</title>
    <link rel="stylesheet" type="text/css" href="home.css">
</head>
<body>
    <header>
        <nav>
            <h1>Nexus Party</h1>
            <ul>
                <li><a href="#features">Features</a></li>
                <li><a href="#games">Games</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>
    </header>

    <main>
        <section id="hero">
            <h2>Connect with Gamers</h2>
            <p>Find and team up with fellow gamers for the ultimate gaming experience.</p>
            <a href="finder.html" class="cta-button">Start Looking!</a>
        </section>

        <section id="games">
            <div class="row">
                <div class="column">
                  <img src="csgo.jpg" alt="csgo" style="width:100%">
                  <a href="csgo.html" class="cta-button">CSGO</a>
                </div>
                <div class="column">
                  <img src="valorant.jpg" alt="valo" style="width:100%">
                  <a href="valorant.html" class="cta-button">Valorant</a>
                </div>
                <div class="column">
                  <img src="league.jpg" alt="lol" style="width:100%">
                  <a href="league.html" class="cta-button">League of Legends</a>
                </div>
              </div>
        </section>

        <section id="features">
            <h2>Features</h2>
            <div class="feature">
                <h3>Game Matching</h3>
            </div>
                <p>Discover gamers who play the same games as you and team up for multiplayer adventures.</p>

            <div class="feature">
                <h3>Chat and Voice</h3>
            </div>   
                <p>Communicate with your gaming buddies through real-time chat and voice channels.</p>
            
        </section>

        <section id="about">
            <h2>About Nexus Party</h2>
            <p>Nexus Party is a platform designed to bring gamers together and enhance their gaming experiences. Whether you're looking for new friends, competitive matches, or simply a place to hang out, Nexus Party has you covered.</p>
        </section>

        <section id="contact">
            <h2>Contact Us</h2>
            <form>
                <label for="name">Name:</label>
                <input type="text" id="name" required>

                <label for="email">Email:</label>
                <input type="email" id="email" required>

                <label for="message">Message:</label>
                <textarea id="message" rows="4" required></textarea>

                <button type="submit">Send Message</button>
            </form>
        </section>
    </main>

    <footer>
        <p>&copy; 2023 Nexus Party. All rights reserved.</p>
    </footer>
</body>
</html>
