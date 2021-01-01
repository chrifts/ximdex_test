<?php
include("./calc_class.php");

if($argc == 3) {
    $calc = new ProfitCalculator($argv);
    $result = $calc->execute();
    echo PHP_EOL;
    echo $result, PHP_EOL;
    echo PHP_EOL;
} else if($argc > 3) {
    throw new Exception("Too many Arguments. Required parameters: 'csv-file-path.csv' and 'json-file-path.json", 1);
} else {
    throw new Exception("Error in Arguments. Required parameters: 'csv-file-path.csv' and 'json-file-path.json", 1);
}