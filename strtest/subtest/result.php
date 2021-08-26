<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-KyZXEAg3QhqLMpG8r+8fhAXLRk2vvoC2f3B09zVXn8CA5QIVfZOJ3BCsw2P0p/We" crossorigin="anonymous">
    <link href="style-result.css" rel="stylesheet">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.6/umd/popper.min.js"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.2/js/bootstrap.min.js"></script>
<script src="https://d3js.org/d3.v7.min.js"></script>
</head>
<body>
<?php
require_once("dbconnect.php");
mysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT);
$mysqli->set_charset("utf8mb4"); 

$result = $mysqli->query('SELECT * FROM `users`'); 

?>
<nav class="navbar navbar-expand-lg fixed-top navbar-dark bg-dark">
  <a class="navbar-brand" href="#">Абитуриенты</a>
</nav>
<table class="table table-hover table-dark pacient">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Дата</th>
      <th scope="col">Имя</th>
      <th scope="col">Телефон</th>
      <th scope="col">Почта</th>
      <th scope="col">Результат теста</th>
      <th scope="col">Действие</th>
    </tr>
  </thead>
  <tbody>

<?php
while($row = $result->fetch_assoc())
{
echo '<tr>'.'<th scope="row">'.$row['ID'].'</th>'.'<td>'.$row['DATE'].'</td>'.'<td>'.$row['NAME'].'</td>'.'<td>'.$row['PHONE'].'</td>'.'<td>'.$row['MAIL'].'</td>'.'<td>';

$result2 = $mysqli->query('SELECT * FROM `results` WHERE id = "'.$row['RESULT_ID'].'"'); 
while($row3 = $result2->fetch_assoc()){
  echo $row3['pok'];
  echo $row3['unig'];
  echo $row3['nespr'];
  echo $row3['pred'];
  echo $row3['otverg'];
};

echo '</td>';
echo '<td>';
echo '<button value="'.$row['ID'].'" onclick="newVal(this)" type="button" class="btn btn-warning" data-toggle="modal" data-target="#exampleModal">Удалить</button>'.'</td>'.'</tr>';
};
$mysqli->close();
?>  
</tbody>
</table>
<div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">ТОЧНО УДАЛИТЬ?</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        Вы действительно хотите удалить? Восстановить будет невозможно!
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">НЕТ</button>
        <form action="delete.php" method="post">
        <input id="butOk" type="hidden" name="ID" value="">
        
        <button type="input" type="submit" class="btn btn-warning">Удалить</button>
</form>
      </div>
    </div>
  </div>
</div>

</div>
<script type="text/javascript"> 

function newVal(t){ var res = $(t).attr('value'); $('#butOk').val(res); return false; }

</script>
</body>
</html>