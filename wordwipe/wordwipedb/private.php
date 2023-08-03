<?php 

date_default_timezone_set("Asia/Dhaka");
$database = new SQLite3("lead.sqlite");
$results = $database->query("SELECT * from hp");


?>

<!DOCTYPE html>
<html>
<head>
	<title> HP Click Lead </title>
		<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" >
		<link rel="stylesheet" href="https://cdn.datatables.net/1.11.0/css/jquery.dataTables.min.css" >
		<link rel="stylesheet" href="https://cdn.datatables.net/buttons/2.0.0/css/buttons.dataTables.min.css" >
</head>
<body>

	<div class="container">
		<div class="row">
			<div class="col-md-12">
				<h1 class="text-center text-success m-3">HP Database  </h1>
				<table id="example" class="table table-striped">
					  <thead class="text-center bg-success">
					    <tr>
					      <th scope="col"> SL </th>
					      <th scope="col" class="text-left"> Mobile </th>
					      <th scope="col"> Referrer  </th>
					      <th scope="col"> Date  </th>
					    </tr>
					  </thead>
					  <tbody class="text-center">
					  	<?php 
					  	$id = 1;
							while ( $row= $results->fetchArray() ) :  ?>
						    <tr>
						      <th scope="row"> <?=$id++; ?></th>
						      <td class="text-left"> <?=$row['mobile'] ?></td>
						      <td class="text-right" title="<?php echo $row['referrer'] ?>"> <?php echo parse_url( $row['referrer'])['host']; ?> </td>
						      <td> <?=$row['created_at'] ?></td> 
						    </tr>
							<?php endwhile; ?>
					  </tbody>
					</table>
			</div>
		</div>
	</div>	




	<!-- <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js"  crossorigin="anonymous"></script>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" crossorigin="anonymous"></script> -->
	 <script src="https://code.jquery.com/jquery-3.5.1.js"  crossorigin="anonymous"></script>
	 <script src="https://cdn.datatables.net/1.11.0/js/jquery.dataTables.min.js"  crossorigin="anonymous"></script>
	 <script src="https://cdn.datatables.net/buttons/2.0.0/js/dataTables.buttons.min.js"  crossorigin="anonymous"></script>
	 <script src="https://cdnjs.cloudflare.com/ajax/libs/jszip/3.1.3/jszip.min.js"  crossorigin="anonymous"></script>
	 <script src="https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.53/pdfmake.min.js"  crossorigin="anonymous"></script>
	 <script src="https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.53/vfs_fonts.js"  crossorigin="anonymous"></script>
	 <script src="https://cdn.datatables.net/buttons/2.0.0/js/buttons.html5.min.js"  crossorigin="anonymous"></script>
	 <script src="https://cdn.datatables.net/buttons/2.0.0/js/buttons.print.min.js"  crossorigin="anonymous"></script>
	 <script src="https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.53/vfs_fonts.js"  crossorigin="anonymous"></script>

	
		<script type="text/javascript">
			$(document).ready(function() {
			    $('#example').DataTable( {
			        dom: 'Bfrtip',
			        buttons: [
			             'excel',  'print'
			        ]
			    } );
			} );
		</script>
	

</body>
</html>