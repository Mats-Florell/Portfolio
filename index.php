<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Portfolio</title>
    <link rel="stylesheet" href="./style.css">
</head>
<body>
    <canvas class="webgl"></canvas>

    <section class="section">
        <h1>My Portfolio</h1>
    </section>
    <section class="section">
        <h2>My projects</h2>
    </section>
    <section class="section">
        <nav>
            <?php
                $pages = fopen("otherPages.txt", "r") or die("Unable to open file!");
                echo fread($pages, filesize("otherPages.txt"));
                fclose($pages);
            ?>
        </nav>
    </section>
    <footer>
        <h2>Contact me</h2>
    </footer>
    
    <script src="three.min.js" type="module"></script>
    <script src="gsap.min.js" type="module"></script>
    <script src="script.js" type="module"></script>

</body>
</html>