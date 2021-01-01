<?php
class ProfitCalculator {
	public $csv = [];
	public $formulas = [];
	public function __construct($arguments) {
		$this->csv = $this->csv_to_array($arguments[1], ';');
		$this->formulas = json_decode(file_get_contents($arguments[2]), true)['categories'];
		foreach ($this->formulas as $key => $value) {
			$this->formulas[$key] = str_replace('€', '', $value);
		}
	}
	public function csv_to_array($filename='', $delimiter=','): array {
		if(!file_exists($filename) || !is_readable($filename))
			return FALSE;
		
		$header = NULL;
		$data = array();
		if (($handle = fopen($filename, 'r')) !== FALSE)
		{
			while (($row = fgetcsv($handle, 1000, $delimiter)) !== FALSE)
			{
				if(!$header)
					$header = $row;
				else
					$data[] = array_combine($header, $row);
			}
			fclose($handle);
		}
		return $data;
	}
	public function calcPercent($number, float $percent): float {
		return ($percent / 100) * $number;
	}
	public function calc(float $cost, string $formula): float {
		$pttn='+-/*';
		$pttn=sprintf( '@([%s])@', preg_quote( $pttn ) );
		$out=preg_split( $pttn, preg_replace( '@\s@', '', $formula ), -1, PREG_SPLIT_DELIM_CAPTURE );
		foreach (array_keys($out, "", true) as $key) {
			unset($out[$key]);
		}
		(string)$parsed_formula = (string)$cost . '';
		foreach ($out as $key => $val) {
			if (strpos($pttn, $val) !== false) {
				$parsed_formula .= $val;
			}
			if(is_numeric($val)) {
				$parsed_formula .= $val;
				$parsed_formula = eval('return '.$parsed_formula. ';');
			}
			if (strpos($val, '%') !== false) {
				$current_total = substr($parsed_formula, 0, -1);
				$percent_to_calc = str_replace('%',"",$val);
				$percent_result = $this->calcPercent((float)$current_total, (float)$percent_to_calc);
				$parsed_formula = eval('return '.$parsed_formula.$percent_result. ';');
			}
		}
		return $parsed_formula;
	}
	public function calculateByCategory(string $category, float $cost): float {
		if(isset($this->formulas[$category])) {
			$val = $this->calc($cost, $this->formulas[$category]);
		} else {
			$val = $this->calc($cost, $this->formulas['*']);
		}
		return $val;
	}
	public function execute(): string {
		$i = 0;
		$result=[];
		while (count($this->csv) > $i) {
			$row = $this->csv[$i];
			$row_cost = $this->parseNum($row['COST']);
			$row_qty = $this->parseNum($row['QUANTITY']);
			$total = ($this->calculateByCategory($row['CATEGORY'], $row_cost) - ($row_cost) ) * $row_qty;
			
			if(array_key_exists($row['CATEGORY'], $result)) {
				$parsed = number_format($result[$row['CATEGORY']] + $total, 2, '.', '');
				$result[$row['CATEGORY']] = $parsed;
			} else {
				$parsed = number_format($total, 2, '.', '');
				$result[$row['CATEGORY']] = $parsed;
			}
			$i++;
		}
		return json_encode($result);
	}
	public function parseNum(string $str): float {
		return floatval(str_replace(',', '.', str_replace('.', '', $str)));;
	}
}