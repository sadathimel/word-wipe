<?php

date_default_timezone_set("Asia/Dhaka");
$database = new SQLite3("lead.sqlite");
$results = $database->query("SELECT * from wpgame");



// print_r($results->fetchArray());
// $database->exec("DELETE FROM aprilia  WHERE id <5");

?>

<!DOCTYPE html>
<html>

<head>
	<title>Word Wipe Game Leaderboard </title>
	<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css">
	<link rel="stylesheet" href="https://cdn.datatables.net/1.11.0/css/jquery.dataTables.min.css">
	<link rel="stylesheet" href="https://cdn.datatables.net/buttons/2.0.0/css/buttons.dataTables.min.css">
</head>

<body>

	<div class="container">
		<div class="row">
			<div class="col-md-12">
				<h1 class="text-center text-success m-3">Game Leaderboard </h1>
				<button type="button" class="btn btn-primary m-3 text-center"><a class="btn btn-primary" href="http://localhost/wordwipe/">Play Again</a></button>

				<table id="example" class="table table-striped">
					<thead class="text-center bg-success">
						<tr>
							<th scope="col"> SL </th>
							<th scope="col" class="text-left"> name </th>
							<th scope="col" class="text-left"> Phone </th>
							<th scope="col" class="text-left"> Score </th>
							<th scope="col"> Date </th>
						</tr>
					</thead>
					<tbody class="text-center">
						<?php
						$id = 1;
						while ($row = $results->fetchArray()) :  ?>
							<tr>
								<th scope="row"> <?= $id++; ?></th>
								<td class="text-left"> <?= $row['name'] ?></td>
								<td class="text-left"> <?= $row['mobile'] ?></td>
								<td class="text-left"> <?= $row['wpscore'] ?></td>
								<td> <?= $row['created_at'] ?></td>
							</tr>
						<?php endwhile; ?>
					</tbody>
				</table>
			</div>
		</div>
	</div>




	<script src="https://code.jquery.com/jquery-3.5.1.js" crossorigin="anonymous"></script>
	<script src="https://cdn.datatables.net/1.11.0/js/jquery.dataTables.min.js" crossorigin="anonymous"></script>
	<script src="https://cdn.datatables.net/buttons/2.0.0/js/dataTables.buttons.min.js" crossorigin="anonymous"></script>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/jszip/3.1.3/jszip.min.js" crossorigin="anonymous"></script>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.53/pdfmake.min.js" crossorigin="anonymous"></script>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.53/vfs_fonts.js" crossorigin="anonymous"></script>
	<script src="https://cdn.datatables.net/buttons/2.0.0/js/buttons.html5.min.js" crossorigin="anonymous"></script>
	<script src="https://cdn.datatables.net/buttons/2.0.0/js/buttons.print.min.js" crossorigin="anonymous"></script>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.53/vfs_fonts.js" crossorigin="anonymous"></script>


	<script type="text/javascript">
		$(document).ready(function() {
			$('#example').DataTable({
				dom: 'Bfrtip',
				buttons: [
					'excel', 'print'
				]
			});
		});
	</script>

</body>

</html>