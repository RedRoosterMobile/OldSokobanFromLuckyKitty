<?php


$inputFile = file_get_contents('cheermassive.txt');
//echo $inputFile;
$lines=explode("\n",$inputFile);

echo count($lines);

$resultLines = "";

foreach ($lines as $line) {
	//echo $line;
	
	
	$split = explode('~',$line);
	$newLine = "";
	if ( count($split) == 2) {
		$newLine = $split[0].'~'.ucwords(strtolower ($split[1]));
	} else {
		$newLine = $line;
	}
	
	$resultLines.=$newLine;
	
}

file_put_contents('out.txt',$resultLines);


