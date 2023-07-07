<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" type="text/css" href="leagueDisplay.css"/>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Kanit:wght@200&display=swap" rel="stylesheet">

    <title>League of Legends Users</title>
</head>
<body>
    
    <div class="userList">
            <?php
            $conn = mysqli_connect("localhost", "root", "", "user_db");
            if ($conn -> connect_error){
                die("Connection Failed".$conn-> connect_error);
            
            }
            
            $sql = "SELECT id, username, game, role, rank FROM user_form WHERE game = 'CSGO'";
            $result = $conn-> query($sql);

            if($result-> num_rows > 0 ){
                while($row = $result -> fetch_assoc()){
                    $username = $row["username"];
                    $role = $row["role"];
                    $rank = $row["rank"];
                    ?>
                    <div class="userContainer" id="userContainer1">
                    <p id = "username">
                        <?php echo $username; ?></p>

                    <p id = "role">
                        <?php echo $role; ?></p>
                    

                    <p id = "rank">
                        <?php echo $rank; ?></p>
                    </div>
                    <?php  
                }
                echo "</table>";
            } else{
                echo "0 result";
            }
            $conn->close();
        ?>
    </div>
            
</body>
</html>